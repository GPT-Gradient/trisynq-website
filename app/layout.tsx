import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Layout from '@/components/layout/Layout';
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics';
import WebVitals from '@/components/performance/WebVitals';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://trisynq.ai'),
  title: {
    default: 'TriSynq AI | Democratizing Enterprise Technology for SMBs',
    template: '%s | TriSynq AI',
  },
  description: '43% of U.S. GDP locked out by artificial complexity. We translate enterprise technology, democratize data, and amplify authentic expertise with AI. Complete transparency.',
  keywords: [
    'enterprise technology for small business',
    'AI for SMBs',
    'transparent search optimization',
    'data democratization',
    'authentic AI amplification',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>
          {children}
        </Layout>
        <GoogleAnalytics />
        <WebVitals />
      </body>
    </html>
  );
}
