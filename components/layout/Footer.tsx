import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <Link className="brand" href="/" style={{ color: 'var(--ink)' }}>
              <Image
                src="/logo/tapcraft-icon.png"
                alt=""
                width={28}
                height={28}
                className="brand-mark"
              />
              <span>TapCraft</span>
            </Link>
            <p style={{ marginTop: '14px', color: 'var(--ink-2)', fontSize: '13.5px', maxWidth: '34ch', lineHeight: '1.55' }}>
              The operating system for 3D-printed NFC products. Built in Naarm/Melbourne.
            </p>
            <div className="mono" style={{ marginTop: '24px', color: 'var(--ink-2)' }}>
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
              <li><Link href="/solutions/events">Events &amp; conferences</Link></li>
              <li><Link href="/solutions/real-estate">Real estate</Link></li>
              <li><Link href="/solutions/hospitality">Hospitality &amp; venues</Link></li>
              <li><Link href="/showcase">Retail</Link></li>
              <li><Link href="/customise">Custom run</Link></li>
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
              <li><Link href="/blog">Field notes</Link></li>
              <li><Link href="/process">How we make it</Link></li>
              <li><Link href="/platform/pricing">Platform pricing</Link></li>
              <li><Link href="/samples">Sample kits</Link></li>
              <li><Link href="/legal/privacy">Privacy</Link></li>
              <li><Link href="/legal/terms">Terms</Link></li>
              <li><Link href="/legal/refunds">Refunds</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© TapCraft Pty Ltd · Naarm/Melbourne · ABN 88 612 944 301</div>
          <div style={{ display: 'flex', gap: '18px' }}>
            <Link href="/legal/privacy">Privacy</Link>
            <Link href="/legal/terms">Terms</Link>
            <Link href="/legal/refunds">Refunds</Link>
            <Link href="/showcase">See the work →</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
