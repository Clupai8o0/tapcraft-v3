# Deployment

`tapcraft.shop` deploys to Vercel from `main` branch of the GitHub repo. This file documents the configuration end-to-end.

---

## 1. Hosting topology

```
Customer browser
      │
      ▼
   tapcraft.shop  ─────────────────────────┐
      │                                    │
      ▼                                    ▼
   Vercel (Sydney edge)               (3D models from
      │                                /public/models,
      │                                bundled in deploy)
      ├─── /api/newsletter → Brevo
      ├─── /api/contact   → Brevo → hello@
      └─── /api/quote     → Brevo → hello@
                                       ↓
                                hello@tapcraftstudio.com
                                       ↓
                              Manual reply / quote
                                       ↓
                              Off-site fulfilment
```

No commerce backend, no payment processor, no external CMS. Static pages plus three form endpoints.

---

## 2. Vercel project setup

### Project config

- **Framework preset:** Next.js
- **Node.js version:** 20.x (Vercel default)
- **Install command:** `npm ci`
- **Build command:** `next build`
- **Output directory:** `.next` (default)
- **Root directory:** `/` (repo root)

### Environments

| Env | Branch | URL |
|---|---|---|
| Production | `main` | `tapcraft.shop` + `www.tapcraft.shop` |
| Preview | every PR + non-`main` push | `tapcraft-temp-{branch}-{user}.vercel.app` |
| Development | local only | `localhost:3000` |

PR previews are public by default. Enable Vercel Password Protection on previews if a confidential B2B campaign is being staged.

### Edge regions

Vercel's AU edge is **Sydney (`syd1`)**. Set in `vercel.json`:

```json
{
  "regions": ["syd1"]
}
```

For server functions (route handlers), this minimises latency for the AU customer base.

---

## 3. Environment variables

All env vars set in **Vercel Dashboard → Project → Settings → Environment Variables**. Mirror in `.env.local` for development.

### Required

```bash
# --- Brevo (separate keys per function) ---
BREVO_API_NEWSLETTER_KEY=xkeysib-xxxxxxxxxxxx
BREVO_NEWSLETTER_LIST_ID=12

BREVO_API_CONTACT_KEY=xkeysib-yyyyyyyyyyyy

BREVO_API_QUOTE_KEY=xkeysib-zzzzzzzzzzzz       # can reuse contact key if budget tight
CONTACT_EMAIL=hello@tapcraftstudio.com
```

### Optional (recommended)

```bash
# --- Analytics ---
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_VERCEL_ANALYTICS=true

# --- Error monitoring ---
SENTRY_DSN=
SENTRY_AUTH_TOKEN=
```

### Scoping

| Variable | Production | Preview | Development |
|---|---|---|---|
| `BREVO_API_*` | ✅ prod keys | ⚠️ separate sandbox keys | ⚠️ sandbox keys |
| `CONTACT_EMAIL` | `hello@tapcraftstudio.com` | `hello+preview@…` | `hello+dev@…` |
| `NEXT_PUBLIC_GA_ID` | ✅ | ❌ disabled | ❌ disabled |
| `SENTRY_DSN` | ✅ | ✅ | ❌ |

**Never** point preview deployments at production Brevo lists. A test newsletter signup from a PR shouldn't trigger a real welcome email.

---

## 4. DNS (Hostinger)

The domain `tapcraft.shop` is registered and managed via Hostinger.

### Records

| Type | Name | Value | TTL |
|---|---|---|---|
| A | `@` | `76.76.21.21` (Vercel) | 3600 |
| CNAME | `www` | `cname.vercel-dns.com` | 3600 |
| TXT | `@` | (Vercel ownership verification token) | 3600 |
| MX | `@` | (mail provider — Google Workspace / etc.) | 3600 |

> **Do NOT add any record pointing to Shopify or any other commerce backend.** This site doesn't have one.

### Verification

```bash
dig tapcraft.shop +short
dig www.tapcraft.shop +short
# Both should resolve to Vercel IPs
```

Vercel auto-provisions SSL via Let's Encrypt once DNS validates. Allow 5–30 min for propagation.

---

## 5. Deployment workflow

### Day-to-day

1. Branch off `main`: `git checkout -b feat/showcase-filter`
2. Commit, push
3. Vercel auto-creates a preview deployment
4. Open PR → Vercel posts preview URL as a comment
5. Review on preview URL (mobile + desktop)
6. Run `npm run lint && npm run type-check` — block merge on failure
7. Merge to `main` → production deploys automatically
8. Verify on `tapcraft.shop` within 2 min

### Hotfixes

For production-down issues:

1. Branch from `main`, fix, push
2. **Skip preview review for 1-line fixes** (typo, broken env)
3. Merge to `main`
4. Watch Vercel logs in real-time
5. Update `CHANGELOG.md` after the dust settles

### Rollback

```bash
# Vercel Dashboard → Deployments → [previous good build] → "Promote to Production"
```

Or via CLI:

