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
  const siteName = 'ClearForge';
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://clearforge.ai';
  const canonicalUrl = canonical || baseUrl;

  return {
    title: fullTitle,
    description,
    keywords: [
      'AI transparency',
      'business clarity',
      'ethical AI',
      'data accessibility',
      'enterprise simplification',
      'transparent technology',
      'SMB enterprise capabilities',
      'technology translation services',
    ],
    authors: [{ name: 'ClearForge' }],
    creator: 'ClearForge',
    publisher: 'ClearForge',
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
      creator: '@clearforge',
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
