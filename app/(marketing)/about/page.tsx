import Link from 'next/link';
import PageHero from '@/components/shared/PageHero';
import Reveal from '@/components/shared/Reveal';

export const metadata = {
  title: 'About — TapCraft',
  description: 'A printer, an ops nerd, and 4,000kg of recycled PLA. The story behind Melbourne\'s only integrated 3D-printing + NFC studio.',
};

const TEAM = [
  { name: 'Maya Whitcomb', role: 'Co-founder · Operations', bio: 'Used to run logistics for a 200-store fashion chain. Knows what a 4PM cutoff means.', ink: true },
  { name: 'Daniel Yoo', role: 'Co-founder · Engineering', bio: 'Wrote our scheduler at 3AM after the third missed deadline. We don\'t miss deadlines now.', ink: false },
  { name: 'Priya Bhatt', role: 'Print floor lead', bio: 'Has personally encoded ~120,000 NFC tags. Faster than the encoder, honestly.', ink: true },
  { name: 'Tom Hennessy', role: 'Customer eng', bio: 'Will get on a Loom with you about your Etsy webhook. Won\'t pretend it\'s normal.', ink: false },
  { name: 'Hana Park', role: 'Product designer', bio: 'Designed the dashboard. Refuses to add a 6th nav item under any circumstances.', ink: true },
  { name: 'Sam Ofori', role: 'Materials & sustainability', bio: 'Sourced our PHA partner. Will tell you precisely how compostable PLA is (less than you think).', ink: false },
  { name: 'Lukas Vance', role: 'Software', bio: 'Built the encoder firmware. Treats every NFC tag like a feature flag.', ink: true },
  { name: 'Rina Esposito', role: 'Customer success', bio: 'Onboards every Pro customer personally for the first 30 days. Replies in <18 minutes.', ink: false },
];

const NUMS = [
  { n: '2,287', l: 'stores shipping' },
  { n: '4.6T', l: 'PLA processed since ’23' },
  { n: '68%', l: 'faster turnaround vs prior stack' },
  { n: '14', l: 'countries served' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        heading="A printer, an ops nerd,"
        emphasis={<>and <em className="serif-em">4,000kg</em> of recycled PLA.</>}
        lede="TapCraft started in 2023 as a side project — printing NFC keychains for our friend's pottery studio. Three years later we run the platform a few thousand other Australian makers use to ship."
      />

      <section className="section">
        <div className="wrap">
          <div className="manifesto-grid">
            <Reveal>
              <h2 className="h2">What we believe</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p>Software companies forgot they&apos;re supposed to ship boxes.</p>
              <p>Etsy gives you orders. Shopify gives you a checkout. Stripe gives you payments. None of them give you the <em>thing</em> — the actual physical object the customer paid for. That part still requires a person, a printer, and a label gun.</p>
              <p>TapCraft is the bit between the order and the box. We took the hardest, most boring part of running a small studio — programming an NFC chip, printing a label, splitting an order across three workstations — and turned it into a workflow that runs while you&apos;re at lunch.</p>
              <p style={{ fontSize: '18px', color: 'var(--muted)', fontStyle: 'italic' }}>We&apos;re not here to be the next Shopify. We&apos;re here so the next Shopify store can ship the night they get their first order.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">The floor · Brunswick VIC</span>
            <h2 className="h1" style={{ marginTop: '14px', maxWidth: '24ch' }}>
              220m² of Bambu farms, three encoding stations, and <em className="serif-em">one extremely loud kettle.</em>
            </h2>
          </Reveal>
          <div className="floor-grid" style={{ marginTop: 40 }}>
            {[
              { label: '[ Bambu farm · 12 printers ]', ink: true },
              { label: '[ Encoding station ]', ink: false },
              { label: '[ Recycled PLA stockpile ]', ink: false },
              { label: '[ Quality bench ]', ink: false },
              { label: '[ Pack & ship ]', ink: true },
              { label: '[ The kettle (loud) ]', ink: true },
            ].map((tile, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className={`floor-card placeholder${tile.ink ? ' placeholder--ink' : ''}`}>
                  <span className="label">{tile.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">The team</span>
            <h2 className="h1" style={{ marginTop: '14px' }}>Eight people. One floor. <em className="serif-em">No remote.</em></h2>
          </Reveal>
          <div className="team-grid" style={{ marginTop: 40 }}>
            {TEAM.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.05}>
                <div className="person">
                  <div className={`av placeholder${p.ink ? ' placeholder--ink' : ''}`} />
                  <div><h4>{p.name}</h4><div className="role">{p.role}</div></div>
                  <p>{p.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="nums">
            {NUMS.map((n, i) => (
              <Reveal key={n.l} delay={i * 0.08}>
                <div className="num-card"><div className="n">{n.n}</div><div className="l">{n.l}</div></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ textAlign: 'center' }}>
        <div className="wrap">
          <Reveal>
            <h2 className="display" style={{ maxWidth: '16ch', margin: '0 auto' }}>Want to <em>tour the floor?</em></h2>
            <p className="lede" style={{ margin: '24px auto 36px' }}>If you&apos;re in Naarm, come say hi. We&apos;ll print you a sample while you wait.</p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link className="btn btn--primary btn--lg" href="/contact">Book a studio tour <span className="arrow">→</span></Link>
              <Link className="btn btn--ghost btn--lg" href="/samples">Or just send me a kit</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