```bash
vercel rollback
```

Rollbacks are instant. Don't troubleshoot a broken prod for more than 5 minutes — roll back, then debug on a branch.

---

## 6. Monitoring

### What to watch

| Signal | Where | Threshold |
|---|---|---|
| 5xx error rate | Vercel logs / Sentry | > 1% over 5 min → alert |
| LCP, CLS, INP | Vercel Analytics | LCP > 2.5s for 25% of sessions |
| Build failures | Vercel deployment notifications | Any |
| Brevo API errors | Sentry / Vercel logs | > 5% of requests in 1h |
| Form submission errors | Sentry | Any |
| MDX validation failures (build) | Vercel build logs | Any |

### Tools (recommended)

- **Vercel Analytics** — Web Vitals + traffic, free tier sufficient
- **Sentry** — error monitoring; free tier covers a small site
- **Better Stack / Uptimerobot** — uptime checks every 5 min on `/` and `/showcase`
- **Google Search Console** — index coverage, mobile usability, Core Web Vitals

---

## 7. Pre-deploy checklist

Before any deploy that touches more than a single file:

- [ ] `npm run lint` passes
- [ ] `npm run type-check` passes
- [ ] `npm run build` succeeds locally (catches MDX validation errors)
- [ ] Tested on mobile viewport (375px, 414px)
- [ ] Tested in Chrome, Safari, Firefox
- [ ] No new console errors
- [ ] Lighthouse score ≥ 85 on touched pages (90 ideal)
- [ ] Updated `CHANGELOG.md`
- [ ] If env vars changed: documented in this file + added to Vercel Dashboard

For changes touching `/customise` or the 3D viewer:

- [ ] Tested on a real iPhone (not just DevTools mobile mode)
- [ ] Tested with throttled "Slow 4G" network
- [ ] GLB loads and rotates smoothly
- [ ] Quote form submits and lands in `hello@` inbox

---

## 8. First-time deployment checklist

For a fresh environment from scratch:

- [ ] GitHub repo connected to Vercel project
- [ ] All env vars added in Vercel Dashboard (Production scope)
- [ ] Brevo lists confirmed: newsletter list ID matches env var
- [ ] DNS records correct (verify with `dig`)
- [ ] SSL provisioned (https loads without warning)
- [ ] `tapcraft.shop` and `www.tapcraft.shop` both work
- [ ] Test newsletter signup → confirms in Brevo dashboard
- [ ] Test contact form → email arrives at `hello@`
- [ ] Test quote form → email arrives at `hello@` with config snapshot
- [ ] Showcase pages load (MDX → static HTML)
- [ ] Customise page loads (R3F lazy-loads on opt-in)
- [ ] Google Search Console verified
- [ ] Sitemap submitted to Search Console
- [ ] GA4 receiving traffic
- [ ] Sentry receiving events (deliberately throw a test error)

---

## 9. Useful one-liners

```bash
# Test Brevo newsletter
curl -X POST https://api.brevo.com/v3/contacts \
  -H "api-key: $BREVO_API_NEWSLETTER_KEY" \
  -H "Content-Type: application/json" \
  -d "{\"email\":\"test@example.com\",\"listIds\":[$BREVO_NEWSLETTER_LIST_ID]}"

# Test Brevo transactional (contact / quote)
curl -X POST https://api.brevo.com/v3/smtp/email \
  -H "api-key: $BREVO_API_CONTACT_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "sender":{"email":"hello@tapcraftstudio.com","name":"TapCraft"},
    "to":[{"email":"hello@tapcraftstudio.com"}],
    "subject":"Test",
    "htmlContent":"<p>Test</p>"
  }'

# Force redeploy without code change
vercel --prod --force

# View latest production logs
vercel logs --prod --follow
```

---

## 10. Disaster recovery

If `tapcraft.shop` is down:

1. **Check Vercel status** — https://www.vercel-status.com/
2. **Check DNS** — `dig tapcraft.shop` should return Vercel IPs
3. **Check latest deployment** — Vercel Dashboard for build failure
4. **Roll back** if recent deploy is suspect

Since the site has no commerce backend, downtime is purely a marketing surface issue. Quote requests can still arrive via direct email if the form is broken — the inbox is the source of truth.

If we ever lose the Vercel project:

- Repo is on GitHub — `git clone`, deploy fresh Vercel project, restore env vars from password manager
- Brevo lists persist independently
- MDX content lives in repo, no data loss
- Time to recovery: <30 min

---

## 11. Cost ceiling

Awareness, not a budget.

| Service | Plan | Approx /mo (AUD) |
|---|---|---|
| Vercel | Pro | ~$30 (free tier covers low traffic) |
| Hostinger | Domain only | ~$3 |
| Brevo | Free → Starter | $0 → ~$30 (when over 9K emails/mo) |
| GA4 | Free | $0 |
| Sentry | Free → Team | $0 → ~$40 |
| Total | | **~$30–$100 / mo** |

Cheap. Hosting is not a constraint.