---
title: "Why your event lanyard should do more than hold a name"
description: "A name badge is the cheapest piece of plastic at your event---and the most important one. Why most event lanyards leave money on the table, and what we'd do instead."
publishedAt: "2026-04-22"
author: "Samridh Limbu"
tags: ["Events", "NFC", "Lanyards", "Strategy"]
---

A lanyard does one job at most events: it stops the badge from falling off.

That's it.

Five thousand people walk through your doors. Each one is wearing twenty grams of polyester and a printed name they look at maybe twice. You spent six weeks negotiating the sponsorship deal. You spent four months selling the tickets. And the only thing each attendee carries around with them all day is a piece of stationery.

That's not a budget problem. That's a missed opportunity.

## What an NFC lanyard actually does

Stick a chip in it---about the size of a 5c coin, embedded behind the printed insert---and the lanyard stops being stationery. It becomes the only object every attendee will tap, hover, scan, or share with another attendee, multiple times a day, for the entire length of the event.

That's the most concentrated piece of attention you'll get during the whole campaign. And most events use it for the printed name.

Here's what we've used the same chip for, across the last 40 events we've shipped from Brunswick:

- **Schedule on the badge.** Tap loads the day's agenda, your custom track, your next session.
- **Sponsor menus.** Tap a partner booth's table-card, get their pitch, their offer, their CTA. Attribution back to that sponsor by tap-count.
- **Networking exchange.** Tap two badges together to swap LinkedIn. No app install required---works on stock iOS and Android.
- **Cashless redemption.** Drink tickets, swag drops, lunch claims. One tap, one log, no token printing.
- **Surveys.** Mid-day pulse check. End-of-day NPS. Send it through the same chip.
- **Re-marketing.** The tap data becomes a list. Push to your CRM the morning after.

Same chip. Six different use cases. Some events run all six concurrently---we set up smart routing so the *same lanyard* serves different content based on time of day or location in the venue.

## What it costs

A printed lanyard costs about a dollar. An NFC-enabled one costs about $1.20.

The chip is cheap. The complexity has always been in the encoding---programming 3,000 lanyards by hand the night before doors-open is genuinely awful. Most event teams who tried NFC in the 2017-2020 era got burned by exactly this. Anyone who remembers SXSW or Vivid trying to retrofit RFID will know the war stories.

We solved that side specifically. We built our own batch encoder---the [TapCraft Encoder](/platform)---because *NFC Tools is great for one tag at a time and terrible at scale*. Our encoder programs 240 tags in about 11 minutes, with a per-tag audit log that reconciles back to your access-control system or attendee CSV.

So the unit cost is 20 cents. The operational cost---which is what historically killed NFC at events---is now an order of magnitude lower.

## Where we'd actually start

If you're running a conference and you've read this far, here's what we'd do in your first event:

1. **Encode one URL per attendee.** Don't try to do everything. Pick one thing. The simplest is: tap loads their personal schedule on the event app.
2. **Print the badge with a tap target.** A small NFC symbol or "TAP HERE" prompt in the corner. Adoption goes from ~30% to ~80% with a visible affordance.
3. **Measure.** Tap count, time of day, location. You'll learn more about your attendees in one day of taps than two months of pre-event surveys.

That's it. Don't try to launch redemption + sponsorship + networking + survey + CRM-sync in one event. You'll burn your team out and the data will be useless because every variable changed at once.

## The lanyard is the most important piece of merch at your event

It's the only physical object every attendee carries. It's worn around the neck where they look down at it. It's the thing they show on the way in and out, the thing they swap LinkedIn over, the thing they keep on their desk for three weeks after the event as a souvenir.

It is the highest-attention real estate you'll buy all year.

Print a name on it. Put a chip in it. Make it earn its 20 grams.

If you're running a conference in the next 12 weeks and want to talk about whether NFC makes sense for it---[email Sam](mailto:hello@tapcraftstudio.com). We've shipped registration kits for SXSW Sydney, Pause Fest, and 40+ corporate offsites. We'll tell you straight if it's not the right tool for your event.
