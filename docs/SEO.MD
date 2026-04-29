# SEO

Strategy from the keyword research already done in the project (`keywords.md`, `nfc.md`, `real-estate.md`, `event-merch.md`). This file is the actionable playbook.

---

## 1. Strategic frame

This is a **B2B service business marketing site**. SEO success looks like qualified inbound quote requests, not transaction volume. Three intent profiles to chase:

| Surface | Intent | Volume | Priority |
|---|---|---|---|
| **AU local + commercial** (Melbourne NFC, 3D printing AU) | High commercial | Low–medium | **P0** — quickest wins |
| **AU informational** (NFC vs QR, real-estate use cases) | Mid commercial | Medium | **P1** — content marketing |
| **Use-case / vertical** (event NFC wristbands, hospitality review cards) | Mid–high commercial | Low | **P1** — solutions pages |

---

## 2. Primary keyword targets

Page-level, not blog-post-level.

### Tier 1 — homepage, top of menu

| Page | Primary kw | Secondary |
|---|---|---|
| `/` | custom 3D printing Melbourne | 3D printed NFC products Australia |
| `/showcase` | NFC product portfolio Melbourne | smart business card examples Australia |
| `/customise` | custom NFC product design | 3D printed business card maker |

### Tier 2 — solutions / vertical pages

| Page | Primary kw | Secondary |
|---|---|---|
| `/solutions/events` | NFC wristbands Australia | event NFC tags Melbourne, festival check-in tags |
| `/solutions/real-estate` | NFC business cards real estate | smart open-home cards Melbourne |
| `/solutions/hospitality` | NFC review cards Melbourne | tap-to-review Google card AU |
| `/solutions/retail` | NFC product tags Australia | smart retail tags Melbourne |

### Tier 3 — blog / content (`/blog`)

Each post 1500–2500 words, original, with at least one Melbourne-specific case study or example.

1. *How Melbourne cafés can use NFC review cards to grow Google Reviews*
2. *NFC business cards in Melbourne: a buyer's guide*
3. *Real estate NFC cards for open homes and auctions: a Melbourne agent's playbook*
4. *NFC vs QR for events: which actually converts better?*
5. *Custom 3D-printed lanyards for Australian conferences*
6. *NFC tap-to-pay vs NFC tap-to-share: what business owners should know*
7. *NTAG213 vs 215 vs 216: which NFC chip for what use case?*

---

## 3. Why this beats the competition

From the existing research:

- AU NFC card vendors (Tapt, Wave, Blinq, Tagthose) have decent product pages but **almost no editorial content**.
- Melbourne local intent has **no dominant local guide** — just product pages from national vendors.
- Real-estate NFC content is generic. **No content with suburb-level or agency-level case studies.**
- 3D-print + NFC integrated providers are mostly Etsy micro-merchants without SEO infrastructure.

The opening: **local + integrated + editorial**. Only TapCraft can credibly claim all three.

---

## 4. Schema (structured data)

Required JSON-LD on every page. Build a `<JsonLd />` component family in `src/components/seo/`.

### Site-wide (in root `layout.tsx`)

- `Organization` — name, logo, sameAs (social URLs), contact
- `WebSite` — sitelinks search box

### Homepage

- `LocalBusiness` — name, address, geo, phone, openingHours, priceRange `$$`
  - **Blocked on phone number purchase + address finalisation.** Don't ship with placeholders — invalid LocalBusiness schema is worse than none.

### `/showcase`

- `BreadcrumbList`
- `ItemList` — links to individual showcase items

### `/showcase/[slug]`

- `CreativeWork` — name, description, image, dateCreated, creator (TapCraft)
- `BreadcrumbList`

> Note: we use `CreativeWork` not `Product` because we're not selling these as catalogued items with SKUs and prices. Each showcase entry is a portfolio piece.

### `/customise`

- `WebApplication` — applicationCategory `BusinessApplication`, browserRequirements

### `/solutions/[vertical]`

- `Service` — serviceType, areaServed (Melbourne / Australia), provider (TapCraft)
- `BreadcrumbList`

### `/blog/[slug]`

- `Article` — headline, image, datePublished, dateModified, author, publisher

### FAQ sections

- `FAQPage` on the homepage FAQ block and any dedicated FAQ pages

---

## 5. Local SEO checklist

Highest leverage, lowest effort. Do all of these.

