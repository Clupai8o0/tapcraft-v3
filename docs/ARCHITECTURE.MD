# Architecture

How the site is built, why those choices were made, and where the seams are.

---

## 1. Strategic frame

This is a **marketing site for a B2B services business**. One job: convert visitors into qualified leads in the inbox.

| Surface | Goal | Mechanism |
|---|---|---|
| Homepage + solutions pages | Qualify intent, route to action | CTA → form |
| Showcase | Demonstrate capability | Portfolio item → "Get a quote like this" CTA |
| 3D customiser | Capture configuration intent | Configure → quote modal |
| Blog | Drive organic traffic | SEO → internal links to surfaces above |

Every conversion path terminates at the same handler: a Brevo-routed email to `hello@tapcraftstudio.com`.

**Not in scope:** commerce, accounts, auth, the TapCraft SaaS platform (separate repo).

---

## 2. Stack

### Frontend
- **Next.js 16** — App Router, RSC by default, client islands where needed
- **React 19**
- **TypeScript** — strict, no `any` without justification
- **Tailwind v4** — design tokens in `app/globals.css` via `@theme`. No `tailwind.config.js`.
- **Framer Motion** for non-trivial motion. CSS for the rest.
- **React Hook Form + Zod** for every form. Server-side validation duplicates the schema.

### Content
- **MDX** for showcase items and blog posts
- **gray-matter** for frontmatter parsing
- **Zod schemas** validating frontmatter at build time — broken content fails CI, doesn't reach prod
- **MDX content rendered via `next-mdx-remote` (or `@next/mdx`)** — pick one and stick with it
- Custom MDX components: `<ProductModelViewer />`, `<ImageGallery />`, `<ROICalculator />`, `<QuoteCTA />`

### 3D
- **React Three Fiber + @react-three/drei**
- **GLB / glTF-binary** only
- **OrbitControls** with touch enabled
- **Real-time material updates** for colour changes, never GLB swaps
- Models stored in `/public/models/` for now; migrate to Vercel Blob if total exceeds ~200 MB

### Forms / leads
- **Brevo** — newsletter list, contact transactional, quote transactional
- **Separate API keys per function** (newsletter vs contact vs quote)
- All routed to `hello@tapcraftstudio.com` for human follow-up

