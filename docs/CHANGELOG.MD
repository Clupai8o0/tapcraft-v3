# Changelog

Append-only. Newest at the top. Format: `## YYYY-MM-DD — Short summary`. Bullet the actual changes.

For semantic versioned releases, prefix with `## v0.X.0 — YYYY-MM-DD`.

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