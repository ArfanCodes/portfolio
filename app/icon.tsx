
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
          background: '#0C1519',
          borderRadius: '30%',
          border: '2px solid #CF9D7B',
        }}
      >
        <div
          style={{
            fontSize: 20,
            background: '#CF9D7B',
            backgroundClip: 'text',
            color: 'transparent',
            fontWeight: 700,
            fontFamily: '"Times New Roman", Times, serif',
            letterSpacing: '-0.05em',
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
