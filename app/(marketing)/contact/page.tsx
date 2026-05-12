import Link from 'next/link';
import Script from 'next/script';
import PageHero from '@/components/shared/PageHero';
import Reveal from '@/components/shared/Reveal';

export const metadata = {
  title: 'Contact — TapCraft',
  description: 'Three ways to reach us. Email a founder, share a Slack channel, or book a 30-minute call — replies within 18 minutes during AEST business hours.',
};

const CAL_LINK = 'tapcraft/30min';
const CAL_NAMESPACE = '30min';

type Channel = {
  ph: string;
  name: string;
  desc: string;
  v: string;
  cta: string;
  href?: string;
  cal?: boolean;
};

const CHANNELS: Channel[] = [
  { ph: '↳ For most things', name: 'Email a founder', desc: 'Goes to Samridh & Nikhil directly. Reply within 18 minutes during AEST business hours.', v: 'hello@tapcraftstudio.com', href: 'mailto:hello@tapcraftstudio.com', cta: 'Compose →' },
  { ph: '↳ Real-time', name: 'Slack Connect', desc: 'For Pro customers. We share a channel with your team — replies during business hours.', v: 'slack.tapcraft.studio', href: '#', cta: 'Request channel →' },
  { ph: '↳ Talk it through', name: 'Book a call', desc: 'Thirty minutes on Cal.com with a founder. Best for scoping a custom run or platform pilot.', v: 'cal.com/tapcraft', cal: true, cta: 'Pick a time →' },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        heading="Three ways"
        emphasis={<>to <em>reach us.</em></>}
        lede="Pick the channel that matches your urgency. All three land with a real person — usually Sam or Nikhil."
      />

      <section className="section">
        <div className="wrap">
          <div className="channels">
            {CHANNELS.map((c, i) => (
              <Reveal key={c.name} delay={i * 0.08}>
                <div className="ch-card">
                  <div className="ph">{c.ph}</div>
                  <h3>{c.name}</h3>
                  <p>{c.desc}</p>
                  <div className="v">{c.v}</div>
                  <div className="actions">
                    {c.cal ? (
                      <button
                        type="button"
                        className="btn btn--soft"
                        data-cal-link={CAL_LINK}
                        data-cal-namespace={CAL_NAMESPACE}
                        data-cal-config='{"layout":"month_view"}'
                      >
                        {c.cta}
                      </button>
                    ) : (
                      <Link className="btn btn--soft" href={c.href ?? '#'}>{c.cta}</Link>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="form-blk">
            <Reveal>
              <div>
                <span className="eyebrow">Or send a message</span>
                <h2 className="h1" style={{ marginTop: '14px', maxWidth: '18ch' }}>Tell us what you&apos;re after.</h2>
                <p className="lede" style={{ marginTop: '14px' }}>Form goes straight into our shared inbox. We sort by topic — no auto-responder, no support ticket purgatory.</p>

                <form style={{ marginTop: '32px' }} action="/api/contact" method="post">
                  <div className="row2">
                    <label>Name<input type="text" name="name" placeholder="Aimee Tran" required /></label>
                    <label>Email<input type="email" name="email" placeholder="aimee@studio.com" required /></label>
                  </div>
                  <label>What&apos;s this about?
                    <select name="topic">
                      <option>I want a quote on a custom run</option>
                      <option>I&apos;m interested in the platform / SaaS</option>
                      <option>I want to do an event partnership</option>
                      <option>Press / media enquiry</option>
                      <option>Job application</option>
                      <option>Something else</option>
                    </select>
                  </label>
                  <label>Your message<textarea name="message" placeholder="What are you making? When do you need it? Anything we should know?" required /></label>
                  <button type="submit" className="btn btn--primary btn--lg" style={{ justifyContent: 'center', marginTop: '8px' }}>Send <span className="arrow">→</span></button>
                  <p className="mono" style={{ color: 'var(--muted)', fontSize: '11px', margin: 0 }}>By submitting this form you agree to our privacy policy. We never share your details with third parties.</p>
                </form>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div>
                <div style={{ padding: '28px', background: 'var(--paper)', border: '1px solid var(--line)', borderRadius: 'var(--r-3)' }}>
                  <span className="chip" style={{ background: 'var(--bg-2)', borderColor: 'var(--line)', color: 'var(--accent-ink)' }}>
                    <span className="dot" style={{ background: 'var(--accent)' }} />
                    Replying now
                  </span>
                  <h3 style={{ marginTop: '18px', fontSize: '22px' }}>What happens next</h3>
                  <ul className="mono" style={{ marginTop: '14px', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', color: 'var(--ink-2)', fontSize: '13px', lineHeight: 1.7 }}>
                    <li>1 — Sam or Nikhil reads it. No support queue, no auto-reply.</li>
                    <li>2 — Reply within 18 minutes during AEST business hours.</li>
                    <li>3 — If it&apos;s a custom run, we&apos;ll book a call to scope it.</li>
                  </ul>
                </div>

                <div style={{ marginTop: '16px', padding: '24px', background: 'var(--paper)', border: '1px solid var(--line)', borderRadius: 'var(--r-3)' }}>
                  <div className="mono" style={{ color: 'var(--muted)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Helpful to include</div>
                  <p style={{ margin: '8px 0 0', fontSize: '13.5px', color: 'var(--ink-2)', lineHeight: 1.6 }}>Quantity, deadline, and a rough idea of what you want the NFC to trigger — a link, a vCard, an unlock screen. The more you tell us, the tighter the first reply.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Script id="cal-embed" strategy="afterInteractive">
        {`(function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "Init");
Cal("init", "${CAL_NAMESPACE}", {origin:"https://cal.com"});
Cal.ns["${CAL_NAMESPACE}"]("ui", {hideEventTypeDetails:false, layout:"month_view"});`}
      </Script>
    </>
  );
}
