import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@components/layout/Header';
import { Footer } from '@components/layout/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    template: '%s | PayPlan',
    default: 'PayPlan — Free Debt Advice & Solutions',
  },
  description:
    'Free, confidential debt advice from PayPlan. We help you find the right debt solution — DMP, IVA, DRO, bankruptcy and more.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
