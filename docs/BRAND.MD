# Brand

Two registers: **TapCraft's brand voice** (website copy, marketing) and **Sam's writing voice** (LinkedIn, founder content, sales outreach). Don't confuse them.

---

## 1. Brand identity

### Name & tagline

- **TapCraft Studio** (full)
- **TapCraft** (short, in-product)
- **Tagline:** *Smart Products. Intelligently Connected.*

### Positioning

> Melbourne's only integrated 3D-printing + NFC studio.

That's the pitch. Not "we do custom merchandise". Not "premium business cards". The wedge is **integrated** — most providers do one or the other, force the customer to source the other side, then assemble. TapCraft is end-to-end.

### Brand pillars

1. **Innovation** — 3D printing × NFC × eventually robotics
2. **Craftsmanship** — precision, durability, finish quality
3. **Connection** — physical objects bridging to digital experiences
4. **Sustainability** — on-demand production, no waste, AU-made

---

## 2. Visual identity

### Colour palette

Derived from the wordmark logo: cold black surface, cyan-to-blue gradient ink. No warm browns, no purple.

| Token | Value | Usage |
|---|---|---|
| `--bg` | `#0A0A0C` | Page background (cold black) |
| `--bg-2` | `#111114` | Elevated surface |
| `--bg-3` | `#18181D` | Higher elevation |
| `--paper` | `#141418` | Card surface |
| `--ink` | `#F5F5F7` | Primary text (cold white) |
| `--ink-2` | `#B8B8C0` | Secondary text |
| `--muted` | `#75757F` | Tertiary text |
| `--muted-2` | `#3D3D45` | Hairline / disabled |
| `--accent` | `oklch(0.66 0.20 250)` | Vivid blue from "Craft" — CTAs, highlights |
| `--accent-ink` | `oklch(0.85 0.13 235)` | Light cyan — italic display, soft emphasis |
| `--accent-soft` | `oklch(0.22 0.08 250)` | Deep blue tint — glows, badge backgrounds |

Defined under `@theme` in `app/globals.css`. Never hardcode hex in components — reference tokens.

### Eyebrow / chip / ticker rule

**No decorative blue dot.** Eyebrows, chips, and the trust-bar ticker are text-only. The `.dot` span is hidden via CSS (`display: none`) so existing markup keeps working, but new components shouldn't add it. Status indicators with inline-styled coloured dots (positive/warn) are fine — they're semantic, not decorative.

### Typography

- **Primary font:** Montserrat
- **Weights used:** 400, 500, 600, 700

| Element | Desktop | Mobile |
|---|---|---|
| H1 | 64px | 36px |
| H2 | 48px | 28px |
| H3 | 36px | 24px |
| Body | 16px | 14px |

- Headlines: bold or demi-bold
- Body: regular
- Emphasis: medium or demi-bold
- CTAs: demi-bold or bold

### Logo

Custom script "TapCraft" + "STUDIO" subtext. Black "Tap" + blue-gradient "Craft" (cyan ~`#7DD3FC` → vivid blue ~`#2680FF`). Inspired by NFC signal waves and 3D-print layer lines.

Files live in `public/logo/`:
- `tapcraft-icon.png` — TC monogram, rounded square, for favicons/avatars/compact spots
- `tapcraft-wordmark-dark.png` — wordmark for dark backgrounds (used in Nav)
- `tapcraft-wordmark-light.png` — wordmark for light backgrounds

Rules:
- Minimum size: 50px digital, 18mm print
- Clear space: height of the "T" in TapCraft, all sides
- Never recolour, stretch, or add a drop-shadow

---

## 3. Voice — TapCraft (the brand)

When the website, solutions pages, or contact responses speak, they speak like this.

### Personality

- **Confident** — claims capability without hedging
- **Inspirational** — invites possibility without overpromising
- **Approachable** — explains technology without jargon
- **Knowledgeable** — backs claims with specifics

### Writing rules

- Active voice. *"We program every chip"* not *"Chips are programmed"*.
- Concrete over abstract. *"NTAG213, 144 bytes, locked at production"* not *"industry-standard chip"*.
- Show, don't tell. *"Tap your phone to share contact details — no app needed"* not *"seamless connectivity"*.
- Australian English everywhere. `colour`, `recognise`, `prioritise`, `organisation`. Never American spelling.

