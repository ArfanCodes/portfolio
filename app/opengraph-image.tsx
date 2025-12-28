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
          backgroundColor: '#FFF9EB',
          backgroundImage: 'linear-gradient(to bottom right, #FFF9EB, #FFFFFF)',
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
              background: 'linear-gradient(to right, #5D0D18, #4A0A12)',
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
              color: '#1A1A1A',
              marginBottom: 30,
            }}
          >
            App Developer
          </div>

          {/* Description */}
          <div
            style={{
              fontSize: 28,
              color: '#555555',
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
              color: '#5D0D18',
              marginTop: 40,
              fontWeight: 600,
            }}
          >
            arfaan.me
          </div>
        </div>

        {/* Decorative Elements */}
        <div
          style={{
            position: 'absolute',
            top: 40,
            right: 40,
            width: 100,
            height: 100,
            borderRadius: 20,
            background: 'linear-gradient(135deg, #5D0D18, #4A0A12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 40,
            fontWeight: 800,
            color: 'white',
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
