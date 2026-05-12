'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const ProductObject = dynamic(() => import('@/components/three/ProductObject'), {
  ssr: false,
  loading: () => null,
});

type Variant = 'keychain' | 'card' | 'lanyard' | 'badge';

const PRODUCTS: { variant: Variant; name: string; sub: string; copy: string; from: string; accent: string }[] = [
  {
    variant: 'keychain',
    name: 'NFC keychain',
    sub: 'The flagship',
    copy: 'Weighty, matte, branded. Lives on a lanyard, a keyring, a backpack zip — anywhere a customer will see it twice.',
    from: 'From AUD $4.80 / unit at 500+',
    accent: 'oklch(0.66 0.20 250)',
  },
  {
    variant: 'card',
    name: 'NFC card',
    sub: 'The business card replacement',
    copy: '85 × 54 mm. Sits in a wallet. Tap to share your full digital identity in one move.',
    from: 'From AUD $3.20 / unit at 250+',
    accent: 'oklch(0.65 0.15 35)',
  },
  {
    variant: 'lanyard',
    name: 'NFC lanyard',
    sub: 'For events',
    copy: 'Print run for conferences, festivals, expos. Encode the schedule, the booth, the sponsor link — whatever moves the room.',
    from: 'From AUD $1.20 / unit at 1,000+',
    accent: 'oklch(0.62 0.12 145)',
  },
  {
    variant: 'badge',
    name: 'NFC badge / coin',
    sub: 'For point of sale',
    copy: 'Receipt-tray coin or counter badge. Drives reviews, tips, and re-orders right where the transaction happens.',
    from: 'From AUD $2.10 / unit at 250+',
    accent: 'oklch(0.55 0.20 295)',
  },
];

export default function Products() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-15%' });

  return (
    <section className="section spotlight">
      <div className="wrap relative">
        <div className="flex justify-between items-end flex-wrap gap-6">
          <div className="max-w-2xl">
            <span className="eyebrow">The objects</span>
            <h2 className="h1 balance" style={{ marginTop: 14 }}>
              Four formats. <em className="serif-em">Same impact.</em>
            </h2>
            <p className="lede" style={{ marginTop: 18 }}>
              Pick a base, hand us your brand, get a sample in your hand within seven days.
            </p>
          </div>
          <Link href="/customise" className="btn btn--ghost">
            Customise yours <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
          {PRODUCTS.map((p, i) => (
            <motion.article
              key={p.variant}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="glow-card tilt overflow-hidden grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-0"
              onMouseMove={(e) => {
                const el = e.currentTarget;
                const rect = el.getBoundingClientRect();
                el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
                el.style.setProperty('--my', `${e.clientY - rect.top}px`);
              }}
            >
              <div className="p-7 md:p-8 flex flex-col gap-4 order-2 md:order-1">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--muted)]">
                    {p.sub}
                  </span>
                  <h3 className="text-[24px] tracking-tight font-semibold mt-1">{p.name}</h3>
                </div>
                <p className="text-[var(--ink-2)] text-sm leading-relaxed">{p.copy}</p>
                <div className="mt-auto pt-5 border-t border-[var(--line-2)] flex justify-between items-end gap-3">
                  <div>
                    <div className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-[var(--muted)]">
                      Starts at
                    </div>
                    <div className="font-mono text-[13px] text-[var(--ink)] mt-1">{p.from}</div>
                  </div>
                  <Link
                    href="/customise"
                    className="font-mono text-[12px] uppercase tracking-[0.14em] text-[var(--accent-ink)] inline-flex items-center gap-1.5 hover:text-[var(--ink)] transition-colors"
                  >
                    Customise <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
              <div className="product-3d order-1 md:order-2 min-h-[260px]">
                <ProductObject variant={p.variant} accent={p.accent} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
