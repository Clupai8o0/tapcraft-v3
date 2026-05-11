'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-15%' });

  const words = ['Conversion,', 'reimagined.'];

  return (
    <section className="manifesto-section">
      <div className="wrap relative">
        <div ref={ref} className="text-center">
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--muted)] mb-8">
            <span className="dot inline-block w-1.5 h-1.5 rounded-full bg-[var(--accent)] mr-2.5 align-middle" />
            Our take
          </div>
          <h2 className="mega balance" aria-label="Conversion, reimagined.">
            {words.map((w, i) => (
              <span key={w} className="inline-block">
                {w.split('').map((c, j) => (
                  <motion.span
                    key={j}
                    initial={{ opacity: 0, y: 40, rotate: -2 }}
                    animate={inView ? { opacity: 1, y: 0, rotate: 0 } : {}}
                    transition={{
                      duration: 0.9,
                      delay: i * 0.3 + j * 0.025,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="inline-block"
                  >
                    {i === 1 ? <em className="not-italic" style={{ fontStyle: 'italic', color: 'var(--accent-ink)' }}>{c}</em> : c}
                  </motion.span>
                ))}
                {i < words.length - 1 && ' '}
              </span>
            ))}
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="font-serif text-[clamp(20px,2vw,28px)] leading-snug text-[var(--ink-2)] mt-10 max-w-[42ch] mx-auto balance"
          >
            For 100 years, the playbook was: print a card, hand it over, hope they call. We think a physical
            object should do the work — not ask the customer to.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
