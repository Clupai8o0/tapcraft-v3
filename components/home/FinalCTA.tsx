'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import QuoteDialog from './QuoteDialog';

export default function FinalCTA() {
  return (
    <section className="final-cta relative overflow-hidden" id="quote">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: 'radial-gradient(circle, oklch(0.32 0.14 255 / 0.30) 0%, transparent 60%)',
        }}
      />

      <div className="wrap relative">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="eyebrow"
        >
          Ready when you are
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="display balance"
          style={{ marginTop: 18 }}
        >
          Stop handing out paper. <em>Start handing out leads.</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="lede"
          style={{ margin: '24px auto 36px' }}
        >
          Tell us what you sell and who you sell to. We&apos;ll come back with a quote, a turnaround,
          and a sample in your hand inside a week.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex gap-3 justify-center flex-wrap"
        >
          <QuoteDialog
            trigger={
              <Button size="xl" variant="primary" className="btn--magnetic">
                Get a quote <ArrowRight className="h-4 w-4" />
              </Button>
            }
          />
          <Button asChild size="xl" variant="ghost">
            <Link href="/showcase">See the work</Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--muted)] mt-12 flex flex-wrap justify-center gap-x-6 gap-y-3"
        >
          <span>· 7-day samples ·</span>
          <span>· Free design review ·</span>
          <span>· Quote in 1 business day ·</span>
        </motion.div>
      </div>
    </section>
  );
}
