import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header, Footer } from '@/components/layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Casa Project Management | Construction PM for Strata & Body Corporates',
  description:
    'Professional construction project management for strata managers and body corporates in Queensland. Scope preparation, tender management, and contract administration.',
  keywords: [
    'construction project management',
    'strata building repairs',
    'body corporate project manager',
    'queensland',
    'brisbane',
    'scope of works',
    'tender management',
    'contract administration',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
