# TapCraft Studio

Marketing website for TapCraft Studio — Melbourne's only integrated 3D-printing + NFC studio. B2B lead-gen, portfolio showcase, 3D customiser leading to quote requests.

**Live:** https://tapcraft.shop
**Stack:** Next.js 16 · React 19 · TypeScript · Tailwind v4 · MDX · React Three Fiber

---

## What this is

A marketing site built around one job: **getting qualified B2B leads into our inbox**.

It has four surfaces:

1. **Homepage + solutions pages** — pitch, vertical landing pages (events, real estate, hospitality)
2. **Showcase** — portfolio of past work, case-study format. Not a store.
3. **3D customiser** — interactive R3F configurator → quote request
4. **Blog** — SEO content driving organic traffic to the surfaces above

No checkout. No accounts. No payments. Anything transactional happens offline after the lead lands.

---

## What this is not

- ❌ An e-commerce store (no Shopify, no Stripe, no cart)
- ❌ A B2C catalogue with prices and add-to-cart
- ❌ The TapCraft SaaS platform (separate repo, separate project)
- ❌ An order-management system (handled outside this repo)

---

## Quick start

```bash
npm install

cp .env.local.example .env.local
# Fill in Brevo keys + contact email

npm run dev          # http://localhost:3000
npm run build
npm run start
npm run lint
npm run type-check
```

## Required env vars

```bash
# Brevo — separate keys per function
BREVO_API_NEWSLETTER_KEY=
BREVO_NEWSLETTER_LIST_ID=
BREVO_API_CONTACT_KEY=
CONTACT_EMAIL=hello@tapcraftstudio.com

# Optional
NEXT_PUBLIC_GA_ID=
SENTRY_DSN=
```

See `DEPLOYMENT.md` for Vercel and DNS setup.

---

## Project structure

```
.
├── content/
│   ├── showcase/         # MDX — one file per portfolio item
│   └── blog/             # MDX — one file per blog post
├── public/
│   ├── models/           # .glb 3D models
│   └── images/
├── src/
│   ├── app/              # Next.js App Router
│   ├── components/
│   ├── lib/              # MDX, Brevo, pricing, utils
│   ├── hooks/
│   └── types/
└── docs/                 # all .md docs (this folder)
```

---

## Documentation

| File | What it covers |
|---|---|
| `CLAUDE.md` | Project context for Claude Code — read this first |
| `ARCHITECTURE.md` | Tech decisions, data flow, structure |
| `CATALOG.md` | Showcase content model (MDX schema) |
| `TODO.md` | Active work, migration tasks, blockers |
| `BRAND.md` | Voice, colours, typography |
| `SEO.md` | Keyword strategy, schema, AU local SEO |
| `CONVERSION.md` | Single-funnel design, CTAs, lead capture |
| `PRICING.md` | Quote pricing, customiser calculator logic |
| `DEPLOYMENT.md` | Vercel, DNS, env vars, monitoring |
| `DESIGN.md` | Design system (in development) |
| `CHANGELOG.md` | Change log |

---

## Working with this repo

Built primarily with [Claude Code](https://docs.claude.com/en/docs/claude-code). The `CLAUDE.md` file is the entry point — read it before opening files.

Before opening a PR:
- `npm run lint && npm run type-check` pass
- Tested at 375px viewport (smallest target)
- `CHANGELOG.md` updated with a one-liner
- If the change touches strategy or architecture, update the relevant doc

---

## Contact

Samridh Limbu · Nikhil Gupta
hello@tapcraftstudio.com
Melbourne, VIC, Australia