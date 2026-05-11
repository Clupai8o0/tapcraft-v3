import Link from 'next/link';

const NAV_LINKS = [
  { label: 'Platform', href: '/platform', chevron: true },
  { label: 'Solutions', href: '/solutions/events', chevron: true },
  { label: 'Products', href: '/showcase', chevron: true },
  { label: 'Pricing', href: '/pricing', chevron: false },
  { label: 'Resources', href: '#', chevron: true },
];

function ChevronIcon() {
  return (
    <svg viewBox="0 0 10 6" fill="none">
      <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export default function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <Link className="brand" href="/">
          <span className="brand-mark" />
          <span>TapCraft</span>
        </Link>
        <nav className="nav-links">
          {NAV_LINKS.map((link) => (
            <Link key={link.label} className="nav-link" href={link.href}>
              {link.label}
              {link.chevron && <ChevronIcon />}
            </Link>
          ))}
        </nav>
        <div className="nav-cta">
          <Link className="signin" href="/signup">Sign in</Link>
          <Link className="btn btn--primary" href="/demo">Book a demo <span className="arrow">→</span></Link>
        </div>
      </div>
    </header>
  );
}
