# ClearForge Website Architecture (v6)

Complete technical architecture documentation for the ClearForge website.

## Overview

The ClearForge website is built on Next.js 14+ with a v6 architecture that centers around **The Forge** — a hub connecting four key ecosystem components: Topics, Xynergy, Proof, and Community. v6 adds **Solutions** as a primary navigation item and moves mission content to root-level pages.

**Key Principles:**
- **Transparency First**: Every feature shows its sources and reasoning
- **Minimal Complexity**: Simple, clean design inspired by Johnny Ive
- **Human-Centric**: Direct messaging, no jargon, confidently rebellious
- **Proof-Driven**: Claims backed by evidence or clear placeholders

## Architecture Layers

### 1. Presentation Layer (App Router)

```
app/
├── forge/                    # The Forge Hub
│   ├── page.tsx             # 4-card ecosystem (Topics, Xynergy, Proof, Community)
│   └── topics/              # Content hub
│       └── page.tsx         # Topic areas and article listings
├── xynergy/                 # AI Engine Deep Dive
│   └── page.tsx             # 8 engines, assistant, data usage
├── proof/                   # Transparent Results
│   └── page.tsx             # Outcomes, playbooks, demos
├── community/               # 4-Phase Community Roadmap
│   └── page.tsx             # Phases 1-4, waitlist
├── page.tsx                 # Homepage (hero, problem, promise, continuum)
└── [other routes]           # About, Mission, Solutions, etc.
```

### 2. Component Layer

```
components/
├── ui/                      # Core UI Components
│   ├── Button.tsx          # 4 variants, 3 sizes
│   ├── Card.tsx            # 3 variants (default, bordered, elevated)
│   └── Section.tsx         # 3 backgrounds (dark, medium, gradient)
├── layout/                  # Layout Components
│   ├── Header.tsx          # Primary navigation
│   ├── Footer.tsx          # Footer with navigation groups
│   └── Layout.tsx          # Page wrapper with header/footer
├── seo/                     # SEO Components
│   └── SEOHead.tsx         # generateMetadata helper
├── forms/                   # Form Components
│   └── BetaApplicationForm.tsx
└── sections/                # Reusable Page Sections
```

### 3. Data Layer

```
data/
├── navigation.ts            # Primary navigation (7 items in v6)
└── projects.ts              # Continuum projects (6 domains)
```

### 4. Integration Layer

```
lib/
├── xynergy-api.ts          # Xynergy Platform API client
└── utils.ts                # Helper utilities
```

## Navigation Architecture (v6)

### Primary Navigation (Flat Structure)

```typescript
mainNavigation = [
  { label: 'The Forge', href: '/forge' },      // Hub
  { label: 'Xynergy', href: '/xynergy' },      // Engine
  { label: 'Proof', href: '/proof' },          // Results
  { label: 'Solutions', href: '/solutions' },  // Offerings (NEW in v6)
  { label: 'Community', href: '/community' },  // Engagement
  { label: 'About', href: '/about' },          // Company
  { label: 'Contact', href: '/contact' },      // Form
]
```

**Design Decision**: Flat navigation with 7 items (v6) adds Solutions between Proof and Community for:
- Direct access to commercial offerings
- Clear separation between proof (results) and solutions (how to buy)
- Better conversion path visibility
- Consistent with "show proof, then offer solutions" messaging

### The Forge Ecosystem

```
/forge (Hub)
├── /forge/topics           → Content Hub (8 topic areas)
├── /xynergy                → AI Engine (8 engines)
├── /proof                  → Results (outcomes, demos)
└── /community              → Engagement (4 phases)
```

**Cross-Linking Strategy:**
- Every Topic article links to: Topic hub, The Forge, related Proof item
- Every Proof item links to: Topic page, The Forge, Community thread
- Community threads generate draft articles → reviewed → published as Topics

## Page Architecture

### Standard Page Structure

