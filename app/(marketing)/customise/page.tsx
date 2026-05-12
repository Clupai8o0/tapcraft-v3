import Link from 'next/link';
import PageHero from '@/components/shared/PageHero';
import Reveal from '@/components/shared/Reveal';

export const metadata = {
  title: 'Get a quote — TapCraft',
  description: 'Tell us what you\'re making. Live price tile, PDF quote in your inbox in 60 seconds, founder follow-up within 24h.',
};

export default function CustomisePage() {
  return (
    <>
      <PageHero
        eyebrow="Get a quote"
        heading="Tell us what you’re"
        emphasis={<em>making.</em>}
        lede="Pick a product, material, chip, and quantity. The price tile updates as you choose. PDF quote in your inbox in 60 seconds — founder follow-up within 24h."
        tight
      />
      <section className="qt section" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="qt-grid" style={{ marginTop: '24px' }}>
          <Reveal>
            <div className="steps">
              <div className="step-pill done"><span className="n">✓</span> Product</div>
              <div className="step-pill active"><span className="n">2</span> Specs</div>
              <div className="step-pill"><span className="n">3</span> Quantity</div>
              <div className="step-pill"><span className="n">4</span> Contact</div>
            </div>

            <div className="form-section">
              <h3>What are you making?</h3>
              <p className="note">Pick the closest match — we&apos;ll refine on the call.</p>
              <div className="opt-grid">
                <div className="opt-card active"><div className="ttl">NFC keychain</div><div className="sub">Bespoke shape · PLA</div></div>
                <div className="opt-card"><div className="ttl">NFC lanyard</div><div className="sub">Woven + slider card</div></div>
                <div className="opt-card"><div className="ttl">NFC badge</div><div className="sub">Conference / event</div></div>
                <div className="opt-card"><div className="ttl">NFC wristband</div><div className="sub">Festival / cashless</div></div>
                <div className="opt-card"><div className="ttl">Wine / bottle tag</div><div className="sub">Hospitality</div></div>
                <div className="opt-card"><div className="ttl">Custom 3D part</div><div className="sub">Anything else</div></div>
              </div>
            </div>

            <div className="form-section">
              <h3>Material</h3>
              <p className="note">PHA and recycled PLA cost slightly more but pass corporate sustainability RFPs.</p>
              <div className="opt-grid">
                <div className="opt-card active"><div className="ttl">Onyx PLA</div><div className="sub">Matte black, default</div></div>
                <div className="opt-card"><div className="ttl">Recycled PLA</div><div className="sub">+8%</div></div>
                <div className="opt-card"><div className="ttl">PHA (compostable)</div><div className="sub">+18%</div></div>
              </div>
            </div>

            <div className="form-section">
              <h3>NFC chip &amp; encoding</h3>
              <div className="opt-grid">
                <div className="opt-card"><div className="ttl">NTAG213</div><div className="sub">180 bytes · cheapest</div></div>
                <div className="opt-card active"><div className="ttl">NTAG215</div><div className="sub">540 bytes · default</div></div>
                <div className="opt-card"><div className="ttl">NTAG216</div><div className="sub">924 bytes · vCard</div></div>
              </div>
              <div className="checkbox-row">
                <div className="check active"><span className="box">✓</span> Same URL on all units</div>
                <div className="check"><span className="box" /> Per-unit URL · we provide CSV</div>
                <div className="check"><span className="box" /> Locked / read-only</div>
                <div className="check"><span className="box" /> Audit log + reconciliation</div>
              </div>
            </div>

            <div className="form-section">
              <h3>Quantity &amp; deadline</h3>
              <div className="qty-row">
                <label>Quantity<input type="text" defaultValue="500" /></label>
                <label>Need by
                  <select defaultValue="4 weeks (standard)">
                    <option>2 weeks (rush · +35%)</option>
                    <option>4 weeks (standard)</option>
                    <option>6 weeks (eco)</option>
                    <option>Flexible</option>
                  </select>
                </label>
              </div>
            </div>

            <div className="form-section">
              <h3>Setup</h3>
              <div className="checkbox-row">
                <div className="check active"><span className="box">✓</span> I have a logo / artwork</div>
                <div className="check"><span className="box" /> I need design help (+$150)</div>
                <div className="check"><span className="box" /> Custom mould design (+$350)</div>
                <div className="check active"><span className="box">✓</span> Send physical sample first</div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
          <aside>
            <div className="price-tile">
              <span className="live">Live estimate</span>
              <div className="est-range">$4,500<small> – $4,800</small></div>
              <div className="est-per">~ $9 / unit · 500 units</div>

              <hr />

              <div className="breakdown">
                <div className="row"><span className="k">Material · Onyx PLA</span><span className="v">$1,260</span></div>
                <div className="row"><span className="k">Print time</span><span className="v">$2,180</span></div>
                <div className="row"><span className="k">NFC chips · NTAG215</span><span className="v">$640</span></div>
                <div className="row"><span className="k">Encoding + audit log</span><span className="v">$220</span></div>
                <div className="row"><span className="k">Setup &amp; sample</span><span className="v">$200</span></div>
                <div className="row" style={{ paddingTop: '10px', borderTop: '1px solid var(--line)' }}>
                  <span className="k">Subtotal · ex-GST</span>
                  <span className="v" style={{ color: 'var(--accent-ink)' }}>$4,500</span>
                </div>
              </div>

              <div className="lead">
                <div>
                  <div className="mono" style={{ color: 'var(--muted)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Lead time</div>
                  <div className="v">4 weeks</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div className="mono" style={{ color: 'var(--muted)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Ships from</div>
                  <div className="v">Brunswick</div>
                </div>
              </div>

              <div className="actions">
                <Link className="btn btn--accent" style={{ justifyContent: 'center' }} href="#">Get PDF quote <span className="arrow">→</span></Link>
                <Link className="btn" style={{ justifyContent: 'center', background: 'transparent', border: '1px solid var(--line)' }} href="/samples">Order sample first</Link>
              </div>
              <p className="mono" style={{ color: 'var(--muted)', fontSize: '10.5px', textAlign: 'center', margin: '14px 0 0' }}>Sent within 60 seconds · A founder will follow up within 24h.</p>
            </div>
          </aside>
          </Reveal>
        </div>
      </div>
    </section>
    </>
  );
}
