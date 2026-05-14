import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Mohammed Arfan - Full Stack & Mobile Developer Portfolio';
export const size = {
  width: 1200,
  height: 630,
};
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
          padding: '72px 80px',
          backgroundColor: '#FAF8F5',
          backgroundImage:
            'radial-gradient(circle at 88% 18%, rgba(242, 229, 210, 0.85), transparent 55%), radial-gradient(circle at 12% 88%, rgba(239, 228, 212, 0.75), transparent 55%)',
          position: 'relative',
        }}
      >
        {/* Subtle dot grain */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(26,22,20,0.08) 1px, transparent 0)',
            backgroundSize: '28px 28px',
            opacity: 0.4,
            display: 'flex',
          }}
        />

        {/* Top row: brand + tag */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'relative',
          }}
        >
          {/* Brand lockup */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div
              style={{
                width: 64,
                height: 64,
                background: '#1A1614',
                borderRadius: 16,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9 7.5 L4.5 12 L9 16.5"
                  stroke="#E8B97E"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15 7.5 L19.5 12 L15 16.5"
                  stroke="#E8B97E"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 5.5 L10 18.5"
                  stroke="#C77F45"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div style={{ display: 'flex', fontSize: 32, fontWeight: 700, color: '#1A1614', letterSpacing: '-0.02em' }}>
              ArfanCodes
            </div>
          </div>

          {/* Status pill */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '10px 18px',
              background: '#FFFFFF',
              border: '1px solid #E8E2D9',
              borderRadius: 999,
              boxShadow: '0 2px 10px -4px rgba(60,40,20,0.08)',
            }}
          >
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#C77F45', display: 'flex' }} />
            <div style={{ fontSize: 16, fontWeight: 600, color: '#5A5550', letterSpacing: '0.16em', textTransform: 'uppercase' }}>
              Portfolio
            </div>
          </div>
        </div>

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: 'auto',
            position: 'relative',
          }}
        >
          <div
            style={{
              fontSize: 82,
              fontWeight: 600,
              color: '#1A1614',
              letterSpacing: '-0.03em',
              lineHeight: 1.02,
              marginBottom: 22,
              display: 'flex',
            }}
          >
            Mohammed Arfan
          </div>

          <div
            style={{
              fontSize: 44,
              fontWeight: 500,
              color: '#7A5A3F',
              letterSpacing: '-0.015em',
              marginBottom: 32,
              display: 'flex',
            }}
          >
            Full Stack &amp; Mobile Developer
          </div>

          <div
            style={{
              fontSize: 24,
              color: '#5A5550',
              lineHeight: 1.45,
              maxWidth: 880,
              display: 'flex',
            }}
          >
            Production-ready mobile apps and full-stack development
          </div>

          {/* Bottom row: URL + accent line */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              marginTop: 36,
            }}
          >
            <div style={{ display: 'flex', width: 48, height: 2, background: '#C77F45', borderRadius: 2 }} />
            <div style={{ fontSize: 22, fontWeight: 600, color: '#1A1614', letterSpacing: '-0.01em', display: 'flex' }}>
              arfaan.me
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