```tsx
// 1. Imports
import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { generateMetadata } from '@/components/seo/SEOHead';

// 2. Metadata
export const metadata: Metadata = generateMetadata({
  title: 'Page Title',
  description: 'SEO description',
  canonical: '/page-slug',
});

// 3. Component
export default function PageName() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" className="pt-32 pb-20">
        {/* Hero content */}
      </Section>

      {/* Content Sections */}
      <Section background="dark">
        {/* Content */}
      </Section>
    </>
  );
}
```

### Section Patterns

**1. Hero Section**
```tsx
<Section background="gradient" className="pt-32 pb-20">
  <div className="text-center max-w-4xl mx-auto">
    <h1 className="text-5xl md:text-7xl font-bold mb-6">
      Title with <span className="text-gradient">Highlight</span>
    </h1>
    <p className="text-xl md:text-2xl text-gray-300 mb-8">
      Subtitle
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button href="/primary" size="lg">Primary CTA</Button>
      <Button href="/secondary" variant="outline" size="lg">Secondary</Button>
    </div>
  </div>
</Section>
```

**2. Feature Grid**
```tsx
<Section background="dark">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <Card variant="elevated">
      {/* Feature content */}
    </Card>
  </div>
</Section>
```

**3. Content Section**
```tsx
<Section background="medium">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-4xl md:text-5xl font-bold mb-6">
      <span className="text-gradient">Section Title</span>
    </h2>
    <Card variant="bordered">
      {/* Content */}
    </Card>
  </div>
</Section>
```

## Design System

### Color System

```typescript
// tailwind.config.ts
colors: {
  primary: {
    dark: '#1a202c',       // Very dark blue-gray
    DEFAULT: '#2d3748',    // Dark blue-gray
    blue: '#4299e1',       // Bright accent blue
  },
  secondary: {
    purple: '#553c9a',     // Deep purple
    'purple-light': '#9f7aea', // Bright purple
  },
  accent: {
    pink: '#ed64a6',       // CTAs and highlights
  },
  background: {
    dark: '#1a202c',       // Section background
    medium: '#2d3748',     // Alternate section background
  },
}
```

**Usage Guidelines:**
- **Primary Blue**: Technical features, Xynergy references
- **Accent Pink**: CTAs, highlights, important actions
- **Purple**: Innovation, community, secondary features
- **Gradients**: Heroes, CTAs, featured sections

### Typography Scale

```css
/* Headings */
h1: text-5xl md:text-7xl font-bold  /* 48px → 72px */
h2: text-4xl md:text-5xl font-bold  /* 36px → 48px */
h3: text-2xl md:text-3xl font-bold  /* 24px → 30px */

/* Body */
p: text-base                         /* 16px */
large: text-lg md:text-xl           /* 18px → 20px */
small: text-sm                       /* 14px */
```

### Component Variants

**Button:**
```tsx
// Variants
<Button variant="primary">       // Solid primary-blue bg
<Button variant="secondary">     // Solid accent-pink bg
<Button variant="outline">       // Border, transparent bg
<Button variant="ghost">         // No border, transparent bg

// Sizes
<Button size="sm">              // Compact
<Button size="md">              // Default
<Button size="lg">              // Prominent
```

**Card:**
```tsx
<Card variant="default">        // Basic card with bg
<Card variant="bordered">       // Outlined card
<Card variant="elevated">       // Shadowed card
```

**Section:**
```tsx
<Section background="dark">     // #1a202c
<Section background="medium">   // #2d3748
<Section background="gradient"> // Blue → Purple gradient
```

## Content Strategy

### The Forge Content Loop

```
Community Q&A
    ↓
High-signal threads → Xynergy summarizes → Draft article
    ↓
Human editorial review
    ↓
Published to Topics hub
    ↓
Linked to Proof items
    ↓
Drives Community engagement
```

### Topic Taxonomy (8 Areas)

1. **AI Transparency**: How AI should explain itself
2. **Data Accessibility**: Enterprise insights for everyone
3. **Content Operations**: Scaling without losing quality
4. **Automation**: Workflows with oversight
5. **Search & Discovery**: Finding signal in noise
6. **Ethics & Governance**: Accountable AI systems
7. **SMB Growth**: Strategies without enterprise budgets
8. **Playbooks**: Proven frameworks

