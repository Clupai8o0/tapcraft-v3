import Link from 'next/link';

export const metadata = {
  title: 'Sample kits — TapCraft',
  description: 'A box of real units on your desk in 5 days.',
};

export default function SamplesPage() {
  return (
    <section className="sm">
      <div className="wrap">
        <span className="eyebrow"><span className="dot" />Sample kits</span>
        <h1 className="display">A box of <em>real units</em> on your desk in 5 days.</h1>
        <p className="lede" style={{ marginTop: '18px' }}>Pick the kit that matches your use case. Each ships with a printed care card and a personalised QR linking to a vertical case study.</p>

        <div className="kit-grid">
          <div className="kit active">
            <div className="img placeholder placeholder--ink"><span className="label">[ Events kit ]</span></div>
            <div className="body">
              <h3>Events kit</h3>
              <p>NFC badge, lanyard, wristband, branded keychain. The full range you&apos;d see at a 1,000-pax conference.</p>
              <div className="row"><span>4 items · NTAG213/215</span><span>FREE for ICP</span></div>
            </div>
          </div>
          <div className="kit">
            <div className="img placeholder"><span className="label">[ Real estate kit ]</span></div>
            <div className="body">
              <h3>Real estate kit</h3>
              <p>Open-home tag, agent card, property keychain. Same NFC payloads agents actually use day-one.</p>
              <div className="row"><span>3 items · NTAG215</span><span>FREE for ICP</span></div>
            </div>
          </div>
          <div className="kit">
            <div className="img placeholder placeholder--ink"><span className="label">[ Hospitality kit ]</span></div>
            <div className="body">
              <h3>Hospitality kit</h3>
              <p>Review card, table tag, tip-jar disc. Pre-encoded to a demo Google review URL.</p>
              <div className="row"><span>3 items · NTAG213</span><span>FREE for ICP</span></div>
            </div>
          </div>
          <div className="kit">
            <div className="img placeholder"><span className="label">[ Maker kit ]</span></div>
            <div className="body">
              <h3>Maker kit</h3>
              <p>Sample of every material we offer + a programmable blank tag for testing your stack.</p>
              <div className="row"><span>5 swatches</span><span>$29 + post</span></div>
            </div>
          </div>
        </div>

        <div className="form-grid">
          <div className="form">
            <h3 style={{ marginBottom: '18px' }}>Where should we send it?</h3>
            <form>
              <div className="row2">
                <label>Full name<input type="text" placeholder="Aimee Tran" /></label>
                <label>Company<input type="text" placeholder="Northbound Studio" /></label>
              </div>
              <label>Work email<input type="email" placeholder="aimee@northbound.studio" /></label>
              <label>Shipping address<textarea placeholder="123 Sydney Rd, Brunswick VIC 3056" /></label>
              <div className="row2">
                <label>{"What's the use case?"}
                  <select>
                    <option>Conference / events</option>
                    <option>Real estate</option>
                    <option>Hospitality / cafés</option>
                    <option>Custom merchandise</option>
                    <option>Just curious</option>
                  </select>
                </label>
                <label>Timeline
                  <select>
                    <option>Within 4 weeks</option>
                    <option>4–12 weeks</option>
                    <option>3+ months</option>
                    <option>Just researching</option>
                  </select>
                </label>
              </div>
              <label style={{ display: 'flex', flexDirection: 'row', gap: '10px', alignItems: 'flex-start', marginTop: '6px', color: 'var(--ink-2)', textTransform: 'none', fontFamily: 'var(--font-sans)', letterSpacing: 0, fontSize: '13.5px' }}>
                <input type="checkbox" defaultChecked style={{ width: 'auto', marginTop: '2px' }} />
                Add a personalised Loom video walkthrough with my kit (24h after dispatch)
              </label>
              <Link className="btn btn--primary btn--lg" style={{ justifyContent: 'center', marginTop: '8px' }} href="#">Send my sample kit <span className="arrow">→</span></Link>
            </form>
          </div>

          <aside>
            <div className="summary-card">
              <h4>Order summary</h4>
              <div className="totals">
                <div className="row"><span>Events kit · 4 items</span><span>$48 value</span></div>
                <div className="row"><span>Standard shipping (AU)</span><span>$0</span></div>
                <div className="row"><span>Personalised Loom</span><span>included</span></div>
                <div className="row big"><span>You pay</span><span style={{ color: 'var(--positive)' }}>FREE</span></div>
              </div>
              <div className="perks">
                <div>Ships within 24h from Brunswick</div>
                <div>Tracked Australia Post · 3–5 days</div>
                <div>Free for ICP-fit (work email match)</div>
                <div>Personal Loom 24h after dispatch</div>
              </div>
            </div>

            <div style={{ marginTop: '16px', padding: '20px', background: 'var(--paper)', border: '1px solid var(--line)', borderRadius: 'var(--r-3)' }}>
              <div className="mono" style={{ color: 'var(--muted)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Need it international?</div>
              <p style={{ margin: '8px 0 0', fontSize: '13.5px', color: 'var(--ink-2)' }}>We ship samples worldwide. International is $29 flat (refundable against your first paid order).</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
