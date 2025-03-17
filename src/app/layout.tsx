import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SentraIntel | Advanced Security Solutions',
  description: 'SentraIntel leads the development of comprehensive technological solutions that transform strategic communications management, enhance operational intelligence, and provide effective protection against complex threats.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-dark text-white`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}