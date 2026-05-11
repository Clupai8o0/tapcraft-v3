'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroScene = dynamic(() => import('@/components/three/HeroScene'), {
  ssr: false,
  loading: () => <div className="hero-scene" />,
});

const heroChars = 'The business card is dead.'.split('');

export default function Hero() {
  return (
    <section className="hero relative overflow-hidden">
      {/* ambient gradient orb */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[640px] w-[640px] -translate-x-1/2 rounded-full"
        style={{
          background:
            'radial-gradient(circle, oklch(0.30 0.12 255 / 0.35) 0%, transparent 60%)',
        }}
      />

      <div className="wrap hero-grid relative">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="hero-meta"
          >
            <span className="eyebrow">
              <span className="dot" />
              TapCraft Studio · Naarm / Melbourne
            </span>
            <span className="chip">
              <Sparkles className="h-3 w-3" />
              <span>v3 just shipped</span>
            </span>
          </motion.div>

          <h1 className="display balance" aria-label="The business card is dead. Replace it with a tap.">
            <span aria-hidden className="inline-block">
              {heroChars.map((c, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1 + i * 0.018,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="inline-block"
                  style={{ whiteSpace: c === ' ' ? 'pre' : 'normal' }}
                >
                  {c}
                </motion.span>
              ))}
            </span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block"
            >
              Replace it with <em>a&nbsp;tap.</em>
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
            className="lede"
            style={{ marginTop: '28px' }}
          >
            We design and 3D-print custom NFC keychains, lanyards, and badges that turn a handshake into
            a lead in your CRM. Bespoke, branded, made in Melbourne — and measurably better than a card
            you&apos;ll throw out.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
            className="hero-actions"
          >
            <Button asChild size="xl" variant="primary">
              <Link href="#quote">
                Get a quote
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="xl" variant="soft">
              <Link href="/showcase">
                See the work
              </Link>
            </Button>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="hero-bullets"
          >
            <li><span className="check">✓</span> 7-day turnaround</li>
            <li><span className="check">✓</span> Free design review</li>
            <li><span className="check">✓</span> Ships across AU + NZ</li>
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: 'relative' }}
        >
          <div className="hero-scene">
            <HeroScene />
          </div>

          {/* floating stat chip */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="float-chip"
            style={{ right: '-14px', top: '12%' }}
          >
            <div>
              <div className="num">12,847</div>
              <div className="lbl">taps tracked this week</div>
            </div>
          </motion.div>

          {/* floating mini status */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 1.25 }}
            className="absolute left-[-14px] bottom-[12%] flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--paper)] px-3 py-2 shadow-[0_18px_40px_-16px_rgba(0,0,0,0.6)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--positive)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--positive)]" />
            </span>
            <span className="font-mono text-[11px] text-[var(--ink-2)]">
              Brunswick studio · online
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
