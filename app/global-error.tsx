'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif', background: '#FAF8F5', color: '#1A1614' }}>
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
          <div
            style={{
              maxWidth: 480,
              width: '100%',
              background: '#FFFFFF',
              border: '1px solid #EFE3D0',
              borderRadius: 24,
              padding: '32px 28px',
              textAlign: 'center',
              boxShadow: '0 20px 50px -20px rgba(70,45,25,0.25)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 3,
                background: 'linear-gradient(to right, #C77F45, #E8B97E, transparent)',
              }}
            />

            <div
              style={{
                width: 56,
                height: 56,
                margin: '0 auto 20px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #F8E2BB, #E8B97E, #C77F45)',
                padding: 3,
                boxShadow: '0 14px 30px -12px rgba(199,127,69,0.5)',
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  background: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 24,
                  fontWeight: 600,
                  color: '#1A1614',
                }}
              >
                !
              </div>
            </div>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '4px 12px',
                borderRadius: 999,
                background: '#F5EFE6',
                border: '1px solid #EFE3D0',
                marginBottom: 16,
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#C77F45' }} />
              <span style={{ fontSize: 10.5, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#7A5A3F' }}>
                Critical error
              </span>
            </div>

            <h2 style={{ fontSize: 28, fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.1, color: '#1A1614', margin: '0 0 12px' }}>
              Something went wrong
            </h2>

            <p style={{ fontSize: 15, color: '#5A5550', lineHeight: 1.6, margin: '0 auto 28px', maxWidth: 360 }}>
              The application encountered an unexpected error. Please try reloading the page.
            </p>

            <button
              onClick={() => reset()}
              style={{
                padding: '12px 24px',
                background: '#1A1614',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: 999,
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: '-0.01em',
                cursor: 'pointer',
                boxShadow: '0 12px 28px -12px rgba(26,22,20,0.55)',
              }}
            >
              Try Again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
