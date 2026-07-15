'use client';

import { useEffect } from 'react';

const PHRASES = [
  'Conversion, reimagined.',
  'Touch beats a tap of glass.',
  'Made in Naarm.',
  'Built to be carried.',
  'A tag is a meeting.',
];

export default function Marquee() {
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const tracks = document.querySelectorAll<HTMLElement>('.marquee-track');
    const apply = (e: MediaQueryListEvent | MediaQueryList) => {
      tracks.forEach((t) => { t.style.animationPlayState = e.matches ? 'paused' : 'running'; });
    };
    apply(mq);
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, []);

  const items = [...PHRASES, ...PHRASES];

  return (
    <section className="py-24 border-t border-b border-[var(--line)]" aria-label="Company highlights">
      <div className="marquee">
        <div className="marquee-track" aria-hidden>
          {items.map((p, i) => (
            <span key={i} className="marquee-item">
              {i % 2 === 0 ? <em>{p}</em> : p}
              <span className="sep" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
