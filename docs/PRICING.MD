# Pricing

The site doesn't sell anything directly. **All pricing is quote-mediated.** This file documents how indicative prices appear on the site, the customiser calculator logic, and the B2B tier guidelines used in quote conversations.

---

## 1. Pricing principles

1. **Manufacturing cost is minimal.** The premium isn't in the plastic, it's in the design consultation, NFC programming, end-to-end service, and Melbourne-made local turnaround. Don't apologise for the price.
2. **Premium positioning > volume.** Competing on price loses to overseas Etsy sellers. Compete on speed, integration, and quality.
3. **Show ranges, not point prices**, for anything custom. Hiding price kills trust; faking precision kills credibility.
4. **B2B price is contract value, not unit price.** Quote per project where possible.
5. **Tier-jumps are real.** A 50-unit order isn't 5× a 10-unit order — setup amortises. Quotes must reflect that.

---

## 2. Indicative pricing on the site

Showcase items can display a `price_indicative` field in their MDX frontmatter:

```yaml
price_indicative: "from $25 per unit"
price_indicative: "from $850 per project"
price_indicative: "from $2,500 (250 units)"
```

These are display-only. They tell visitors the order of magnitude without committing to a price. The actual quote is always a separate conversation.

### Reference points (AUD) — for indicative display

| Surface | Indicative price |
|---|---|
| Smart Business Card — Minimalist Black | from $25 per unit |
| Event Check-in Tag — Festival Edition | from $8 per unit (500+ units) |
| Retail Product Tag — QR Alternative | from $12 per unit |
| Real Estate Smart Card — Premium | from $35 per unit |
| Custom Keychain | from $25 per unit |
| Corporate Prototype — Custom Shape | from $500 per project |

These ground visitor expectations. Update as production data accumulates.

---

## 3. The customise page calculator

Lives in `src/lib/pricing/calculator.ts`. Pure function: `(config: CustomiseConfig) => PriceRange`. No side effects, deterministic, easy to test.

### Inputs

```ts
type CustomiseConfig = {
  shape: 'businessCard' | 'roundTag' | 'squareTag' | 'rectangle' | 'keychain' | 'badge'
  dimensions: { width: number; height: number; thickness: number }   // mm
  cornerRadius: number
  material: 'pla' | 'petg' | 'resin' | 'woodPla' | 'carbonPla'
  finish: 'matte' | 'glossy' | 'textured'
  nfcChip: 'ntag213' | 'ntag215' | 'ntag216'
  textCustomisation: { lines: number; effect: 'embossed' | 'debossed' | 'inlaid' | 'none' }
  customDesignUploaded: boolean
  quantity: number
}
```

### Calculation steps

```
1. basePrice = lookup(shape) × areaFactor(dimensions)
2. materialMultiplier = lookup(material)              // PLA 1.0, PETG 1.15, etc.
3. finishCost = lookup(finish)                        // flat AUD
4. nfcChipCost = lookup(nfcChip)                      // flat AUD
5. textCost = textCustomisation.lines × baseTextRate + effectModifier
6. designUploadCost = customDesignUploaded ? 15 : 0
7. unitPrice = (basePrice × materialMultiplier) + finishCost + nfcChipCost + textCost + designUploadCost
8. quantityMultiplier = lookup(quantity)
9. subtotal = unitPrice × quantity × quantityMultiplier
10. range = [subtotal × 0.9, subtotal × 1.1]          // ±10% honesty band
```

### Modifier tables

**Material:**
| Material | Multiplier |
|---|---|
| PLA Standard | 1.00 |
| PETG Durable | 1.15 |
| Wood-filled PLA | 1.25 |
| Carbon Fiber PLA | 1.30 |
| Resin Premium | 1.40 |

**Finish:**
| Finish | Cost (AUD) |
|---|---|
| Matte | $0 |
| Glossy | $1.50 |
| Textured | $2.00 |

**NFC chip:**
| Chip | Cost (AUD) | Notes |
|---|---|---|
| NTAG213 | $2 | 144 bytes — basic contact info |
| NTAG215 | $4 | 504 bytes — full vCard |
| NTAG216 | $7 | 888 bytes — vCard + URL + multi-record |

**Text customisation:**
- Per line: $1.50
- Embossed: +$2 per line
- Debossed: +$1 per line
- Inlaid: +$3 per line (multi-material print)

