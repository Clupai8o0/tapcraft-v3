import Link from 'next/link';
import PageHero from '@/components/shared/PageHero';
import Reveal from '@/components/shared/Reveal';

export const metadata = {
  title: 'Platform pricing — TapCraft',
  description: 'Pricing for the TapCraft Platform — the SaaS that runs your store, printers, NFC encoder, and order queue. Flat fee, no per-transaction takes.',
  alternates: { canonical: '/platform/pricing' },
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Platform · Pricing"
        heading="Honest pricing."
        emphasis={<>Built <em className="serif-em">for studios.</em></>}
        lede="This is pricing for the TapCraft Platform — the SaaS that runs your store, your printers, your NFC encoder, and your order queue. Custom-run quotes (3D-printing, NFC encoding from our studio) are separate — get one at /customise."
      />

      <section style={{ padding: '0 0 64px' }}>
        <div className="wrap">
          <Reveal>
            <div className="toggle" style={{ marginBottom: 32 }}>
              <button className="active">Monthly</button>
              <button>Annual <span className="save">SAVE 20%</span></button>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
          <div className="tiers">
            <div className="tier">
              <div className="name">Solo</div>
              <div className="price">$0<small>/ mo</small></div>
              <p className="for">Etsy side-hustle, ≤2 printers, ≤25 orders/mo.</p>
              <ul className="feats">
                <li>1 sales channel</li>
                <li>1 user</li>
                <li>Watermarked configurator</li>
                <li>Community support</li>
                <li>Basic NFC encoding (50 tags/mo)</li>
              </ul>
              <Link className="btn btn--soft" style={{ marginTop: 'auto' }} href="/signup">Start free</Link>
            </div>
            <div className="tier">
              <div className="name">Starter</div>
              <div className="price">$39<small>/ mo</small></div>
              <p className="for">Solo shops, 2–5 printers, ≤200 orders/mo.</p>
              <ul className="feats">
                <li>2 sales channels</li>
                <li>3 users</li>
                <li>Basic NFC encoding</li>
                <li>Quote builder + 3D preview</li>
                <li>Email support · 24h SLA</li>
              </ul>
              <Link className="btn btn--soft" style={{ marginTop: 'auto' }} href="/signup">Start trial</Link>
            </div>
            <div className="tier popular">
              <div className="name">Pro</div>
              <div className="price">$99<small>/ mo</small></div>
              <p className="for">Growing shops, 5–15 printers, ≤1K orders/mo.</p>
              <ul className="feats">
                <li>All channels</li>
                <li>10 users</li>
                <li>AI-assisted quoting</li>
                <li>Customer-facing configurator</li>
                <li>Full NFC programming + audit log</li>
                <li>Priority support · 4h SLA</li>
              </ul>
              <Link className="btn btn--accent" style={{ marginTop: 'auto' }} href="/signup">Start trial</Link>
            </div>
            <div className="tier">
              <div className="name">Business</div>
              <div className="price">$249<small>/ mo</small></div>
              <p className="for">Print farms, 15–40 printers, ≤5K orders/mo.</p>
              <ul className="feats">
                <li>Multi-location</li>
                <li>Unlimited users</li>
                <li>Advanced printer routing</li>
                <li>API + webhooks</li>
                <li>White-label configurator</li>
                <li>Dedicated CSM</li>
              </ul>
              <Link className="btn btn--soft" style={{ marginTop: 'auto' }} href="/demo">Talk to sales</Link>
            </div>
          </div>

          </Reveal>

          <Reveal>
          <div style={{ marginTop: '24px', textAlign: 'center' }}>
            <div className="card" style={{ maxWidth: '720px', margin: '0 auto', display: 'flex', gap: '24px', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
              <div style={{ textAlign: 'left' }}>
                <div className="mono" style={{ color: 'var(--muted)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Enterprise</div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '26px', marginTop: '4px' }}>Bureaus, multi-site, OEMs.</div>
                <p className="muted" style={{ margin: '4px 0 0', fontSize: '14px' }}>SSO, SLA, dedicated CSM, custom integrations, on-prem NFC encoder.</p>
              </div>
              <Link className="btn btn--ghost" href="/demo">Talk to sales <span className="arrow">→</span></Link>
            </div>
          </div>

          </Reveal>

          {/* COMPARISON TABLE */}
          <Reveal>
          <div className="compare">
            <table>
              <thead>
                <tr><th>Compare features</th><th>Solo</th><th>Starter</th><th>Pro</th><th>Business</th></tr>
              </thead>
              <tbody>
                <tr className="group"><td colSpan={5}>Workspace</td></tr>
                <tr><td>Printers</td><td>2</td><td>5</td><td>15</td><td>40</td></tr>
                <tr><td>Orders / month</td><td>25</td><td>200</td><td>1,000</td><td>5,000</td></tr>
                <tr><td>Users</td><td>1</td><td>3</td><td>10</td><td>Unlimited</td></tr>
                <tr><td>Sales channels</td><td>1</td><td>2</td><td>All</td><td>All</td></tr>
                <tr className="group"><td colSpan={5}>NFC programming</td></tr>
                <tr><td>Tags / month</td><td>50</td><td>500</td><td>5,000</td><td>25,000</td></tr>
                <tr><td>Batch encoder + audit log</td><td className="no">—</td><td className="yes">●</td><td className="yes">●</td><td className="yes">●</td></tr>
                <tr><td>NDEF + custom records</td><td className="no">—</td><td className="no">—</td><td className="yes">●</td><td className="yes">●</td></tr>
                <tr className="group"><td colSpan={5}>Configurator</td></tr>
                <tr><td>Drop-in 3D configurator</td><td className="yes">Watermarked</td><td className="yes">●</td><td className="yes">●</td><td className="yes">●</td></tr>
                <tr><td>White-label</td><td className="no">—</td><td className="no">—</td><td className="no">—</td><td className="yes">●</td></tr>
                <tr className="group"><td colSpan={5}>Production</td></tr>
                <tr><td>Bambu / Prusa / Orca / Cura</td><td className="yes">●</td><td className="yes">●</td><td className="yes">●</td><td className="yes">●</td></tr>
                <tr><td>Advanced printer routing</td><td className="no">—</td><td className="no">—</td><td className="yes">●</td><td className="yes">●</td></tr>
                <tr><td>Multi-location</td><td className="no">—</td><td className="no">—</td><td className="no">—</td><td className="yes">●</td></tr>
                <tr className="group"><td colSpan={5}>Developers</td></tr>
                <tr><td>REST + GraphQL API</td><td className="yes">Read-only</td><td className="yes">●</td><td className="yes">●</td><td className="yes">●</td></tr>
                <tr><td>Webhooks</td><td className="no">—</td><td className="no">—</td><td className="yes">●</td><td className="yes">●</td></tr>
                <tr><td>Open-source CLI &amp; SDK</td><td className="yes">●</td><td className="yes">●</td><td className="yes">●</td><td className="yes">●</td></tr>
                <tr className="group"><td colSpan={5}>Support</td></tr>
                <tr><td>Channel</td><td>Community</td><td>Email · 24h</td><td>Email · 4h</td><td>Slack + CSM</td></tr>
              </tbody>
            </table>
          </div>

          </Reveal>

          {/* FAQ */}
          <Reveal>
          <div className="faq-pricing">
            <div>
              <span className="eyebrow">Pricing FAQ</span>
              <h2 className="h2" style={{ marginTop: '14px' }}>The questions that come up before signing up.</h2>
            </div>
            <div className="faq" style={{ marginTop: 0 }}>
              <details className="faq-q" open>
                <summary>Do you charge per transaction?</summary>
                <p>No. Flat platform fee. Channel fees (Shopify, Etsy, Stripe) are pass-through and visible per order — we never take a cut on top.</p>
              </details>
              <details className="faq-q">
                <summary>What counts as an order?</summary>
                <p>One inbound order from any channel = one order. Multi-line items in a single order count once. Quotes don&apos;t count until accepted.</p>
              </details>
              <details className="faq-q">
                <summary>What happens if I exceed my tier?</summary>
                <p>We&apos;ll email you when you hit 80% and again at 100%. We don&apos;t hard-block — overages bill at $0.05/order through the end of the cycle and you can upgrade any time.</p>
              </details>
              <details className="faq-q">
                <summary>Is there a setup fee?</summary>
                <p>None on Solo through Business. Enterprise includes a one-off implementation fee scoped to your integrations and migration needs.</p>
              </details>
              <details className="faq-q">
                <summary>Do you offer a discount for makers / non-profits?</summary>
                <p>Yes — 50% off Pro for the first 12 months for verified non-profits, makerspaces, and educational institutions. Email <span className="mono">hello@tapcraft.studio</span>.</p>
              </details>
            </div>
          </div>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ textAlign: 'center' }}>
        <div className="wrap">
          <Reveal>
          <h2 className="display" style={{ maxWidth: '18ch', margin: '0 auto' }}><em>Try it</em> for 14 days.</h2>
          <p className="lede" style={{ margin: '24px auto 36px' }}>No card. Cancel anytime. Your data exports as CSV the moment you ask.</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link className="btn btn--primary btn--lg" href="/signup">Start free trial <span className="arrow">→</span></Link>
            <Link className="btn btn--ghost btn--lg" href="/demo">Book a demo</Link>
          </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