### Example copy

**Hero (B2B):**
> Smart products, made in Melbourne.
> Custom 3D-printed designs with NFC built in. For events, real estate, and retail teams that need their physical to do digital work.
> [Get a quote] [See our work]

**Showcase item description:**
> Smart Business Card — Minimalist Black
> Premium 3D-printed card with embedded NFC. Tap to share your contact details. No app, no QR code, no friction. Designed and made in Melbourne.

**Solutions / events page hero:**
> Your event ops team is hand-encoding 4,000 wristbands at 2am. There's a better way.
> Pre-programmed NFC bands, delivered ready to wear. Custom shape, custom artwork, batch-encoded with your event URL. Pickup or delivered Melbourne-wide.

---

## 4. Voice — Sam (founder, social, LinkedIn)

This is **not** the brand voice. This is Sam's personal voice for LinkedIn posts, founder content, customer emails, sales outreach. Distinct, less polished, more raw. See `Voice_Style_Guide_v2_Sam.docx` in project files for the full version.

### Voice formula

**Authentic vulnerability + strategic thinking + casual delivery**

Talks about serious topics — burnout, immigration, family — without switching into a formal register. Gravity comes from content, not tone.

### Hard rules

- **Em dashes have NO spaces.** `word---word`, never `word — word` or `word -- word`. Most distinctive formatting signature. **Non-negotiable.**
- Australian English: `prioritising`, `recognise`, `colour`, `organisation`.
- Short paragraphs (1–3 sentences max in casual writing).
- White space is intentional — break for emphasis.

### Sentence patterns

- **Punchy openers under 12 words:** *"I couldn't get out of bed this weekend."*
- **Fragment-heavy rhythm for emphasis:** *"And honestly? That's never worked for me."*
- **Stacked short sentences:** *"You accept it. You accept burnout. You accept the trial and error."*
- **Conversational connectors:** "And honestly?", "But here's the thing", "Like", "I mean" — voice, not filler.

### Signature moves

| Move | Example |
|---|---|
| Honest admission | *"I'm just posting whatever comes to mind. But that might just be it."* |
| Rhetorical pivot | *"Now forget the glorification...and look at it logically."* |
| Direct address | *"When was the last time you genuinely rested---without guilt?"* |
| Authority qualifier | *"I may not have the rights to say it but from what I've experienced..."* |

### Words to use

*Honestly · If I'm being fully honest · That's the truth · Like · At the end of the day · I may not have the rights to say it but...*

Real names, real places, real numbers. Never *"a mentor once told me"* — name them.

### Words to avoid

*Let's unpack this · I'm passionate about · It's been a journey · Thoughts? · I'm humbled · Leverage synergies · Rise and grind · I hope this email finds you well*

### LinkedIn post structure

1. **Hook** (1–2 lines) — short, concrete, slightly surprising
2. **Tension** (3–5 lines) — challenge expected response
3. **Story / evidence** (5–10 lines) — personal, specific, named
4. **Insight** (2–4 lines) — distilled truth
5. **Anchor** (1–3 lines) — emotional grounding (family, gratitude)
6. **CTA** (1–2 lines) — direct, specific question

### The Sam test

Before publishing any founder-voice content:

- Does it sound like talking? (read it aloud)
- Is vulnerability framed as insight, not therapy?
- Are real names / places / events named?
- Does humour break tension once?
- Does it end with a specific action or question?
- Em dashes closed (no spaces)?
- Australian English?

If two or more fail, rewrite.

---

## 5. When to use which voice

| Surface | Voice |
|---|---|
| Website pages, showcase copy, solutions pages | TapCraft brand voice |
| Quote response emails, contact replies | TapCraft brand voice (warm, brief) |
| LinkedIn personal account, founder posts | Sam's voice |
| Sales outreach (cold) | Sam's voice (light), TapCraft framing |
| Customer support replies | TapCraft brand voice + warmth |
| Internal docs (this file, Slack, GitHub) | Doesn't matter; be clear |

If a piece is by-lined Sam, use Sam's voice — readers came for the person, not the brand.