import Link from 'next/link';

export const metadata = {
  title: 'Platform — TapCraft',
  description: 'A single workspace for your store, custom orders, printers, NFC encoder, and dev team.',
};

export default function PlatformPage() {
  return (
    <>
      <section className="platform-hero">
        <div className="wrap">
          <span className="eyebrow"><span className="dot" />The Platform</span>
          <h1 className="display" style={{ marginTop: '18px' }}>The <em>headless CMS</em> for 3D-printed NFC products.</h1>
          <p className="lede">A single workspace for your store, your custom orders, your printers, your NFC encoder, and your dev team. Everything is an API. Everything writes back to one record.</p>
          <div className="actions">
            <Link className="btn btn--primary btn--lg" href="/demo">Book a demo <span className="arrow">→</span></Link>
            <Link className="btn btn--soft btn--lg" href="/signup">Start free trial</Link>
            <Link className="btn" style={{ border: '1px solid var(--line)' }} href="#">Read the docs <span className="arrow">→</span></Link>
          </div>

          <div className="canvas-mock">
            <div className="canvas-head">
              <div className="l">
                <div className="dots"><span /><span /><span /></div>
                <div className="crumb">app.tapcraft.studio · workspace: northbound</div>
              </div>
              <div className="mono" style={{ color: 'var(--muted)' }}>⌘ K · search</div>
            </div>
            <div className="canvas-body">
              <aside className="canvas-side">
                <div className="group">Workspace</div>
                <div className="item"><span>Dashboard</span></div>
                <div className="item active"><span>Orders</span><span className="count">214</span></div>
                <div className="item"><span>Customers</span><span className="count">1.4k</span></div>
                <div className="item"><span>Products</span><span className="count">86</span></div>
                <div className="group">Production</div>
                <div className="item"><span>Print queue</span><span className="count">12</span></div>
                <div className="item"><span>Printers</span><span className="count">8</span></div>
                <div className="item"><span>NFC batches</span><span className="count">3</span></div>
                <div className="item"><span>Materials</span></div>
                <div className="group">Channels</div>
                <div className="item"><span>Shopify</span></div>
                <div className="item"><span>Etsy</span></div>
                <div className="item"><span>Custom intake</span></div>
                <div className="group">Developers</div>
                <div className="item"><span>API tokens</span></div>
                <div className="item"><span>Webhooks</span></div>
              </aside>

              <div className="canvas-main">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <div>
                    <div className="mono" style={{ color: 'var(--muted)', fontSize: '11px' }}>/ orders</div>
                    <h3 className="h3" style={{ marginTop: '4px' }}>214 active</h3>
                  </div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <span className="chip"><span className="dot" />Print queue · 12</span>
                    <span className="chip"><span className="dot" />Encoding · 3</span>
                    <span className="chip"><span className="dot" />Shipping · 28</span>
                  </div>
                </div>
                <table className="table">
                  <thead>
                    <tr><th>Order</th><th>Customer</th><th>Type</th><th>Stage</th><th>Due</th></tr>
                  </thead>
                  <tbody>
                    <tr><td className="mono">#ORD-4012</td><td>Aimee Tran</td><td>Custom keychain · NFC</td><td><span className="badge b-encode">encoding</span></td><td className="mono">Apr 28</td></tr>
                    <tr><td className="mono">#ORD-4011</td><td>Pause Fest</td><td>240 × badges</td><td><span className="badge b-print">printing</span></td><td className="mono">May 02</td></tr>
                    <tr><td className="mono">#ORD-4010</td><td>Yarra Cellars</td><td>Wine tag · 60</td><td><span className="badge b-ship">shipping</span></td><td className="mono">Apr 27</td></tr>
                    <tr><td className="mono">#ORD-4009</td><td>Etsy · @rae</td><td>Pet ID · custom</td><td><span className="badge b-print">printing</span></td><td className="mono">Apr 29</td></tr>
                    <tr><td className="mono">#ORD-4008</td><td>Hatch &amp; Co.</td><td>Lanyard · 1,200</td><td><span className="badge">queued</span></td><td className="mono">May 06</td></tr>
                    <tr><td className="mono">#ORD-4007</td><td>Bayside Real Estate</td><td>Open-home tag · 50</td><td><span className="badge b-encode">encoding</span></td><td className="mono">Apr 30</td></tr>
                    <tr><td className="mono">#ORD-4006</td><td>SXSW Sydney</td><td>3,000 × wristbands</td><td><span className="badge">queued</span></td><td className="mono">May 14</td></tr>
                  </tbody>
                </table>
              </div>

              <aside className="canvas-right">
                <div className="right-h">/ #ORD-4012 · job 03</div>
                <div className="three-d-prev">
                  <svg viewBox="0 0 200 140">
                    <rect x="20" y="20" width="160" height="100" rx="14" fill="#141418" />
                    <rect x="36" y="38" width="22" height="22" rx="4" fill="oklch(0.66 0.20 250)" />
                    <text x="76" y="56" fontFamily="Manrope, sans-serif" fontWeight="700" fontSize="13" fill="#F5F5F7">aimee.</text>
                    <text x="76" y="72" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#B8B8C0">tap → portfolio</text>
                    <g transform="translate(40 88)" stroke="#F5F5F7" strokeWidth="1" fill="none" opacity="0.85">
                      <path d="M0 8 Q 8 0 16 8" />
                      <path d="M-4 12 Q 8 -4 20 12" />
                    </g>
                  </svg>
                </div>
                <div className="meta-list">
                  <div className="row"><span className="k">SKU</span><span className="v">KC-ONX-S</span></div>
                  <div className="row"><span className="k">Material</span><span className="v">Onyx PLA</span></div>
                  <div className="row"><span className="k">Filament</span><span className="v">14g · $0.42</span></div>
                  <div className="row"><span className="k">Print time</span><span className="v">38 min</span></div>
                  <div className="row"><span className="k">NFC chip</span><span className="v">NTAG215</span></div>
                  <div className="row"><span className="k">Payload</span><span className="v" style={{ fontFamily: 'var(--font-mono)', fontSize: '11px' }}>tc.st/aimee-2287</span></div>
                  <div className="row"><span className="k">Margin</span><span className="v" style={{ color: 'oklch(0.55 0.13 145)' }}>62%</span></div>
                </div>
                <Link className="btn btn--primary" style={{ width: '100%', justifyContent: 'center', marginTop: '18px' }} href="#">Send to print</Link>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* 6 PILLARS */}
      <section className="section">
        <div className="wrap">
          <span className="eyebrow"><span className="dot" />Capabilities</span>
          <h2 className="h1" style={{ marginTop: '14px', maxWidth: '22ch' }}>Six surfaces. <em className="serif-em">One source of truth.</em></h2>
          <div className="pillars-grid">
            <div className="pillar-deep">
              <div className="num">/01</div>
              <h3>Headless CMS for 3D products</h3>
              <p>Products, variants, STL libraries, asset versioning. Bring your own front-end via the Storefront API, or use our drop-in components.</p>
              <div className="features"><div>Product → variant → STL</div><div>Asset versioning</div><div>Storefront API + GraphQL</div></div>
            </div>
            <div className="pillar-deep">
              <div className="num">/02</div>
              <h3>Custom orders, productised</h3>
              <p>Customer uploads STL, configurator, or DM. Every intake becomes a quote. Every quote becomes a job. No more screenshot inboxes.</p>
              <div className="features"><div>STL upload + auto-quote</div><div>3D preview</div><div>AI-assisted volume / time / price</div></div>
            </div>
            <div className="pillar-deep">
              <div className="num">/03</div>
              <h3>3D configurator builder</h3>
              <p>Drop in a no-code configurator on Shopify, Etsy, or your own React app. White-label on Business and above.</p>
              <div className="features"><div>R3F-powered</div><div>Shopify + WooCommerce embeds</div><div>White-label on Business+</div></div>
            </div>
            <div className="pillar-deep">
              <div className="num">/04</div>
              <h3>NFC programming at scale</h3>
              <p>Batch URL programming, NDEF + URI records, per-tag audit trail, reconciliation against shipments. The only platform where NFC is a first-class workflow object.</p>
              <div className="features"><div>NTAG213/215/216</div><div>Batch encoder + audit log</div><div>NDEF + URI + custom records</div></div>
            </div>
            <div className="pillar-deep">
              <div className="num">/05</div>
              <h3>Production queue</h3>
              <p>Sliced for the right printer, routed by load and material. Bambu Lab Connect, PrusaConnect, OrcaSlicer, Cura — all native.</p>
              <div className="features"><div>Bambu / Prusa / Orca / Cura</div><div>Per-printer routing</div><div>Filament inventory + per-job COGS</div></div>
            </div>
            <div className="pillar-deep">
              <div className="num">/06</div>
              <h3>Developer-first</h3>
              <p>REST + GraphQL APIs, signed webhooks, idempotency keys, OSS SDKs in TS and Python. Open-source CLI for shop scaffolding and NFC programming.</p>
              <div className="features"><div>REST + GraphQL + webhooks</div><div>TypeScript + Python SDK</div><div>MIT-licensed CLI</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* WORKFLOW NARRATIVE */}
      <section className="section" style={{ borderTop: 0, paddingTop: 0 }}>
        <div className="wrap">
          <span className="eyebrow"><span className="dot" />Workflow</span>
          <h2 className="h1" style={{ marginTop: '14px', maxWidth: '22ch' }}>Configure → Quote → Print → Encode → Ship.</h2>
          <p className="lede">Every step writes back to one order record. No reconciliation, no duplicate keying, no spreadsheet of last resort.</p>
          <div className="narrative">
            <div className="narrative-text">
              <div className="narrative-step">
                <div className="step-id">Step i — Configure</div>
                <h3>The customer designs in the browser.</h3>
                <p>Drop the configurator into a Shopify product page or a custom React app. R3F-powered, mobile-first, configurable per SKU. Variants resolve to real STL files in your library.</p>
              </div>
              <div className="narrative-step">
                <div className="step-id">Step ii — Quote</div>
                <h3>Auto-quote with margin guardrails.</h3>
                <p>STL volume × material density × hourly cost × your margin floor. Configurable per material and per channel. Quotes export as branded PDFs and fire a CRM webhook.</p>
              </div>
              <div className="narrative-step">
                <div className="step-id">Step iii — Print</div>
                <h3>Routed to the right printer, sliced for the right material.</h3>
                <p>Bambu, Prusa, Orca, and Cura native. Per-printer routing on load, material, and time-to-deadline. Filament inventory tracks per-job consumption against your COGS.</p>
              </div>
              <div className="narrative-step">
                <div className="step-id">Step iv — Encode</div>
                <h3>NFC programmed in batch, with an audit trail.</h3>
                <p>Reconcile every printed unit against an encoded tag. Per-batch CSV export, per-tag NDEF inspector, drift-detection if a customer&apos;s URL goes stale.</p>
              </div>
              <div className="narrative-step">
                <div className="step-id">Step v — Ship</div>
                <h3>Label, track, push back to the channel.</h3>
                <p>ShipStation, Sendle, Australia Post Business. Tracking pushed back to Shopify / Etsy / DM thread. Re-order link generated automatically per customer.</p>
              </div>
            </div>
            <div className="narrative-frames">
              <div className="narrative-frame placeholder">
                <div className="label">[ workflow detail · sticky frame ]</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEV BLOCK */}
      <section className="section">
        <div className="wrap">
          <span className="eyebrow"><span className="dot" />Built for builders</span>
          <h2 className="h1" style={{ marginTop: '14px', maxWidth: '18ch' }}>If you can `npm install`, you can ship.</h2>
          <div className="dev-grid">
            <div>
              <p className="lede">Three open-source packages. Pin your version. Bring your own auth. Run in CI. We don&apos;t lock you in — we make it easier to do the job.</p>
              <ul style={{ marginTop: '24px', fontFamily: 'var(--font-mono)', fontSize: '13.5px', listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li><span style={{ color: 'var(--accent-ink)' }}>@tapcraft/cli</span> — scaffold, sync, encode</li>
                <li><span style={{ color: 'var(--accent-ink)' }}>@tapcraft/storefront-sdk</span> — typed TS client</li>
                <li><span style={{ color: 'var(--accent-ink)' }}>@tapcraft/configurator-react</span> — drop-in 3D builder</li>
              </ul>
              <div style={{ marginTop: '28px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link className="btn btn--primary" href="#">Read the docs <span className="arrow">→</span></Link>
                <Link className="btn btn--ghost" href="#">github.com/tapcraft</Link>
              </div>
            </div>
            <div className="term2">
              <span className="dim"># install + scaffold a shop</span>{'\n'}
              <span className="c">$ npx @tapcraft/cli new my-shop</span>{'\n'}
              <span className="ok">✓</span> Next.js 15 + Storefront SDK{'\n'}
              <span className="ok">✓</span> Linked workspace tc_5f2a8b…{'\n\n'}
              <span className="dim"># sync orders from Etsy</span>{'\n'}
              <span className="c">$ tapcraft sync etsy --since=2d</span>{'\n'}
              <span className="ok">✓</span> 12 new · 3 customs queued{'\n\n'}
              <span className="dim"># program 240 NFC tags from a job</span>{'\n'}
              <span className="c">$ tapcraft nfc:program --batch=2287</span>{'\n'}
              <span className="ok">✓</span> 240/240 NTAG215 encoded{'\n'}
              <span className="ok">✓</span> Audit log → batch-2287.csv{'\n\n'}
              <span className="dim"># deploy to vercel</span>{'\n'}
              <span className="c">$ vercel --prod</span>{'\n'}
              <span className="ok">✓</span> Live at northbound.studio
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section final-cta" style={{ textAlign: 'center', borderTop: 0 }}>
        <div className="wrap">
          <h2 className="display" style={{ maxWidth: '18ch', margin: '0 auto' }}><em>Less reconciliation.</em><br />More shipping.</h2>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '36px', flexWrap: 'wrap' }}>
            <Link className="btn btn--primary btn--lg" href="/demo">Book a demo <span className="arrow">→</span></Link>
            <Link className="btn btn--soft btn--lg" href="/signup">Start free trial</Link>
          </div>
        </div>
      </section>
    </>
  );
}