### Infrastructure
- **Vercel** — hosting, Sydney edge (`syd1`)
- **Hostinger** — DNS
- No CDN in front of Vercel (Vercel's edge is sufficient)
- No external commerce, payments, auth, CMS

---

## 3. Data flow

### Read path (showcase, blog, solutions, homepage)

```
Author edits MDX → git push → Vercel build
                                    ↓
                         MDX parsed + validated (Zod)
                                    ↓
                    Static pages generated (SSG)
                                    ↓
                    Browser ← Vercel Sydney edge
```

Every content surface is statically generated at build time. No runtime CMS calls. Rebuild on push (Vercel default) or on a manual trigger when needed.

### Write path (forms)

```
Browser form
     ↓
React Hook Form client validation (Zod)
     ↓
POST /api/{newsletter|contact|quote}
     ↓
Server-side Zod validation (same schema)
     ↓
Brevo API
     ↓
Email to hello@tapcraftstudio.com
     ↓
Confirmation response → form swaps to success state
```

Quote submissions include a serialised configuration snapshot from the customiser (shape, material, colour, NFC chip, text, quantity). The recipient sees the spec inline in the email.

### 3D customiser flow

```
User selects shape/colour/material/NFC config
     ↓
Local state (zustand or useReducer)
     ↓
Real-time updates to Three.js material/geometry
     ↓
Real-time price calculation (lib/pricing)
     ↓
On submit: serialise config → /api/quote → Brevo email
```

The customiser does not write anything anywhere. State lives in the component until submission.

---

## 4. Folder structure

```
content/
├── showcase/                # one .mdx per item
│   ├── festival-wristband-2024.mdx
│   ├── smart-business-card-minimalist-black.mdx
│   └── ...
└── blog/                    # one .mdx per post
    └── nfc-vs-qr-for-events.mdx

public/
├── models/                  # .glb files
└── images/

src/
├── app/
│   ├── (marketing)/
│   │   ├── page.tsx                                # /
│   │   ├── showcase/
│   │   │   ├── page.tsx                            # /showcase
│   │   │   └── [slug]/page.tsx                     # /showcase/[slug]
│   │   ├── customise/page.tsx
│   │   ├── solutions/[vertical]/page.tsx           # events, real-estate, hospitality
│   │   ├── about/page.tsx
│   │   ├── process/page.tsx
│   │   ├── blog/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── contact/page.tsx
│   │   └── layout.tsx                              # marketing chrome
│   ├── (legal)/
│   │   ├── privacy/page.tsx
│   │   ├── terms/page.tsx
│   │   └── refunds/page.tsx
│   ├── api/
│   │   ├── newsletter/route.ts
│   │   ├── contact/route.ts
│   │   └── quote/route.ts
│   ├── layout.tsx                                  # root: HTML, fonts
│   └── globals.css                                 # Tailwind v4 @theme
├── components/
│   ├── layout/                                     # Header, Footer, MobileNav
│   ├── home/                                       # Hero, ValueProp, FeaturedShowcase, FAQ, NewsletterCTA
│   ├── showcase/                                   # ShowcaseGrid, ShowcaseCard, FilterBar
│   ├── customise/
│   │   ├── ProductModelViewer/                     # R3F canvas, lazy-loaded
│   │   ├── ControlPanel/                           # Tabbed: shape/colour/material/NFC/text/upload
│   │   ├── PriceEstimator/
│   │   └── QuoteFormModal/
│   ├── solutions/                                  # VerticalLandingPage and friends
│   ├── mdx/                                        # MDX components for content authoring
│   ├── shared/                                     # Button, Input, Modal, Tabs, Accordion
│   └── seo/                                        # JSON-LD components
├── lib/
│   ├── mdx/
│   │   ├── parse.ts                                # gray-matter + zod validation
│   │   ├── schema.ts                               # frontmatter zod schemas
│   │   └── components.ts                           # the MDX component map
│   ├── brevo/
│   │   ├── newsletter.ts
│   │   ├── contact.ts
│   │   └── quote.ts
│   ├── pricing/
│   │   ├── calculator.ts                           # pure: config → price range
│   │   └── modifiers.ts                            # material multipliers, NFC chip costs
│   └── utils/
├── hooks/
└── types/
```

---

## 5. Key architectural decisions

### Why MDX, not a CMS?

| Pro | Con |
|---|---|
| Free, no vendor | Editors need git access |
| Co-located with code, version-controlled | No draft/publish workflow |
| Rich React components inline (3D viewer, forms, calculators) | No image management UI |
| Build-time validation catches broken content | Adding a non-dev editor later requires migration |

**Verdict:** Right for a 2-person team that codes. Migrate to Sanity or Hygraph if a non-dev contributor joins.

### Why not Shopify?

The site doesn't sell anything. Every order is custom, mediated by a quote conversation, and fulfilled offline. Adding Shopify (or any commerce backend) would be paying for capability we don't use and adding complexity that obscures the actual goal — get a lead in the inbox.

If a B2C buying surface emerges later, it goes in a separate repo or a route group added deliberately. Don't pre-build for it.

### Why static generation (SSG) over ISR?

Content updates are infrequent (a few showcase items / blog posts per month). Build times are short. Static pages are cheaper, faster, and harder to break than ISR. If a piece of dynamic data emerges that needs to refresh more often, address it then.

### Why Brevo?

- Generous free tier
- Newsletter list management + transactional email in one place
- Decent automation builder for slow-burn B2B nurture
- Existing integration in the repo

Alternatives (Resend, SendGrid, Mailgun) are all fine. No reason to switch.

### Why no `tailwind.config.js`?

Tailwind v4 uses CSS-first config. Tokens live in `globals.css` under `@theme`. Less indirection.

### Why Vercel?

- First-class Next.js support
- Sydney edge for AU customers
- Generous free tier covers expected traffic
- Zero-config preview deployments per PR

---

## 6. Performance budget

| Metric | Target |
|---|---|
| Lighthouse (all categories) | 90+ |
| First Contentful Paint | < 1.5s |
| Time to Interactive | < 3.5s |
| Largest Contentful Paint | < 2.0s |
| Mobile page weight | < 2 MB (excluding `/customise`) |
| 3D viewer first paint | < 1s (lazy + skeleton) |

The customise page is allowed to break the 2 MB mobile budget but must show a poster image first and load R3F on user opt-in.

---

## 7. Accessibility

Floor: **WCAG 2.1 AA**.

- Semantic HTML — buttons are buttons, links are links
- Keyboard navigation tested on every interactive component
- Visible focus indicators (`:focus-visible`)
- Colour contrast 4.5:1 for body text, 3:1 for large text
- Alt text on every image; empty `alt=""` for decorative
- 3D viewer has a "Skip 3D preview" link for screen readers

---

## 8. What's deliberately not here

For clarity:

- **Auth / accounts** — no user has any reason to log in
- **Cart / checkout** — nothing is sold here
- **Order management** — handled offline / in spreadsheets / wherever
- **Payment processing** — same
- **CMS** — MDX is the CMS
- **Search** — content volume doesn't justify it; revisit at 100+ pages
- **Live chat** — defer until inbound volume justifies the response load

Each of these is a possible future addition. None of them is right for now.

---

## 9. Open questions

- Do we use `next-mdx-remote` or `@next/mdx`? (Lean toward `next-mdx-remote` — more control)
- 3D models in `/public/models` vs Vercel Blob — defer until total exceeds 200 MB
- Sentry vs Vercel native error monitoring — pick one before launch
- Do we need a separate "case study" template distinct from the showcase template? (Probably yes for big B2B wins)

Update this file as decisions land.