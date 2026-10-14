import type { Metadata } from 'next';
import { DM_Sans, DM_Mono, Manrope } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-mono',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Adithya R. | Finance, Analytics & Psychology',
  description: 'Portfolio of Adithya R — MBA student specializing in Finance and Business Analytics, with a foundation in Psychology, Data Analytics, and Data Science.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  openGraph: {
    title: 'Adithya R. | Portfolio',
    description: 'Finance · Business Analytics · Data Science · Psychology',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmMono.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
