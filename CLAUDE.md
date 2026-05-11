# CLAUDE.md

Read at the start of every Claude Code session. Keep tight, current, honest.

---

## What this is

**TapCraft Studio's marketing website.** A B2B lead-generation site for Melbourne's only integrated 3D-printing + NFC studio. Showcases past work, drives quote requests for custom orders.

**This is not a store.** No checkout, no cart, no Shopify, no payments. The catalogue is a **portfolio**.

- **Domain:** tapcraft.shop
- **Repo:** `Sky-Nik/TapCraft-Website-Master` (also `clupai8o0/tapcraft-temp`)
- **Hosting:** Vercel + Hostinger (DNS)
- **Contact:** hello@tapcraftstudio.com
- **Founders:** Samridh Limbu, Nikhil Gupta

## What lives elsewhere

- **TapCraft Platform (SaaS)** — separate repo, separate project. The website can *teaser* it (one section + `/platform`, `/pricing` routes), but no live data, no hooks, no shared state.
- **TapCraft Encoder app** — separate repo, separate project. An in-house mobile/desktop app for batch-programming NFC chips, built because NFC Tools is too fiddly for studio work. Internal-first; may open up to platform customers later. The website can mention it as proof-of-craft and as part of the platform pitch, but the app itself is not built here.
- **Order management, invoicing, fulfilment** — handled offline / in spreadsheets / in whatever ops tooling exists outside this repo.

The website's only job is: get a qualified B2B lead into Sam or Nikhil's inbox.

---

## The site, in pages

| Route | Purpose |
|---|---|
| `/` | Homepage — pitch, showcase teaser, vertical entry points, CTA to quote |
| `/showcase` | Portfolio of past work (was "catalogue") |
| `/showcase/[slug]` | Individual showcase item — case-study format |
| `/customise` | 3D customiser → quote request |
| `/solutions/events` | Vertical landing → quote |
| `/solutions/real-estate` | Vertical landing → quote |
| `/solutions/hospitality` | Vertical landing → quote |
| `/about` | Team, mission, studio |
| `/process` | How we make things |
| `/blog` | SEO content |
| `/contact` | Form + address + hours |
| `/legal/{privacy,terms,refunds}` | Legal pages |

Every conversion path lands in the same place: a Brevo-routed email to `hello@`.

---

## Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 16 (App Router) |
| Runtime | React 19 |
| Language | TypeScript (strict) |
| Styling | Tailwind v4 (CSS-first config in `globals.css`) |
| Content | **MDX** in `content/showcase/`, `content/blog/` |
| 3D | React Three Fiber + @react-three/drei |
| 3D models | GLB / glTF-binary, served from `/public/models/` (upgrade to Vercel Blob if it gets heavy) |
| Forms | React Hook Form + Zod |
| Email | Brevo (newsletter, contact, quote forms) |
| Animation | Framer Motion |
| Hosting | Vercel (Sydney edge) |
| DNS | Hostinger |

**Do not** suggest Shopify, Stripe, UpPromote, Mailchimp, Netlify, or any other commerce/auth/CMS layer. Those are out.

---

## Working with Samridh

These are non-negotiable. Honour them every response.

### Output format
- **Concise. Direct. No preamble.** No "Great question!", no recap of the prompt.
- For implementation tasks, output a **Claude Code prompt** ready to paste.
- Multiple solutions when there's genuine ambiguity → pros/cons → conclusion. Otherwise pick one.
- Ask a question only when context is genuinely missing.

### Voice (when writing copy, marketing, social)
- **Australian English.** `prioritise`, `recognise`, `colour`, `organisation`. Never American spelling in user-facing copy.
- **Em dashes have NO spaces.** `word---word`, never `word — word` or `word -- word`. Non-negotiable.
- Short paragraphs. 1–3 sentences max for marketing copy.
- Conversational, direct, slightly contrarian.
- Never: "I hope this finds you well", "leverage synergies", "rise and grind", "let's unpack this", "I'm passionate about".
- See `BRAND.md` for the full voice spec.

### Technical preferences
- Environment variables for all secrets. Separate Brevo keys per function (newsletter vs contact).
- Audit existing code first, then propose changes. Don't rewrite what works.
- Tailwind design tokens only — no hardcoded hex in components.
- No accounts, no auth, no login flows on this site.

---

## Skills available

Trigger words in parentheses.

| Skill | Use when |
|---|---|
| `seo-master` | SEO work — keywords, metadata, schema, audits, content plans. ("rank", "search", "Google", "keywords", "traffic") |
| `frontend-design` | Building or restyling components, landing pages, UI. ("component", "page", "design", "UI", "style") |
| `stop-slop` | Reviewing or rewriting prose to remove AI tells. ("rewrite", "edit", "clean up copy") |
| `docx`, `pdf`, `pptx`, `xlsx` | When the deliverable is that file format. |
| `theme-factory` | Applying a consistent theme across artifacts. |

