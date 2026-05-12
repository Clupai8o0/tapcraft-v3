import Link from 'next/link';
import Reveal from '@/components/shared/Reveal';
import AnimatedHeading from '@/components/shared/AnimatedHeading';

export const metadata = {
  title: 'Book a demo — TapCraft',
  description: '25 minutes with a TapCraft founder. Bring your real data.',
};

export default function DemoPage() {
  return (
    <section className="section--hero">
      <div className="wrap demo-wrap">
        <Reveal>
        <div className="demo-left">
          <span className="eyebrow" style={{ marginBottom: 18, display: 'inline-flex' }}>Book a demo</span>
          <AnimatedHeading as="h1" emphasis={<em>Bring your data.</em>}>25 minutes.</AnimatedHeading>
          <p className="lede" style={{ marginTop: 18 }}>A founder walks you through the platform with your real Etsy / Shopify / Bambu data. No slides. No salesy framing. Just see if it actually fits.</p>

          <div className="demo-perks">
            <div className="perk">
              <div className="ico">i.</div>
              <div>
                <h4>Real data, not a sandbox</h4>
                <p>Bring a CSV of recent orders. We&apos;ll wire it into a working Pro workspace before the call.</p>
              </div>
            </div>
            <div className="perk">
              <div className="ico">ii.</div>
              <div>
                <h4>NFC programming live</h4>
                <p>We&apos;ll encode a batch of NTAG215s during the call so you can see the audit-log workflow.</p>
              </div>
            </div>
            <div className="perk">
              <div className="ico">iii.</div>
              <div>
                <h4>Honest fit check</h4>
                <p>If TapCraft isn&apos;t the right tool yet, we&apos;ll tell you. We&apos;ll point at the closest alternative.</p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '48px', paddingTop: '28px', borderTop: '1px solid var(--line)' }}>
            <div className="mono" style={{ color: 'var(--muted)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '14px' }}>Recently said about the demo</div>
            <blockquote style={{ margin: 0, fontFamily: 'var(--font-serif)', fontSize: '22px', lineHeight: '1.3' }}>
              &ldquo;I came in expecting a sales pitch. They opened my own Shopify export and started asking me questions about my margin floor.&rdquo;
            </blockquote>
            <div className="mono" style={{ color: 'var(--muted)', fontSize: '12px', marginTop: '14px' }}>— Jules, Hatch &amp; Co. · Collingwood</div>
          </div>
        </div>

        </Reveal>

        <Reveal delay={0.15}>
        <div className="booking">
          <div className="booking-head">
            <div className="ava" />
            <div>
              <h3>Demo with a TapCraft founder</h3>
              <div className="meta">25 min · Google Meet · AEST/AEDT</div>
            </div>
            <div style={{ marginLeft: 'auto' }}><span className="chip">Avg response 18 min</span></div>
          </div>

          <div className="booking-body">
            <div>
              <div className="cal-month-h">
                <h4>April 2026</h4>
                <div style={{ display: 'flex', gap: '4px' }}>
                  <button style={{ width: '26px', height: '26px', borderRadius: '6px', border: '1px solid var(--line)', background: 'var(--bg)', fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--ink-2)', cursor: 'pointer' }}>‹</button>
                  <button style={{ width: '26px', height: '26px', borderRadius: '6px', border: '1px solid var(--line)', background: 'var(--bg)', fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--ink-2)', cursor: 'pointer' }}>›</button>
                </div>
              </div>
              <div className="cal-grid">
                <div className="dow">M</div><div className="dow">T</div><div className="dow">W</div><div className="dow">T</div><div className="dow">F</div><div className="dow">S</div><div className="dow">S</div>
                <div className="day muted">31</div>
                <div className="day muted">1</div><div className="day muted">2</div><div className="day muted">3</div><div className="day muted">4</div><div className="day muted">5</div>
                <div className="day muted">6</div>
                <div className="day avail">7</div><div className="day avail">8</div><div className="day avail">9</div><div className="day avail">10</div><div className="day avail">11</div>
                <div className="day muted">12</div><div className="day muted">13</div>
                <div className="day avail">14</div><div className="day avail">15</div><div className="day avail">16</div><div className="day avail">17</div><div className="day avail">18</div>
                <div className="day muted">19</div><div className="day muted">20</div>
                <div className="day avail">21</div><div className="day avail">22</div><div className="day avail">23</div><div className="day avail">24</div><div className="day avail">25</div>
                <div className="day muted">26</div><div className="day muted">27</div>
                <div className="day avail selected">28</div><div className="day avail">29</div><div className="day avail">30</div>
              </div>
            </div>

            <div>
              <div className="slots-h">Tuesday, 28 April</div>
              <div className="slots">
                <div className="slot">9:00</div>
                <div className="slot">9:30</div>
                <div className="slot taken">10:00</div>
                <div className="slot">10:30</div>
                <div className="slot taken">11:00</div>
                <div className="slot selected">11:30</div>
                <div className="slot">14:00</div>
                <div className="slot">14:30</div>
                <div className="slot">15:00</div>
                <div className="slot taken">15:30</div>
                <div className="slot">16:00</div>
                <div className="slot">16:30</div>
              </div>
            </div>
          </div>

          <div className="summary">
            <span>Tue 28 Apr · 11:30 AEST · 25 min</span>
            <span>Google Meet ↗</span>
          </div>

          <div className="booking-form">
            <div className="row">
              <label>Work email<input type="email" defaultValue="aimee@northbound.studio" /></label>
              <label>Company<input type="text" defaultValue="Northbound Studio" /></label>
            </div>
            <div className="row">
              <label>Role<input type="text" placeholder="Founder, Ops, Eng..." /></label>
              <label>{"What's the main thing on your mind?"}
                <select>
                  <option>Replacing my current stack</option>
                  <option>Just exploring</option>
                  <option>NFC programming at scale</option>
                  <option>Custom-order intake</option>
                  <option>Multi-channel order sync</option>
                </select>
              </label>
            </div>
            <Link className="btn btn--primary btn--lg" style={{ justifyContent: 'center', marginTop: '8px' }} href="#">Confirm booking <span className="arrow">→</span></Link>
            <p className="mono" style={{ margin: '4px 0 0', color: 'var(--muted)', fontSize: '11px', textAlign: 'center' }}>By booking you agree to TapCraft&apos;s privacy policy. We never share your details.</p>
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  );
}
