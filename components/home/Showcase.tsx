'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const CASES = [
  {
    slug: 'open-home-tags',
    client: 'Belle Property — South Yarra',
    title: 'Open-home tags that doubled buyer follow-up',
    summary:
      'Custom branded keychains handed out at open homes. Tap loads a property micro-site with floorplan, agent contact, and a one-tap booking form.',
    metric: '+118%',
    metricLabel: 'agent-attributed follow-ups',
    tags: ['Real estate', 'Keychain', 'Lead capture'],
    accent: 'oklch(0.66 0.20 250)',
  },
  {
    slug: 'cup-week-lanyards',
    client: 'Cup Week Hospitality',
    title: 'Lanyards that ran 6,400 free-drink redemptions',
    summary:
      'NFC-encoded lanyards for VIP attendees across 14 venues. Each tap logged a drink, drove a survey, and pushed re-marketing.',
    metric: '6,400',
    metricLabel: 'drinks redeemed in 4 days',
    tags: ['Events', 'Lanyard', 'Redemption'],
    accent: 'oklch(0.65 0.15 35)',
  },
  {
    slug: 'cafe-review-coins',
    client: 'Industry Beans',
    title: 'Tip + review coins that lifted Google ratings by 0.4 stars',
    summary:
      'A weighty 3D-printed coin on every receipt tray. Tap goes to a smart router — first-time tappers get a review prompt, repeats get a tip page.',
    metric: '+0.4★',
    metricLabel: 'Google rating in 60 days',
    tags: ['Hospitality', 'Badge', 'Reviews'],
    accent: 'oklch(0.62 0.12 145)',
  },
] as const;

export default function Showcase() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-20%' });

  return (
    <section className="section">
      <div className="wrap">
        <div className="flex justify-between items-end flex-wrap gap-6">
          <div className="max-w-2xl">
            <span className="eyebrow"><span className="dot" />The work</span>
            <h2 className="h1 balance" style={{ marginTop: 14 }}>
              Real clients. <em className="serif-em">Measurable lift.</em>
            </h2>
            <p className="lede" style={{ marginTop: 18 }}>
              Every TapCraft tag reports back. So we can show you the numbers — not just the photos.
            </p>
          </div>
          <Link
            href="/showcase"
            className="btn btn--ghost group"
          >
            Browse case studies
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
          {CASES.map((c, i) => (
            <motion.div
              key={c.slug}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={`/showcase/${c.slug}`}
                className="glow-card tilt block h-full overflow-hidden group"
                onMouseMove={(e) => {
                  const el = e.currentTarget;
                  const rect = el.getBoundingClientRect();
                  el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
                  el.style.setProperty('--my', `${e.clientY - rect.top}px`);
                }}
              >
                {/* visual block */}
                <div
                  className="relative aspect-[5/3] overflow-hidden"
                  style={{
                    background: `radial-gradient(ellipse at 30% 30%, ${c.accent}, transparent 70%), var(--bg-2)`,
                  }}
                >
                  <div className="absolute inset-0 grid-lines" />
                  <div className="absolute inset-x-6 bottom-5 flex items-end justify-between gap-3">
                    <div>
                      <div className="font-serif text-[clamp(40px,4vw,64px)] leading-none tracking-tight">
                        {c.metric}
                      </div>
                      <div className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-[var(--ink-2)] mt-1">
                        {c.metricLabel}
                      </div>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-[var(--ink-2)] opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </div>
                </div>

                <div className="p-7 flex flex-col gap-4">
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--muted)]">
                    {c.client}
                  </span>
                  <h3 className="text-[20px] leading-snug font-semibold tracking-tight balance">
                    {c.title}
                  </h3>
                  <p className="text-[var(--ink-2)] text-sm leading-relaxed">{c.summary}</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {c.tags.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10.5px] uppercase tracking-[0.1em] px-2 py-1 rounded-md bg-[var(--bg-2)] border border-[var(--line)] text-[var(--muted)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
