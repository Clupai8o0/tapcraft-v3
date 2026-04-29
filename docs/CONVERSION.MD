# Conversion

The site has **one funnel** with three entry shapes. This file is the spec.

---

## 1. The funnel

```
Acquisition (organic / paid / referral / direct)
       ↓
   Landing page
       ↓
   ┌──────────────┬──────────────┬──────────────┐
   │              │              │              │
Solutions     Showcase       Customiser
(vertical)   (portfolio)   (interactive)
   │              │              │
   └──────────────┴──────────────┴──────────────┘
                       ↓
              Form (contact / quote)
                       ↓
                   Brevo API
                       ↓
              hello@tapcraftstudio.com
                       ↓
              Manual reply within 24h
                       ↓
              Off-site fulfilment / quote / invoice
```

**Goal:** qualified lead in the inbox.
**Conversion target:** 3–7% of visitors → form submission.
**Lead-to-customer target:** 30–40%.
**Friction tolerance:** medium — we can ask for company name, project details, quantity, timeline.

---

## 2. CTA hierarchy

Each page has **one primary CTA** (filled, brand-primary) and **at most one secondary CTA** (outline or text link). No page should have three CTAs of equal weight competing for attention.

| Page | Primary CTA | Secondary CTA |
|---|---|---|
| Homepage hero | Get a quote | See our work |
| `/showcase` | (per-card: View / Customise) | — |
| `/showcase/[slug]` | Get a quote like this | Customise this design |
| `/solutions/events` | Request a sample kit | Book a 15-min call |
| `/solutions/real-estate` | Get a quote | See real-estate work |
| `/solutions/hospitality` | Order review cards | See pricing |
| `/customise` | Request quote | Save configuration |
| `/about` | Get in touch | Read our process |
| `/blog/[slug]` | (contextual to topic) | Subscribe |
| 404 / 500 | Back to home | Contact us |

### CTA rules

- **One primary CTA per viewport.** If two filled brand-primary buttons are visible at once, redesign.
- **Verb-first, outcome-second.** *"Get a quote in 24 hours"* beats *"Submit"*.
- **Sticky mobile CTA** on `/customise` and `/showcase/[slug]` — always visible, fades only when the user is in the form.
- **Don't stack** newsletter capture next to a quote CTA. Choose one job per section.

---

## 3. Forms

Every form follows the same minimisation principle: **fewest fields possible to do the job**. Optional fields clearly labelled optional.

| Form | Required | Optional | Routes to |
|---|---|---|---|
| Newsletter | Email | — | Brevo list |
| Contact | Name, Email, Message | Phone, Company | Brevo email → hello@ |
| Quote (customise) | Name, Email, Quantity | Phone, Company, Industry, Timeline, Notes | Brevo + config snapshot to hello@ |
| Quote (showcase / solutions) | Name, Email, Project description | Phone, Company, Industry, Quantity, Timeline | Brevo email → hello@ |
| Sample kit (B2B) | Name, Company email, Company, Address | Phone, Industry | Brevo + flagged for manual fulfilment |
| Demo / call (B2B) | Name, Email, Company | Role | Cal.com booking |

### Validation

- Client-side: React Hook Form + Zod, real-time
- Server-side: same Zod schema, never trust the client
- Email format validated, no MX lookup
- Phone validated as Australian format if AU-flagged

### Submit behaviour

- Disable submit button on click
- Loading state ("Sending…") within 100ms
- On success: replace the form with a confirmation message, **don't redirect**
- On error: keep form state, show inline error, allow retry
- Confirmation copy specifies what happens next: *"Thanks. We'll email you within 24 hours."*

### Double-submit protection

- Disable button + visual loading state
- Idempotency key on the API route handler (request hash + 60s window)

---

## 4. The customise page (special case)

Highest-intent surface and the most expensive to load. Needs its own conversion design.

### Mobile pattern

```
[Hero text + value prop]
[Poster image of product → tap to load 3D]
[Customise tabs — accordion on mobile, side panel on desktop]
[Sticky bottom: estimated price range + primary CTA]
```

The 3D canvas is **opt-in on mobile** — show a poster image first, load R3F when the user taps "View in 3D". Prevents 4MB of JS from blocking the page on a 4G connection.

### Save before commit

- "Save Configuration" button stores config to localStorage
- On return visit: "Continue from where you left off" banner
- Encourages return without requiring an account

### Quote form modal

Triggered by the primary CTA. Includes a **read-only summary of the configuration** so the user sees their selections embedded in the email they'll get back. Reduces "wait, did they get my specs?" follow-ups.

### Pre-loading from showcase

`/customise?template=festival-wristband-2024` reads the showcase MDX frontmatter and pre-fills the customiser. Makes "Customise this design" CTAs on showcase items meaningful.

### Price honesty

Show a range, always. Annotate it: *"Estimated $145–$185 — final price confirmed within 24 hours based on artwork complexity and quantity."* Hiding price kills trust; faking precision kills credibility when it changes.

