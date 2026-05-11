import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <Link className="brand" href="/" style={{ color: 'var(--bg)' }}>
              <span className="brand-mark" style={{ background: 'var(--bg)', color: 'var(--ink)' }} />
              <span>TapCraft</span>
            </Link>
            <p style={{ marginTop: '14px', color: '#b8b0a3', fontSize: '13.5px', maxWidth: '34ch', lineHeight: '1.55' }}>
              The operating system for 3D-printed NFC products. Built in Naarm/Melbourne.
            </p>
            <div className="mono" style={{ marginTop: '24px', color: '#b8b0a3' }}>
              <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--positive)', marginRight: '8px', verticalAlign: 'middle' }} />
              All systems operational
            </div>
          </div>

          <div>
            <h5>Platform</h5>
            <ul>
              <li><Link href="/platform">Overview</Link></li>
              <li><Link href="#">Custom orders</Link></li>
              <li><Link href="#">NFC programming</Link></li>
              <li><Link href="#">Production queue</Link></li>
              <li><Link href="/customise">Configurator</Link></li>
              <li><Link href="#">For developers</Link></li>
            </ul>
          </div>

          <div>
            <h5>Solutions</h5>
            <ul>
              <li><Link href="/solutions/events">Events</Link></li>
              <li><Link href="#">Real estate</Link></li>
              <li><Link href="#">Hospitality</Link></li>
              <li><Link href="#">Retail</Link></li>
              <li><Link href="#">Print-on-demand</Link></li>
            </ul>
          </div>

          <div>
            <h5>Products</h5>
            <ul>
              <li><Link href="/showcase">All products</Link></li>
              <li><Link href="/showcase/keychains">NFC keychains</Link></li>
              <li><Link href="#">NFC lanyards</Link></li>
              <li><Link href="#">NFC badges</Link></li>
              <li><Link href="/customise">Custom quote</Link></li>
              <li><Link href="/samples">Sample kits</Link></li>
            </ul>
          </div>

          <div>
            <h5>Company</h5>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="#">Careers</Link></li>
              <li><Link href="#">Press</Link></li>
              <li><Link href="#">Security</Link></li>
            </ul>
          </div>

          <div>
            <h5>Resources</h5>
            <ul>
              <li><Link href="#">Blog</Link></li>
              <li><Link href="#">Guides</Link></li>
              <li><Link href="#">Free tools</Link></li>
              <li><Link href="#">Changelog</Link></li>
              <li><Link href="#">Open source</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© TapCraft Pty Ltd · Naarm/Melbourne · ABN 88 612 944 301</div>
          <div style={{ display: 'flex', gap: '18px' }}>
            <Link href="#">Privacy</Link>
            <Link href="#">Terms</Link>
            <Link href="#">Trust</Link>
            <Link href="/showcase">Shop the catalogue →</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
