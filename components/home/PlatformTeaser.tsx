'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Terminal } from 'lucide-react';

export default function PlatformTeaser() {
  return (
    <section className="section">
      <div className="wrap">
        <motion.div
          className="dev-block"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <span className="eyebrow" style={{ color: 'var(--ink-2)' }}>
              The in-house toolchain
            </span>
            <h2 className="h1 balance" style={{ marginTop: 14, maxWidth: '22ch' }}>
              We built our own stack. <em className="serif-em">Now we&apos;re opening it up.</em>
            </h2>
            <p style={{ marginTop: 18, color: 'var(--ink-2)', maxWidth: '52ch', fontSize: '15.5px', lineHeight: 1.55 }}>
              The software that runs Brunswick &mdash; production queue, custom-order intake, configurator,
              and our own NFC encoder app (because NFC Tools wasn&apos;t cutting it) &mdash; is becoming
              a separate platform for other studios and agencies that ship NFC at scale.
            </p>
            <ul style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: '10px', color: 'var(--ink-2)', fontSize: '14px', listStyle: 'none', padding: 0 }}>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'baseline' }}>
                <span style={{ color: 'var(--accent-ink)', fontFamily: 'var(--font-mono)', fontSize: '11px' }}>→</span>
                <span><strong style={{ color: 'var(--ink)', fontWeight: 500 }}>TapCraft Encoder</strong> · batch NFC programming, audit log, per-tag analytics. Replaces NFC Tools in our studio.</span>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'baseline' }}>
                <span style={{ color: 'var(--accent-ink)', fontFamily: 'var(--font-mono)', fontSize: '11px' }}>→</span>
                <span><strong style={{ color: 'var(--ink)', fontWeight: 500 }}>Configurator</strong> · the 3D customise tool, embeddable on your own site.</span>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'baseline' }}>
                <span style={{ color: 'var(--accent-ink)', fontFamily: 'var(--font-mono)', fontSize: '11px' }}>→</span>
                <span><strong style={{ color: 'var(--ink)', fontWeight: 500 }}>Production queue</strong> · custom-order intake to print-farm dispatch in one place.</span>
              </li>
            </ul>
            <div style={{ marginTop: 28, display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Link className="btn btn--accent" href="/platform">
                Tour the platform <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                className="btn"
                style={{ background: 'transparent', color: 'var(--ink-2)', border: '1px solid var(--line)' }}
                href="/platform/pricing"
              >
                Pricing &amp; tiers
              </Link>
            </div>
          </div>
          <div className="terminal">
            <div className="head">
              <span /><span /><span />
              <Terminal className="ml-auto h-3.5 w-3.5 text-[#75757F]" />
            </div>
            <pre>
              <span className="dim">$</span> <span className="cmd">tapcraft new acme-event</span>{'\n'}
              <span className="dim">↳ Scaffolding workspace…</span>{'\n'}
              <span className="ok">✓</span> Created <span className="dim">acme-event/</span>{'\n\n'}
              <span className="dim">$</span> <span className="cmd">tapcraft nfc:program --batch=2287</span>{'\n'}
              <span className="dim">↳ Reading 240 NDEF records…</span>{'\n'}
              <span className="ok">✓</span> 240/240 tags encoded{'\n'}
              <span className="ok">✓</span> Audit log → <span className="dim">batch-2287.csv</span>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
