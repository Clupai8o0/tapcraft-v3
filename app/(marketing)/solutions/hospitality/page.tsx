import Link from 'next/link';
import PageHero from '@/components/shared/PageHero';
import Reveal from '@/components/shared/Reveal';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'For hospitality & venues — TapCraft',
  description: 'NFC review coins, wine tags, cashless lanyards. Made for Melbourne cafés, bars, restaurants, and multi-venue groups. Lift your Google rating, run redemptions, sell more wine.',
};

const STAGES = [
  { ph: '↳ Day 1', name: 'Brief & smart routing', body: 'Pick a format — coin, wine tag, lanyard, table card. We set up first-time vs returning tap rules.', output: 'Output', v: 'Tap flow + render' },
  { ph: '↳ Day 2–4', name: 'Print & encode', body: 'PHA or recycled PLA depending on your sustainability brief. NTAG213 for short URLs, NTAG215 for vCards.', output: 'Throughput', v: '~800 / day' },
  { ph: '↳ Day 5', name: 'Pilot in venue', body: 'We bring 30 units to your venue and watch a Friday service. Adjust the placement until tap success is >95%.', output: 'Tap success', v: '>95% target' },
  { ph: '↳ Ongoing', name: 'Reports', body: 'Weekly per-venue tap report. Reviews, tips, redemptions, churn signals — pushed to your group GM.', output: 'Channels', v: 'Email · Slack · CSV' },
];

const CASES = [
  { meta: 'Specialty café · 6 venues · Melbourne', title: 'Industry Beans lifted Google rating by 0.4 stars', body: 'A weighty 3D-printed coin on every receipt tray. Tap routes — first-time tappers get a review prompt, repeats get a tip page. Surveys went into a Loom for the barista team.', stats: [{ n: '+0.4★', l: 'Google rating' }, { n: '60d', l: 'time to lift' }, { n: '11×', l: 'review volume' }], ink: true, label: '[ Industry Beans ]' },
  { meta: 'Hospitality group · 14 venues · Cup Week', title: 'Cup Week ran 6,400 free-drink redemptions in 4 days', body: 'NFC-encoded lanyards for VIP attendees across 14 venues. Each tap logged the drink, the venue, the time — drove a survey, pushed re-marketing offers seven days later.', stats: [{ n: '6,400', l: 'drinks redeemed' }, { n: '14', l: 'venues live' }, { n: '0', l: 'tag failures' }], ink: false, label: '[ Cup Week 2025 ]' },
];

const BENEFITS = [
  { n: '/01', title: 'Smart routing per tap', body: 'First-time tappers get a Google review prompt. Repeats see a tip page. Regulars get a loyalty offer. One tag, three outcomes.' },
  { n: '/02', title: 'Weight, finish, hand-feel', body: 'Onyx PLA discs feel like a casino chip. Wine tags hang on the bottle neck like the vineyard meant them to. Detail matters.' },
  { n: '/03', title: 'Compostable if you need it', body: 'PHA filament is industrially compostable in 90 days. For pop-ups, festivals, and any venue with a sustainability mandate.' },
  { n: '/04', title: 'Made in Naarm', body: 'Brunswick studio. Same-week turnaround on reorders. Hand-delivered for venues inside the 3000 postcode if you ask nicely.' },
];

export default function SolutionsHospitalityPage() {
  return (
    <>
      <PageHero
        eyebrow="For hospitality & venues"
        heading="Tap to review."
        emphasis={<>Tap to tip. <em className="serif-em">Tap to redeem.</em></>}
        lede="NFC review coins, wine tags, cashless lanyards — printed in Brunswick for Melbourne cafés, bars, restaurants, and multi-venue groups. Lift your rating, run redemptions, sell more wine."
        actions={
          <>
            <Link className="btn btn--primary btn--lg" href="/customise">Get a hospitality quote <ArrowRight className="h-4 w-4" /></Link>
            <Link className="btn btn--ghost btn--lg" href="/samples">Order a sample coin</Link>
          </>
        }
      />

      <section className="section">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">The 5-day rollout</span>
            <h2 className="h1 balance" style={{ marginTop: 14, maxWidth: '22ch' }}>
              Sample to service <em className="serif-em">in under a week.</em>
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
            <span className="eyebrow">Why venues pick us</span>
            <h2 className="h1" style={{ marginTop: '14px', maxWidth: '24ch' }}>Four reasons we beat <em className="serif-em">a QR table-talker.</em></h2>
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
            <h2 className="h1" style={{ marginTop: '14px', maxWidth: '24ch' }}>Two venues with <em className="serif-em">numbers to show.</em></h2>
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
              <em>Friday service</em> in five days?
            </h2>
            <p className="lede" style={{ margin: '24px auto 36px' }}>Tell us the venue and we&apos;ll quote a coin run in 24 hours. Hand-delivered to Naarm CBD venues if you ask.</p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link className="btn btn--primary btn--lg" href="/customise">Get a hospitality quote <ArrowRight className="h-4 w-4" /></Link>
              <Link className="btn btn--ghost btn--lg" href="/samples">Order a sample coin</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
