'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react';

type NavLink =
  | { label: string; href: string }
  | { label: string; children: { label: string; href: string; description?: string }[] };

const NAV_LINKS: NavLink[] = [
  { label: 'Showcase', href: '/showcase' },
  {
    label: 'Solutions',
    children: [
      { label: 'Events & conferences', href: '/solutions/events', description: '3,000 badges in six weeks' },
      { label: 'Real estate', href: '/solutions/real-estate', description: 'Tags that double buyer follow-up' },
      { label: 'Hospitality & venues', href: '/solutions/hospitality', description: 'Tap to review, tip, redeem' },
    ],
  },
  { label: 'Process', href: '/process' },
  { label: 'Platform', href: '/platform' },
  { label: 'Blog', href: '/blog' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!openMenu) return;
    const onDocClick = (e: MouseEvent) => {
      if (!menuRef.current?.contains(e.target as Node)) setOpenMenu(null);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenMenu(null);
    };
    document.addEventListener('mousedown', onDocClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDocClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [openMenu]);

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
        WebkitBackdropFilter: 'blur(14px)',
        backdropFilter: 'blur(14px)',
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

        <nav className="nav-links" aria-label="Primary" ref={menuRef}>
          {NAV_LINKS.map((link) => {
            if ('href' in link) {
              return (
                <Link key={link.label} className="nav-link" href={link.href}>
                  {link.label}
                </Link>
              );
            }
            const isOpen = openMenu === link.label;
            return (
              <div
                key={link.label}
                className="nav-dropdown"
                onMouseEnter={() => setOpenMenu(link.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button
                  type="button"
                  className="nav-link"
                  aria-haspopup="menu"
                  aria-expanded={isOpen}
                  onClick={() => setOpenMenu(isOpen ? null : link.label)}
                >
                  {link.label}
                  <ChevronDown
                    className="h-3 w-3"
                    style={{ transition: 'transform 0.2s', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                      className="nav-menu"
                      role="menu"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="nav-menu-item"
                          role="menuitem"
                          onClick={() => setOpenMenu(null)}
                        >
                          <span className="nav-menu-label">{child.label}</span>
                          {child.description && (
                            <span className="nav-menu-desc">{child.description}</span>
                          )}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        <div className="nav-cta">
          <Link className="signin hidden lg:inline-flex" href="/contact">
            Contact
          </Link>
          <div className="hidden lg:flex">
            <Link className="btn btn--primary" href="/customise">
              Get a quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <button
            type="button"
            className="lg:hidden p-2 rounded-md border border-[var(--line)] text-[var(--ink-2)] min-h-[40px] min-w-[40px] flex items-center justify-center"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden border-t border-[var(--line)] bg-[var(--bg)] max-h-[calc(100vh-56px)] overflow-y-auto"
          >
            <nav className="wrap py-4 flex flex-col">
              {NAV_LINKS.map((link) => {
                if ('href' in link) {
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="py-3 text-[15.5px] text-[var(--ink-2)] hover:text-[var(--ink)] border-b border-[var(--line-2)]"
                    >
                      {link.label}
                    </Link>
                  );
                }
                return (
                  <div key={link.label} className="border-b border-[var(--line-2)] py-2">
                    <div className="py-1 text-[11px] uppercase tracking-[0.14em] text-[var(--muted)] font-mono">
                      {link.label}
                    </div>
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="py-2 pl-3 block text-[15px] text-[var(--ink-2)] hover:text-[var(--ink)]"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                );
              })}
              <Link
                href="/customise"
                onClick={() => setMobileOpen(false)}
                className="mt-4 py-3 text-center text-[15.5px] font-medium rounded-full bg-[var(--ink)] text-[var(--bg)]"
              >
                Get a quote →
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="py-3 text-center text-[14.5px] text-[var(--ink-2)] hover:text-[var(--ink)]"
              >
                Contact
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
