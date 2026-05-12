import Link from 'next/link';
import PageHero from '@/components/shared/PageHero';
import Reveal from '@/components/shared/Reveal';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Process — TapCraft',
  description: 'How a brief becomes a printed, encoded, shipped TapCraft product. Seven steps, no spreadsheets, made in Brunswick.',
};

const STEPS = [
  {
    n: '01',
    name: 'Brief',
    time: 'Day 0',
    body: 'You tell us what you want — a quote form, an email, a Loom. We sketch back the shape, materials, and what your NFC should actually do.',
  },
  {
    n: '02',
    name: 'Design review',
    time: 'Day 1–2',
    body: 'Free. We send a 3D mock and a one-page payload spec (what the chip writes, how the URL routes). You sign off on visuals + behaviour.',
  },
  {
    n: '03',
    name: 'Sample',
    time: 'Day 3–4',
    body: 'One real physical sample, printed and encoded on our Brunswick floor. AU shipping included. Costs are credited against your order if you proceed.',
  },
  {
    n: '04',
    name: 'Production queue',
    time: 'Day 5',
    body: 'We slot your run into the printer farm. You get an ETA, a print-time estimate per unit, and a webhook into your stack if you want one.',
  },
  {
    n: '05',
    name: 'Print + encode',
    time: 'Day 5–7',
    body: 'Bambu printers run on Onyx PLA, Recycled PLA, or PHA. Every chip is encoded with our own encoder app (replaces NFC Tools — see Platform). Every batch is audit-logged.',
  },
  {
    n: '06',
    name: 'QC + pack',
    time: 'Day 7',
    body: 'Two tests per unit: tap-read on iPhone + Android, and a visual scan against the approved design. Pack into branded mailers or your own.',
  },
  {
    n: '07',
    name: 'Ship + report',
    time: 'Day 7–8',
    body: 'AusPost or StarTrack, tracked. You get an analytics dashboard from day one — every tap reports back so you can see what worked.',
  },
];

const MATERIALS = [
  {
    name: 'Onyx PLA',
    sub: 'The default',
    desc: 'Matte black, dense, premium hand-feel. Lives outdoors. Works for keychains, cards, badges, lanyards.',
  },
  {
    name: 'Recycled PLA',
    sub: 'AU-sourced',
    desc: 'Made from post-industrial print waste in Geelong. Slight texture, slight green tint. ~22% cheaper.',
  },
  {
    name: 'PHA (compostable)',
    sub: 'For events',
    desc: 'Industrially compostable in 90 days. Slightly softer feel. We use it for festivals + one-night-only event runs.',
  },
];

const CHIPS = [
  { code: 'NTAG213', bytes: '144 bytes', use: 'Short URLs, basic vCard, event check-ins.' },
  { code: 'NTAG215', bytes: '504 bytes', use: 'Default. Full vCard, dynamic link, locked or rewritable.' },
  { code: 'NTAG216', bytes: '888 bytes', use: 'Long-form payloads, multi-app routing, multi-step flows.' },
];

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Process"
        heading="From brief to box,"
        emphasis={<>in <em className="serif-em">seven to ten days.</em></>}
        lede="Every TapCraft order goes through the same seven stages. Same floor, same printers, same two people checking it before it ships. Here's exactly what happens."
        actions={
          <>
            <Link className="btn btn--primary btn--lg" href="/customise">Start a brief <ArrowRight className="h-4 w-4" /></Link>
            <Link className="btn btn--ghost btn--lg" href="/samples">Order a sample kit</Link>
          </>
        }
      />

      <section className="section">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">The seven stages</span>
            <h2 className="h1 balance" style={{ marginTop: 14, maxWidth: '22ch' }}>
              No spreadsheets. <em className="serif-em">No what-now emails.</em>
            </h2>
          </Reveal>
          <div style={{ marginTop: 48, display: 'flex', flexDirection: 'column', gap: 0 }}>
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.05}>
                <article style={{
                  display: 'grid',
                  gridTemplateColumns: '90px 1fr',
                  gap: 32,
                  padding: '32px 0',
                  borderTop: '1px solid var(--line)',
                }}>
                  <div>
                    <div className="mono" style={{ fontSize: 13, color: 'var(--accent-ink)' }}>{s.n}</div>
                    <div className="mono" style={{ fontSize: 11, color: 'var(--muted)', marginTop: 6 }}>{s.time}</div>
                  </div>
                  <div>
                    <h3 className="h3" style={{ marginBottom: 10 }}>{s.name}</h3>
                    <p style={{ color: 'var(--ink-2)', fontSize: 15.5, lineHeight: 1.6, maxWidth: '58ch' }}>{s.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">Materials</span>
            <h2 className="h1 balance" style={{ marginTop: 14, maxWidth: '24ch' }}>
              Three plastics. <em className="serif-em">All AU-sourced.</em>
            </h2>
            <p className="lede" style={{ marginTop: 18 }}>
              We don&apos;t print on virgin plastic from offshore. Every TapCraft product uses one of three filaments we trust.
            </p>
          </Reveal>
          <div className="grid-3" style={{ marginTop: 40 }}>
            {MATERIALS.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.08}>
                <div className="card">
                  <div className="mono" style={{ fontSize: 11, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.14em' }}>{m.sub}</div>
                  <h3 className="h3" style={{ marginTop: 8 }}>{m.name}</h3>
                  <p style={{ color: 'var(--ink-2)', fontSize: 14.5, lineHeight: 1.6, marginTop: 12 }}>{m.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">NFC chips</span>
            <h2 className="h1 balance" style={{ marginTop: 14, maxWidth: '24ch' }}>
              We pick the chip <em className="serif-em">to match the job.</em>
            </h2>
          </Reveal>
          <div style={{ marginTop: 40, border: '1px solid var(--line)', borderRadius: 14, overflow: 'hidden' }}>
            {CHIPS.map((c, i) => (
              <Reveal key={c.code} delay={i * 0.06}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '160px 140px 1fr',
                  gap: 24,
                  padding: '24px 28px',
                  borderTop: i === 0 ? 'none' : '1px solid var(--line)',
                  alignItems: 'center',
                }}>
                  <div className="mono" style={{ color: 'var(--accent-ink)' }}>{c.code}</div>
                  <div className="mono" style={{ fontSize: 12, color: 'var(--muted)' }}>{c.bytes}</div>
                  <div style={{ color: 'var(--ink-2)', fontSize: 14.5 }}>{c.use}</div>
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
              Ready to <em>start the brief?</em>
            </h2>
            <p className="lede" style={{ margin: '24px auto 36px' }}>
              Day zero to day eight. We&apos;ll quote you in 18 minutes or less.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link className="btn btn--primary btn--lg" href="/customise">Get a quote <ArrowRight className="h-4 w-4" /></Link>
              <Link className="btn btn--ghost btn--lg" href="/showcase">See what we&apos;ve made</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
