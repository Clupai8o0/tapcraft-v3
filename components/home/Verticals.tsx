'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SpotlightCard from '@/components/ui/SpotlightCard';

const VERTICALS = [
  {
    n: '/01',
    href: '/solutions/events',
    title: 'Events',
    pitch: 'Badge taps capture leads at the booth, not in someone\'s pocket.',
    use: 'Lanyards, wristbands, expo passes',
  },
  {
    n: '/02',
    href: '/solutions/real-estate',
    title: 'Real estate',
    pitch: 'Open-home keychains carry the property to the kitchen counter.',
    use: 'Keychains, agent cards, tags',
  },
  {
    n: '/03',
    href: '/solutions/hospitality',
    title: 'Hospitality',
    pitch: 'Review and tip taps from the receipt tray — no friction, no app.',
    use: 'Coins, table tents, menu cards',
  },
  {
    n: '/04',
    href: '/solutions/agencies',
    title: 'Agencies',
    pitch: 'White-label runs for clients with full per-tag attribution.',
    use: 'Anything, your brand, our build',
  },
];

export default function Verticals() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-15%' });

  return (
    <section className="section">
      <div className="wrap">
        <div className="max-w-2xl">
          <span className="eyebrow">Built for</span>
          <h2 className="h1 balance" style={{ marginTop: 14 }}>
            Four industries that <em className="serif-em">already get it.</em>
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-10">
          {VERTICALS.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <SpotlightCard className="tilt p-6 h-full min-h-[260px] flex flex-col justify-between group">
                <Link href={v.href} className="before:absolute before:inset-0 before:z-10" aria-label={v.title} />
                <div className="font-mono text-[11px] text-[var(--muted)]">{v.n}</div>
                <div className="space-y-3">
                  <h3 className="text-[26px] leading-[1.05] tracking-tight font-semibold">{v.title}</h3>
                  <p className="text-[var(--ink-2)] text-[13.5px] leading-relaxed">{v.pitch}</p>
                  <div className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-[var(--muted)] pt-2 border-t border-[var(--line-2)]">
                    {v.use}
                  </div>
                </div>
                <div className="w-9 h-9 rounded-full border border-[var(--line)] grid place-items-center group-hover:bg-[var(--ink)] group-hover:text-[var(--bg)] group-hover:border-[var(--ink)] transition-colors">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
