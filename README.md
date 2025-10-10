# ClearForge Website

A production-ready Next.js 14+ website for ClearForge — making complexity transparent through Xynergy, our proprietary AI engine that researches, plans, executes, and proves.

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
│   ├── about/               # About pages (How We Started, Team & Philosophy)
│   ├── api/                 # API routes (beta, contact)
│   ├── beta/                # Beta program application page
│   ├── beta-program/        # Beta program structure details
│   ├── community/           # Community pages (4-phase roadmap)
│   ├── contact/             # Contact page
│   ├── continuum/           # Continuum project pages (6 domains)
│   ├── dashboard/           # Public transparency dashboard
│   ├── forge/               # The Forge hub
│   │   └── topics/          # Topics content hub (coming soon)
│   ├── get-started/         # Getting started page
│   ├── how-we-do-it/        # T.R.A.N.S.L.A.T.E. methodology
│   ├── mission/             # Mission pages (Manifesto, Transparency, Economic Liberation)
│   ├── proof/               # Proof page (outcomes, playbooks, demos)
│   ├── solutions/           # Solutions pages (Consulting, Partnership, Platform, Custom)
│   ├── what-we-do/          # What We Do overview
│   ├── who-we-are/          # Who We Are overview
│   ├── xynergy/             # Xynergy engine deep dive
│   ├── layout.tsx           # Root layout with header/footer
│   ├── page.tsx             # Homepage
│   ├── robots.ts            # Robots.txt generator
│   └── sitemap.ts           # Sitemap generator
├── components/              # React components
│   ├── analytics/           # Google Analytics components
│   ├── forms/               # Form components (Beta Application)
│   ├── layout/              # Layout components (Header, Footer, Layout)
│   ├── performance/         # Core Web Vitals monitoring
│   ├── seo/                 # SEO components (SEOHead with generateMetadata)
│   ├── sections/            # Page sections (Hero, Authority, etc.)
│   └── ui/                  # Reusable UI components (Button, Card, Section)
├── data/                    # Static data
│   ├── navigation.ts        # Primary navigation structure
│   └── projects.ts          # Continuum projects data
├── lib/                     # Utility libraries
│   ├── utils.ts             # Helper utilities
│   └── xynergy-api.ts       # Xynergy API integration
├── types/                   # TypeScript types
│   └── index.ts             # Shared type definitions
├── public/                  # Static assets
├── Media/                   # Requirements and design assets
├── tailwind.config.ts       # Tailwind configuration
├── next.config.js           # Next.js configuration
└── tsconfig.json            # TypeScript configuration
```

## 🌐 Site Architecture (v6)

### Navigation Structure

The v6 navigation includes 7 primary items:

1. **The Forge** (`/forge`) - Hub with 4 doors: Topics, Xynergy, Proof, Community
2. **Xynergy** (`/xynergy`) - AI engine deep dive
3. **Proof** (`/proof`) - Outcomes and demos with "Propose the Next Continuum" CTA
4. **Solutions** (`/solutions`) - Platform, Consulting, Custom, Partnership
5. **Community** (`/community`) - 4-phase community roadmap
6. **About** (`/about`) - Company information
7. **Contact** (`/contact`) - Contact form

### The Forge Ecosystem

**The Forge** serves as the central hub connecting four key areas:

1. **Topics** (`/forge/topics`) - Content hub for blogs, how-tos, playbooks (coming soon)
   - 8 topic areas: AI Transparency, Data Accessibility, Content Operations, Automation, Search & Discovery, Ethics & Governance, SMB Growth, Playbooks

2. **Xynergy** (`/xynergy`) - The proprietary AI engine
   - 8 engines: Research, Content, Campaign, Automation, Insights, Governance, Learning, Assistant
   - Plain-English explanations of what each engine does
   - Xynergy Assistant as background operator
   - Data usage transparency and opportunity tracking

3. **Proof** (`/proof`) - Transparent results
   - Live outcomes from Continuum projects
   - Public playbooks and demos
   - Links back to Topics and Community

4. **Community** (`/community`) - 4-phase roadmap (Coming Soon)
   - Phase 1: Content Forge (blogs, how-tos, white papers)
   - Phase 2: Engagement Layer (forums, AMAs, live sessions)
   - Phase 3: Rewards & Recognition (points, perks, revenue share)
   - Phase 4: Cohorts & Mentorship (guided peer groups)

### Core Pages

- **Homepage** (`/`) - Hero, 8-engine Xynergy feature, Community teaser, Problem/Promise, Continuum projects, Dashboard preview, Beta program, The 20%
- **Dashboard** (`/dashboard`) - Public transparency dashboard with live metrics (placeholder)

### The Continuum (6 Domains)

Domain-specific projects proving transparency works:

1. **Project NEXUS** (`/continuum/nexus`) - Search & Discovery (Phase 1 launching)
2. **Data Democracy** (`/continuum/data-democracy`) - Analytics for the 43%
3. **Project No-Cheating** (`/continuum/no-cheating`) - Education transparency
4. **Project CTO's Heart** (`/continuum/ctos-heart`) - Special needs support
5. **Project Safe Spaces** (`/continuum/safe-spaces`) - Kids safety without surveillance
6. **Project RE-Connect** (`/continuum/re-connect`) - Real estate transparency

### About Section

- **About ClearForge** (`/about`) - Company overview
- **How We Started** (`/about/how-we-started`) - Origin story (Acts I, II, III)
- **Team & Philosophy** (`/about/team-philosophy`) - Values and approach
- **Founder Story** (`/about/founder-story-complete`) - Complete founder narrative

### Mission Section (v6 - Root Level)

- **Manifesto** (`/manifesto`) - Technology should make humans better—never busier
- **Transparency Commitment** (`/transparency`) - How we show our work on every output that matters
- **The Data Divide** (`/data-divide`) - Why most orgs drown in data and how we close the gap
- **AI Reality Check** (`/ai-reality-check`) - What AI really can do, what it can't, and how to use it without the trust fall

### Solutions (v6 - Updated)

- **Solutions Hub** (`/solutions`) - "Method, Not Magic" — Platform, Consulting, Custom, Partnership
- **Platform** (`/solutions/platform`) - Spin up explainable workflows in weeks, not quarters
- **Consulting** (`/solutions/consulting`) - Operators-first knowledge transfer
- **Custom** (`/solutions/custom`) - Your edge, productized with Xynergy services
- **Partnership** (`/solutions/partnership`) - Co-build products, share learnings, keep the keys

### Methodology

- **How We Do It** (`/how-we-do-it`) - T.R.A.N.S.L.A.T.E. framework
- **Beta Program** (`/beta-program`) - 3-phase beta structure

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
   docker build -t gcr.io/[PROJECT_ID]/clearforge-website:latest .

   # Push to GCR
   docker push gcr.io/[PROJECT_ID]/clearforge-website:latest

   # Deploy to Cloud Run
   gcloud run deploy clearforge-website \
     --image gcr.io/[PROJECT_ID]/clearforge-website:latest \
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

### Brand Identity

**Company**: ClearForge
**Engine**: Xynergy
**Voice**: Confidently rebellious, minimal, transparent, human

### Color Palette

- **Primary Dark**: `#1a202c` - Very dark blue-gray
- **Primary**: `#2d3748` - Dark blue-gray
- **Primary Blue**: `#4299e1` - Bright accent blue
- **Secondary Purple**: `#553c9a` - Deep purple (innovation)
- **Secondary Purple Light**: `#9f7aea` - Bright purple
- **Accent Pink**: `#ed64a6` - CTAs and highlights
- **Background Dark**: `#1a202c`
- **Background Medium**: `#2d3748`

