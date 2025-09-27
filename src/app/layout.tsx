import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Layout from '@/components/layout/Layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'TriSynq AI - Technology Translators, Possibility Amplifiers',
    template: '%s | TriSynq AI'
  },
  description: 'We bridge the gap between creative minds and technology. The technology world speaks one language. Creative minds speak another. We\'re the translators.',
  keywords: [
    'technology translation',
    'creative technology',
    'technology consulting',
    'AI platforms',
    'digital transformation',
    'technology education',
    'creative amplification',
    'vendor independence'
  ],
  authors: [{ name: 'TriSynq AI Team' }],
  creator: 'TriSynq AI',
  publisher: 'TriSynq AI',
  metadataBase: new URL('https://trisynq.ai'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://trisynq.ai',
    siteName: 'TriSynq AI',
    title: 'TriSynq AI - Technology Translators, Possibility Amplifiers',
    description: 'We bridge the gap between creative minds and technology. The technology world speaks one language. Creative minds speak another. We\'re the translators.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TriSynq AI - Technology Translation Platform'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TriSynq AI - Technology Translators, Possibility Amplifiers',
    description: 'We bridge the gap between creative minds and technology.',
    images: ['/og-image.jpg']
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
  verification: {
    google: 'google-site-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#1a202c" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "TriSynq AI",
              "url": "https://trisynq.ai",
              "logo": "https://trisynq.ai/logo.png",
              "description": "Technology translation company bridging creative minds with transparent technology capabilities",
              "foundingDate": "2024",
              "founder": {
                "@type": "Person",
                "name": "Shawn Sloan"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              },
              "sameAs": [
                "https://twitter.com/trisynqai",
                "https://linkedin.com/company/trisynqai"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}