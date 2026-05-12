---
title: "How a Melbourne hospitality group ran 6,400 redemptions with one tap"
description: "Cup Week Hospitality printed 600 NFC lanyards for VIPs across 14 venues. The result: 6,400 free-drink redemptions in 4 days, zero double-claims, and a CRM list worth chasing."
publishedAt: "2026-04-08"
author: "TapCraft Studio"
tags: ["Hospitality", "Events", "Case study", "NFC"]
---

In early November 2025 we got a call from the operations lead of a Melbourne hospitality group running their VIP programme for the Spring Racing Carnival.

The pitch was specific: 600 VIPs, 14 partner venues across the CBD and the Cup precinct, four days of trading. Each VIP gets a *physical thing* that entitles them to drink redemptions, fast-track entry, and an end-of-week survey reward.

Their previous system was paper tickets. The problem with paper tickets is they get lost, photocopied, and given to mates. Three VIPs from 2024 had each redeemed more than twenty drinks. Six of them had given their pass to siblings.

They needed:

1. **Provable identity.** One person, one pass, one drink per slot.
2. **Real-time logging.** So the bar staff knew if a VIP had already claimed this round.
3. **Multi-venue.** All 14 venues see the same state, in seconds.
4. **No app install.** Bar staff aren't going to download tooling. VIPs even less.

This was an NFC problem. We don't usually take 5-week timelines on a 600-unit run with custom payload routing, but the brief was tight enough that we said yes.

## What we made

We printed **600 NFC lanyards** in PHA filament (the compostable one---they wanted the sustainability story for press). Each lanyard had an NTAG215 chip embedded behind the printed insert, encoded with a unique URL of the form `tc.st/vip-xxxx`.

Each URL pointed to a smart router we hosted. The router knew:

- Which VIP the tag belonged to (by ID baked into the URL).
- Which venue was scanning it (by geo-IP and a venue-specific suffix we encoded for staff devices).
- Whether the VIP had already claimed *this round*.

If they hadn't, the page rendered a redemption button. Tap, log, done. If they had, it showed a polite "next round opens at 14:00" message with a timer.

Bar staff had a different view---they tapped the same lanyard but the router served them a different page (because they'd authenticated their device at the start of the shift). Staff saw the VIP's history, the venue's daily total, and a one-button "force-allow" override for genuine edge cases.

## How we encoded 600 of them

NFC Tools is fine for 1-10 tags. Above that it's a slog---you have to write each URL by hand, verify the read manually, and you have *no* audit log if anything goes wrong.

We programmed the run on the [TapCraft Encoder](/platform), our in-house tool. The Encoder lets us:

- Load a CSV of payloads---in this case, 600 unique URLs.
- Tap each tag to a USB reader on the desk---auto-detects, writes, verifies, logs.
- Output an audit CSV at the end with the chip's UID and the URL it received, so we can reconcile if any tag misbehaves later.

The 600-tag run took our floor lead Priya about 50 minutes including QC. The audit log meant when one VIP later reported their tag wasn't working, we could see in 30 seconds that the chip ID was different from the one we'd shipped---they'd swapped lanyards with a friend.

## The numbers

Four days of trading. Here's what the dashboard looked like at close-of-play on Sunday:

- **6,407 drink redemptions** logged across the 14 venues.
- **0 double-claims** that the router didn't catch. (Three attempts were caught and shown the "already redeemed" page---all three were VIPs trying to test the system, not bad actors.)
- **597 unique VIPs participated** (3 lanyards were never tapped after collection---likely lost or forgotten).
- **42 second median bar-staff workflow** from first-tap to drink-poured.
- **End-of-week NPS: 71** (up from 38 the previous year with the paper system).

The CRM list at the end was 597 verified VIPs with their tap history per venue. That list converted to 92 paid memberships in the following six weeks. Each membership was worth $1,200/year.

The math: 600 lanyards cost the group about $1,200. The 92 memberships represented $110,400 in committed annual revenue.

We don't usually quote outcome metrics for our work because we can't take credit for what happens on the other side of the redemption page. But this one was an absolute tap-to-revenue chain and we got permission to write it up.

## What we'd do differently

Three things we'd change for the 2026 run:

1. **Earlier briefing.** Five weeks was tight. The smart-router took us 9 days to build, and we shipped it 2 weeks before doors-open. Ideally that's 6 weeks of lead time, not 2.
2. **Pre-event tap test.** We sent the lanyards a week before the event but didn't ask every VIP to tap-test them. Three turned up on day one with tags they couldn't read on their phone (an older iPhone SE, a Huawei without Google services, and one that had been damaged in the mail). A pre-event "tap your lanyard now to confirm" SMS would have caught these.
3. **Per-venue branding.** We used one lanyard design for all 14 venues. Some of the higher-end venues wanted their own brand on the lanyard for the VIPs visiting *their* property specifically. Easy to do with per-batch encoding next time.

## If you're running a hospitality programme

A few honest takeaways for anyone considering this for a venue group, restaurant chain, or festival:

- **NFC stops working when the operational layer breaks.** The chip itself is reliable. The router, the database, the staff onboarding---those are where things fail. Budget for the operational software, not just the tags.
- **6,400 redemptions in 4 days is doable. 600 redemptions in 4 hours is harder.** Concentrated single-venue events stress the bar staff more than the tech. Plan staff training accordingly.
- **The compostable lanyard story is real.** PHA filament does compost industrially in 90 days. We got verified disposal certificates back from the group's waste partner. Press picked it up.

If you're running a hospitality programme for the 2026 spring season and want to talk---[email us](mailto:hello@tapcraftstudio.com). We're already booked for two Spring Carnival programmes and a Sydney Cup syndicate, so book early if it matters to you.