### Typography

- **Font**: Inter (Google Fonts)
- **Headings**: Bold, large scale
- **Body**: 16px base, line-height 1.5
- **CTAs**: Semibold, clear hierarchy

### Components

- **Button**: 4 variants (primary, secondary, outline, ghost) + 3 sizes (sm, md/default, lg)
- **Card**: 3 variants (default, bordered, elevated)
- **Section**: Background variants (dark, medium, gradient)

### Design Principles

1. **Johnny Ive Inspiration**: Minimal, clean, purposeful
2. **Transparency First**: Show sources, explain logic, prove claims
3. **No BS**: Direct messaging, no jargon, honest about what works
4. **Action-Oriented**: CTAs that match user intent, clear next steps

## 🔌 API Integration

### Intelligence Gateway

The website integrates with the Intelligence Gateway service for:
- **ASO Opportunities**: Real-time keyword and search optimization data
- **Beta Applications**: Lead capture and qualification
- **Contact Forms**: General inquiries and partnership requests
- **Newsletter**: Email list management (future)

**Gateway URL**: `https://intelligence-gateway-{hash}-uc.a.run.app` (set via `NEXT_PUBLIC_GATEWAY_URL`)

### API Routes

- `GET /api/aso/opportunities` - Fetch ASO keyword opportunities (cached 15 minutes)
- `POST /api/beta` - Submit beta program application
- `POST /api/contact` - Submit contact form inquiry

