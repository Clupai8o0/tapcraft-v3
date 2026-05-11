import Link from 'next/link';

export const metadata = {
  title: 'For events & conferences — TapCraft',
  description: 'From mood board to doors-open. 3,000 badges in six weeks.',
};

export default function SolutionsEventsPage() {
  return (
    <>
      <section className="sh">
        <div className="wrap">
          <div className="sh-grid">
            <div>
              <span className="eyebrow"><span className="dot" />For events &amp; conferences</span>
              <h1 className="display" style={{ marginTop: '18px' }}>3,000 badges. <em>Six weeks.</em> One Slack channel.</h1>
            </div>
            <p className="lede">From mood board to the morning of doors-open. We&apos;ve shipped registration kits for SXSW Sydney, Pause Fest, Vivid, and 40+ corporate offsites. Here&apos;s how the schedule actually works.</p>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="stage-grid">
            <div className="stage">
              <div className="ph">↳ Week 1</div>
              <h3>Brief &amp; mould design</h3>
              <p>Send us your event creative — we mock up the badge in 48h. Three rounds included.</p>
              <div className="week"><span>Output</span><span className="v">3D file + render</span></div>
            </div>
            <div className="stage">
              <div className="ph">↳ Weeks 2–4</div>
              <h3>Print &amp; finish</h3>
              <p>Brunswick studio runs the queue. Live progress in your dashboard, photos every 250 units.</p>
              <div className="week"><span>Throughput</span><span className="v">~600/day</span></div>
            </div>
            <div className="stage">
              <div className="ph">↳ Week 5</div>
              <h3>Encode &amp; reconcile</h3>
              <p>Each badge encoded with attendee URL. Reconciled against your access-control system + CSV.</p>
              <div className="week"><span>Audit log</span><span className="v">Per-tag</span></div>
            </div>
            <div className="stage">
              <div className="ph">↳ Week 6</div>
              <h3>Ship &amp; on-site</h3>
              <p>Tracked freight. We can hand-deliver in Melb/Syd. Founder on standby Slack during doors-open.</p>
              <div className="week"><span>SLA</span><span className="v">Same-day fix</span></div>
            </div>
          </div>

          <div className="timeline">
            <span className="eyebrow" style={{ color: 'var(--muted)' }}><span className="dot" />Live: Pause Fest 2026</span>
            <h2 className="h1" style={{ marginTop: '14px' }}>240 badges. T-minus 11 days.</h2>
            <p className="lede" style={{ marginTop: '14px' }}>Here&apos;s what your dashboard looks like. Every block is a real status push from the print floor.</p>
            <div className="timeline-bar">
              <div className="blk f1" />
              <div className="blk f1" />
              <div className="blk f2" />
              <div className="blk f2" />
              <div className="blk f3" />
              <div className="blk f3" />
              <div className="blk live" />
              <div className="blk" />
            </div>
            <div className="timeline-labels">
              <div>Brief</div><div>Mould</div><div>Material</div><div>Print 1</div><div>Print 2</div><div>Encode</div><div style={{ color: 'var(--accent-ink)' }}>Reconcile · NOW</div><div>Ship</div>
            </div>
          </div>

          <span className="eyebrow"><span className="dot" />Cases</span>
          <h2 className="h1" style={{ marginTop: '14px', maxWidth: '24ch', marginBottom: '32px' }}>Two events that bet their badge on us.</h2>
          <div className="case-grid">
            <div className="case">
              <div className="img placeholder placeholder--ink"><span className="label">[ Pause Fest 2026 ]</span></div>
              <div className="body">
                <div className="meta">Conference · 240 attendees · Melbourne</div>
                <h3>Pause Fest pivoted from PVC to PLA in 9 days</h3>
                <p style={{ color: 'var(--ink-2)', margin: '0 0 16px' }}>Their original supplier missed a print run with two weeks to go. We onboarded their attendee CSV, designed a brass-finish PLA badge, and encoded NTAG215s with per-attendee URLs.</p>
                <div className="stats">
                  <div><div className="n">9d</div><div className="l">brief → ship</div></div>
                  <div><div className="n">98%</div><div className="l">tap success</div></div>
                  <div><div className="n">$2.40</div><div className="l">cost / unit</div></div>
                </div>
              </div>
            </div>
            <div className="case">
              <div className="img placeholder"><span className="label">[ SXSW Sydney 2025 ]</span></div>
              <div className="body">
                <div className="meta">Festival · 3,000 wristbands · Sydney</div>
                <h3>SXSW Sydney scaled cashless on a 6-week clock</h3>
                <p style={{ color: 'var(--ink-2)', margin: '0 0 16px' }}>PHA-filament wristbands tied to Stripe Terminal for cashless purchases. Reconciliation reports went straight to their finance team in Xero.</p>
                <div className="stats">
                  <div><div className="n">3k</div><div className="l">units shipped</div></div>
                  <div><div className="n">42s</div><div className="l">avg checkout</div></div>
                  <div><div className="n">0</div><div className="l">field replacements</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ borderTop: '1px solid var(--line)', marginTop: '80px', padding: '80px 0', textAlign: 'center' }}>
        <div className="wrap">
          <h2 className="display" style={{ maxWidth: '18ch', margin: '0 auto' }}><em>Doors-open</em> in less than 8 weeks?</h2>
          <p className="lede" style={{ margin: '24px auto 36px' }}>Tell us the date and the headcount. We&apos;ll come back with a quote and a slot in the Brunswick queue within 24 hours.</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link className="btn btn--primary btn--lg" href="/customise">Get an event quote <span className="arrow">→</span></Link>
            <Link className="btn btn--ghost btn--lg" href="/demo">Book the events demo</Link>
          </div>
        </div>
      </section>
    </>
  );
}
