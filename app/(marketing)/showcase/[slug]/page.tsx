import Link from 'next/link';
import Reveal from '@/components/shared/Reveal';

export function generateStaticParams() {
  return [{ slug: 'keychains' }];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return {
    title: `NFC ${slug} — TapCraft`,
    description: 'Bespoke 3D-printed NFC products, made in Melbourne.',
  };
}

export default async function ShowcaseSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  void slug;

  return (
    <section className="pdp">
      <div className="wrap">
        <div className="crumbs">
          <Link href="/showcase">Products</Link> / NFC keychains / Onyx PLA
        </div>

        <div className="pdp-grid">
          <Reveal>
          <div className="pdp-gallery">
            <div className="main placeholder placeholder--ink"><span className="label">[ keychain hero · onyx ]</span></div>
            <div className="thumb placeholder"><span className="label">[ side ]</span></div>
            <div className="thumb placeholder placeholder--ink"><span className="label">[ NFC chip ]</span></div>
            <div className="thumb placeholder"><span className="label">[ packaging ]</span></div>
            <div className="thumb placeholder placeholder--ink"><span className="label">[ on a bag ]</span></div>
          </div>
          </Reveal>

          <Reveal delay={0.12}>
          <div>
            <span className="eyebrow">NFC keychain</span>
            <h1 style={{ marginTop: '14px' }}>Onyx PLA · NFC keychain</h1>
            <p className="lede">Bespoke 3D-printed keychains in matte black PLA, NTAG215 chip, programmed to your URL. From a 50-piece corporate run to a 5,000-piece festival drop.</p>

            <div className="pricing-table">
              <table>
                <thead>
                  <tr><th>Quantity</th><th>Price / unit</th><th>Total</th><th>Lead time</th></tr>
                </thead>
                <tbody>
                  <tr><td>50</td><td className="price">$22</td><td className="price">$1,100</td><td>10 days</td></tr>
                  <tr><td>100</td><td className="price">$18</td><td className="price">$1,800</td><td>10 days</td></tr>
                  <tr><td>250</td><td className="price">$13</td><td className="price">$3,250</td><td>14 days</td></tr>
                  <tr><td>500</td><td className="price">$9</td><td className="price">$4,500</td><td>21 days</td></tr>
                  <tr><td>1,000+</td><td className="price">$5</td><td className="price">From $5,000</td><td>4 weeks</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mono" style={{ color: 'var(--muted)', fontSize: '11px', marginTop: '8px' }}>Prices in AUD ex-GST. Setup $0–150 depending on artwork. Rush +25–50%.</p>

            <div className="opt-row">
              <span className="label">Material</span>
              <div className="opts">
                <span className="opt active">Onyx PLA</span>
                <span className="opt">Recycled PLA</span>
                <span className="opt">PHA (compostable)</span>
                <span className="opt">Translucent</span>
              </div>
            </div>
            <div className="opt-row">
              <span className="label">NFC chip</span>
              <div className="opts">
                <span className="opt">NTAG213 (180b)</span>
                <span className="opt active">NTAG215 (540b)</span>
                <span className="opt">NTAG216 (924b)</span>
              </div>
            </div>
            <div className="opt-row">
              <span className="label">Encoding</span>
              <div className="opts">
                <span className="opt active">Same URL · all units</span>
                <span className="opt">Per-unit URL · CSV</span>
                <span className="opt">vCard / contact card</span>
                <span className="opt">Unencoded · ship blank</span>
              </div>
            </div>

            <div className="cta-row">
              <Link className="btn btn--primary btn--lg" href="/customise">Get a quote <span className="arrow">→</span></Link>
              <Link className="btn btn--soft btn--lg" href="/samples">Order a sample</Link>
            </div>

            <div className="specs">
              <div className="row"><span className="k">Form factor</span><span>52 × 32 × 4mm</span></div>
              <div className="row"><span className="k">NFC range</span><span>2–4cm</span></div>
              <div className="row"><span className="k">Compatibility</span><span>iOS 11+, Android 5+</span></div>
              <div className="row"><span className="k">Print method</span><span>FDM, 0.16mm layer</span></div>
              <div className="row"><span className="k">Mould fee</span><span>$0 (stock) / $150–1,500 (custom)</span></div>
              <div className="row"><span className="k">Made in</span><span>Brunswick VIC, AU</span></div>
            </div>
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