**Quantity tiers:**
| Quantity | Multiplier |
|---|---|
| 1–9 | 1.00 |
| 10–24 | 0.90 |
| 25–49 | 0.85 |
| 50–99 | 0.78 |
| 100–249 | 0.72 |
| 250–499 | 0.65 |
| 500+ | Direct to quote — disable calculator, redirect to `/contact?intent=large-order` with config pre-filled |

The calculator output is always shown as a range, with the disclaimer that final pricing comes back via email.

---

## 4. B2B pricing tiers (internal — quote conversations)

Guidelines for sales conversations, not published prices.

| Tier | Volume | Typical buyer | Contract value (AUD) |
|---|---|---|---|
| **Boutique** | 50 units | EA, startup, wedding | $500–$2,500 |
| **Mid corporate** | 250 units | In-house events team | $2,500–$12,500 |
| **Conference** | 1,000 units | PCO, association | $8,000–$40,000 |
| **Festival / expo** | 5,000+ units | Festival ops | $15,000–$250,000+ |

### Per-tier service inclusions

- **Boutique** — standard customisation, 1 design revision, NFC programming, 7–14 day production
- **Mid corporate** — dedicated design consult, 2 revisions, batch encoding, 10–14 day production, white-glove delivery in Melbourne
- **Conference** — custom shape design, 3 revisions, multi-NFC payload routing, 4–6 week production, on-site setup option
- **Festival / expo** — full project management, multiple SKUs, sustainability reporting, on-site team

**Rush fees:** +25–50% for production under 5 business days. Quote per project.

---

## 5. Sample kits

Free for qualified B2B prospects. Charge for B2C-tier requests.

| Sample kit | Price | Includes |
|---|---|---|
| **Discovery (B2C-style)** | $25 (refundable on first order) | 1 keychain + 1 business card + branded packaging |
| **B2B Events** | Free for events teams (qualified) | 5 sample wristbands + lanyard + tag, in 3 materials |
| **B2B Real Estate** | Free for agents (qualified) | 3 cards in different materials + 1 open-home tag |
| **B2B Hospitality** | Free for venue ops (qualified) | 3 review cards + 1 table tag |

Qualification = company email + minimum order intent. The form filters this softly (e.g., "Estimated quantity: <50 / 50–500 / 500+").

Sample kit fulfilment is offline — the form just routes the request to `hello@`.

---

## 6. Discount policy

Discounts are rare, deliberate, and tracked. Communicated in quote emails, not on the site.

- **Founding customer discount** (B2B, first 10 customers per vertical): 15% off first order
- **Repeat order discount**: 10% on second and third orders within 6 months
- **Referral**: 10% to referrer + 10% to new customer (one-time)
- **Bulk**: per the quantity multiplier table above
- **Seasonal**: not planned

**No discount stacking.** Highest applicable discount only.

---

## 7. Quote edge cases

These come up often enough to document.

- **Reorder of same design, ≤6 months ago:** 10% loyalty pricing, skip design fee
- **Reorder with minor revisions:** $25 revision fee + standard pricing
- **Customer-supplied artwork that needs cleanup:** $35 prep fee, communicated in quote
- **Customer cancellation after production starts:** non-refundable. Communicated in T&Cs.
- **Customer cancellation before production:** full refund minus design consultation time at $80/h
- **Defective product:** replaced free, return shipping covered
- **Wrong-spec product (our error):** replaced free, return shipping covered
- **Wrong-spec product (customer error):** new order at standard pricing, customer keeps original

---

## 8. Pricing display rules

| Surface | Display |
|---|---|
| `/showcase` listing | "from $X per unit" / "from $X per project" if defined in MDX |
| `/showcase/[slug]` | Indicative price + "Get a quote" CTA |
| `/customise` | Range: "$X–$Y" with timestamp note |
| `/solutions/[vertical]` | "Starts at $X" + "Get a quote" CTA |
| Quote form | No price shown until response email |
| Anywhere else | No prices shown |

**Currency:** AUD throughout. Prefix `$` only — never `A$` or `AU$` on user-facing copy. Footer states currency for international visitors.

---

## 9. Reviewing this file

Pricing changes should be deliberate and infrequent. Re-evaluate quarterly:

- Did per-unit cost assumptions hold? (Material, time, NFC chips)
- Did quantity multipliers actually capture the cost curve, or did 500-unit orders lose money?
- What's the rejection rate per quote tier? If "Boutique" converts 80% but "Conference" 10%, Conference may be over-priced.
- Are competitors moving? Watch Tapt, Wave Connect, Lasered Edge Designs — note AUD prices in this file when they shift.

Update this file with the conclusion. Don't update prices in code without first updating this file.