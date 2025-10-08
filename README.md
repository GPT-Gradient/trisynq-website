# TriSynq AI Website

A production-ready Next.js 13+ website for TriSynq AI - democratizing enterprise technology for SMBs through transparent translation across technology, data, and AI.

## 🚀 Tech Stack

- **Framework**: Next.js 14.2+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Google Cloud Platform (Cloud Run)
- **Analytics**: Google Analytics 4
- **API Integration**: Xynergy Platform

## 📋 Prerequisites

- Node.js 20.x or higher
- npm or yarn
- Google Cloud SDK (for deployment)
- Docker (for containerization)

## 🛠️ Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd trisynq-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

   Update the following variables in `.env.local`:
   - `NEXT_PUBLIC_XYNERGY_API_URL`: Xynergy API endpoint
   - `XYNERGY_API_KEY`: Your Xynergy API key
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID`: Google Analytics measurement ID

4. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Build for production**
   ```bash
   npm run build
   npm start
   ```

## 📁 Project Structure

```
trisynq-website/
├── app/                      # Next.js App Router pages
│   ├── about/               # About pages
│   ├── api/                 # API routes
│   ├── beta/                # Beta program page
│   ├── community/           # Community pages
│   ├── contact/             # Contact page
│   ├── continuum/           # Continuum project pages
│   ├── dashboard/           # Public dashboard
│   ├── mission/             # Mission pages
│   ├── solutions/           # Solutions pages
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Homepage
│   ├── robots.ts            # Robots.txt generator
│   └── sitemap.ts           # Sitemap generator
├── components/              # React components
│   ├── analytics/           # Analytics components
│   ├── forms/               # Form components
│   ├── layout/              # Layout components
│   ├── performance/         # Performance optimization
│   ├── seo/                 # SEO components
│   └── ui/                  # UI components
├── data/                    # Static data
├── lib/                     # Utility libraries
├── types/                   # TypeScript types
├── public/                  # Static assets
└── Media/                   # Requirements and assets
```

## 🌐 Pages Included

### Core Pages
- **Homepage** (`/`) - 6 key sections with hero, problem, solution, continuum preview, dashboard, beta spotlight
- **Dashboard** (`/dashboard`) - Public transparency dashboard with live metrics

### About Section
- Who We Are (`/about`)
- Founder Story (`/about/founder-story`)
- Team & Philosophy (`/about/team-philosophy`)

### Mission Section
- The Manifesto (`/mission`)
- Transparency Revolution (`/mission/transparency`)
- Economic Liberation (`/mission/economic-liberation`)

### The Continuum Projects
- Overview (`/continuum`)
- Project NEXUS - Search (`/continuum/nexus`)
- Data Democracy (`/continuum/data-democracy`)
- Project No-Cheating - Education (`/continuum/no-cheating`)
- Project CTO's Heart - Special Needs (`/continuum/ctos-heart`)
- Project Safe Spaces - Kids Safety (`/continuum/safe-spaces`)
- Project RE-Connect - Real Estate (`/continuum/re-connect`)

### Solutions
- Consulting & Advisory (`/solutions/consulting`)
- Partnership Development (`/solutions/partnership`)
- Platform Solutions (`/solutions/platform`)
- Custom Development (`/solutions/custom`)

### Community
- The 20% Army (`/community/20-percent`)
- Beta Partners (`/community/beta-partners`)
- Success Stories (`/community/success-stories`)
- Resources (`/community/resources`)

### Action Pages
- Beta Program (`/beta`)
- Contact (`/contact`)

## 🚢 Deployment

### Google Cloud Platform (Recommended)

1. **Prerequisites**
   - GCP project created
   - Cloud Build API enabled
   - Cloud Run API enabled
   - Artifact Registry or Container Registry enabled

2. **Set up secrets in Google Secret Manager**
   ```bash
   # Create secrets
   echo -n "your-xynergy-api-key" | gcloud secrets create xynergy-api-key --data-file=-
   echo -n "your-ga-id" | gcloud secrets create ga-measurement-id --data-file=-
   ```

3. **Deploy using Cloud Build**
   ```bash
   gcloud builds submit --config=cloudbuild.yaml
   ```

4. **Manual Docker deployment**
   ```bash
   # Build the image
   docker build -t gcr.io/[PROJECT_ID]/trisynq-website:latest .

   # Push to GCR
   docker push gcr.io/[PROJECT_ID]/trisynq-website:latest

   # Deploy to Cloud Run
   gcloud run deploy trisynq-website \
     --image gcr.io/[PROJECT_ID]/trisynq-website:latest \
     --region us-central1 \
     --platform managed \
     --allow-unauthenticated
   ```

### Environment Variables for Production

Set these in your Cloud Run service:

- `NODE_ENV=production`
- `NEXT_TELEMETRY_DISABLED=1`
- `NEXT_PUBLIC_XYNERGY_API_URL=https://api.xynergy.io/v1`
- `XYNERGY_API_KEY=<from-secret-manager>`
- `NEXT_PUBLIC_GA_MEASUREMENT_ID=<from-secret-manager>`

## 🎨 Design System

### Color Palette
- **Primary Dark**: `#1a202c` - Enterprise sophistication
- **Primary Blue**: `#4299e1` - Bright accent blue
- **Secondary Purple**: `#553c9a` - Deep purple (innovation)
- **Secondary Purple Light**: `#9f7aea` - Bright purple
- **Accent Pink**: `#ed64a6` - CTAs and highlights
- **Background Dark**: `#1a202c`
- **Background Medium**: `#2d3748`

### Typography
- Font: Inter (Google Fonts)
- Headings: Bold, large scale
- Body: 16px base, line-height 1.5
- CTAs: Semibold, clear hierarchy

### Components
- **Button**: 4 variants (primary, secondary, outline, ghost)
- **Card**: 3 variants (default, bordered, elevated)
- **Section**: Background variants (dark, medium, gradient)

## 🔌 API Integration

### Xynergy Platform
The website integrates with the Xynergy platform for:
- Content management
- Beta application submissions
- Contact form submissions
- Live metrics and dashboard data

### API Routes
- `POST /api/beta` - Beta program applications
- `POST /api/contact` - Contact form submissions

## ⚡ Performance

### Core Web Vitals Targets
- **LCP (Largest Contentful Paint)**: < 1.2s
- **FID (First Input Delay)**: < 50ms
- **CLS (Cumulative Layout Shift)**: < 0.05

### Optimizations
- Image optimization with Next.js Image component
- Automatic code splitting
- Static page generation where possible
- Compression enabled
- Security headers configured

## 📊 Analytics

Google Analytics 4 is integrated for:
- Page views and user flow
- Conversion tracking (beta applications, contact forms)
- Core Web Vitals monitoring
- Event tracking

## 🔒 Security

Security headers configured in `next.config.js`:
- Strict-Transport-Security
- X-Frame-Options
- X-Content-Type-Options
- X-XSS-Protection
- Referrer-Policy

## 📝 SEO

- Comprehensive meta tags on all pages
- Open Graph and Twitter Card support
- Automatic sitemap generation (`/sitemap.xml`)
- Robots.txt configuration (`/robots.txt`)
- Structured data (JSON-LD) ready
- Canonical URLs configured

## 🧪 Testing

Run the build to check for errors:
```bash
npm run build
```

## 📄 License

Proprietary - TriSynq Continuum

## 🤝 Support

For questions or issues:
- Email: hello@trisynq.ai
- Location: Port St. Lucie, Florida
- Response time: 24-48 hours

---

**Built with transparency by TriSynq AI**

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
