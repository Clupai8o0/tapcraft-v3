'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { CreditCard, Smartphone, Database, ArrowRight } from 'lucide-react';

const STEPS = [
  {
    n: '01',
    icon: CreditCard,
    title: 'The handout',
    body: 'A bespoke 3D-printed object — keychain, lanyard, badge — with your brand and an NFC chip embedded.',
    detail: 'Engraved · matte · weighty',
  },
  {
    n: '02',
    icon: Smartphone,
    title: 'The tap',
    body: 'Customer taps with any phone. No app. No QR code to scan. Phone opens your URL in 300 ms.',
    detail: 'iOS 14+ · Android 5+',
  },
  {
    n: '03',
    icon: Database,
    title: 'The lead',
    body: 'Your landing page captures the lead — name, email, intent — and pushes it straight into your CRM.',
    detail: 'HubSpot · Pipedrive · Sheets',
  },
] as const;

export default function Transformation() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-15%' });

  return (
    <section className="section spotlight">
      <div className="wrap relative">
        <div className="max-w-2xl">
          <span className="eyebrow">The transformation</span>
          <h2 className="h1 balance" style={{ marginTop: 14 }}>
            One object. Three steps. <em className="serif-em">A lead in your CRM.</em>
          </h2>
          <p className="lede" style={{ marginTop: 18 }}>
            A QR code asks people to do work. A business card asks people to remember you. A TapCraft tag does
            both jobs in less than a second — and tells you it happened.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 relative">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="glow-card tilt p-7 flex flex-col gap-5 min-h-[280px]"
              onMouseMove={(e) => {
                const el = e.currentTarget;
                const rect = el.getBoundingClientRect();
                el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
                el.style.setProperty('--my', `${e.clientY - rect.top}px`);
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[var(--bg-2)] border border-[var(--line)] grid place-items-center">
                    <s.icon className="h-5 w-5 text-[var(--accent-ink)]" />
                  </div>
                  <span className="num-stamp">
                    <span className="n">{s.n}</span>
                    step
                  </span>
                </div>
                {i < STEPS.length - 1 && (
                  <ArrowRight className="h-5 w-5 text-[var(--muted)] hidden md:block" />
                )}
              </div>

              <div>
                <h3 className="text-xl font-semibold tracking-tight">{s.title}</h3>
                <p className="text-[var(--ink-2)] text-sm mt-2 leading-relaxed">{s.body}</p>
              </div>

              <div className="mt-auto pt-4 border-t border-[var(--line-2)]">
                <span className="font-mono text-[11px] text-[var(--muted)] uppercase tracking-[0.12em]">
                  {s.detail}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* tactile detail line */}
        <div className="flow-arrow mt-10">
          <span className="shrink-0">300 ms tap-to-CRM · zero apps · zero friction</span>
        </div>
      </div>
    </section>
  );
}