### Content Types

- **Blog**: Opinion, insights, commentary (500-1000 words)
- **How-To**: Step-by-step guides (1000-2000 words)
- **Playbook**: Frameworks and templates (2000-4000 words)
- **White Paper**: Deep research (4000+ words)
- **Case Study**: Proof items with full context
- **Q&A Thread**: Community-driven solutions

## API Architecture

### Current Implementation

```typescript
// POST /api/beta
// Accepts: BetaApplicationData
// Returns: { success: boolean, applicationId: string }

// POST /api/contact
// Accepts: ContactFormData
// Returns: { success: boolean, ticketId: string }
```

### Future Xynergy Integration

```typescript
// GET /api/content?topic={slug}&sort={latest|popular}&limit={n}
// Returns: ContentItem[]

// GET /api/community?topic={slug}&sort={active|helpful}&limit={n}
// Returns: CommunityThread[]

// GET /api/proof?topic={slug}&limit={n}
// Returns: ProofItem[]

// POST /api/content/generate
// Accepts: { thread_id, type }
// Returns: DraftArticle (for editorial review)
```

## Performance Architecture

### Static Generation

All 51 pages are statically generated at build time:
- **LCP Target**: < 1.2s
- **FID Target**: < 50ms
- **CLS Target**: < 0.05

### Optimization Strategies

1. **Image Optimization**: Next.js Image component with WebP
2. **Code Splitting**: Automatic per-route
3. **CSS**: Tailwind with PurgeCSS
4. **Fonts**: Inter from Google Fonts with font-display: swap
5. **Analytics**: Deferred Google Analytics 4 loading

### Caching Strategy

```typescript
// Static assets: 1 year
Cache-Control: public, max-age=31536000, immutable

// HTML pages: Revalidate
Cache-Control: public, s-maxage=3600, stale-while-revalidate

// API routes: No cache
Cache-Control: no-store, must-revalidate
```

## SEO Architecture

### Meta Tag Strategy

```typescript
generateMetadata({
  title: 'Page Title',                    // Max 60 chars
  description: 'SEO description',         // Max 160 chars
  canonical: '/page-slug',                // Absolute path
  ogImage: '/og-image.jpg',              // 1200x630px
  keywords: ['keyword1', 'keyword2'],     // Optional
});
```

### Sitemap Structure

```xml
/sitemap.xml
├── / (priority: 1.0, changefreq: weekly)
├── /forge (priority: 0.9)
├── /xynergy (priority: 0.9)
├── /proof (priority: 0.9)
├── /community (priority: 0.9)
├── /about (priority: 0.8)
└── [other pages] (priority: 0.7)
```

### Robots.txt

```
User-agent: *
Allow: /
Disallow: /api/
Sitemap: https://clearforge.ai/sitemap.xml
```

## Security Architecture

### Headers

```typescript
// next.config.js
headers: [
  'Strict-Transport-Security: max-age=31536000',
  'X-Frame-Options: DENY',
  'X-Content-Type-Options: nosniff',
  'X-XSS-Protection: 1; mode=block',
  'Referrer-Policy: strict-origin-when-cross-origin',
]
```

### Environment Variables

**Public** (NEXT_PUBLIC_*):
- `NEXT_PUBLIC_XYNERGY_API_URL`
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- `NEXT_PUBLIC_APP_URL`

**Private** (Server-only):
- `XYNERGY_API_KEY`
- `NODE_ENV`

## Deployment Architecture

### Build Pipeline

```
1. Source: GitHub repository
   ↓
2. Trigger: Push to main branch
   ↓
3. Cloud Build: Build Docker image
   ↓
4. Test: Run npm build and lint
   ↓
5. Container Registry: Push image
   ↓
6. Cloud Run: Deploy with secrets
   ↓
7. Verification: Health check
```

### Infrastructure

