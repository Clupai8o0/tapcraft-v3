import Link from 'next/link';
import PageHero from '@/components/shared/PageHero';
import Reveal from '@/components/shared/Reveal';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'For real estate agents — TapCraft',
  description: 'Open-home tags that double buyer follow-up. NFC keychains and agent cards that route to a live property micro-site, with tap analytics back to your CRM.',
};

const STAGES = [
  { ph: '↳ Day 1–2', name: 'Brief & template', body: 'Pick a tag shape from our agent library, or upload your branding for a custom mould. We mock it up in 48h.', output: 'Output', v: 'Render + sample plan' },
  { ph: '↳ Day 3–5', name: 'Property micro-site', body: 'Floor plan, gallery, agent contact, one-tap booking. We host or you host. Same payload, every tag.', output: 'Setup', v: '~30 min / property' },
  { ph: '↳ Day 6–9', name: 'Print, encode, ship', body: 'NTAG215 chips, agent URL per tag, audit-logged. Ships from Brunswick to any Aus office in 2–3 days.', output: 'Throughput', v: '50–500 / week' },
  { ph: '↳ Ongoing', name: 'Tap analytics', body: 'Every tap reports to your dashboard — anonymous unless they book. Push hot leads straight to your CRM.', output: 'Stack', v: 'Vault RE · Domain · CRM' },
];

const CASES = [
  { meta: 'Boutique agency · 12 agents · South Yarra', title: 'Belle Property doubled open-home follow-up', body: 'Branded NFC keychains handed out at every open home. Tap loads a property micro-site with floor plan, agent contact, and a one-tap inspection booking. Followed up in seven days, not 30.', stats: [{ n: '+118%', l: 'follow-up rate' }, { n: '14d', l: 'rollout' }, { n: '6:1', l: 'ROI in Q1' }], ink: true, label: '[ Belle Property · S. Yarra ]' },
  { meta: 'Independent agent · Bayside · Melbourne', title: 'Tom Holland-Garrett: \'4 contracts in 3 months\'', body: 'NFC business cards with embedded vCard + portfolio link. Replaced his Vistaprint stack. Tracks first-tap to first-meeting, sees which referrals work.', stats: [{ n: '4', l: 'signed contracts' }, { n: '$2.4M', l: 'GCI tracked' }, { n: '90s', l: 'card → CRM' }], ink: false, label: '[ Tom HG · Bayside ]' },
];

const BENEFITS = [
  { n: '/01', title: 'One tag, every property', body: 'Same physical tag. Different URL per listing. Re-encode in 90 seconds from your phone — no reprinting.' },
  { n: '/02', title: 'Compliant by default', body: 'No app install required. Works on iPhone 11+ and any modern Android. EDM consent baked into the form.' },
  { n: '/03', title: 'CRM-ready', body: 'Webhooks into Vault RE, Box+Dice, Salesforce, HubSpot. Or just a CSV of leads from each property per week.' },
  { n: '/04', title: 'Branded, not stickered', body: 'Onyx PLA tags with your agency emboss. Looks like merch from a high-end developer, not a marketing handout.' },
];

export default function SolutionsRealEstatePage() {
  return (
    <>
      <PageHero
        eyebrow="For real estate agents"
        heading="Open-home tags"
        emphasis={<>that <em className="serif-em">double buyer follow-up.</em></>}
        lede="A branded NFC keychain in every buyer's hand. One tap loads the property, your contact, and a one-tap booking form. Analytics back to your CRM — without an app install."
        actions={
          <>
            <Link className="btn btn--primary btn--lg" href="/customise">Get an agent quote <ArrowRight className="h-4 w-4" /></Link>
            <Link className="btn btn--ghost btn--lg" href="/samples">See a sample tag</Link>
          </>
        }
      />

      <section className="section">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">The 9-day rollout</span>
            <h2 className="h1 balance" style={{ marginTop: 14, maxWidth: '22ch' }}>
              From brief to first open home <em className="serif-em">in under two weeks.</em>
            </h2>
          </Reveal>
          <div className="stage-grid" style={{ marginTop: 40 }}>
            {STAGES.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.06}>
                <div className="stage">
                  <div className="ph">{s.ph}</div>
                  <h3>{s.name}</h3>
                  <p>{s.body}</p>
                  <div className="week"><span>{s.output}</span><span className="v">{s.v}</span></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">Why agents pick us</span>
            <h2 className="h1" style={{ marginTop: '14px', maxWidth: '24ch' }}>Four reasons we beat <em className="serif-em">a printed business card.</em></h2>
          </Reveal>
          <div className="why" style={{ marginTop: 40 }}>
            {BENEFITS.map((w, i) => (
              <Reveal key={w.n} delay={i * 0.06}>
                <div className="why-card"><div className="num">{w.n}</div><h4>{w.title}</h4><p>{w.body}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">Cases</span>
            <h2 className="h1" style={{ marginTop: '14px', maxWidth: '24ch' }}>Agents who <em className="serif-em">backed up the numbers.</em></h2>
          </Reveal>
          <div className="case-grid" style={{ marginTop: 40 }}>
            {CASES.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <div className="case">
                  <div className={`img placeholder${c.ink ? ' placeholder--ink' : ''}`}><span className="label">{c.label}</span></div>
                  <div className="body">
                    <div className="meta">{c.meta}</div>
                    <h3>{c.title}</h3>
                    <p style={{ color: 'var(--ink-2)', margin: '0 0 16px' }}>{c.body}</p>
                    <div className="stats">
                      {c.stats.map((s) => (
                        <div key={s.l}><div className="n">{s.n}</div><div className="l">{s.l}</div></div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ textAlign: 'center' }}>
        <div className="wrap">
          <Reveal>
            <h2 className="display" style={{ maxWidth: '20ch', margin: '0 auto' }}>
              <em>Your next open home,</em> tracked.
            </h2>
            <p className="lede" style={{ margin: '24px auto 36px' }}>Quote in 24h. First batch shipped within 9 days. Or just order one tag and have us walk you through the analytics.</p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link className="btn btn--primary btn--lg" href="/customise">Get an agent quote <ArrowRight className="h-4 w-4" /></Link>
              <Link className="btn btn--ghost btn--lg" href="/samples">Order a sample tag</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
