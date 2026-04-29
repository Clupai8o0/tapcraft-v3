# Catalog (Showcase)

The catalogue on `tapcraft.shop` is a **portfolio**, not a store. It exists to demonstrate capability and drive B2B leads.

Visitors browse past work, then either:

1. Click a showcase item → read the case study → CTA to "Get a quote like this"
2. Click "Customise" on a showcase item → land in `/customise` with that item's config pre-loaded
3. Click "Get a quote" → contact form with item slug pre-filled

There is no add-to-cart, no price-and-buy, no checkout.

---

## 1. Content lives in MDX

All showcase items are MDX files in `content/showcase/`. One file per item. The filename is the URL slug.

```
content/showcase/
├── festival-wristband-2024.mdx              → /showcase/festival-wristband-2024
├── smart-business-card-minimalist-black.mdx → /showcase/smart-business-card-minimalist-black
└── real-estate-open-home-tag.mdx            → /showcase/real-estate-open-home-tag
```

---

## 2. Frontmatter schema

Every showcase MDX file starts with frontmatter. Validated at build time via Zod (`src/lib/mdx/schema.ts`). **Build fails on any invalid frontmatter** — no broken pages reach production.

```yaml
---
# --- Required ---
title: "Smart Business Card --- Minimalist Black"
slug: smart-business-card-minimalist-black           # must match filename
category: business-cards                             # business-cards | event | retail | corporate | hospitality
hero_image: /showcase/business-card-black/hero.jpg
short_description: "Premium 3D-printed NFC card for design-led professionals."
production_time: "5--7 days"
date_completed: 2025-09-12                           # for ordering and recency

# --- SEO ---
seo:
  title: "Smart Business Cards Melbourne | TapCraft Studio"
  description: "Custom 3D-printed NFC business cards, made in Melbourne..."
  keywords: ["smart business cards melbourne", "nfc business cards australia"]

# --- Recommended ---
gallery:
  - /showcase/business-card-black/1.jpg
  - /showcase/business-card-black/2.jpg
  - /showcase/business-card-black/3.jpg
model_3d: /models/business-card-black.glb
materials: ["PLA Standard", "PETG Durable"]
nfc_chip: NTAG213
industries: [real-estate, hospitality, corporate]    # for filter on /showcase
price_indicative: "from $25 per unit"                # display only --- not transactional

# --- Optional ---
client: "Acme Realty"                                # blank if confidential / personal use
quote: "We re-ordered three times in six months. Says it all."
quote_attribution: "Sarah K., Acme Realty"
case_study: true                                     # surfaces in /case-studies if true
related_solution: real-estate                        # links to /solutions/real-estate
customise_template_id: business-card-base            # links to /customise pre-config
featured: false                                      # appears on homepage if true

# --- Auto-generated ---
# date_published: handled by frontmatter linter; do not set manually
---
```

---

## 3. Content body

Below the frontmatter, write the case study in normal Markdown / MDX. Keep it tight — 300–800 words for a typical item, 1500+ for a flagship case study.

### Recommended structure

```mdx
## The brief

What the client needed. One paragraph.

## What we made

What TapCraft delivered. Specs, materials, NFC payload, quantity.

<ImageGallery images={frontmatter.gallery} />

## The detail

A photo or two with captions explaining a decision --- material choice, finish, NFC placement, programming complexity.

<ProductModelViewer src={frontmatter.model_3d} />

## Outcome

What happened next. Reorder? Press? Customer feedback?

<QuoteCTA category={frontmatter.category} prefilledSlug={frontmatter.slug} />
```

### MDX components available

Defined in `src/lib/mdx/components.ts` and registered in the MDX renderer.

| Component | Purpose |
|---|---|
| `<ImageGallery images={...} />` | Lightbox-enabled gallery |
| `<ProductModelViewer src={...} />` | R3F viewer for the GLB |
| `<QuoteCTA category={...} />` | Drop-in conversion block |
| `<Callout type="note|warn|tip">` | Highlight a fact |
| `<TwoColumn>{...}</TwoColumn>` | Side-by-side text/image |
| `<SpecTable rows={...} />` | Materials / dimensions / NFC table |

