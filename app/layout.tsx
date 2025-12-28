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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AnalyticsWrapper />
        {children}
      </body>
    </html>
  );
}
