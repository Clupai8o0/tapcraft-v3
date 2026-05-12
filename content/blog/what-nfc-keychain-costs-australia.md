---
title: "What an NFC keychain actually costs to make in Australia"
description: "We break down the real cost of a 1,000-unit NFC keychain run from a Melbourne studio. Materials, chips, encoding, packaging, labour, margin. No vendor markup hidden in the line items."
publishedAt: "2026-03-25"
author: "Samridh Limbu"
tags: ["Pricing", "Manufacturing", "NFC", "Transparency"]
---

We get asked once a week if we can match a $0.50/unit quote from AliExpress.

The honest answer is no, we can't. And we're going to walk through why, with real numbers, so the next time someone sends you an offshore quote you can read the line items properly.

This isn't a sales pitch. If you're optimising purely for cost-per-unit on a 50,000-unit run with no NFC encoding and no design support, you should probably buy from Alibaba. Cost-per-unit on commodity NFC tags from Shenzhen is something like $0.18-0.35 USD. We can't beat that on cost-per-unit. The fundamental cost of plastic from a Chinese factory of scale is lower than the cost of plastic from a Melbourne studio. That's just true.

What we *can* do is something different---which we'll explain.

But first, the numbers.

## A 1,000-unit NFC keychain run

We'll use the spec we ship most often: a 52 × 32 × 4mm custom-shaped keychain in onyx PLA, with an NTAG215 chip embedded inside, encoded with the customer's URL, batched and tested.

**Materials (per unit)**

- 14g of onyx PLA filament: $0.42
- NTAG215 chip (NXP, sourced via Melbourne distributor): $0.62
- Branded chip carrier sticker: $0.04
- Packaging (recycled card pouch, AU-made): $0.18

Subtotal materials: **$1.26**

**Production (amortised across 1,000 units)**

- Mould design + first-article print: $350 → $0.35
- Printer time (Bambu X1C, 38min/unit × $4.20/hr machine rate): $2.66
- Labour for unloading + QC: $0.85
- Encoding labour + audit log: $0.22

Subtotal production: **$4.08**

**Operations (amortised)**

- Customer-success / design review (4 hours @ $90): $360 → $0.36
- Quality test cycle (3 phones × 100 units): $0.18
- Studio overhead (rent, power, insurance): $0.55
- Software/platform (encoder app, dashboard): $0.12

Subtotal ops: **$1.21**

**Cost of goods sold (per unit, before margin): $6.55**

**Margin (we run on ~25-30% on production work)**

For a 1,000-unit run at 28%: $1.83

**Sell price per unit: ~$8.38**

We round to AUD $9 / unit at 1,000+ for a standard custom keychain.

## What you'd pay offshore (apples to apples)

This is where it gets interesting. If you commission the same product from a Shenzhen vendor---*the same product, with the same NFC encoding, the same packaging, the same QC*---the price is *not* $0.50/unit.

The $0.50 quotes you'll see online are for *commodity NFC tags*: a plain plastic disc with a chip inside, no custom mould, no encoding, no branding, no packaging, MOQ 5,000+. That's apples to a watermelon.

The like-for-like Shenzhen quote we benchmarked in January 2026:

- Custom-mould 52 × 32 keychain in PLA: $0.85/unit
- NTAG215 embedded: $0.45/unit  
- Encoded with same URL on all units: $0.20/unit
- Branded card packaging: $0.12/unit
- QC + retesting at receiving warehouse: $0.18/unit
- Air freight: $0.65/unit
- Customs + GST: $0.32/unit
- Three weeks of supplier-relationship overhead absorbed into your team's time: hard to quantify, but real

**Like-for-like landed cost: ~$2.77/unit**

So the gap is real. We're about 3× the landed offshore cost on a comparable spec. Not 18×, not 90×---3×.

What you're paying for, in our case, on top of that 3× delta:

- Five-day lead time instead of 6-8 weeks
- Sample available in 72 hours
- A founder on a Loom call within 24h if anything goes wrong
- No air freight emissions (Brunswick to Melbourne CBD: 4km)
- PHA / recycled PLA options for sustainability RFPs
- A re-encode capability---we can re-program a tag in the field, the offshore stock can't be touched once shipped
- No customs clearance, no FX risk, no language barrier on a midnight defect
- The Australian Made certification

For most of our customers (events, real estate, hospitality, agencies), the 3× cost delta is worth all of that.

For some customers (giveaways for 50,000 units at a public event where each unit's URL is the same), the offshore math wins. We'll tell you that when you call us. We've sent customers to Alibaba before. We'd rather have an honest no than a bad first order.

## The "AU-made premium" myth

There's a narrative in our industry---and we hear it from buyers in their first meeting---that Australian manufacturing has some kind of moral premium where you should pay 5×, 10×, 30× for the same thing.

We don't believe that. We don't quote that. The 3× delta we're describing above is *math*: the cost of Australian labour, Australian compliance, Australian retail-grade quality control, and the cost of *not* importing.

When we quote a job, every line is justifiable by an invoice. We don't pad. We don't have a "made in Naarm" hidden multiplier. If we're 3× the offshore price, we're 3× because the inputs are 3×, not because we feel like charging more.

If you ever get a quote from us that you can't reconcile---ask. We'll send you the cost breakdown. We've done it for two customers this year and both stayed with us.

## What "honest pricing" means

A few rules we've adopted on quoting and won't break:

1. **Margin is a line item.** We don't bundle it into "design fee" or "setup fee". Our margin sits visible at the bottom of the quote. You can see what we're making.
2. **Material is at cost.** We don't mark up PLA. We don't mark up chips. The supplier invoice is in the quote PDF if you ask.
3. **Rush is explicit.** A rush job costs more. We'll tell you exactly what the rush surcharge is. We won't hide it in "production".
4. **Mould fees are one-off.** Once we've made your mould, the reprint price is the per-unit cost in the table on [/showcase/keychains](/showcase/keychains) without the $350 setup. Reorders are cheaper. We don't re-bill the mould.

We don't actually advertise this stuff because it's the floor, not the ceiling. But it's worth saying for the first-time buyer.

## When to commission us vs commodity-source

**Commission us when:**

- The unit is bespoke. Custom mould, custom shape, custom encoding.
- You need speed. 5-day samples, 10-day production.
- You need someone to talk to. A founder for a 30-minute call when something goes wrong at 9pm on the eve of an event.
- You need traceability. Audit logs, per-batch testing, AU-made certification.
- You need ethics on your sourcing. Recycled PLA, PHA, AU labour.

**Commodity-source when:**

- The unit is stock. A disc with a chip in it. No custom mould.
- The volume is 5,000+ and the URL is the same on every tag.
- Lead time can be 8 weeks.
- You don't need design review.
- Cost is the dominant constraint and the budget is fixed.

There's nothing wrong with the second case. We do it ourselves for our own internal testing tags.

If you want to talk about whether a custom run makes sense for your job---[email Sam](mailto:hello@tapcraftstudio.com). We'll tell you straight whether we're the right tool, or whether you should be on Alibaba.
