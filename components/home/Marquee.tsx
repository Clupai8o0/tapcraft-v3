const PHRASES = [
  'Conversion, reimagined.',
  'Touch beats a tap of glass.',
  'Made in Naarm.',
  'Built to be carried.',
  'A tag is a meeting.',
];

export default function Marquee() {
  return (
    <section className="py-24 border-t border-b border-[var(--line)] overflow-hidden">
      <div className="marquee">
        <div className="marquee-track" aria-hidden>
          {PHRASES.map((p, i) => (
            <span key={`a-${i}`} className="marquee-item">
              {i % 2 === 0 ? <em>{p}</em> : p}
              <span className="sep" />
            </span>
          ))}
        </div>
        <div className="marquee-track" aria-hidden>
          {PHRASES.map((p, i) => (
            <span key={`b-${i}`} className="marquee-item">
              {i % 2 === 0 ? <em>{p}</em> : p}
              <span className="sep" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
