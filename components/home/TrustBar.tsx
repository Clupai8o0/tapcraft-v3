const TICKER_ITEMS = [
  'Events · lead capture at the booth',
  'Real estate · open-home conversions',
  'Hospitality · review and tip taps',
  'Creators · merch with a follow built in',
  'Agencies · campaign attribution per tag',
  'Hotels · in-room concierge taps',
];

const CLIENTS = ['Northbound', 'FILA·MENT', 'Hatch & Co.', 'PRINTHAUS', 'Yarra Makers', 'cooee/badge'];

export default function TrustBar() {
  return (
    <>
      <div className="ticker">
        <div className="ticker-track">
          {TICKER_ITEMS.map((t, i) => (
            <span key={i} className="ticker-item">{t}</span>
          ))}
        </div>
        <div className="ticker-track" aria-hidden>
          {TICKER_ITEMS.map((t, i) => (
            <span key={i} className="ticker-item">{t}</span>
          ))}
        </div>
      </div>

      <section className="logo-row border-t border-[var(--line)]">
        <div className="wrap">
          <div className="label">Working with studios, brands and agents across Australia</div>
          <div className="logo-strip">
            {CLIENTS.map((c, i) => (
              <div
                key={c}
                className="lg"
                style={
                  i === 1
                    ? { fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '18px', letterSpacing: '0.2em' }
                    : i === 3
                      ? { fontFamily: 'var(--font-mono)', fontSize: '13px' }
                      : i === 5
                        ? { fontFamily: 'var(--font-mono)', fontWeight: 500, fontSize: '14px', letterSpacing: 0 }
                        : undefined
                }
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
