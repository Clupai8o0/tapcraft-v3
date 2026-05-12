import Link from 'next/link';
import PageHero from '@/components/shared/PageHero';
import Reveal from '@/components/shared/Reveal';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Showcase — TapCraft',
  description: '3D-printed, NFC-encoded, made in Melbourne. From 50-piece event runs to 20,000-unit festival activations.',
};

const CATEGORIES = [
  { href: '/showcase/keychains', title: 'NFC keychains', desc: 'Bespoke shapes, biodegradable PLA, NTAG215.', from: 'From AUD $5 / unit at 1,000+', ink: true, label: '[ NFC keychain · onyx PLA ]' },
  { href: '/showcase', title: 'NFC lanyards', desc: 'Conference-grade fabric + NFC slider card.', from: 'From AUD $1.20 / unit at 1,000+', ink: false, label: '[ NFC lanyard · woven ]' },
  { href: '/showcase', title: 'NFC badges', desc: 'Reorderable templates, sponsor-tier ready.', from: 'From AUD $2.80 / unit at 1,000+', ink: true, label: '[ NFC badge · brass-finish ]' },
  { href: '/showcase', title: 'NFC tags & stickers', desc: 'NTAG213 / 215 / 216 in custom finishes.', from: 'From AUD $0.55 / unit at 1,000+', ink: false, label: '[ NFC tag · sticker ]' },
  { href: '/showcase', title: 'Custom 3D', desc: 'Anything print-feasible — wine tags, pet IDs, props.', from: 'From AUD $150 mould design fee', ink: true, label: '[ custom 3D · bespoke shape ]' },
];

const RUNS = [
  { tag: 'Conference · 4 weeks', title: 'Pause Fest 2026 · 240 NFC badges', body: 'Brass-finish PLA, sponsor-tier engraving, NTAG215 encoding tied to attendee profile. Programmed in two batches the morning of doors-open.', bullets: ['Custom mould', '3 finishes', 'NTAG215 · audit log'], ink: true, label: '[ Pause Fest · 240 badges ]', alt: false },
  { tag: 'Hospitality · 5 days', title: 'Yarra Cellars · 60 NFC wine tags', body: 'Tap-to-pour tasting tags. Rebadged twice a season — TapCraft\'s per-tag URLs let them swap pours without re-encoding hardware.', bullets: ['Recycled PLA', 'NTAG213', 'Reusable across vintages'], ink: false, label: '[ Yarra Cellars · 60 wine tags ]', alt: true },
  { tag: 'Festival · 6 weeks', title: 'SXSW Sydney · 3,000 NFC wristbands', body: 'Rush schedule — full mould design to encoded units in six weeks. Reconciled against the access-control system on-site.', bullets: ['PHA filament', 'Cashless ready', 'Reconciled to ACS'], ink: true, label: '[ SXSW Sydney · 3,000 wristbands ]', alt: false },
];

const WHY = [
  { n: '/01', title: 'Bespoke 3D shapes', body: 'Not a printed sticker on a stock disc. Real moulds, real form factors, real brand impact.' },
  { n: '/02', title: 'NFC native', body: 'Encoded with audit trail. Reconciled against your guestlist, ACS, or CRM.' },
  { n: '/03', title: 'Made in Naarm', body: 'Brunswick studio. Visit the floor. No drop-shipped offshore freight.' },
  { n: '/04', title: 'Compostable options', body: 'PHA + recycled PLA available on request. Sustainability lines pass corporate RFPs.' },
];

export default function ShowcasePage() {
  return (
    <>
      <PageHero
        eyebrow="Showcase"
        heading="3D-printed."
        emphasis={<>NFC-encoded. <em className="serif-em">Made in Melbourne.</em></>}
        lede="From a 50-piece event run to a 20,000-unit festival activation. We design the moulds, print the parts, encode the tags, and ship from Naarm."
        actions={
          <>
            <Link className="btn btn--primary btn--lg" href="/customise">Get a quote <ArrowRight className="h-4 w-4" /></Link>
            <Link className="btn btn--soft btn--lg" href="/samples">Order samples</Link>
          </>
        }
      />

      <section className="section">
        <div className="wrap">
          <div className="cat-grid">
            {CATEGORIES.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.06}>
                <Link className="cat" href={c.href}>
                  <div className={`img placeholder${c.ink ? ' placeholder--ink' : ''}`}><span className="label">{c.label}</span></div>
                  <div className="body">
                    <h3>{c.title}</h3>
                    <p>{c.desc}</p>
                    <div className="row"><span>{c.from}</span><span>→</span></div>
                  </div>
                </Link>
              </Reveal>
            ))}
            <Reveal delay={CATEGORIES.length * 0.06}>
              <Link className="cat" href="/customise">
                <div className="img" style={{ background: 'var(--bg-3)', display: 'grid', placeItems: 'center', textAlign: 'center', padding: '24px', aspectRatio: '4/3' }}>
                  <div>
                    <div style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', letterSpacing: '-0.02em' }}>Not sure?</div>
                    <div className="mono" style={{ color: 'var(--muted)', fontSize: '11px', marginTop: '8px' }}>Tell us what you&apos;re making — we&apos;ll quote it.</div>
                  </div>
                </div>
                <div className="body">
                  <h3>Custom quote</h3>
                  <p>Live price as you choose — PDF in 60 seconds.</p>
                  <div className="row"><span>Free · 24h response</span><span>→</span></div>
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">Featured runs</span>
            <h2 className="h1" style={{ marginTop: '14px', maxWidth: '22ch' }}>Recent jobs that <em className="serif-em">walked off our line.</em></h2>
            <p className="lede" style={{ margin: '14px 0 36px' }}>Each of these started as a quote, ran through the platform, shipped from our Brunswick studio.</p>
          </Reveal>

          {RUNS.map((r, i) => (
            <Reveal key={r.title} delay={0.05 + i * 0.06}>
              <div className={`strip-row${r.alt ? ' alt' : ''}`}>
                <div className={`strip-art placeholder${r.ink ? ' placeholder--ink' : ''}`}><span className="label">{r.label}</span></div>
                <div className="strip-text">
                  <span className="chip">{r.tag}</span>
                  <h3>{r.title}</h3>
                  <p className="lede">{r.body}</p>
                  <ul>{r.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
                  <Link className="btn btn--ghost" href="/showcase">Read the case study <span className="arrow">→</span></Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">Why TapCraft</span>
            <h2 className="h2" style={{ marginTop: '14px', maxWidth: '24ch' }}>Four reasons procurement teams pick us over a PVC printer.</h2>
          </Reveal>
          <div className="why" style={{ marginTop: 40 }}>
            {WHY.map((w, i) => (
              <Reveal key={w.n} delay={i * 0.06}>
                <div className="why-card"><div className="num">{w.n}</div><h4>{w.title}</h4><p>{w.body}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-band" style={{ textAlign: 'center' }}>
        <div className="wrap">
          <Reveal>
            <h2 className="display" style={{ maxWidth: '18ch', margin: '0 auto' }}><em>Get a quote</em> in 24 hours.</h2>
            <p className="lede" style={{ margin: '24px auto 36px' }}>Tell us what you&apos;re making, when you need it, and how many. Live price tile updates as you choose.</p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link className="btn btn--primary btn--lg" href="/customise">Get a quote <span className="arrow">→</span></Link>
              <Link className="btn btn--ghost btn--lg" href="/samples">Order a sample kit</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