If you need a new MDX component, add it to `src/components/mdx/` and register it in `lib/mdx/components.ts`.

---

## 4. Categories and filters

Showcase items are filtered on `/showcase` by:

- **Category** (single-select): business-cards · event · retail · corporate · hospitality
- **Industry** (multi-select): events · real-estate · hospitality · retail · corporate · education
- **Material**: PLA · PETG · Resin · Wood · Carbon
- **NFC chip**: NTAG213 · NTAG215 · NTAG216

Filter UI on `/showcase`. Each filter is a derived query against the parsed frontmatter — no runtime database.

Sort options on `/showcase`:
- Most recent (`date_completed` desc) — default
- Featured first
- Category

---

## 5. Adding a new showcase item

The end-to-end checklist:

1. Drop GLB into `/public/models/[slug].glb` (under 5 MB; under 2 MB ideal)
2. Drop hero + gallery images into `/public/showcase/[slug]/` (compressed, web-optimised, max 2000px wide)
3. Create `content/showcase/[slug].mdx` using the schema in section 2
4. Run `npm run dev` — visit `/showcase/[slug]` and verify
5. Run `npm run build` — frontmatter validation catches any errors
6. Push → Vercel preview → review on the deploy URL
7. If it changes the homepage featured set, update the homepage data accordingly
8. Merge → live

---

## 6. 3D model storage

Currently in `/public/models/`. Pros: simple, no external service, model URLs are stable. Cons: bundles into deploy, deploys get heavier as models accumulate.

**Migrate to Vercel Blob when:**
- Total `/public/models/` exceeds ~200 MB, or
- Build time exceeds 5 minutes, or
- We start needing per-model access controls

When that happens, frontmatter switches from a relative path to a Blob URL. Update `<ProductModelViewer />` to handle either.

---

## 7. Image handling

Showcase images: `/public/showcase/[slug]/*.jpg`. Use `next/image` for everything — it handles responsive sizing, lazy loading, and AVIF/WebP transcoding.

```tsx
import Image from 'next/image'

<Image
  src={frontmatter.hero_image}
  alt={frontmatter.title}
  width={1600}
  height={900}
  className="..."
/>
```

Hero image dimensions: **1600×900 (16:9)**. Gallery images: any aspect ratio, but pre-crop to keep grid tidy. Provide `alt` text always — accessibility floor is non-negotiable.

---

## 8. Showcase vs Blog

These are different content types, in different folders, with different schemas, surfaced on different routes.

| | Showcase | Blog |
|---|---|---|
| Folder | `content/showcase/` | `content/blog/` |
| Route | `/showcase/[slug]` | `/blog/[slug]` |
| Schema | This file (section 2) | `src/lib/mdx/schema.ts` → `blogPostSchema` |
| Purpose | Demonstrate capability | Drive SEO traffic |
| CTA | Quote / customise | Soft (newsletter / read more) |
| Cadence | Every completed B2B project worth showing | 2 per month |

A blog post can reference showcase items. A showcase item can link to a blog post (e.g., "We wrote about NFC chip selection here"). Use the appropriate component to keep links intentional.

---

## 9. What this isn't

- **Not a product database.** No SKUs, no inventory, no stock counts.
- **Not transactional.** `price_indicative` is informational. Real prices come from a quote conversation.
- **Not auto-published.** Every item ships with a deliberate human edit and approval. No drafts in production.

If we ever want true e-commerce — actual carts and prices and inventory — that's a different system in a different repo. Don't shoehorn it into MDX.

---

## 10. Migrating to a CMS later

If a non-dev editor joins the team and pull requests stop being viable:

1. Pick a headless CMS (Sanity recommended — generous free tier, good developer story, AU-friendly)
2. Mirror the MDX schema as a CMS schema (each frontmatter field → a CMS field)
3. Write a one-time migration script that pushes existing MDX into the CMS
4. Replace MDX file reads with CMS API reads in `lib/mdx/parse.ts`
5. Move MDX content body to a portable text or rich text field
6. Custom MDX components become rich-text component blocks

Estimated effort: 1–2 weeks. Not urgent. Don't pre-build for it.