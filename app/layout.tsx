import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Layout from '@/components/layout/Layout';
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics';
import WebVitals from '@/components/performance/WebVitals';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://clearforge.ai'),
  title: {
    default: 'ClearForge | Complexity is the Villain. ClearForge is the Weapon.',
    template: '%s | ClearForge',
  },
  description: 'We dismantle black boxes and rebuild technology around clarity—no hype, no smoke. Just systems that make sense.',
  keywords: [
    'AI transparency',
    'business clarity',
    'ethical AI',
    'data accessibility',
    'enterprise simplification',
    'transparent technology',
    'SMB enterprise capabilities',
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
