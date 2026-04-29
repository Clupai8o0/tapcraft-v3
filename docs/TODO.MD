# TODO

Single source of truth for what's done, what's next, what's blocked.

Status: `[ ]` not started · `[~]` in progress · `[x]` done · `[!]` blocked

---

## 🔥 Active sprint

Five items max. Re-prioritise as they ship.

- [ ] **Migration: rip out Shopify integration** — see "Migration" section below
- [ ] **MDX content pipeline** — `lib/mdx/parse.ts`, Zod schemas for showcase + blog, build-time validation
- [ ] **Showcase route** — `/showcase` listing with filters, `/showcase/[slug]` detail template
- [ ] **Brevo wiring** — newsletter, contact, quote endpoints functional and routing to `hello@`
- [ ] **Homepage hero** — copy and dual CTA in Sam's voice (`Get a quote` / `See our work`)

---

## 🧹 Migration (from old direction)

The repo previously contained Shopify Storefront API integration, UpPromote, cart context, and B2C transactional surfaces. All out of scope. Rip out cleanly.

- [ ] Remove `src/lib/shopify/*` entirely
- [ ] Remove Shopify env vars from `.env.local.example` and Vercel
- [ ] Remove `NEXT_PUBLIC_SHOPIFY_*` env vars from Vercel Dashboard
- [ ] Remove UpPromote pixel scripts from `app/layout.tsx`
- [ ] Remove UpPromote cart context modifications
- [ ] Remove UpPromote checkout linker params
- [ ] Remove affiliate landing page (or repurpose if a non-Shopify affiliate is desired later)
- [ ] Remove cart context provider
- [ ] Remove "Add to cart" / "Buy now" CTAs from any product card variant
- [ ] Remove Shopify GraphQL queries and types
- [ ] Replace product page reads (Shopify) with MDX showcase reads
- [ ] Remove Shopify product schema from JSON-LD; replace with `CreativeWork` for showcase items
- [ ] Verify no `shopify`, `cart`, `checkout`, `uppromote` strings remain (`grep -r` to confirm)
- [ ] Update `package.json` — remove unused commerce dependencies
- [ ] Confirm Shopify domain is **not** in the Hostinger DNS records or Vercel project domains (it shouldn't be, but verify)

After the migration, the site should still build and run. If it doesn't, that's the primary fix.

---

## 📦 Backlog — site MVP

Roughly the order things should land.

### Homepage

- [ ] Hero — animated headline, NFC tap GIF/video background, dual CTA (Get a quote / See our work)
- [ ] Value proposition strip — Innovation / Craftsmanship / Connection (3 cols)
- [ ] Featured showcase carousel — pulls 4–6 items from MDX where `featured: true`
- [ ] Process overview — Design → Print → Integrate → Deliver
- [ ] Vertical entry points — 3 cards linking to /solutions/{events,real-estate,hospitality}
- [ ] Social proof — testimonials, mini stats, client logos (with permission)
- [ ] Melbourne Made section — studio photo, sustainability angle
- [ ] FAQ accordion — 6–8 questions, `FAQPage` schema
- [ ] Newsletter capture — Brevo
- [ ] SEO metadata + JSON-LD (Organisation, LocalBusiness)

### Showcase (`/showcase`)

- [ ] MDX parser + Zod schema (`lib/mdx/parse.ts`, `lib/mdx/schema.ts`)
- [ ] Build-time frontmatter validation — fails CI on broken content
- [ ] `/showcase` listing page with category filters, industry filters, sort
- [ ] `ShowcaseCard` component
- [ ] `/showcase/[slug]` detail template
- [ ] Custom MDX components: `<ImageGallery />`, `<ProductModelViewer />`, `<QuoteCTA />`, `<SpecTable />`, `<Callout />`, `<TwoColumn />`
- [ ] First 5 showcase items written and published:
  - [ ] Smart Business Card — Minimalist Black
  - [ ] Festival Wristband — 2024 Edition
  - [ ] Real Estate Open-Home Tag
  - [ ] Café Review Card
  - [ ] Corporate Conference Lanyard
- [ ] `CreativeWork` JSON-LD schema per item
- [ ] OG images per showcase item (auto-generate or manual)

### Customise (3D customiser)

- [x] R3F canvas with OrbitControls (existing work)
- [x] Lazy-load via `next/dynamic`, `ssr: false`
- [~] ControlPanel — tabbed (Shape / Colour / Material / NFC / Text / Upload)
- [ ] Real-time price calculator wired to control state (see `PRICING.md`)
- [ ] Quote form modal — captures config snapshot, sends to Brevo with structured payload
- [ ] Save Configuration to localStorage
- [ ] "Continue from where you left off" banner on return
- [ ] Mobile touch controls tested on a real phone
- [ ] Skip-3D-preview link for accessibility
- [ ] Pre-load from showcase item — `?template=[slug]` reads frontmatter and pre-fills

### Solutions / vertical pages

- [ ] Reusable `VerticalLandingPage` component fed by typed config
- [ ] `/solutions/events` — pain points, use cases, mini case study, ROI calc, sample request CTA
- [ ] `/solutions/real-estate` — agent-focused; smart open-home cards, listing tags
- [ ] `/solutions/hospitality` — review cards, table tags, loyalty
- [ ] Each links to relevant showcase items (using `industries` filter)
- [ ] `Service` JSON-LD schema per page

### Blog (`/blog`)

- [ ] Same MDX pipeline as showcase, separate schema and folder
- [ ] `/blog` listing
- [ ] `/blog/[slug]` detail
- [ ] First 5 launch posts (see `SEO.md` for topics)
- [ ] `Article` JSON-LD per post
- [ ] RSS feed at `/feed.xml`

### Other pages

- [ ] About — team, mission, studio
- [ ] Process — detailed production workflow
- [ ] Contact — form + address + hours
- [x] Refund / returns
- [x] Privacy
- [x] Terms

### Infrastructure

- [x] Next.js 16, React 19, Tailwind v4 scaffolding
- [x] Vercel deployment
- [x] DNS via Hostinger pointed at Vercel
- [~] Brevo newsletter integration
- [ ] Brevo contact integration
- [ ] Brevo quote integration
- [ ] Google Analytics 4
- [ ] Google Search Console + sitemap
- [ ] Sentry or Vercel error monitoring
- [ ] Sitemap.xml generated dynamically (showcase + blog + static)

---

## 🎯 Backlog — SEO & content

See `SEO.md` for the full strategy.

- [ ] Metadata framework — homepage, /showcase, /customise, solutions, blog
- [ ] LocalBusiness schema (blocked on phone + final address — see Blocked section)
- [ ] Organisation schema with social handles
- [ ] CreativeWork schema on each showcase item
- [ ] Service schema on each solutions page
- [ ] WebApplication schema on `/customise`
- [ ] FAQPage schema on homepage FAQ
- [ ] First 5 launch blog posts
- [ ] Google Business Profile claimed and complete
- [ ] AU citations: True Local, Yellow Pages, Hotfrog, Apple Business Connect

---

## 🏢 Backlog — B2B sales (parallel)

Doesn't depend on shipping the site.

- [ ] Outreach list: 30 Melbourne real estate agencies
- [ ] Outreach list: 20 event organisers + PCOs
- [ ] Outreach list: 15 co-working spaces
- [ ] Sample kit fulfilment process
- [ ] Personalised outreach template (Sam's voice — see `BRAND.md`)
- [ ] LinkedIn presence: 3 posts/week from Sam's account
- [ ] Goal: 2–3 paying B2B clients in 60 days

---

## 🛑 Blocked

- [!] **Phone number for LocalBusiness schema** — needs a real business number; placeholder breaks schema validation
- [!] **Final address details** — current "8 Uganda Street, Boronia 2, Burwood VIC 3125" doesn't parse cleanly; resolve before LocalBusiness schema goes live
- [!] **3D models for showcase items** — most items lack GLB files; need to model or commission
- [!] **Real photography** — placeholders only; need shoot day for hero + gallery images

---

## 🔮 Future (post-MVP)

Parking lot. Not now, maybe later.

- Customer reviews on showcase items (Google Reviews integration)
- Save-design feature with email recovery (no full account)
- Live chat on `/customise` (Crisp at launch, Intercom Fin at 200+ conversations/mo)
- A/B testing infrastructure (Vercel Edge Config or PostHog)
- International landing pages (NZ first, then UK / US)
- Bundle pricing / repeat-order pricing communicated on the site
- Production scaling content — additional Bambu printers, batch jigs
- Migration to a real CMS (Sanity) if a non-dev editor joins
- Migration of GLB storage to Vercel Blob if `/public/models/` exceeds ~200 MB
- B2C catalogue (only if there's a clear reason — none right now)

---

## ✅ Done

Append-only. Move from above as items complete.

- [x] Initial Next.js 16 + React 19 + Tailwind v4 scaffolding
- [x] DNS configured via Hostinger → Vercel
- [x] Repo initialised on GitHub
- [x] ProductModelViewer component (R3F + drei, GLB support)
- [x] MediaTabs component (Photos / 3D View tabs)
- [x] Real-time colour switching via Three.js material updates
- [x] Refund, Privacy, Terms components built
- [x] Footer with contact details
- [x] Brevo account set up; per-function API keys generated
- [x] Documentation reset — direction confirmed: marketing site only, no commerce, no SaaS in this repo, MDX content