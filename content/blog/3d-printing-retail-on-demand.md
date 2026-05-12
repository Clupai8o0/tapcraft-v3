---
title: "3D-printing for retail: when on-demand beats injection moulding"
description: "Injection moulding is cheap per unit once you've covered the $40k mould fee. 3D-printing is cheap from day one. The actual crossover and where on-demand still wins."
publishedAt: "2026-03-18"
author: "TapCraft Studio"
tags: ["3D printing", "Manufacturing", "Retail", "Strategy"]
---

The classic argument against 3D-printing for retail goods is simple. Injection moulding amortises a $40k tool over 100,000 units---about 40 cents per unit, plus pennies of plastic. 3D-printing takes hours per unit and uses retail-priced filament. Past about 5,000 units, the math is supposed to favour moulding.

The math is right, but the assumption that 5,000 units is the relevant break-even point is starting to break.

We see three categories where on-demand 3D-printing wins on the *full* unit economics, not just material cost. Worth understanding if your retail product run is anywhere between 500 and 100,000 units.

## The classic break-even calculation

Just to make sure we're comparing the same thing.

**Injection moulding (one-off run, 10,000 units)**

- Mould fee (single cavity, aluminium tool): $32,000
- Per-unit material + machine time: $0.40
- Setup + first-article approval: $1,800
- QC across run: $0.15/unit

Landed COGS: ($32,000 + $1,800 + $5,500) / 10,000 = **$3.93/unit**

**3D-printing (same 10,000 units, same shape, run on our floor)**

- Mould-equivalent (first-article 3D files, slicing profiles): $1,200
- Per-unit material: $0.55
- Per-unit print time: $2.65
- QC + labour: $0.85/unit

Landed COGS: ($1,200 + $40,500) / 10,000 = **$4.17/unit**

3D-printing is about 6% more expensive at the 10,000-unit scale---*on raw COGS*. But that's not the only line in your P&L.

## When 3D-printing actually wins

### 1. When the design changes

If you're certain you'll print *exactly* this shape, in *exactly* this colour, with *exactly* these dimensions, 10,000 times---moulding wins on cost.

That confidence is rarer than it sounds.

We had a customer who ordered 3,000 units of a branded retail keychain in October 2025. The brand refreshed their colour palette in December. With moulding, they'd have been stuck with 3,000 units in the old palette for 18 months. With 3D-printing, we re-sliced in the new palette in 20 minutes and shipped a top-up run of 1,200 units the following week. The original 1,800 they had stocked sold through; the new 1,200 were on-brand.

Cost difference per unit was meaningless against the brand-cohesion gain. The CFO never had to write off 1,200 units.

**Rule of thumb:** if you'll iterate the design more than once in 18 months, 3D-print.

### 2. When the run is *every individual unit is different*

This is the big one. It's where 3D-printing isn't 6% more expensive than moulding---it's *infinitely* cheaper because moulding can't do it at all.

Per-unit personalisation costs nothing extra in additive manufacturing. We can run 200 keychains where each one has a different name embossed into the shape, at the same effective price as 200 identical ones.

Examples where this matters:

- Event giveaways with attendee names
- Real estate keychains with property addresses
- Gym membership tags with member numbers
- Trophy / award product where the recipient varies
- Pet ID tags where every single one is unique

A moulding house would quote you a $32k tool *per shape*, which means $32k *per name*. Nobody does that. 3D-printing solves it for the same per-unit cost as plain units.

### 3. When you need replenishment, not inventory

Retail finance directors universally hate excess inventory. The cost of a unit sitting in a warehouse for 12 months is meaningful---storage, working-capital tied up, shrinkage, the risk it gets discontinued before it sells.

Injection moulding forces a one-time buy decision: you order 10,000 units in February, you store and sell them through to the next financial year. If demand turns out to be 4,000, you've eaten the difference.

3D-printing lets you order 1,000 units monthly. Same total volume across the year, but you're never holding more than 30 days of inventory.

The math on this:

- Moulding: 10,000 units × 8 months average holding × $0.04/month storage = **$3,200 storage cost**, plus working-capital tied-up cost of about $5,000 at typical rates
- 3D-printing: 1,000 × 12 monthly runs × 0.5 months average holding × $0.04 = **$240 storage cost**, plus near-zero working capital tied up

That $7,500 saving on a 10,000-unit run effectively flips the COGS calculation. 3D-printing becomes the cheaper option *on landed total cost*, even though the unit cost is higher.

### 4. When you need NFC encoding

We're biased on this one because it's our main business---but the math is real.

If your product needs to be NFC-encoded with a different URL per unit (event tags, property tags, member tags), injection moulding doesn't solve the problem at all. The chip has to be encoded after the unit is moulded, which means a second production line, a second supplier, a second QC pass. That stacks $1.50-$2.50/unit of encoding overhead onto the moulded landed cost.

We embed and encode the chip *during* the print process. The chip drops into the mid-layer of the print, the surrounding plastic seals around it, and the encoder writes the URL within seconds of the print finishing. One line, one supplier, one QC pass.

For NFC retail products specifically, 3D-printing wins on cost from any volume.

## When you should still mould

Honest list:

- **>50,000 identical units in a single colour with no design iteration.** Pure commodity production where the design is locked. Bottle caps, stationery, plain coasters.
- **Materials we can't 3D-print.** Glass-filled nylon for high-stress parts. Soft TPU rubber at industrial-scale TPR. Polypropylene if you need it (we can do some PP, but slow).
- **Sub-1mm tolerances.** 3D-print tolerance is ±0.3mm on critical features, ±0.5mm overall. If you need surgical-grade tolerances, moulding has us beat.
- **Cost-per-unit is the dominant constraint and the design will never change.** A million widgets at the lowest possible unit cost. We're not the right vendor. Send you somewhere else.

For everything else---and especially for the bespoke, personalised, NFC-encoded retail products we ship daily---3D-printing wins on landed total cost from about unit 1.

## The retail finance lens

Here's the slide we put in front of buyer-finance teams who push back on the unit cost.

**Moulding 10,000 units (one-shot):**

- COGS: $39,300
- Cash out, day 1: $34,800 (mould + 50% deposit)
- Cash out, day 60: $4,500 (balance + freight)
- Inventory peak: 10,000 units
- Risk of stranded inventory: high
- Time to first unit: 8-10 weeks

**3D-printing 1,000 units / month for 10 months:**

- COGS: $41,700
- Cash out, day 1: $4,170 (first month only)
- Inventory peak: ~1,500 units
- Risk of stranded inventory: low
- Time to first unit: 7-10 days

The 6% unit-cost penalty is dwarfed by:

- 88% lower peak working capital
- 85% lower inventory holding
- 92% faster time-to-first-unit
- Optionality to change the design

If you're a retail finance director and you've ever had to write off 4,000 units of last year's stock, you already know which column wins.

---

If you're considering 3D-printing for a retail product---NFC or otherwise---and want a real quote with the line items broken out, [send us the brief](/customise). We'll come back in 24 hours with a price tile, a lead time, and an honest call on whether 3D-printing is the right tool for your run.
