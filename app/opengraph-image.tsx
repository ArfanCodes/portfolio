import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Mohammed Arfan - App Developer Portfolio';
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
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0C1519',
          backgroundImage: 'linear-gradient(to bottom right, #0C1519, #162127)',
        }}
      >
        {/* Main Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '80px',
          }}
        >
          {/* Name */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              background: 'linear-gradient(to right, #CF9D7B, #724B39)',
              backgroundClip: 'text',
              color: 'transparent',
              marginBottom: 20,
              letterSpacing: '-0.02em',
            }}
          >
            Mohammed Arfan
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: 48,
              fontWeight: 600,
              color: '#E0E0E0',
              marginBottom: 30,
            }}
          >
            App Developer
          </div>

          {/* Description */}
          <div
            style={{
              fontSize: 28,
              color: '#A0A0A0',
              textAlign: 'center',
              maxWidth: 800,
              lineHeight: 1.4,
            }}
          >
            Production-ready mobile apps and full-stack development
          </div>

          {/* Website URL */}
          <div
            style={{
              fontSize: 24,
              color: '#CF9D7B',
              marginTop: 40,
              fontWeight: 600,
            }}
          >
            arfaan.me
          </div>
        </div>

        {/* Decorative Logo Badge */}
        <div
          style={{
            position: 'absolute',
            top: 40,
            right: 40,
            width: 100,
            height: 100,
            borderRadius: 20,
            background: 'linear-gradient(135deg, #CF9D7B, #724B39)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 40,
            fontWeight: 800,
            color: '#0C1519',
          }}
        >
          MA
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
