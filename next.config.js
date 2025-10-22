/** @type {import('next').NextConfig} */
const nextConfig = {
  // Output standalone for Docker deployment
  output: 'standalone',

  // Image optimization
  images: {
    unoptimized: false,
    domains: ['www.clearforgetech.com', 'localhost'],
    formats: ['image/webp', 'image/avif'],
  },

  // React configuration
  reactStrictMode: true,
  poweredByHeader: false,

  // Compression
  compress: true,

  // Security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY' // Changed from SAMEORIGIN for better security
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin' // Stricter referrer policy
          }
        ]
      },
      // CORS headers for API routes
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: process.env.NEXT_PUBLIC_APP_URL || 'https://clearforge.ai'
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,POST,OPTIONS'
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type'
          }
        ]
      }
    ]
  },

  // Redirects for legacy URLs and archived pages
  async redirects() {
    return [
      // Legacy routes
      {
        source: '/the-forge',
        destination: '/forge',
        permanent: true
      },
      // Archived Solutions pages → Services
      {
        source: '/solutions',
        destination: '/services',
        permanent: true
      },
      {
        source: '/solutions/consulting',
        destination: '/services/consulting',
        permanent: true
      },
      {
        source: '/solutions/custom',
        destination: '/services/custom',
        permanent: true
      },
      {
        source: '/solutions/partnership',
        destination: '/services/partnership',
        permanent: true
      },
      {
        source: '/solutions/platform',
        destination: '/foundry/platform',
        permanent: true
      },
      {
        source: '/solutions/b2b',
        destination: '/services/consulting',
        permanent: true
      },
      // Archived Training pages → Services
      {
        source: '/training',
        destination: '/services/training',
        permanent: true
      },
      {
        source: '/training/:path*',
        destination: '/services/training',
        permanent: true
      },
      // Archived Community pages → Forge
      {
        source: '/community',
        destination: '/forge/community',
        permanent: true
      },
      {
        source: '/community/:path*',
        destination: '/forge/community',
        permanent: true
      },
      // Archived Mission pages → About
      {
        source: '/mission',
        destination: '/about/mission',
        permanent: true
      },
      {
        source: '/mission/:path*',
        destination: '/about/mission',
        permanent: true
      },
      // Archived About pages → Consolidated About
      {
        source: '/about/values',
        destination: '/about/mission',
        permanent: true
      },
      {
        source: '/about/culture',
        destination: '/about/mission',
        permanent: true
      },
      {
        source: '/about/team-philosophy',
        destination: '/about/mission',
        permanent: true
      },
      // Archived Beta pages → Contact
      {
        source: '/beta',
        destination: '/contact?type=beta-os',
        permanent: true
      },
      {
        source: '/beta-program',
        destination: '/contact?type=beta-os',
        permanent: true
      },
      // Archived legacy pages → Homepage
      {
        source: '/get-started',
        destination: '/',
        permanent: true
      },
      {
        source: '/what-we-do',
        destination: '/about/story',
        permanent: true
      },
      {
        source: '/who-we-are',
        destination: '/about/story',
        permanent: true
      },
      {
        source: '/how-we-do-it',
        destination: '/about/mission',
        permanent: true
      },
      {
        source: '/ai-reality-check',
        destination: '/about/story',
        permanent: true
      },
      {
        source: '/manifesto',
        destination: '/about/mission',
        permanent: true
      },
      // Archived duplicate → Knowledge
      {
        source: '/forge/topics',
        destination: '/forge/knowledge',
        permanent: true
      },
      // Xynergy rebrand
      {
        source: '/xynergy',
        destination: '/foundry/platform',
        permanent: true
      },
      {
        source: '/xynergy/:path*',
        destination: '/foundry/platform',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
