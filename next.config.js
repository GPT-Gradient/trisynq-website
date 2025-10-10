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
            value: 'SAMEORIGIN'
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
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ]
  },

  // Redirects for legacy URLs
  async redirects() {
    return [
      {
        source: '/continuum',
        destination: '/proof',
        permanent: true
      },
      {
        source: '/the-forge',
        destination: '/forge',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