- [ ] **Google Business Profile** — claim, verify, fully complete
- [ ] **Google Maps** — pin set at studio address
- [ ] **Bing Places**, **Apple Business Connect** — quick wins for AU
- [ ] **AU citations**: True Local, Yellow Pages, Hotfrog, Yelp AU
- [ ] **Niche directories**: 3DPrintingHub.com.au, Melbourne maker directories
- [ ] **Industry partnerships**: Frankly Built, Bambu Lab AU community, Melbourne Maker Space
- [ ] **AU Made** registration if eligible
- [ ] Embed Google Map on `/contact`
- [ ] NAP (Name / Address / Phone) consistent across every directory and the site footer

**Citations are useless if NAP differs.** Pick one canonical address format and use it everywhere.

---

## 6. Technical SEO

Non-negotiables.

- [ ] `next-sitemap` generating dynamic `sitemap.xml` (showcase + blog + static pages)
- [ ] `robots.txt` allowing all, pointing to sitemap
- [ ] Canonical URLs on every page (Next.js metadata API)
- [ ] OG + Twitter card metadata on every page
- [ ] Heading hierarchy enforced (one `<h1>`, no skipped levels)
- [ ] Image alt text on every image (auto-fail to filename if missing)
- [ ] `loading="lazy"` on below-fold images (Next/Image default)
- [ ] Core Web Vitals — see `ARCHITECTURE.md` performance budget
- [ ] Mobile-first audit on Lighthouse — minimum 90
- [ ] HTTPS everywhere (Vercel default)
- [ ] No `noindex` headers in production
- [ ] hreflang `en-AU` declared

### Crawlability of the 3D customiser

`/customise` is heavy and JS-dependent. Mitigation:

- Render the page shell (h1, intro, feature list, CTAs) server-side
- Lazy-load the R3F canvas behind a poster image
- Page must rank for "custom NFC product design" without needing the canvas to execute

---

## 7. Internal linking

A few rules that compound:

- Homepage hero CTA → `/customise` and `/showcase` (split-test which converts)
- Every solutions page → relevant showcase items (filtered by `industries` frontmatter) and `/customise`
- Blog posts → solutions pages (not homepage); each post links to ≥1 showcase item and ≥1 solutions page
- Footer → all P0 / P1 pages once shipped
- Showcase items → relevant solutions page ("This kind of work is popular with [events / real-estate / hospitality]")

---

## 8. Backlink strategy

- **Guest posts** on AU SMB blogs (SmartCompany, Inside Small Business, Australian Anthill)
- **Industry roundups**: pitch to All3DP, 3DPrint.com, Fabbaloo for "3D printing in Australia"
- **Real estate publications**: REA Group, Domain B2B blog, Real Estate Business Online
- **Local press**: Concrete Playground Melbourne, Time Out Melbourne, Melbourne Business Network
- **Free embeddable tools** (future): NFC compatibility checker, NTAG chip comparison — every embed = backlink

Target: 30 referring root domains by month 6, 80–120 by month 12.

---

## 9. Content workflow

Every new page or post:

1. **Brief** — primary kw, secondary kws, internal links, schema, target word count
2. **Outline** — H2/H3 structure mapped to search intent
3. **Draft** — TapCraft brand voice (`BRAND.md` section 3)
4. **Edit** — run through the `stop-slop` skill to remove AI tells
5. **Schema** — JSON-LD validated via Google Rich Results Test
6. **Internal links** — at least 3 in, 3 out
7. **Publish** — submit URL to Google Search Console
8. **Track** — log target rankings weekly

---

## 10. Measurement

Track monthly. Reassess quarterly.

| Metric | Month 3 | Month 6 | Month 12 |
|---|---|---|---|
| Indexed pages | 30 | 60 | 120 |
| Organic sessions / mo | 200 | 1,000 | 5,000 |
| Top-10 keywords (AU) | 5 | 15 | 40 |
| Referring domains | 10 | 30 | 80+ |
| GBP profile actions / mo | 10 | 50 | 200 |
| Organic-driven quote requests / mo | 2 | 8 | 25 |

**Quote requests, not traffic, is the ultimate measure.** A million page views to the wrong people doesn't pay rent.

---

## 11. Use the SEO skill

Claude Code has the `seo-master` skill available. Trigger for any non-trivial SEO work — keyword research, content audits, schema validation, site audits, page-level optimisation.

```
> Use the seo-master skill to audit /solutions/events
```

This file is the strategy. The skill is the toolkit.