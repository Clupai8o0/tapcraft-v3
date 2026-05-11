import Link from 'next/link';

export const metadata = {
  title: 'About — TapCraft',
  description: 'A printer, an ops nerd, and 4,000kg of recycled PLA.',
};

export default function AboutPage() {
  return (
    <>
      <section className="ah">
        <div className="wrap">
          <span className="eyebrow"><span className="dot" />About</span>
          <h1 className="display" style={{ marginTop: '18px' }}>A printer, an ops nerd, and <em>4,000kg</em> of recycled PLA.</h1>
          <p className="lede" style={{ maxWidth: '56ch', margin: '28px 0 0', fontSize: '22px' }}>
            TapCraft started in 2023 as a side project — printing NFC keychains for our friend&apos;s pottery studio. Three years later we run the platform a few thousand other Australian makers use to ship.
          </p>
        </div>
      </section>

      <section className="manifesto">
        <div className="wrap">
          <div className="manifesto-grid">
            <h2 className="h2">What we believe</h2>
            <div>
              <p>Software companies forgot they&apos;re supposed to ship boxes.</p>
              <p>Etsy gives you orders. Shopify gives you a checkout. Stripe gives you payments. None of them give you the <em>thing</em> — the actual physical object the customer paid for. That part still requires a person, a printer, and a label gun.</p>
              <p>TapCraft is the bit between the order and the box. We took the hardest, most boring part of running a small studio — programming an NFC chip, printing a label, splitting an order across three workstations — and turned it into a workflow that runs while you&apos;re at lunch.</p>
              <p style={{ fontSize: '18px', color: 'var(--muted)', fontStyle: 'italic' }}>We&apos;re not here to be the next Shopify. We&apos;re here so the next Shopify store can ship the night they get their first order.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="floor">
        <div className="wrap">
          <span className="eyebrow"><span className="dot" />The floor · Brunswick VIC</span>
          <h2 className="h1" style={{ marginTop: '14px', maxWidth: '24ch' }}>220m² of Bambu farms, three encoding stations, and one extremely loud kettle.</h2>
          <div className="floor-grid">
            <div className="floor-card placeholder placeholder--ink"><span className="label">[ Bambu farm · 12 printers ]</span></div>
            <div className="floor-card placeholder"><span className="label">[ Encoding station ]</span></div>
            <div className="floor-card placeholder"><span className="label">[ Recycled PLA stockpile ]</span></div>
            <div className="floor-card placeholder"><span className="label">[ Quality bench ]</span></div>
            <div className="floor-card placeholder placeholder--ink"><span className="label">[ Pack &amp; ship ]</span></div>
            <div className="floor-card placeholder placeholder--ink"><span className="label">[ The kettle (loud) ]</span></div>
          </div>
        </div>
      </section>

      <section className="team">
        <div className="wrap">
          <span className="eyebrow"><span className="dot" />The team</span>
          <h2 className="h1" style={{ marginTop: '14px' }}>Eight people. One floor. No remote.</h2>
          <div className="team-grid">
            <div className="person">
              <div className="av placeholder placeholder--ink" />
              <div><h4>Maya Whitcomb</h4><div className="role">Co-founder · Operations</div></div>
              <p>Used to run logistics for a 200-store fashion chain. Knows what a 4PM cutoff means.</p>
            </div>
            <div className="person">
              <div className="av placeholder" />
              <div><h4>Daniel Yoo</h4><div className="role">Co-founder · Engineering</div></div>
              <p>Wrote our scheduler at 3AM after the third missed deadline. We don&apos;t miss deadlines now.</p>
            </div>
            <div className="person">
              <div className="av placeholder placeholder--ink" />
              <div><h4>Priya Bhatt</h4><div className="role">Print floor lead</div></div>
              <p>Has personally encoded ~120,000 NFC tags. Faster than the encoder, honestly.</p>
            </div>
            <div className="person">
              <div className="av placeholder" />
              <div><h4>Tom Hennessy</h4><div className="role">Customer eng</div></div>
              <p>Will get on a Loom with you about your Etsy webhook. Won&apos;t pretend it&apos;s normal.</p>
            </div>
            <div className="person">
              <div className="av placeholder placeholder--ink" />
              <div><h4>Hana Park</h4><div className="role">Product designer</div></div>
              <p>Designed the dashboard. Refuses to add a 6th nav item under any circumstances.</p>
            </div>
            <div className="person">
              <div className="av placeholder" />
              <div><h4>Sam Ofori</h4><div className="role">Materials &amp; sustainability</div></div>
              <p>Sourced our PHA partner. Will tell you precisely how compostable PLA is (less than you think).</p>
            </div>
            <div className="person">
              <div className="av placeholder placeholder--ink" />
              <div><h4>Lukas Vance</h4><div className="role">Software</div></div>
              <p>Built the encoder firmware. Treats every NFC tag like a feature flag.</p>
            </div>
            <div className="person">
              <div className="av placeholder" />
              <div><h4>Rina Esposito</h4><div className="role">Customer success</div></div>
              <p>Onboards every Pro customer personally for the first 30 days. Replies in &lt;18 minutes.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="nums">
            <div className="num-card"><div className="n">2,287</div><div className="l">stores shipping</div></div>
            <div className="num-card"><div className="n">4.6T</div><div className="l">PLA processed since &apos;23</div></div>
            <div className="num-card"><div className="n">68%</div><div className="l">faster turnaround vs prior stack</div></div>
            <div className="num-card"><div className="n">14</div><div className="l">countries served</div></div>
          </div>
        </div>
      </section>

      <section style={{ borderTop: '1px solid var(--line)', padding: '80px 0', textAlign: 'center' }}>
        <div className="wrap">
          <h2 className="display" style={{ maxWidth: '16ch', margin: '0 auto' }}>Want to <em>tour the floor?</em></h2>
          <p className="lede" style={{ margin: '24px auto 36px' }}>If you&apos;re in Naarm, come say hi. We&apos;ll print you a sample while you wait.</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link className="btn btn--primary btn--lg" href="/contact">Book a studio tour <span className="arrow">→</span></Link>
            <Link className="btn btn--ghost btn--lg" href="/samples">Or just send me a kit</Link>
          </div>
        </div>
      </section>
    </>
  );
}
