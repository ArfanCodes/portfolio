import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import AnalyticsWrapper from '@/components/AnalyticsWrapper';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohammed Arfan | App Developer",
  description: "Production-ready mobile apps and full-stack development portfolio.",
  keywords: ["Mohammed Arfan", "App Developer", "Mobile Developer", "React Native", "Full Stack Developer", "Portfolio"],
  authors: [{ name: "Mohammed Arfan" }],
  creator: "Mohammed Arfan",
  metadataBase: new URL("https://arfaan.me"),
  openGraph: {
    title: "Mohammed Arfan | App Developer",
    description: "Production-ready mobile apps and full-stack development portfolio.",
    url: "https://arfaan.me",
    siteName: "Mohammed Arfan Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mohammed Arfan - App Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Arfan | App Developer",
    description: "Production-ready mobile apps and full-stack development portfolio.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mohammed Arfan",
              url: "https://arfaan.me",
              jobTitle: "App Developer",
              description: "Production-ready mobile apps and full-stack development",
              sameAs: [
                "https://www.linkedin.com/in/mohammed-arfan-167452171",
                "https://github.com/ArfanCodes",
                "https://www.instagram.com/Arfaan.3/",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AnalyticsWrapper />
        {children}
      </body>
    </html>
  );
}