---

## 5. Trust signals

Where they go matters more than how many you have.

### Above the fold (homepage)

- "Made in Melbourne" badge (subtle, near hero CTA)
- Star rating + review count once 10+ reviews exist

### In the journey

- **Showcase listing:** "Free Australia-wide shipping over $X" (still relevant for sample kits / project deliveries)
- **Showcase item:** Production time estimate, material spec, NFC chip type, quantity range
- **Customise:** Estimated price range, "Final price confirmed within 24 hours"
- **Solutions:** Specific stat (*"68% faster custom-order turnaround for events under 2,000 attendees"*) + named client logos (with permission) + mini case study

### Footer

- AU ABN
- Privacy / Terms / Refund links (mandatory, not just polite)
- Contact email + business address
- Australian Made badge if registered

---

## 6. Friction map

Highest-impact drop-off points, ranked.

### Highest impact

1. **Hero ambiguity** — if the homepage hero doesn't tell a B2B visitor what TapCraft does in 5 seconds, they leave. Test: cover the hero image; does the headline alone convey the offer?
2. **Showcase load time** — 3 seconds is the floor. Above 3s, conversion drops 30%+. Static generation makes this easy.
3. **3D viewer first paint** — blank or janky loading states read as broken. Skeleton + poster image, then upgrade.
4. **Quote form length** — every additional optional field drops conversion 2–5%.

### Medium impact

5. **Mobile nav clarity** — hamburger must be visible against any hero background.
6. **Pricing transparency** — visitors who can't see *any* price assume "expensive and gatekept". Show indicative ranges (`$75–$250`) on showcase items even when full price requires a quote.
7. **Showcase detail clarity** — material, NFC chip type, dimensions, production time, included services. Visible, not hidden behind a tab.
8. **Mobile sticky CTA** — without it, users scroll past the conversion button and never return.

### Lower impact (still worth)

9. Newsletter pop-up — only after 30s of dwell, never on first scroll, never on `/customise`
10. Live chat — defer until 200+ inbound conversations / month justify it
11. Cart abandonment — N/A (no cart)

---

## 7. A/B test backlog

Order by expected impact × ease.

- [ ] Homepage primary CTA: *"Get a quote"* vs *"See our work"* vs *"Book a call"*
- [ ] Hero copy: integrated-positioning-led vs vertical-led (events vs real-estate vs general)
- [ ] Showcase: filter sidebar always-open vs collapsed
- [ ] Customise: "Request quote" modal vs full-page form
- [ ] Solutions / events: ROI calculator inline vs gated email-of-results
- [ ] Newsletter trigger: time-based (30s) vs scroll-based (60% scroll) vs exit-intent
- [ ] Showcase card: hover-reveal "Customise" CTA vs always-visible

Use Vercel Edge Config + a simple feature flag system, or PostHog when traffic supports it. **Don't run more than two tests at once** until traffic exceeds 10K sessions / month.

---

## 8. Lead nurture

Quote-form leads aren't all ready on day one. Brevo automation handles the slow burn.

### Day 0 (immediate)

Auto-reply confirming receipt + expected response time + link to relevant case study.

### Day 1

Sam or Nikhil sends a personal reply with quote details. **Manual.** Don't automate this — the personal touch is the entire B2B value proposition.

### Day 7 (if no response)

Soft check-in from Brevo automation: *"Did you have any questions about the quote we sent?"* Plain text, sent from a real person's email.

### Day 21 (if still no response)

Final touch: link to a relevant blog post or case study. After this, drop into general newsletter list.

### Day 90+ (re-engagement)

Newsletter only. Quarterly portfolio update + featured project. Slow drum, low cadence.

---

## 9. Measurement

Track in GA4 + Brevo. Review monthly.

| Metric | Where | Target (month 6) |
|---|---|---|
| Visitor → showcase rate | GA4 | 35% |
| Visitor → quote-form view rate | GA4 | 12% |
| Quote-form view → submission rate | GA4 + Brevo | 25% |
| Quote → customer rate | Manual / CRM | 35% |
| Newsletter signup rate | Brevo | 1.5% of visitors |
| Solutions page → quote rate | GA4 | 8% |
| Customise page → quote rate | GA4 | 15% |
| Mobile vs desktop conversion | GA4 | Within 30% of each other |

**If mobile converts at half the rate of desktop, the mobile UX is broken.** Investigate. Don't accept it as "normal".

---

## 10. What we're not doing

For clarity, deliberate non-decisions:

- **No checkout, no cart, no purchasing on the site.** Those go through quote → manual.
- **No exit-intent pop-ups on first visit.** Annoying, low-trust signal.
- **No countdown timers** unless a real promotion is running.
- **No "X people are looking at this".** Fake urgency erodes trust.
- **No live chat at launch.** Add when inbound volume justifies the response load.
- **No accounts.** No reason for a visitor to log in.

Revisit any of these later with data. None of them are right for launch.