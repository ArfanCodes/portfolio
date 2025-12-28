import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Mohammed Arfan Portfolio',
    short_name: 'Arfan',
    description: 'Production-ready mobile apps and full-stack development portfolio',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#5D0D18',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
