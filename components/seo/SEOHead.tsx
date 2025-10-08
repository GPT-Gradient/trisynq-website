import { Metadata } from 'next';

interface SEOProps {
  title: string;
  description: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
}

export function generateMetadata({
  title,
  description,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  canonical,
}: SEOProps): Metadata {
  const siteName = 'TriSynq AI';
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://trisynq.ai';
  const canonicalUrl = canonical || baseUrl;

  return {
    title: fullTitle,
    description,
    keywords: [
      'enterprise technology for small business',
      'AI for SMBs',
      'transparent search optimization',
      'data democratization',
      'authentic AI amplification',
      'vendor independence',
      'SMB enterprise capabilities',
      'technology translation services',
    ],
    authors: [{ name: 'TriSynq Continuum' }],
    creator: 'TriSynq AI',
    publisher: 'TriSynq Continuum',
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
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: ogType as any,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
      creator: '@trisynqai',
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    },
  };
}

interface JSONLDProps {
  type: 'Organization' | 'WebSite' | 'WebPage' | 'Article';
  data: Record<string, any>;
}

export function generateJSONLD({ type, data }: JSONLDProps) {
  const baseContext = {
    '@context': 'https://schema.org',
    '@type': type,
  };

  return {
    __html: JSON.stringify({ ...baseContext, ...data }),
  };
}
