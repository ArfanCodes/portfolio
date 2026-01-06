
import { ImageResponse } from 'next/og';

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #CF9D7B, #724B39)',
          borderRadius: '8px',
        }}
      >
        <div
          style={{
            fontSize: 22,
            color: '#0C1519',
            fontWeight: 800,
            fontFamily: 'sans-serif',
            letterSpacing: '-0.05em',
            marginTop: '-2px', // Optical alignment
          }}
        >
          MA
        </div>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported icons size metadata
      // config to also set the ImageResponse's width and height.
      ...size,
    }
  );
}
