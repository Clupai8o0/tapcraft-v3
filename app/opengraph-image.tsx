import { ImageResponse } from 'next/og';

export const alt = 'TapCraft — Custom NFC products, made in Melbourne';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background:
            'radial-gradient(ellipse at 20% 20%, #1B2540 0%, transparent 60%), radial-gradient(ellipse at 80% 80%, #1B2540 0%, transparent 50%), #0A0A0C',
          color: '#F5F5F7',
          padding: 80,
          fontFamily: 'system-ui',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: 'linear-gradient(135deg, #7DD3FC 0%, #2680FF 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 28,
              fontWeight: 800,
              color: '#0A0A0C',
            }}
          >
            TC
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: '#F5F5F7',
            }}
          >
            TapCraft Studio
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontSize: 78,
              fontWeight: 600,
              letterSpacing: '-0.025em',
              lineHeight: 1.05,
              color: '#F5F5F7',
              maxWidth: 920,
            }}
          >
            <div style={{ display: 'flex' }}>Custom NFC products,</div>
            <div style={{ display: 'flex', color: '#7DD3FC' }}>made in Melbourne.</div>
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 24,
              color: '#B8B8C0',
              maxWidth: 720,
              lineHeight: 1.4,
            }}
          >
            3D-printed keychains, lanyards, badges, and tags. Encoded, audit-logged, shipped from Brunswick.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 18,
            color: '#75757F',
            fontFamily: 'monospace',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}
        >
          <div style={{ display: 'flex' }}>tapcraft.shop</div>
          <div style={{ display: 'flex' }}>Naarm / Melbourne · AU</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
