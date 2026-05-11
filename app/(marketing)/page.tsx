import Link from 'next/link';

export const metadata = {
  title: 'TapCraft — The operating system for 3D-printed NFC products',
  description: 'Manage content, custom orders, NFC programming, and the production queue — in one platform built for studios that ship.',
};

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <div className="hero-meta">
              <span className="eyebrow"><span className="dot" />TapCraft Platform · v1.0 beta</span>
            </div>
            <h1 className="display">
              The <em>operating system</em><br />for 3D-printed<br />NFC products.
            </h1>
            <p className="lede" style={{ marginTop: '28px' }}>
              Manage content, custom orders, NFC programming, and the production queue —
              in one platform built for studios that ship.
            </p>
            <div className="hero-actions">
              <Link className="btn btn--primary btn--lg" href="/demo">Book a demo <span className="arrow">→</span></Link>
              <Link className="btn btn--soft btn--lg" href="/signup">Start free trial</Link>
            </div>
            <ul className="hero-bullets">
              <li><span className="check">✓</span> 14-day trial</li>
              <li><span className="check">✓</span> No card required</li>
              <li><span className="check">✓</span> Made in Naarm</li>
            </ul>
          </div>

          <div style={{ position: 'relative' }}>
            <div className="hero-canvas">
              <div className="keychain">
                <svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="kbody" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="#1a1714" />
                      <stop offset="1" stopColor="#2a2622" />
                    </linearGradient>
                    <pattern id="layers" width="2" height="2" patternUnits="userSpaceOnUse">
                      <path d="M0 1 H2" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <circle cx="40" cy="110" r="22" fill="none" stroke="#888" strokeWidth="3" />
                  <rect x="68" y="30" width="220" height="160" rx="22" fill="url(#kbody)" />
                  <rect x="68" y="30" width="220" height="160" rx="22" fill="url(#layers)" />
                  <rect x="92" y="58" width="36" height="36" rx="6" fill="oklch(0.62 0.18 255)" />
                  <text x="178" y="84" fontFamily="Manrope, sans-serif" fontWeight="700" fontSize="22" fill="#F2EDE3">TapCraft</text>
                  <text x="178" y="108" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#b8b0a3">NFC · NTAG215</text>
                  <g transform="translate(110 145)" stroke="#F2EDE3" strokeWidth="1.5" fill="none" opacity="0.85">
                    <path d="M0 12 Q 12 0 24 12" />
                    <path d="M-6 18 Q 12 -6 30 18" />
                    <path d="M-12 24 Q 12 -12 36 24" />
                  </g>
                  <text x="158" y="168" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#6e655a">batch #2287 · slot 04</text>
                </svg>
                <div className="nfc-pulse">
                  <span className="pulse" />
                  <span>tapcraft.studio/c/aimee-2287</span>
                </div>
              </div>
              <div className="ui-card">
                <div className="ui-head">
                  <div className="dots"><span /><span /><span /></div>
                  <div className="crumb">Orders / #ORD-4012 / Job 03</div>
                  <div className="mono" style={{ color: 'var(--muted)' }}>⌘K</div>
                </div>
                <div className="ui-body">
                  <div className="ui-row">
                    <div className="l">
                      <div className="swatch" style={{ background: 'linear-gradient(135deg,#1a1714,#2a2622)' }} />
                      <div>
                        <div style={{ fontWeight: 500 }}>Onyx PLA · matte</div>
                        <div className="mono" style={{ color: 'var(--muted)', fontSize: '10.5px', marginTop: '2px' }}>est. 14g · 38 min</div>
                      </div>
                    </div>
                    <span className="pill ok">Sliced</span>
                  </div>
                  <div className="ui-row">
                    <div className="l">
                      <div className="swatch" style={{ background: 'linear-gradient(135deg,oklch(0.62 0.18 255),oklch(0.50 0.20 255))' }} />
                      <div>
                        <div style={{ fontWeight: 500 }}>NFC encode → URL</div>
                        <div className="mono" style={{ color: 'var(--muted)', fontSize: '10.5px', marginTop: '2px' }}>NTAG215 · 540 bytes</div>
                      </div>
                    </div>
                    <span className="pill">Queued</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="float-chip">
              <div>
                <div className="num">2,287</div>
                <div className="lbl">tags programmed today</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOGO STRIP */}
      <section className="logo-row" style={{ borderTop: '1px solid var(--line)' }}>
        <div className="wrap">
          <div className="label">Trusted by studios shipping for</div>
          <div className="logo-strip">
            <div className="lg">Northbound</div>
            <div className="lg" style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '18px', letterSpacing: '0.2em' }}>FILA·MENT</div>
            <div className="lg">Hatch &amp; Co.</div>
            <div className="lg" style={{ fontFamily: 'var(--font-mono)', fontSize: '13px' }}>PRINTHAUS</div>
            <div className="lg">Yarra Makers</div>
            <div className="lg" style={{ fontFamily: 'var(--font-mono)', fontWeight: 500, fontSize: '14px', letterSpacing: 0 }}>cooee/badge</div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="section">
        <div className="wrap">
          <span className="eyebrow"><span className="dot" />The problem</span>
          <h2 className="h1" style={{ marginTop: '14px', maxWidth: '18ch' }}>
            If you run a custom 3D printing business, you&apos;ve duct-taped <em className="serif-em">six</em> tools together.
          </h2>
          <div className="problem-grid">
            <div className="problem-card">
              <div className="icon">01</div>
              <h3>Orders live in five places</h3>
              <p>Etsy DMs, Shopify variants, Instagram screenshots, a Notion doc, and a Trello board. Every custom job becomes a copy-paste exercise.</p>
              <div className="stack">
                <span>Etsy</span><span>Shopify</span><span>DM</span><span>Notion</span><span>Trello</span>
              </div>
            </div>
            <div className="problem-card">
              <div className="icon">02</div>
              <h3>The print farm doesn&apos;t know the customer</h3>
              <p>Your slicer talks to your printers. Your store talks to customers. Nothing in the middle understands a quote, a deadline, or a margin.</p>
              <div className="stack">
                <span>Bambu Studio</span><span>OrcaSlicer</span><span>spreadsheet</span>
              </div>
            </div>
            <div className="problem-card">
              <div className="icon">03</div>
              <h3>NFC encoding is a side project</h3>
              <p>4,000 wristbands at 2am with the NFC Tools app, no audit trail, no batch reconciliation. One wrong URL becomes a refund.</p>
              <div className="stack">
                <span>NFC Tools</span><span>NTAG.cards</span><span>USB writer</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="section" style={{ paddingTop: 0, borderTop: 0 }}>
        <div className="wrap">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px' }}>
            <div>
              <span className="eyebrow"><span className="dot" />The platform</span>
              <h2 className="h1" style={{ marginTop: '14px', maxWidth: '20ch' }}>
                One tool. Six surfaces. Built for the way you actually ship.
              </h2>
            </div>
            <Link className="btn btn--ghost" href="/platform">Tour the platform <span className="arrow">→</span></Link>
          </div>
          <div className="pillar-grid">
            <div className="pillar"><div className="num">/01</div><div><h4>Headless CMS</h4><p>Products, variants, STL libraries.</p></div></div>
            <div className="pillar"><div className="num">/02</div><div><h4>Custom orders</h4><p>Intake, quote, 3D preview.</p></div></div>
            <div className="pillar"><div className="num">/03</div><div><h4>Configurator</h4><p>Drop-in 3D builder.</p></div></div>
            <div className="pillar"><div className="num">/04</div><div><h4>NFC programming</h4><p>Batch URLs, audit log.</p></div></div>
            <div className="pillar"><div className="num">/05</div><div><h4>Production queue</h4><p>Bambu, Prusa, Orca.</p></div></div>
            <div className="pillar"><div className="num">/06</div><div><h4>Dev-first</h4><p>API, CLI, webhooks.</p></div></div>
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="section">
        <div className="wrap">
          <span className="eyebrow"><span className="dot" />The flow</span>
          <h2 className="h1" style={{ marginTop: '14px', maxWidth: '22ch' }}>
            From a customer&apos;s tap to a shipped, NFC-encoded object.
          </h2>
          <p className="lede" style={{ marginTop: '18px' }}>Five surfaces, one record. Every step writes back to the order — no reconciliation.</p>
          <div className="workflow">
            <div className="step">
              <div className="step-num">i.</div>
              <h4>Configure</h4>
              <p>Customer picks a base, color, NFC payload. 3D preview rotates live.</p>
              <div className="step-mini">[ R3F preview ]</div>
            </div>
            <div className="step">
              <div className="step-num">ii.</div>
              <h4>Quote</h4>
              <p>STL → volume → time → price. Auto-quote with margin guardrails.</p>
              <div className="step-mini">[ quote PDF ]</div>
            </div>
            <div className="step">
              <div className="step-num">iii.</div>
              <h4>Order</h4>
              <p>Stripe + ShipStation handled. Order lands as a job, not a screenshot.</p>
              <div className="step-mini">[ order detail ]</div>
            </div>
            <div className="step">
              <div className="step-num">iv.</div>
              <h4>Print + program</h4>
              <p>Sliced for the right printer. NFC encoded in batch, audit log saved.</p>
              <div className="step-mini">[ farm queue ]</div>
            </div>
            <div className="step">
              <div className="step-num">v.</div>
              <h4>Ship</h4>
              <p>Label printed, tracking pushed back to the channel. Re-order ready.</p>
              <div className="step-mini">[ shipment ]</div>
            </div>
          </div>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section className="section" style={{ paddingTop: 0, borderTop: 0 }}>
        <div className="wrap">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px' }}>
            <div>
              <span className="eyebrow"><span className="dot" />Integrations</span>
              <h2 className="h2" style={{ marginTop: '14px', maxWidth: '24ch' }}>Plays nice with the tools your studio already runs on.</h2>
            </div>
            <Link className="btn btn--ghost" href="#">View all 28 integrations <span className="arrow">→</span></Link>
          </div>
          <div className="integ-grid">
            <div className="integ">Shopify</div>
            <div className="integ">Etsy</div>
            <div className="integ" style={{ fontFamily: 'var(--font-mono)', fontSize: '13px' }}>Bambu Lab</div>
            <div className="integ">Prusa</div>
            <div className="integ" style={{ fontStyle: 'italic' }}>Orca</div>
            <div className="integ">Cura</div>
            <div className="integ" style={{ fontFamily: 'var(--font-mono)', fontSize: '13px' }}>Zapier</div>
            <div className="integ">Xero</div>
            <div className="integ">MYOB</div>
            <div className="integ">Klaviyo</div>
            <div className="integ" style={{ fontFamily: 'var(--font-mono)', fontSize: '13px' }}>Stripe</div>
            <div className="integ">eBay</div>
            <div className="integ">Square</div>
            <div className="integ">Cvent</div>
            <div className="integ">HubSpot</div>
            <div className="integ" style={{ fontStyle: 'italic' }}>+13 more</div>
          </div>
        </div>
      </section>

      {/* PRODUCTS STRIP */}
      <section className="section">
        <div className="wrap">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px' }}>
            <div>
              <span className="eyebrow"><span className="dot" />The products</span>
              <h2 className="h1" style={{ marginTop: '14px', maxWidth: '22ch' }}>
                Need the products instead of the platform? <em className="serif-em">We make them too.</em>
              </h2>
              <p className="lede" style={{ marginTop: '14px' }}>Bespoke 3D-printed NFC keychains, lanyards, and badges. Designed and printed in Melbourne.</p>
            </div>
            <Link className="btn btn--ghost" href="/showcase">Shop products <span className="arrow">→</span></Link>
          </div>
          <div className="product-strip">
            <Link className="product-card" href="/showcase/keychains">
              <div className="img placeholder placeholder--ink"><span className="label">[ NFC keychain · onyx ]</span></div>
              <div className="body">
                <div><h4>NFC keychains</h4><div className="from">From AUD $5 / unit at 1,000+</div></div>
                <span className="arrow">→</span>
              </div>
            </Link>
            <Link className="product-card" href="/showcase">
              <div className="img placeholder"><span className="label">[ NFC lanyard · woven ]</span></div>
              <div className="body">
                <div><h4>NFC lanyards</h4><div className="from">From AUD $1.20 / unit at 1,000+</div></div>
                <span className="arrow">→</span>
              </div>
            </Link>
            <Link className="product-card" href="/customise">
              <div className="img placeholder"><span className="label">[ custom 3D · bespoke shape ]</span></div>
              <div className="body">
                <div><h4>Custom 3D</h4><div className="from">From AUD $150 mould design fee</div></div>
                <span className="arrow">→</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* VERTICALS */}
      <section className="section" style={{ paddingTop: 0, borderTop: 0 }}>
        <div className="wrap">
          <span className="eyebrow"><span className="dot" />Solutions by vertical</span>
          <h2 className="h2" style={{ marginTop: '14px', maxWidth: '24ch' }}>Software for the people who actually run the production.</h2>
          <div className="verticals">
            <Link className="vertical" href="/solutions/events">
              <div className="v-num">/01</div>
              <div><h4>Events</h4><p className="muted" style={{ fontSize: '13px', marginTop: '4px' }}>Lead capture, cashless, badges.</p></div>
              <div className="arrow">→</div>
            </Link>
            <Link className="vertical" href="#">
              <div className="v-num">/02</div>
              <div><h4>Real estate</h4><p className="muted" style={{ fontSize: '13px', marginTop: '4px' }}>Open-home, agent cards, tags.</p></div>
              <div className="arrow">→</div>
            </Link>
            <Link className="vertical" href="#">
              <div className="v-num">/03</div>
              <div><h4>Hospitality</h4><p className="muted" style={{ fontSize: '13px', marginTop: '4px' }}>Review cards, menus, tip jars.</p></div>
              <div className="arrow">→</div>
            </Link>
            <Link className="vertical" href="#">
              <div className="v-num">/04</div>
              <div><h4>Print-on-demand</h4><p className="muted" style={{ fontSize: '13px', marginTop: '4px' }}>Etsy, Shopify, custom intake.</p></div>
              <div className="arrow">→</div>
            </Link>
          </div>
        </div>
      </section>

      {/* QUOTE / SOCIAL PROOF */}
      <section className="section">
        <div className="wrap quote-block">
          <div>
            <blockquote>
              We were running our farm out of three spreadsheets and a Notion board. TapCraft is the first tool that understood we sell <em>and</em> manufacture.
            </blockquote>
            <div className="quote-cite">
              <div className="av" />
              <div>
                <div style={{ fontWeight: 500 }}>Aimee Tran</div>
                <div className="mono" style={{ color: 'var(--muted)' }}>Founder · Northbound Studio · Brunswick VIC</div>
              </div>
            </div>
          </div>
          <div className="quote-stats">
            <div><div className="stat-num">68%</div><div className="stat-lbl">faster custom-order turnaround</div></div>
            <div><div className="stat-num">3.2×</div><div className="stat-lbl">more re-orders within 90 days</div></div>
            <div><div className="stat-num">14</div><div className="stat-lbl">countries shipping today</div></div>
          </div>
        </div>
      </section>

      {/* PRICING TEASER */}
      <section className="section" style={{ paddingTop: 0, borderTop: 0 }}>
        <div className="wrap">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px' }}>
            <div>
              <span className="eyebrow"><span className="dot" />Pricing</span>
              <h2 className="h1" style={{ marginTop: '14px', maxWidth: '22ch' }}>Start free. Scale on shops, printers, orders, and channels.</h2>
            </div>
            <Link className="btn btn--ghost" href="/pricing">See all tiers <span className="arrow">→</span></Link>
          </div>
          <div className="price-cards">
            <div className="price-card">
              <div className="tier">Starter</div>
              <div className="price">$39<small>/ mo</small></div>
              <p className="muted" style={{ margin: 0, fontSize: '14px' }}>Solo shops · 2–5 printers · 200 orders/mo</p>
              <ul>
                <li>2 sales channels</li>
                <li>Basic NFC encoding</li>
                <li>3 users</li>
              </ul>
              <Link className="btn btn--soft" style={{ marginTop: 'auto' }} href="/signup">Start trial</Link>
            </div>
            <div className="price-card popular">
              <div className="tier">Pro</div>
              <div className="price">$99<small>/ mo</small></div>
              <p style={{ margin: 0, color: '#b8b0a3', fontSize: '14px' }}>Growing shops · 5–15 printers · 1K orders/mo</p>
              <ul>
                <li>All channels</li>
                <li>AI quoting + customer configurator</li>
                <li>Full NFC programming · 10 users</li>
              </ul>
              <Link className="btn btn--accent" style={{ marginTop: 'auto' }} href="/signup">Start trial</Link>
            </div>
            <div className="price-card">
              <div className="tier">Business</div>
              <div className="price">$249<small>/ mo</small></div>
              <p className="muted" style={{ margin: 0, fontSize: '14px' }}>Print farms · 15–40 printers · 5K orders/mo</p>
              <ul>
                <li>Multi-location</li>
                <li>Advanced routing + API</li>
                <li>White-label configurator</li>
              </ul>
              <Link className="btn btn--soft" style={{ marginTop: 'auto' }} href="/demo">Talk to sales</Link>
            </div>
          </div>
        </div>
      </section>

      {/* DEV BLOCK */}
      <section className="section" style={{ paddingTop: 0, borderTop: 0 }}>
        <div className="wrap">
          <div className="dev-block">
            <div>
              <span className="eyebrow" style={{ color: '#b8b0a3' }}><span className="dot" />For developers</span>
              <h2 className="h1" style={{ marginTop: '14px', maxWidth: '18ch' }}>Open-source SDK. Drop-in configurator. Real CLI.</h2>
              <p style={{ marginTop: '18px', color: '#b8b0a3', maxWidth: '48ch' }}>
                Headless from day one. <span className="mono" style={{ color: 'var(--accent)' }}>@tapcraft/cli</span> for shops,{' '}
                <span className="mono" style={{ color: 'var(--accent)' }}>storefront-sdk</span> for devs,{' '}
                <span className="mono" style={{ color: 'var(--accent)' }}>configurator-react</span> for everyone else. MIT-licensed. Deploy to Vercel in one click.
              </p>
              <div style={{ marginTop: '28px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link className="btn" style={{ background: 'var(--bg-2)', color: 'var(--ink)', border: '1px solid var(--line)' }} href="#">Read the docs <span className="arrow">→</span></Link>
                <Link className="btn" style={{ background: 'transparent', color: 'var(--ink-2)', border: '1px solid var(--line)' }} href="#">github.com/tapcraft <span className="arrow">→</span></Link>
              </div>
            </div>
            <div className="terminal">
              <div className="head"><span /><span /><span /></div>
              <pre>
                <span className="dim">$</span> <span className="cmd">npx @tapcraft/cli new my-shop</span>{'\n'}
                <span className="dim">↳ Scaffolding Next.js + Storefront SDK…</span>{'\n'}
                <span className="ok">✓</span> Created <span className="dim">my-shop/</span>{'\n'}
                <span className="ok">✓</span> Linked workspace <span className="dim">tc_5f2a…</span>{'\n\n'}
                <span className="dim">$</span> <span className="cmd">tapcraft nfc:program --batch=2287</span>{'\n'}
                <span className="dim">↳ Reading 240 NDEF records…</span>{'\n'}
                <span className="ok">✓</span> 240/240 tags encoded{'\n'}
                <span className="ok">✓</span> Audit log → <span className="dim">batch-2287.csv</span>{'\n\n'}
                <span className="dim">$</span> <span className="cmd">tapcraft sync etsy</span>{'\n'}
                <span className="ok">✓</span> 12 new orders · 3 customs queued
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="wrap">
          <span className="eyebrow"><span className="dot" />Common questions</span>
          <h2 className="h1" style={{ marginTop: '14px', maxWidth: '18ch' }}>Things buyers ask before they buy.</h2>
          <div className="faq">
            <details className="faq-q" open>
              <summary>Do I own my data?</summary>
              <p>Yes. Your products, orders, customers, STL files, and NFC programming logs are exportable as CSV/JSON at any time. We hold a Data Processing Agreement and a sub-processor list at /trust.</p>
            </details>
            <details className="faq-q">
              <summary>Where is data hosted?</summary>
              <p>Vercel + Sydney edge. Australian Privacy Act 1988 compliant. EU/UK customers can opt into Frankfurt residency on Business and Enterprise tiers.</p>
            </details>
            <details className="faq-q">
              <summary>Will TapCraft work with my Bambu / Prusa farm?</summary>
              <p>Yes. We integrate via Bambu Lab Connect and PrusaConnect, and OrcaSlicer / Cura via watch-folder + slicer profile sync. Up to 40 printers per workspace on Business; unlimited on Enterprise.</p>
            </details>
            <details className="faq-q">
              <summary>Is NFC encoding really first-class?</summary>
              <p>Yes — programming a tag is a workflow object, not a side script. Batch URL programming, NDEF + URI records, per-tag audit log, reconciliation against shipments. NTAG213/215/216 supported out of the box.</p>
            </details>
            <details className="faq-q">
              <summary>Can I cancel any time?</summary>
              <p>Yes — monthly plans cancel any time, your data stays exportable for 30 days post-cancellation. Annual plans are pro-rated for unused months on request.</p>
            </details>
            <details className="faq-q">
              <summary>Do you charge per transaction?</summary>
              <p>No. Flat platform fee. Channel fees (Shopify, Etsy, Stripe) are pass-through and visible per order — we never take a cut on top.</p>
            </details>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="wrap">
          <span className="eyebrow"><span className="dot" />Ready to ship?</span>
          <h2 className="display" style={{ marginTop: '18px' }}>Stop reconciling. <em>Start shipping.</em></h2>
          <p className="lede" style={{ margin: '24px auto 36px' }}>A 14-day trial, no card, cancel anytime. Or book 25 minutes with a founder — we&apos;ll bring your data along.</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link className="btn btn--primary btn--lg" href="/demo">Book a demo <span className="arrow">→</span></Link>
            <Link className="btn btn--ghost btn--lg" href="/signup">Start free trial</Link>
          </div>
        </div>
      </section>
    </>
  );
}
