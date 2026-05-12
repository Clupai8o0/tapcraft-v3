import Link from 'next/link';
import PageHero from '@/components/shared/PageHero';
import Reveal from '@/components/shared/Reveal';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'For events & conferences — TapCraft',
  description: 'From mood board to doors-open. 3,000 NFC badges in six weeks. We\'ve shipped registration kits for SXSW Sydney, Pause Fest, Vivid, and 40+ corporate offsites.',
};

const STAGES = [
  { ph: '↳ Week 1', name: 'Brief & mould design', body: 'Send us your event creative — we mock up the badge in 48h. Three rounds included.', output: 'Output', v: '3D file + render' },
  { ph: '↳ Weeks 2–4', name: 'Print & finish', body: 'Brunswick studio runs the queue. Live progress in your dashboard, photos every 250 units.', output: 'Throughput', v: '~600/day' },
  { ph: '↳ Week 5', name: 'Encode & reconcile', body: 'Each badge encoded with attendee URL. Reconciled against your access-control system + CSV.', output: 'Audit log', v: 'Per-tag' },
  { ph: '↳ Week 6', name: 'Ship & on-site', body: 'Tracked freight. We can hand-deliver in Melb/Syd. Founder on standby Slack during doors-open.', output: 'SLA', v: 'Same-day fix' },
];

const CASES = [
  { meta: 'Conference · 240 attendees · Melbourne', title: 'Pause Fest pivoted from PVC to PLA in 9 days', body: 'Their original supplier missed a print run with two weeks to go. We onboarded their attendee CSV, designed a brass-finish PLA badge, and encoded NTAG215s with per-attendee URLs.', stats: [{ n: '9d', l: 'brief → ship' }, { n: '98%', l: 'tap success' }, { n: '$2.40', l: 'cost / unit' }], ink: true, label: '[ Pause Fest 2026 ]' },
  { meta: 'Festival · 3,000 wristbands · Sydney', title: 'SXSW Sydney scaled cashless on a 6-week clock', body: 'PHA-filament wristbands tied to Stripe Terminal for cashless purchases. Reconciliation reports went straight to their finance team in Xero.', stats: [{ n: '3k', l: 'units shipped' }, { n: '42s', l: 'avg checkout' }, { n: '0', l: 'field replacements' }], ink: false, label: '[ SXSW Sydney 2025 ]' },
];

export default function SolutionsEventsPage() {
  return (
    <>
      <PageHero
        eyebrow="For events & conferences"
        heading="3,000 badges."
        emphasis={<><em>Six weeks.</em> One Slack channel.</>}
        lede="From mood board to the morning of doors-open. We've shipped registration kits for SXSW Sydney, Pause Fest, Vivid, and 40+ corporate offsites. Here's how the schedule actually works."
        actions={
          <>
            <Link className="btn btn--primary btn--lg" href="/customise">Get an event quote <ArrowRight className="h-4 w-4" /></Link>
            <Link className="btn btn--ghost btn--lg" href="/demo">Book the events demo</Link>
          </>
        }
      />

      <section className="section">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">The six-week sequence</span>
            <h2 className="h1 balance" style={{ marginTop: 14, maxWidth: '22ch' }}>
              No surprises. <em className="serif-em">No what-now emails.</em>
            </h2>
          </Reveal>
          <div className="stage-grid" style={{ marginTop: 40 }}>
            {STAGES.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.06}>
                <div className="stage">
                  <div className="ph">{s.ph}</div>
                  <h3>{s.name}</h3>
                  <p>{s.body}</p>
                  <div className="week"><span>{s.output}</span><span className="v">{s.v}</span></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="timeline">
              <span className="eyebrow" style={{ color: 'var(--muted)' }}>Live: Pause Fest 2026</span>
              <h2 className="h1" style={{ marginTop: '14px' }}>240 badges. <em className="serif-em">T-minus 11 days.</em></h2>
              <p className="lede" style={{ marginTop: '14px' }}>Here&apos;s what your dashboard looks like. Every block is a real status push from the print floor.</p>
              <div className="timeline-bar" style={{ marginTop: 24 }}>
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
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">Cases</span>
            <h2 className="h1" style={{ marginTop: '14px', maxWidth: '24ch' }}>Two events that <em className="serif-em">bet their badge on us.</em></h2>
          </Reveal>
          <div className="case-grid" style={{ marginTop: 40 }}>
            {CASES.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <div className="case">
                  <div className={`img placeholder${c.ink ? ' placeholder--ink' : ''}`}><span className="label">{c.label}</span></div>
                  <div className="body">
                    <div className="meta">{c.meta}</div>
                    <h3>{c.title}</h3>
                    <p style={{ color: 'var(--ink-2)', margin: '0 0 16px' }}>{c.body}</p>
                    <div className="stats">
                      {c.stats.map((s) => (
                        <div key={s.l}><div className="n">{s.n}</div><div className="l">{s.l}</div></div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ textAlign: 'center' }}>
        <div className="wrap">
          <Reveal>
            <h2 className="display" style={{ maxWidth: '18ch', margin: '0 auto' }}><em>Doors-open</em> in less than 8 weeks?</h2>
            <p className="lede" style={{ margin: '24px auto 36px' }}>Tell us the date and the headcount. We&apos;ll come back with a quote and a slot in the Brunswick queue within 24 hours.</p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link className="btn btn--primary btn--lg" href="/customise">Get an event quote <ArrowRight className="h-4 w-4" /></Link>
              <Link className="btn btn--ghost btn--lg" href="/demo">Book the events demo</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