Read the relevant `SKILL.md` before producing output for that skill's domain.

---

## Repo structure

```
.
├── content/
│   ├── showcase/           # MDX files — one per portfolio item
│   └── blog/               # MDX files — one per post
├── public/
│   ├── models/             # .glb files
│   ├── images/
│   └── fonts/
├── src/
│   ├── app/
│   │   ├── (marketing)/    # Header + Footer, marketing layout
│   │   │   ├── page.tsx                  # /
│   │   │   ├── showcase/page.tsx         # /showcase
│   │   │   ├── showcase/[slug]/page.tsx
│   │   │   ├── customise/page.tsx
│   │   │   ├── solutions/[vertical]/page.tsx
│   │   │   ├── about/page.tsx
│   │   │   ├── process/page.tsx
│   │   │   ├── blog/page.tsx
│   │   │   ├── blog/[slug]/page.tsx
│   │   │   └── contact/page.tsx
│   │   ├── (legal)/        # privacy, terms, refunds
│   │   ├── api/
│   │   │   ├── newsletter/route.ts
│   │   │   ├── contact/route.ts
│   │   │   └── quote/route.ts
│   │   ├── layout.tsx
│   │   └── globals.css     # Tailwind v4 @theme tokens
│   ├── components/
│   │   ├── layout/         # Header, Footer, MobileNav
│   │   ├── home/
│   │   ├── showcase/
│   │   ├── customise/
│   │   │   ├── ProductModelViewer/
│   │   │   ├── ControlPanel/
│   │   │   ├── PriceEstimator/
│   │   │   └── QuoteFormModal/
│   │   ├── solutions/
│   │   ├── shared/
│   │   └── seo/
│   ├── lib/
│   │   ├── mdx/            # MDX parsing, frontmatter validation (zod)
│   │   ├── brevo/          # Newsletter + contact + quote clients
│   │   ├── pricing/        # Customise calculator
│   │   └── utils/
│   ├── hooks/
│   └── types/
└── package.json
```

- Components: PascalCase, one per file, co-located types.
- Imports: absolute via `@/` alias.
- Code spelling: US (`color`, `behavior`) — match the ecosystem. AU spelling only in user-facing copy and marketing comments.

---

## File map (this directory)

Read in order when picking up cold:

1. `README.md` — what this is, how to run
2. `ARCHITECTURE.md` — tech, structure, data flow, decisions
3. `TODO.md` — active work, migration tasks, blockers
4. `CATALOG.md` — showcase content model (MDX schema)
5. `BRAND.md` — voice, colours, typography
6. `SEO.md` — keyword strategy, schema, AU local
7. `CONVERSION.md` — single funnel, CTA strategy, forms
8. `PRICING.md` — quote-mediated pricing, customiser calculator
9. `DEPLOYMENT.md` — Vercel, DNS, env management
10. `DESIGN.md` — design system (intentionally empty for now)
11. `CHANGELOG.md` — append-only history

---

## Critical gotchas

- **Domain:** `tapcraft.shop` DNS points to Vercel only. Don't add it to any Shopify-anything (no Shopify exists in this project, but if a previous deploy left config behind, clean it).
- **GLB needs explicit canvas dimensions** in R3F, otherwise the viewer renders blank. Use `frameloop="demand"` for performance.
- **Lazy-load the 3D viewer** with `next/dynamic`, `ssr: false`. Three.js does not server-render.
- **Brevo keys per function** — separate API key for newsletter and contact form. Don't share. If one leaks, rotate one.
- **MDX content needs build-time validation.** Each showcase frontmatter is parsed through a Zod schema (`src/lib/mdx/schema.ts`). Build fails if a required field is missing — better to fail in CI than ship broken pages.
- **Manufacturing cost is minimal.** Premium positioning ($75–$2,000+ B2B) is service, not material. Don't undersell in copy.

---

## Migration from previous direction

The repo previously contained Shopify Storefront API code, UpPromote affiliate integration, and cart context. As of the documentation reset, all of that is **out of scope**. See `TODO.md` → "Migration" section for the rip-out tasks.

If a piece of code references `shopify`, `cart`, `checkout`, `storefront-api`, or `uppromote`, it's a candidate for removal unless there's a specific reason it stayed.

---

## When in doubt

- Default to **shipping a working version** over polishing a perfect one.
- Default to **paraphrasing over quoting** when summarising sources.
- If a task feels expensive (>30 min), respond with a Claude Code prompt instead of executing inline.
- Every conversion path on this site ends in a Brevo email. If you're building a flow that doesn't, double-check the goal.