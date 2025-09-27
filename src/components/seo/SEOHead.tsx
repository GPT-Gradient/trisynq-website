import Head from 'next/head'
import type { PageMetadata } from '@/types'

interface SEOHeadProps extends PageMetadata {
  url?: string
  type?: 'website' | 'article' | 'profile'
  author?: string
  publishedDate?: string
  modifiedDate?: string
}

export default function SEOHead({
  title,
  description,
  keywords = [],
  image = '/og-image.jpg',
  url = 'https://trisynq.ai',
  type = 'website',
  author = 'TriSynq AI Team',
  publishedDate,
  modifiedDate
}: SEOHeadProps) {
  const defaultKeywords = [
    'technology translation',
    'creative technology',
    'technology consulting',
    'AI platforms',
    'digital transformation',
    'technology education',
    'creative amplification',
    'vendor independence',
    'technology bridge',
    'creative minds',
    'transparent technology'
  ]

  const allKeywords = Array.from(new Set([...keywords, ...defaultKeywords]))
  const fullTitle = title.includes('TriSynq') ? title : `${title} | TriSynq AI`

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords.join(', ')} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="TriSynq AI" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@trisynqai" />
      <meta name="twitter:site" content="@trisynqai" />

      {/* Article specific */}
      {type === 'article' && publishedDate && (
        <meta property="article:published_time" content={publishedDate} />
      )}
      {type === 'article' && modifiedDate && (
        <meta property="article:modified_time" content={modifiedDate} />
      )}
      {type === 'article' && author && (
        <meta property="article:author" content={author} />
      )}

      {/* Additional SEO */}
      <meta name="theme-color" content="#1a202c" />
      <meta name="msapplication-TileColor" content="#1a202c" />

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://images.unsplash.com" />
      <link rel="preconnect" href="https://via.placeholder.com" />

      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
    </Head>
  )
}