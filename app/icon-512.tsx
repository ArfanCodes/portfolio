import { ImageResponse } from 'next/og';

export const size = {
  width: 512,
  height: 512,
};
export const contentType = 'image/png';

export default function Icon512() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 280,
          background: 'linear-gradient(to bottom right, #5D0D18, #4A0A12)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          borderRadius: '15%',
          fontWeight: 800,
          fontFamily: 'sans-serif',
        }}
      >
        MA
      </div>
    ),
    {
      ...size,
    }
  );
}
