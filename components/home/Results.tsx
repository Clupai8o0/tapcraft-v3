'use client';

import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';

const STATS = [
  { value: 184320, label: 'taps measured across our tags this year', suffix: '' },
  { value: 47, label: 'industries our tags now live in', suffix: '' },
  { value: 7, label: 'days from brief to a sample in your hand', suffix: '' },
  { value: 96, label: 'average Net Promoter Score from clients', suffix: '' },
] as const;

function Counter({ to }: { to: number }) {
  const mv = useMotionValue(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-20%' });
  const rounded = useTransform(mv, (latest) => Math.round(latest).toLocaleString('en-AU'));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, { duration: 1.8, ease: [0.16, 1, 0.3, 1] });
    return () => controls.stop();
  }, [inView, to, mv]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function Results() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <section className="section spotlight">
      <div className="wrap">
        <div className="max-w-3xl">
          <span className="eyebrow"><span className="dot" />Numbers, not noise</span>
          <h2 className="h1 balance" style={{ marginTop: 14 }}>
            Every tag <em className="serif-em">reports back.</em>
          </h2>
          <p className="lede" style={{ marginTop: 18 }}>
            We don&apos;t make plastic. We make instrumented marketing — so we can tell you which tag, which
            campaign, which week is doing the work.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-0 mt-12 border-y border-[var(--line)]">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="counter-card border-l border-[var(--line)] first:border-l-0 lg:border-l border-b border-[var(--line)] lg:border-b-0 last:border-r-0"
            >
              <div className="counter-num">
                <Counter to={s.value} />
                {s.suffix}
              </div>
              <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--muted)] mt-3 max-w-[22ch] leading-relaxed">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
