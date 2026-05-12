'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const STEPS = [
  {
    id: 'i',
    title: 'Brief',
    body: '15-minute call. We learn what you sell, who you sell to, and what a successful tap looks like for you. You leave with a quote.',
    detail: 'Day 0 · 15 min',
  },
  {
    id: 'ii',
    title: 'Design',
    body: 'We mock up the object and the landing page. Approve in your inbox — no design tools, no back-and-forth threads.',
    detail: 'Day 1–2 · Figma proof',
  },
  {
    id: 'iii',
    title: 'Print',
    body: 'Bambu / Prusa farm in Brunswick. Matte, gloss, two-tone, embedded text — all in-house, all in Melbourne.',
    detail: 'Day 3–5 · in studio',
  },
  {
    id: 'iv',
    title: 'Encode',
    body: 'Every chip programmed and tested in our own in-house app — purpose-built because NFC Tools is too fiddly for batch work. Per-tag URLs for analytics, batch URLs for simple. Full audit log.',
    detail: 'Day 5 · 100% verified',
  },
  {
    id: 'v',
    title: 'Ship',
    body: 'Tracked Australia Post. Sample lands within 7 days, full runs within 14. Re-orders ship in 5.',
    detail: 'Day 7 · door-to-door',
  },
] as const;

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // active step index 0..4 driven by scroll
  const stepProgress = useTransform(scrollYProgress, [0.15, 0.85], [0, STEPS.length - 1]);

  return (
    <section className="section" ref={ref}>
      <div className="wrap">
        <div className="max-w-2xl mb-12">
          <span className="eyebrow">How it runs</span>
          <h2 className="h1 balance" style={{ marginTop: 14 }}>
            From brief to <em className="serif-em">in-hand</em> in seven days.
          </h2>
          <p className="lede" style={{ marginTop: 18 }}>
            One studio, one team, one timeline. No agency layers, no overseas factory roulette.
          </p>
        </div>

        <div className="process-wrap">
          <div className="flex flex-col gap-16">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0.4, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: '-30%' }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-3 pt-6 border-t border-[var(--line)]"
              >
                <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--accent-ink)]">
                  {s.id.toUpperCase()} · {s.detail}
                </div>
                <h3 className="text-[28px] tracking-tight font-semibold leading-tight">{s.title}</h3>
                <p className="text-[var(--ink-2)] text-[15px] leading-relaxed max-w-prose">{s.body}</p>
              </motion.div>
            ))}
          </div>

          <div className="process-sticky">
            <div className="process-frame grid-lines">
              <ProcessVisual progress={stepProgress} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessVisual({ progress }: { progress: ReturnType<typeof useTransform<number, number>> }) {
  // visual changes by step — we layer 5 absolute layers and crossfade
  return (
    <div className="relative h-full w-full">
      <motion.div
        style={{ opacity: useTransform(progress, [0, 0.4, 0.6], [1, 1, 0]) }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="text-center">
          <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--muted)] mb-3">
            Step 01 — Brief
          </div>
          <div className="font-serif text-[64px] leading-none italic text-[var(--accent-ink)]">
            &ldquo;Talk to us.&rdquo;
          </div>
          <div className="font-mono text-[12px] text-[var(--muted)] mt-4">15-min Zoom · Mon–Fri</div>
        </div>
      </motion.div>

      <motion.div
        style={{ opacity: useTransform(progress, [0.4, 0.8, 1.2, 1.6], [0, 1, 1, 0]) }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="text-center">
          <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--muted)] mb-3">
            Step 02 — Design
          </div>
          <div className="grid grid-cols-3 gap-3 max-w-sm mx-auto">
            {['ink', 'matte', 'metal'].map((variant) => (
              <div
                key={variant}
                className="aspect-square rounded-lg border border-[var(--line)] bg-[var(--bg-2)] flex items-center justify-center text-[10.5px] font-mono uppercase tracking-[0.12em] text-[var(--muted)]"
              >
                {variant}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        style={{ opacity: useTransform(progress, [1.4, 2.0, 2.6, 3.0], [0, 1, 1, 0]) }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="text-center">
          <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--muted)] mb-3">
            Step 03 — Print
          </div>
          <div className="font-mono text-[12px] text-[var(--ink-2)] grid gap-1.5 max-w-sm mx-auto leading-relaxed">
            <div className="flex justify-between"><span>Printer 04</span><span className="text-[var(--accent)]">running 92%</span></div>
            <div className="flex justify-between"><span>Printer 05</span><span className="text-[var(--accent)]">running 67%</span></div>
            <div className="flex justify-between"><span>Printer 06</span><span className="text-[oklch(0.78_0.18_145)]">queued</span></div>
            <div className="flex justify-between"><span>Printer 07</span><span className="text-[var(--muted)]">idle</span></div>
          </div>
        </div>
      </motion.div>

      <motion.div
        style={{ opacity: useTransform(progress, [2.6, 3.2, 3.6, 4.0], [0, 1, 1, 0]) }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="text-center w-full px-4">
          <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--muted)] mb-3">
            Step 04 — Encode · in-house app
          </div>
          <div className="bg-[var(--bg-2)] border border-[var(--line)] rounded-lg overflow-hidden max-w-sm mx-auto text-left">
            <div className="flex items-center justify-between px-3 py-2 border-b border-[var(--line)]">
              <span className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-[var(--muted)]">
                TapCraft Encoder
              </span>
              <span className="font-mono text-[10px] text-[oklch(0.78_0.18_145)] inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.78_0.18_145)]" />
                connected
              </span>
            </div>
            <div className="p-4 font-mono text-[11px] text-[var(--ink-2)] space-y-1.5">
              <div className="flex justify-between"><span className="text-[var(--muted)]">Batch</span><span>2287 · Belle Property</span></div>
              <div className="flex justify-between"><span className="text-[var(--muted)]">Mode</span><span>per-tag URL</span></div>
              <div className="flex justify-between"><span className="text-[var(--muted)]">Progress</span><span className="text-[oklch(0.78_0.18_145)]">240 / 240</span></div>
              <div className="mt-2 pt-2 border-t border-[var(--line-2)] flex justify-between">
                <span className="text-[var(--muted)]">Verified</span>
                <span className="text-[oklch(0.78_0.18_145)]">✓ all good</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        style={{ opacity: useTransform(progress, [3.6, 4.0], [0, 1]) }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="text-center">
          <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--muted)] mb-3">
            Step 05 — Ship
          </div>
          <div className="font-serif text-[48px] leading-none">In your hand on day 7.</div>
          <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--positive)] mt-4 inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[var(--positive)] rounded-full" />
            AusPost tracked
          </div>
        </div>
      </motion.div>
    </div>
  );
}