```
GCP Project
├── Cloud Run (clearforge-website)
│   ├── Region: us-central1
│   ├── Memory: 512Mi
│   ├── CPU: 1 vCPU
│   ├── Min instances: 0
│   └── Max instances: 10
├── Container Registry
├── Secret Manager
│   ├── xynergy-api-key
│   └── ga-measurement-id
└── Cloud Build
```

## Best Practices

### Adding a New Page

1. **Create page file**: `app/new-page/page.tsx`
2. **Add metadata**: Use `generateMetadata()` helper
3. **Use standard structure**: Section → Card → Content
4. **Update navigation**: Add to `data/navigation.ts` if needed
5. **Test locally**: `npm run dev`
6. **Build check**: `npm run build`

### Adding a New Component

1. **Location**: `components/ui/` for reusable, `components/sections/` for page-specific
2. **TypeScript**: Define prop types
3. **Variants**: Use discriminated unions for variant props
4. **Responsive**: Mobile-first with Tailwind breakpoints
5. **Accessibility**: ARIA labels, semantic HTML

### Content Guidelines

1. **Voice**: Confidently rebellious, minimal, transparent
2. **Length**: Homepage sections 2-3 paragraphs max
3. **CTAs**: Clear action verbs, specific destinations
4. **Proof**: Every claim needs evidence or placeholder
5. **Links**: All external links with rel="noopener noreferrer"

### Code Style

```typescript
// ✅ Good
export default function FeatureName() {
  const items = data.map((item) => <Card key={item.id} {...item} />);

  return (
    <Section background="dark">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items}
      </div>
    </Section>
  );
}

// ❌ Avoid
export default function feature_name() {
  return <div style={{display: 'grid'}}>{/* ... */}</div>
}
```

## Migration Notes

### v5 → v6 Changes

**Navigation:**
- Added Solutions as 4th primary nav item (7 items total)
- Moved mission content from `/mission/*` to root level (`/manifesto`, `/transparency`, `/data-divide`, `/ai-reality-check`)
- Updated footer navigation with new mission page links

**New Pages:**
- `/solutions` - Solutions hub with 4 offerings (Platform, Consulting, Custom, Partnership)
- `/manifesto` - "Technology should make humans better—never busier"
- `/transparency` - "How we show our work—on every output that matters"
- `/data-divide` - "Why most orgs drown in data and how we close the gap"
- `/ai-reality-check` - "What AI really can do, what it can't, and how to use it"

**Updated Pages:**
- `/proof` - Added "Propose the Next Continuum" CTA linking to `/community#waitlist`
- `/solutions/*` - All 4 solution pages updated with v6 content and messaging
- `/about/founder-story-complete` - Fixed brand references (TriSynq → ClearForge)
- `/about/how-we-started` - Fixed CTA route and brand reference

**Page Count:**
- v5: 46 pages
- v6: 51 pages (+5 new mission/solution pages)

### v4 → v5 Changes

**Navigation:**
- Removed hierarchical parent/child structure
- Flattened to 6 primary items
- Added The Forge as central hub

**Content:**
- Xynergy: 5 engines → 8 engines (added Governance, Learning, Assistant)
- Community: Full feature set → 4-phase roadmap (Coming Soon)
- Homepage: 4-engine grid → 8-engine grid
- Forge: 3 cards → 4 cards (added Topics)

**New Pages:**
- `/forge/topics` - Content hub placeholder

**Removed:**
- Hierarchical navigation dropdowns
- Community active features (forums, rewards as immediate features)

## Troubleshooting

### Common Issues

**Build fails with TypeScript errors:**
```bash
npm run build --verbose
# Check for missing type definitions
```

**Images not loading:**
```typescript
// Ensure images are in public/ directory
import Image from 'next/image'
<Image src="/image.jpg" alt="Description" width={800} height={600} />
```

**Styles not applying:**
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

**Environment variables not available:**
```typescript
// Public vars must have NEXT_PUBLIC_ prefix
process.env.NEXT_PUBLIC_API_URL  // ✅
process.env.API_URL              // ❌ Only available server-side
```

---

**Last Updated**: 2025-10-09

**Version**: v6

**Maintained by**: ClearForge Team (hello@clearforge.ai)
