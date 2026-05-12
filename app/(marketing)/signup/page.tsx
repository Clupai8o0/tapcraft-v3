import Link from 'next/link';
import Reveal from '@/components/shared/Reveal';

export const metadata = {
  title: 'Start your trial — TapCraft',
  description: 'Start your 14-day free trial. No card required.',
};

export default function SignupPage() {
  return (
    <div className="signup-wrap">
      <div className="signup-form-side">
        <Reveal>
        <div className="signup-form-inner">
          <h1>Start your 14-day trial</h1>
          <p className="sub">No card. No phone calls. Cancel any time.</p>

          <div className="oauth-row">
            <button className="oauth-btn"><span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700 }}>G</span> Google</button>
            <button className="oauth-btn"><span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700 }}>⌘</span> GitHub</button>
          </div>
          <div className="divider">or with email</div>

          <form>
            <label>Work email<input type="email" placeholder="you@studio.com" /></label>
            <label>Password<input type="password" placeholder="Min. 12 characters" /></label>
            <label>Workspace name
              <div className="workspace">
                <input type="text" placeholder="northbound" />
                <span className="suffix">.tapcraft.studio</span>
              </div>
            </label>
            <button type="submit" className="btn btn--primary btn--lg" style={{ marginTop: '8px', justifyContent: 'center', width: '100%' }}>Create workspace <span className="arrow">→</span></button>
          </form>

          <p className="terms">By creating a workspace, you agree to our <Link href="#">Terms</Link> and <Link href="#">Privacy Policy</Link>. AU Privacy Act 1988 compliant. Data hosted in Sydney by default.</p>

          <div className="mono" style={{ marginTop: '32px', textAlign: 'center', fontSize: '12px', color: 'var(--muted)' }}>
            Already have an account? <Link href="#" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>Sign in</Link>
          </div>
        </div>
        </Reveal>
      </div>

      <Reveal delay={0.15}>
      <div className="signup-aside-side">
        <div>
          <span className="eyebrow" style={{ color: 'var(--muted)' }}>Currently active</span>
          <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px', fontFamily: 'var(--font-mono)', fontSize: '12.5px', color: 'var(--ink-2)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>↳ Northbound shipped</span><span style={{ color: 'var(--accent-ink)' }}>240 keychains</span></div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>↳ Hatch &amp; Co. encoded</span><span style={{ color: 'var(--accent-ink)' }}>1,200 lanyards</span></div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>↳ Yarra Cellars synced</span><span style={{ color: 'var(--accent-ink)' }}>60 wine tags</span></div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>↳ Cooee/badge sliced</span><span style={{ color: 'var(--accent-ink)' }}>3,000 wristbands</span></div>
          </div>
        </div>

        <div className="aside-quote">
          <h2>&ldquo;Set up our farm in <em>one afternoon.</em> 14 days later we cancelled three SaaS subscriptions.&rdquo;</h2>
          <div className="aside-meta">
            <div className="av" />
            <div>
              <div style={{ color: 'var(--ink)', fontWeight: 500 }}>Aimee Tran</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px' }}>Founder · Northbound Studio</div>
            </div>
          </div>
        </div>

        <div className="aside-stats">
          <div><div className="n">2,287</div><div className="l">tags today</div></div>
          <div><div className="n">14</div><div className="l">countries</div></div>
          <div><div className="n">68%</div><div className="l">faster turnaround</div></div>
        </div>
      </div>
      </Reveal>
    </div>
  );
}
