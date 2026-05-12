# Changelog

Append-only. Newest at the top. Format: `## YYYY-MM-DD — Short summary`. Bullet the actual changes.

For semantic versioned releases, prefix with `## v0.X.0 — YYYY-MM-DD`.

---

## 2026-05-12 — Full site build-out (overnight run)

Site is now complete end-to-end. 31 routes, production build passes.

**Design system primitives** (`components/shared/`)
- `PageHero` — eyebrow + character-staggered display heading + lede + actions
- `Reveal` — viewport-triggered fade+rise wrapper (whileInView)
- `AnimatedHeading` — h1/h2/h3 with per-char stagger
- `Section`, `LegalLayout` — consistent padding + animation wrappers
- `lib/motion.ts` — single source of truth for easings, durations, variants

**Migrated existing pages** — about, contact, customise, demo, platform, pricing, samples, showcase, showcase/[slug], signup, solutions/events. PageHero on every top-of-page intro. Reveal wrappers on every major content section. All stale dot-eyebrow markup stripped.

**New pages built**
- `/process` — the seven-stage production timeline (was missing entirely)
- `/solutions/real-estate` — agent-focused vertical landing
- `/solutions/hospitality` — venues / cafés / multi-venue groups
- `/legal/privacy` — AU Privacy Act compliant draft
- `/legal/terms` — services + IP boilerplate
- `/legal/refunds` — custom-work refund policy
- `/blog` — index page with tag filtering
- `/blog/[slug]` — article template with JSON-LD Article schema, related posts
- `/not-found` (404) — in design system

**Blog system** (`lib/blog/`)
- `.md` posts with `gray-matter` + `marked` + `reading-time`
- Zod-validated frontmatter (`lib/blog/schema.ts`) — build fails on invalid post
- Related-posts by tag overlap
- 5 seed posts in TapCraft voice (AU English, em-dashes no spaces): event lanyards, NFC vs QR for real estate, Cup Week case study, NFC keychain cost transparency, 3D-printing vs moulding, recycled PLA supply chain

**Global SEO** (`lib/seo.ts`)
- `app/sitemap.ts` (dynamic, includes blog posts)
- `app/robots.ts`
- `app/opengraph-image.tsx` — Next-generated 1200×630 default OG card
- Organisation + LocalBusiness JSON-LD in root layout
- Article JSON-LD per blog post
- Per-page metadata template (title, OG, Twitter, canonical, AU locale)

**Brevo wiring** (stubbed per request)
- `lib/brevo/client.ts` — `sendBrevoEmail` + `addBrevoContact`. Falls back to `console.warn` when API keys aren't set so submissions aren't silently dropped. Real Brevo REST calls when env vars are present.
- `app/api/contact/route.ts`, `/api/quote/route.ts`, `/api/newsletter/route.ts` — Zod-validated, honeypot-protected
- Required env vars: `BREVO_CONTACT_API_KEY`, `BREVO_QUOTE_API_KEY`, `BREVO_NEWSLETTER_API_KEY`, `BREVO_FROM_EMAIL`, `BREVO_TO_EMAIL`

**Nav + Footer**
- Nav surfaces Blog + Pricing
- Footer links real legal pages, real solutions pages, the new blog, the new process page

Verification: `npx tsc --noEmit` clean, `next build` succeeds (31 routes), no warm-hex residue.

---

## 2026-05-11 — Homepage v3 + Encoder app mention

Full homepage revamp, studio-led pitch, dark hardware aesthetic. New section components under `components/home/*`, R3F scenes under `components/three/*`, shadcn-style primitives under `components/ui/*`.

- Direction confirmed: **studio-led, platform secondary**. Homepage is now 12 sections ending in a quote-dialog CTA.
- Replaced SaaS-first hero with studio pitch: *"The business card is dead. Replace it with a tap."*
- Added R3F hero scene (floating NFC keychain + pulse rings + grid lattice) and per-product mini-scenes for keychain / card / lanyard / badge
- Added scroll-driven sticky Process section with crossfading visuals through brief → design → print → encode → ship
- Added full-bleed manifesto with letter-by-letter mega-serif reveal ("Conversion, reimagined.")
- Added marquee divider with scrolling editorial phrases
- Added Results section with count-up stats on scroll
- Added FAQ as Radix accordion (six studio-relevant questions)
- Quote dialog: Radix Dialog + react-hook-form + zod; currently fakes the submit, needs wiring to `/api/quote` → Brevo
- Refreshed Nav: studio-led order (Showcase / Customise / Solutions / Process / Platform), mobile drawer, scroll-intensified blur
- **TapCraft Encoder app introduced** in two places on the homepage (Process > Encode step + Platform teaser) — see new entry in `CLAUDE.md` under "What lives elsewhere"

Stack added: framer-motion 12, three + R3F 9 + drei 10, lucide-react, Radix dialog/accordion/tabs/slot, react-hook-form, zod, clsx, tailwind-merge, class-variance-authority.

Known gaps:
- Quote form `onSubmit` is a stub
- Other routes still show old SaaS-led content
- `/process`, `/solutions/{real-estate,hospitality,agencies}`, `/about` referenced in Nav but unbuilt
- Client names, case-study metrics, ticker stats are placeholders

---

## 2026-04-29 — Direction reset: marketing site only

Significant scope reduction. Documented the new direction across all `.md` files.

- **Out:** Shopify, commerce, cart, checkout, payments, B2C purchasing, SaaS surfaces in this repo
- **In:** B2B marketing site, MDX-driven showcase, 3D customiser → quote, vertical solutions pages, blog
- TapCraft Platform (SaaS) confirmed as a separate project / separate repo — no cross-references in this repo
- The catalogue is a portfolio, not a store; renamed to "showcase"
- Single conversion funnel: visitor → quote/contact form → Brevo → `hello@tapcraftstudio.com`
- Created `CATALOG.md` documenting the MDX content model
- Deleted `SHOPIFY.md` (no longer relevant)
- Added migration tasks to `TODO.md` for ripping out Shopify/UpPromote/cart code from the existing repo

## 2026-04-29 — Documentation initialised

- Created `/docs` directory with: `CLAUDE.md`, `README.md`, `ARCHITECTURE.md`, `TODO.md`, `CHANGELOG.md`, `BRAND.md`, `SEO.md`, `CONVERSION.md`, `PRICING.md`, `DEPLOYMENT.md`, `DESIGN.md` (placeholder)
- Codified Sam's voice rules and Claude Code working preferences in `CLAUDE.md`

---

## (Pre-changelog history)

Captured for context, not exhaustive.

- Initial Next.js 16 + React 19 + Tailwind v4 scaffolding
- ProductModelViewer (R3F + drei) with GLB / glTF-binary support
- MediaTabs component splitting Photos and 3D View
- Real-time colour switching via Three.js material updates
- Refund, Privacy, and Terms components built
- DNS migrated to Hostinger pointing at Vercel
- Brevo account stood up with separate keys for newsletter and contact form
- *(Some prior work referenced Shopify Storefront API and UpPromote — slated for removal as part of the 2026-04-29 reset)*