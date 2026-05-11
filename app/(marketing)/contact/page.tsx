import Link from 'next/link';

export const metadata = {
  title: 'Contact — TapCraft',
  description: 'Five ways to find us. Most of these go to a real person on the Brunswick floor.',
};

export default function ContactPage() {
  return (
    <>
      <section className="ch">
        <div className="wrap">
          <span className="eyebrow"><span className="dot" />Contact</span>
          <h1 className="display" style={{ marginTop: '18px' }}>Five ways to <em>find us.</em></h1>
          <p className="lede" style={{ marginTop: '18px', maxWidth: '60ch' }}>Pick the channel that matches your urgency. Most of these go to a real person on the Brunswick floor.</p>

          <div className="channels">
            <div className="ch-card">
              <div className="ph">↳ For most things</div>
              <h3>Email a founder</h3>
              <p>Goes to Maya &amp; Daniel directly. Reply within 18 minutes during AEST business hours.</p>
              <div className="v">hello@tapcraft.studio</div>
              <div className="actions"><Link className="btn btn--soft" href="mailto:hello@tapcraft.studio">Compose →</Link></div>
            </div>
            <div className="ch-card">
              <div className="ph">↳ Real-time</div>
              <h3>Slack Connect</h3>
              <p>For Pro customers. We share a channel with your team — replies during business hours.</p>
              <div className="v">slack.tapcraft.studio</div>
              <div className="actions"><Link className="btn btn--soft" href="#">Request channel →</Link></div>
            </div>
            <div className="ch-card">
              <div className="ph">↳ Tour the floor</div>
              <h3>In person · Brunswick</h3>
              <p>The studio is open Mon–Fri 9–5. Bring a coffee, we&apos;ll print you a sample.</p>
              <div className="v">123 Sydney Rd, Brunswick VIC 3056</div>
              <div className="actions"><Link className="btn btn--soft" href="#">Book tour →</Link></div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="form-blk">
            <div>
              <span className="eyebrow"><span className="dot" />Or send a message</span>
              <h2 className="h1" style={{ marginTop: '14px', maxWidth: '18ch' }}>Tell us what you&apos;re after.</h2>
              <p className="lede" style={{ marginTop: '14px' }}>Form goes straight into our shared inbox. We sort by topic — no auto-responder, no support ticket purgatory.</p>

              <form style={{ marginTop: '32px' }}>
                <div className="row2">
                  <label>Name<input type="text" placeholder="Aimee Tran" /></label>
                  <label>Email<input type="email" placeholder="aimee@studio.com" /></label>
                </div>
                <label>{"What's this about?"}
                  <select>
                    <option>I want a quote on a custom run</option>
                    <option>I&apos;m interested in the platform / SaaS</option>
                    <option>I want to do an event partnership</option>
                    <option>Press / media enquiry</option>
                    <option>Job application</option>
                    <option>Something else</option>
                  </select>
                </label>
                <label>Your message<textarea placeholder="What are you making? When do you need it? Anything we should know?" /></label>
                <Link className="btn btn--primary btn--lg" style={{ justifyContent: 'center', marginTop: '8px' }} href="#">Send <span className="arrow">→</span></Link>
                <p className="mono" style={{ color: 'var(--muted)', fontSize: '11px', margin: 0 }}>By submitting this form you agree to our privacy policy. We never share your details with third parties.</p>
              </form>
            </div>

            <div>
              <div className="map">
                <div className="addr">
                  <span className="chip" style={{ background: 'var(--bg-2)', borderColor: 'var(--line)', color: 'var(--accent-ink)' }}>
                    <span className="dot" style={{ background: 'var(--accent)' }} />
                    The floor is open
                  </span>
                  <h3 style={{ marginTop: '18px' }}>TapCraft Studio</h3>
                  <div className="lines">123 Sydney Rd<br />Brunswick VIC 3056<br />Naarm / Melbourne, AU</div>
                </div>
                <div className="pin" />
                <div className="hours">
                  <strong>Studio hours</strong><br />
                  Mon–Fri · 9:00 – 17:30 AEST<br />
                  Sat · By appt only<br />
                  Sun · Closed (we sleep)
                </div>
              </div>

              <div style={{ marginTop: '16px', padding: '24px', background: 'var(--paper)', border: '1px solid var(--line)', borderRadius: 'var(--r-3)' }}>
                <div className="mono" style={{ color: 'var(--muted)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em' }}>For investors</div>
                <p style={{ margin: '8px 0', fontSize: '13.5px', color: 'var(--ink-2)' }}>We raised our seed in 2024 with Square Peg + a few angel makers. We&apos;re not actively raising — but we always answer thoughtful intros.</p>
                <Link className="mono" style={{ color: 'var(--ink)', fontSize: '13px', textDecoration: 'underline' }} href="mailto:investors@tapcraft.studio">investors@tapcraft.studio →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
