import Link from 'next/link';

export const metadata = {
  title: 'Products — TapCraft',
  description: '3D-printed, NFC-encoded, made in Melbourne. From 50-piece event runs to 20,000-unit festival activations.',
};

export default function ShowcasePage() {
  return (
    <>
      <section className="ph">
        <div className="wrap">
          <div className="grid-top">
            <div>
              <span className="eyebrow"><span className="dot" />Products</span>
              <h1 className="display" style={{ marginTop: '18px' }}><em>3D-printed.</em><br />NFC-encoded.<br />Made in Melbourne.</h1>
            </div>
            <div>
              <p className="lede">From a 50-piece event run to a 20,000-unit festival activation. We design the moulds, print the parts, encode the tags, and ship from Naarm.</p>
              <div style={{ display: 'flex', gap: '10px', marginTop: '24px', flexWrap: 'wrap' }}>
                <Link className="btn btn--primary" href="/customise">Get a quote <span className="arrow">→</span></Link>
                <Link className="btn btn--soft" href="/samples">Order samples</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="cat-grid">
            <Link className="cat" href="/showcase/keychains">
              <div className="img placeholder placeholder--ink"><span className="label">[ NFC keychain · onyx PLA ]</span></div>
              <div className="body">
                <h3>NFC keychains</h3>
                <p>Bespoke shapes, biodegradable PLA, NTAG215.</p>
                <div className="row"><span>From AUD $5 / unit at 1,000+</span><span>→</span></div>
              </div>
            </Link>
            <Link className="cat" href="#">
              <div className="img placeholder"><span className="label">[ NFC lanyard · woven ]</span></div>
              <div className="body">
                <h3>NFC lanyards</h3>
                <p>Conference-grade fabric + NFC slider card.</p>
                <div className="row"><span>From AUD $1.20 / unit at 1,000+</span><span>→</span></div>
              </div>
            </Link>
            <Link className="cat" href="#">
              <div className="img placeholder placeholder--ink"><span className="label">[ NFC badge · brass-finish ]</span></div>
              <div className="body">
                <h3>NFC badges</h3>
                <p>Reorderable templates, sponsor-tier ready.</p>
                <div className="row"><span>From AUD $2.80 / unit at 1,000+</span><span>→</span></div>
              </div>
            </Link>
            <Link className="cat" href="#">
              <div className="img placeholder"><span className="label">[ NFC tag · sticker ]</span></div>
              <div className="body">
                <h3>NFC tags &amp; stickers</h3>
                <p>NTAG213 / 215 / 216 in custom finishes.</p>
                <div className="row"><span>From AUD $0.55 / unit at 1,000+</span><span>→</span></div>
              </div>
            </Link>
            <Link className="cat" href="#">
              <div className="img placeholder placeholder--ink"><span className="label">[ custom 3D · bespoke shape ]</span></div>
              <div className="body">
                <h3>Custom 3D</h3>
                <p>Anything print-feasible — wine tags, pet IDs, props.</p>
                <div className="row"><span>From AUD $150 mould design fee</span><span>→</span></div>
              </div>
            </Link>
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
          </div>
        </div>
      </section>

      <section style={{ borderTop: '1px solid var(--line)', padding: '64px 0' }}>
        <div className="wrap">
          <span className="eyebrow"><span className="dot" />Featured runs</span>
          <h2 className="h1" style={{ marginTop: '14px', maxWidth: '22ch' }}>Recent jobs that walked off our line.</h2>
          <p className="lede" style={{ margin: '14px 0 36px' }}>Each of these started as a quote, ran through the platform, shipped from our Brunswick studio.</p>

          <div className="strip-row">
            <div className="strip-art placeholder placeholder--ink"><span className="label">[ Pause Fest · 240 badges ]</span></div>
            <div className="strip-text">
              <span className="chip"><span className="dot" />Conference · 4 weeks</span>
              <h3>Pause Fest 2026 · 240 NFC badges</h3>
              <p className="lede">Brass-finish PLA, sponsor-tier engraving, NTAG215 encoding tied to attendee profile. Programmed in two batches the morning of doors-open.</p>
              <ul><li>Custom mould</li><li>3 finishes</li><li>NTAG215 · audit log</li></ul>
              <Link className="btn btn--ghost" href="#">Read the case study <span className="arrow">→</span></Link>
            </div>
          </div>

          <div className="strip-row alt">
            <div className="strip-art placeholder"><span className="label">[ Yarra Cellars · 60 wine tags ]</span></div>
            <div className="strip-text">
              <span className="chip"><span className="dot" />Hospitality · 5 days</span>
              <h3>Yarra Cellars · 60 NFC wine tags</h3>
              <p className="lede">Tap-to-pour tasting tags. Rebadged twice a season — TapCraft&apos;s per-tag URLs let them swap pours without re-encoding hardware.</p>
              <ul><li>Recycled PLA</li><li>NTAG213</li><li>Reusable across vintages</li></ul>
              <Link className="btn btn--ghost" href="#">Read the case study <span className="arrow">→</span></Link>
            </div>
          </div>

          <div className="strip-row">
            <div className="strip-art placeholder placeholder--ink"><span className="label">[ SXSW Sydney · 3,000 wristbands ]</span></div>
            <div className="strip-text">
              <span className="chip"><span className="dot" />Festival · 6 weeks</span>
              <h3>SXSW Sydney · 3,000 NFC wristbands</h3>
              <p className="lede">Rush schedule — full mould design to encoded units in six weeks. Reconciled against the access-control system on-site.</p>
              <ul><li>PHA filament</li><li>Cashless ready</li><li>Reconciled to ACS</li></ul>
              <Link className="btn btn--ghost" href="#">Read the case study <span className="arrow">→</span></Link>
            </div>
          </div>
        </div>
      </section>

      <section style={{ borderTop: '1px solid var(--line)' }}>
        <div className="wrap">
          <span className="eyebrow" style={{ marginTop: '64px', display: 'inline-flex' }}><span className="dot" />Why TapCraft</span>
          <h2 className="h2" style={{ marginTop: '14px', maxWidth: '24ch' }}>Four reasons procurement teams pick us over a PVC printer.</h2>
          <div className="why">
            <div className="why-card"><div className="num">/01</div><h4>Bespoke 3D shapes</h4><p>Not a printed sticker on a stock disc. Real moulds, real form factors, real brand impact.</p></div>
            <div className="why-card"><div className="num">/02</div><h4>NFC native</h4><p>Encoded with audit trail. Reconciled against your guestlist, ACS, or CRM.</p></div>
            <div className="why-card"><div className="num">/03</div><h4>Made in Naarm</h4><p>Brunswick studio. Visit the floor. No drop-shipped offshore freight.</p></div>
            <div className="why-card"><div className="num">/04</div><h4>Compostable options</h4><p>PHA + recycled PLA available on request. Sustainability lines pass corporate RFPs.</p></div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <h2 className="display" style={{ maxWidth: '18ch', margin: '0 auto' }}><em>Get a quote</em> in 24 hours.</h2>
          <p className="lede" style={{ margin: '24px auto 36px' }}>Tell us what you&apos;re making, when you need it, and how many. Live price tile updates as you choose.</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link className="btn btn--primary btn--lg" href="/customise">Get a quote <span className="arrow">→</span></Link>
            <Link className="btn btn--ghost btn--lg" href="/samples">Order a sample kit</Link>
          </div>
        </div>
      </section>
    </>
  );
}
