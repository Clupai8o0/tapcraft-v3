import Link from 'next/link';
import PageHero from '@/components/shared/PageHero';
import Reveal from '@/components/shared/Reveal';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'For agencies & studios — TapCraft',
  description: 'NFC leave-behinds, branded portfolio tokens, client gifts. Made in Brunswick for Melbourne\'s marketing, creative, and branding studios. Win more pitches. Charge a margin.',
};

const STAGES = [
  { ph: '↳ Day 1', name: 'Brief & brand match', body: 'Submit your Pantone or hex. We match filament to brand guidelines and lock in a format — coin, card, keychain, or bespoke shape.', output: 'Output', v: 'Render + tap flow' },
  { ph: '↳ Day 2–4', name: 'Print & encode', body: 'NTAG213 for portfolio URLs, NTAG215 for vCards. White-label packaging ready for your client bags. No TapCraft branding unless you want it.', output: 'Throughput', v: '~800 / day' },
  { ph: '↳ Day 5', name: 'Agency delivery', body: 'Delivered to your studio. QA report included. We flag any tap failures before they hit your client\'s hands.', output: 'Pass rate', v: '>99% on delivery' },
  { ph: '↳ Ongoing', name: 'Reorder & iterate', body: 'Same-week reorders for new campaigns. Version-controlled tap flows — swap the destination URL without touching the tag.', output: 'Lead time', v: '3–5 days' },
];

const CASES = [
  { meta: 'Branding studio · 12 clients · Melbourne CBD', title: 'Studio Meso turned leave-behinds into a billable line item', body: 'Onyx PLA tokens — client-matched filament, encoded with a campaign portfolio URL. Charged a 40% margin on a standing order of 80 units per quarter. Tap tracking let them show clients proof-of-engagement in the credentials deck.', stats: [{ n: '40%', l: 'agency margin' }, { n: '80', l: 'units / quarter' }, { n: '3×', l: 'pitch win rate' }], ink: true, label: '[ Studio Meso ]' },
  { meta: 'Creative agency · pitch cycle · South Melbourne', title: 'A physical leave-behind closed a $280k rebrand', body: 'Bespoke NFC coins dropped in the pitch deck sleeve. Each coin tapped to a locked preview of the brand strategy — personalised per decision-maker. The client\'s procurement team cited the token as a signal of craft and confidence.', stats: [{ n: '$280k', l: 'contract value' }, { n: '1', l: 'leave-behind' }, { n: '9d', l: 'from brief to pitch' }], ink: false, label: '[ South Melbourne agency ]' },
];

const BENEFITS = [
  { n: '/01', title: 'Pantone-matched filament', body: 'We blend to your brand colour. Not approximate — matched to your Pantone or hex, confirmed against a physical swatch before production starts.' },
  { n: '/02', title: 'White-label by default', body: 'No TapCraft mark on the product or packaging unless you ask for it. Your brand, your client, your margin.' },
  { n: '/03', title: 'Agency volume rates', body: 'Standing-order pricing for studios running multiple client campaigns. The more you reorder, the sharper the unit rate.' },
  { n: '/04', title: 'Same-week for pitch cycles', body: 'Brief on Monday, in your hands Friday. We run pitch-cycle jobs ahead of the queue. Tell us the pitch date and we reverse-engineer the schedule.' },
];

export default function SolutionsAgenciesPage() {
  return (
    <>
      <PageHero
        eyebrow="For agencies & studios"
        heading="Leave-behinds that"
        emphasis={<>actually get kept. <em className="serif-em">And tapped.</em></>}
        lede="NFC-encoded portfolio tokens, client gifts, and branded leave-behinds — printed in Brunswick for Melbourne's marketing, creative, and branding studios. Win more pitches. Charge a margin."
        actions={
          <>
            <Link className="btn btn--primary btn--lg" href="/customise">Get an agency quote <ArrowRight className="h-4 w-4" /></Link>
            <Link className="btn btn--ghost btn--lg" href="/samples">Order a sample kit</Link>
          </>
        }
      />

      <section className="section">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">The agency workflow</span>
            <h2 className="h1 balance" style={{ marginTop: 14, maxWidth: '22ch' }}>
              Brief to delivery <em className="serif-em">in under a week.</em>
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
            <span className="eyebrow">Why studios pick us</span>
            <h2 className="h1" style={{ marginTop: '14px', maxWidth: '24ch' }}>Four reasons we beat <em className="serif-em">a branded USB stick.</em></h2>
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
            <h2 className="h1" style={{ marginTop: '14px', maxWidth: '24ch' }}>Two studios with <em className="serif-em">numbers to show.</em></h2>
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
              <em>Pitch day</em> in five days?
            </h2>
            <p className="lede" style={{ margin: '24px auto 36px' }}>Tell us the brief and we&apos;ll quote a run in 24 hours. Standing-order pricing for studios with recurring campaign needs.</p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link className="btn btn--primary btn--lg" href="/customise">Get an agency quote <ArrowRight className="h-4 w-4" /></Link>
              <Link className="btn btn--ghost btn--lg" href="/samples">Order a sample kit</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
