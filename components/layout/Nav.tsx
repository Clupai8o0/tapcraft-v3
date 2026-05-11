'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Showcase', href: '/showcase' },
  { label: 'Customise', href: '/customise' },
  { label: 'Solutions', href: '/solutions/events' },
  { label: 'Process', href: '/process' },
  { label: 'Platform', href: '/platform' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="nav"
      style={{
        background: scrolled
          ? 'color-mix(in oklab, var(--bg) 78%, transparent)'
          : 'color-mix(in oklab, var(--bg) 60%, transparent)',
        transition: 'background 0.25s',
      }}
    >
      <div className="wrap nav-inner">
        <Link className="brand" href="/" aria-label="TapCraft home">
          <Image
            src="/logo/tapcraft-wordmark-dark.png"
            alt="TapCraft Studio"
            width={420}
            height={130}
            className="brand-wordmark"
            style={{ height: 34, width: 'auto' }}
            priority
          />
        </Link>

        <nav className="nav-links" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link key={link.label} className="nav-link" href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="nav-cta">
          <Link className="signin hidden md:inline-flex" href="/contact">
            Contact
          </Link>
          <Link className="btn btn--primary" href="/#quote">
            Get a quote <ArrowRight className="h-4 w-4" />
          </Link>
          <button
            type="button"
            className="md:hidden ml-2 p-2 rounded-md border border-[var(--line)] text-[var(--ink-2)]"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* mobile drawer */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.25 }}
          className="md:hidden border-t border-[var(--line)] bg-[var(--bg)]"
        >
          <nav className="wrap py-4 flex flex-col">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-[15.5px] text-[var(--ink-2)] hover:text-[var(--ink)] border-b border-[var(--line-2)] last:border-b-0"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="py-3 text-[15.5px] text-[var(--ink-2)] hover:text-[var(--ink)]"
            >
              Contact
            </Link>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