### Gateway Client

All Gateway integration goes through `lib/gateway-client.ts`:
- Axios-based HTTP client with Bearer token authentication
- Comprehensive error handling and logging
- TypeScript interfaces for all data models
- Singleton pattern for efficient connection pooling

See [INTEGRATION.md](./INTEGRATION.md) for detailed integration documentation.

## ⚡ Performance

### Core Web Vitals Targets

- **LCP (Largest Contentful Paint)**: < 1.2s
- **FID (First Input Delay)**: < 50ms
- **CLS (Cumulative Layout Shift)**: < 0.05

### Optimizations

- Image optimization with Next.js Image component
- Automatic code splitting
- Static page generation (51 pages)
- Compression enabled
- Security headers configured
- Minimal JavaScript payload

## 📊 Analytics

Google Analytics 4 is integrated for:
- Page views and user flow
- Conversion tracking (beta applications, contact forms)
- Core Web Vitals monitoring
- Event tracking
- Funnel analysis

## 🔒 Security

Security headers configured in `next.config.js`:
- Strict-Transport-Security
- X-Frame-Options
- X-Content-Type-Options
- X-XSS-Protection
- Referrer-Policy

## 📝 SEO

- Comprehensive meta tags on all 51 pages
- Open Graph and Twitter Card support
- Automatic sitemap generation (`/sitemap.xml`)
- Robots.txt configuration (`/robots.txt`)
- Structured data (JSON-LD) ready
- Canonical URLs configured
- generateMetadata helper for consistent SEO

## 🧪 Testing

Run the build to check for errors:
```bash
npm run build
```

## 📚 Best Practices

### Content Guidelines

1. **Voice & Tone**: Confidently rebellious, minimal, transparent, human
2. **Messaging**: Focus on "what" and "why", not just "how"
3. **Proof**: Every claim needs evidence or a placeholder for proof
4. **Transparency**: Show the work, cite sources, explain decisions

### Code Standards

1. **TypeScript**: All components use TypeScript with proper types
2. **Component Structure**: Functional components with hooks
3. **File Naming**: kebab-case for files, PascalCase for components
4. **Imports**: Organize by external, internal, types
5. **Comments**: Explain "why", not "what"

### Page Template

```tsx
import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';

export const metadata: Metadata = generateMetadata({
  title: 'Page Title',
  description: 'Page description for SEO',
  canonical: '/page-slug',
});

export default function PageName() {
  return (
    <>
      <Section background="gradient" className="pt-32 pb-20">
        {/* Hero content */}
      </Section>

      <Section background="dark">
        {/* Additional sections */}
      </Section>
    </>
  );
}
```

### Navigation Updates

When adding new pages, update `/data/navigation.ts`:

```typescript
export const mainNavigation: NavItem[] = [
  {
    label: 'The Forge',
    href: '/forge',
  },
  // ... other items
];
```

## 📄 License

Proprietary - ClearForge

## 🤝 Support

For questions or issues:
- Email: hello@clearforge.ai
- Response time: 24-48 hours

---

**Built with complete transparency by ClearForge**

Powered by Xynergy — the AI engine that researches, plans, executes, and proves.

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
