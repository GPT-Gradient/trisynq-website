# ClearForge Website Integration
## Technical Requirements Document

**Project:** ClearForge/Continuum Website - Intelligence Gateway Integration & Deployment  
**Version:** 1.0  
**Date:** October 2025  
**Status:** Ready for Implementation  
**Dependencies:** Intelligence Gateway Service (deployed)

---

## 1. EXECUTIVE SUMMARY

This document specifies how the ClearForge public website (46 static pages, Next.js 14+) integrates with the Intelligence Gateway service and deploys to Google Cloud Platform. The website becomes the first public demonstration of the Xynergy/ASO platform, showcasing real-time ASO data and capturing beta applications.

**Key Objectives:**
- Integrate website with Intelligence Gateway for live ASO data
- Deploy website to GCP Cloud Run with CI/CD
- Implement lead capture and beta application flows
- Optimize for performance, SEO, and conversion
- Create monitoring and analytics infrastructure

**Success Criteria:**
- Website loads in < 2 seconds (p95)
- ASO data updates every 15 minutes
- Zero data leakage between beta applicants
- 100% uptime during beta launch
- Conversion tracking functional from day one

---

## 2. ARCHITECTURE OVERVIEW

### 2.1 System Components

```
┌─────────────────────────────────────────────────────────────┐
│                     User's Browser                          │
│  ┌─────────────────────────────────────────────────────┐   │
│  │         Next.js 14 App (App Router)                 │   │
│  │  - Server Components (SSR, SSG)                     │   │
│  │  - Client Components (Interactive UI)               │   │
│  │  - API Routes (Lead submission, form handling)      │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                              │
                              │ HTTPS
                              ▼
┌─────────────────────────────────────────────────────────────┐
│              GCP Cloud Run (Website Container)              │
│  - Auto-scaling (0-10 instances)                            │
│  - Built from Docker image                                  │
│  - Environment: production                                  │
│  - Port: 3000                                               │
└─────────────────────────────────────────────────────────────┘
                              │
                              │ Internal API Calls
                              ▼
┌─────────────────────────────────────────────────────────────┐
│         Intelligence Gateway Service (Cloud Run)            │
│  - GET /api/aso/opportunities                               │
│  - POST /api/beta/apply                                     │
│  - POST /api/leads/contact                                  │
│  - POST /api/leads/newsletter                               │
└─────────────────────────────────────────────────────────────┘
                              │
                    ┌─────────┴─────────┐
                    ▼                   ▼
            ┌───────────────┐   ┌──────────────┐
            │   Firestore   │   │  SendGrid    │
            │  (Lead Data)  │   │   (Emails)   │
            └───────────────┘   └──────────────┘
```

### 2.2 Request Flow

**Page Load (SSR/SSG):**
1. User requests page from clearforgetech.com
2. Cloud Run serves Next.js app
3. Server components fetch data from Intelligence Gateway (server-side)
4. HTML rendered and sent to browser
5. Client-side hydration for interactive components

**Live Data Updates (Client-Side):**
1. Client component mounts
2. Fetches data from Intelligence Gateway via API route
3. Updates UI with real-time ASO data
4. Refreshes on interval (15 minutes)

**Lead Submission:**
1. User submits form
2. Client sends POST to Next.js API route
3. API route validates and forwards to Intelligence Gateway
4. Gateway stores in Firestore and sends email
5. Success response returned to client
6. Thank you message displayed

---

## 3. WEBSITE CONFIGURATION

### 3.1 Environment Variables

**Production (.env.production):**
```bash
# Intelligence Gateway
NEXT_PUBLIC_GATEWAY_URL=https://intelligence-gateway-{hash}-uc.a.run.app
GATEWAY_API_KEY=<secret-from-gcp-secrets>

# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Feature Flags
NEXT_PUBLIC_ENABLE_ASO_DATA=true
NEXT_PUBLIC_ENABLE_BETA_APPLICATIONS=true
NEXT_PUBLIC_ENABLE_NEWSLETTER=true

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://www.clearforgetech.com
NEXT_PUBLIC_ENVIRONMENT=production

# Vercel/Cloud Run Detection
VERCEL=false
NODE_ENV=production
```

**Development (.env.development):**
```bash
NEXT_PUBLIC_GATEWAY_URL=http://localhost:8080
GATEWAY_API_KEY=dev-key-12345
NEXT_PUBLIC_ENABLE_ASO_DATA=true
NEXT_PUBLIC_ENABLE_BETA_APPLICATIONS=true
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_ENVIRONMENT=development
NODE_ENV=development
```

### 3.2 Next.js Configuration

**next.config.js:**
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Output standalone for Docker deployment
  output: 'standalone',
  
  // Disable Vercel-specific features
  images: {
    unoptimized: false,
    domains: ['www.clearforgetech.com'],
    formats: ['image/webp', 'image/avif'],
  },
  
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
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ]
  },
  
  // Redirects
  async redirects() {
    return [
      {
        source: '/continuum',
        destination: '/products/continuum-digital',
        permanent: true
      },
      {
        source: '/the-forge',
        destination: '/products/the-forge',
        permanent: true
      }
    ]
  },
  
  // Rewrites for API
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: '/api/:path*', // Handled by Next.js API routes
      }
    ]
  }
}

module.exports = nextConfig
```

---

## 4. INTEGRATION IMPLEMENTATION

### 4.1 Gateway Client Library

**lib/gateway-client.ts:**
```typescript
import axios, { AxiosInstance, AxiosError } from 'axios';

interface GatewayConfig {
  baseURL: string;
  apiKey: string;
  timeout?: number;
}

interface ASOOpportunity {
  keyword: string;
  search_volume: number;
  difficulty: number;
  relevance_score: number;
  opportunity_score: number;
  trend: 'rising' | 'stable' | 'declining';
  serp_features: string[];
  generated_at: string;
}

interface BetaApplication {
  company_name: string;
  contact_name: string;
  email: string;
  phone: string;
  website?: string;
  industry: string;
  monthly_revenue?: string;
  current_marketing: string[];
  goals: string;
  referred_by?: string;
}

interface ContactSubmission {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  subject?: string;
}

interface NewsletterSubscription {
  email: string;
  source_page: string;
}

class GatewayClient {
  private client: AxiosInstance;

  constructor(config: GatewayConfig) {
    this.client = axios.create({
      baseURL: config.baseURL,
      timeout: config.timeout || 10000,
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': config.apiKey,
      },
    });

    // Response interceptor for error handling
    this.client.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        console.error('Gateway API Error:', {
          url: error.config?.url,
          status: error.response?.status,
          message: error.message,
        });
        throw error;
      }
    );
  }

  // Get ASO opportunities
  async getASOOpportunities(limit: number = 10): Promise<ASOOpportunity[]> {
    try {
      const response = await this.client.get('/api/aso/opportunities', {
        params: { limit },
      });
      return response.data.opportunities;
    } catch (error) {
      console.error('Failed to fetch ASO opportunities:', error);
      return [];
    }
  }

  // Submit beta application
  async submitBetaApplication(
    data: BetaApplication
  ): Promise<{ success: boolean; application_id?: string; message: string }> {
    const response = await this.client.post('/api/beta/apply', data);
    return response.data;
  }

  // Submit contact form
  async submitContact(
    data: ContactSubmission
  ): Promise<{ success: boolean; submission_id?: string; message: string }> {
    const response = await this.client.post('/api/leads/contact', data);
    return response.data;
  }

  // Subscribe to newsletter
  async subscribeNewsletter(
    data: NewsletterSubscription
  ): Promise<{ success: boolean; message: string }> {
    const response = await this.client.post('/api/leads/newsletter', data);
    return response.data;
  }

  // Health check
  async healthCheck(): Promise<boolean> {
    try {
      const response = await this.client.get('/health');
      return response.status === 200;
    } catch {
      return false;
    }
  }
}

// Singleton instance
let gatewayClient: GatewayClient | null = null;

export function getGatewayClient(): GatewayClient {
  if (!gatewayClient) {
    const baseURL = process.env.NEXT_PUBLIC_GATEWAY_URL;
    const apiKey = process.env.GATEWAY_API_KEY;

    if (!baseURL || !apiKey) {
      throw new Error('Gateway configuration missing');
    }

    gatewayClient = new GatewayClient({ baseURL, apiKey });
  }

  return gatewayClient;
}

export type { ASOOpportunity, BetaApplication, ContactSubmission, NewsletterSubscription };
```

### 4.2 Server Components Integration

**app/the-forge/page.tsx (Server Component):**
```typescript
import { getGatewayClient } from '@/lib/gateway-client';
import { ASOOpportunitiesDisplay } from '@/components/aso-opportunities';
import { Suspense } from 'react';

export const revalidate = 900; // Revalidate every 15 minutes

async function getASOData() {
  try {
    const client = getGatewayClient();
    const opportunities = await client.getASOOpportunities(20);
    return opportunities;
  } catch (error) {
    console.error('Failed to load ASO data:', error);
    return [];
  }
}

export default async function TheForgePage() {
  const opportunities = await getASOData();

  return (
    <main>
      <section className="hero">
        <h1>The Forge: Real-Time Market Intelligence</h1>
        <p>See what's trending in your industry right now</p>
      </section>

      <section className="aso-opportunities">
        <h2>Live Opportunity Feed</h2>
        <Suspense fallback={<LoadingSkeleton />}>
          <ASOOpportunitiesDisplay 
            opportunities={opportunities}
            updateInterval={900000} // 15 minutes
          />
        </Suspense>
      </section>

      <section className="cta">
        <h2>Want This Intelligence For Your Business?</h2>
        <BetaApplicationCTA />
      </section>
    </main>
  );
}
```

### 4.3 Client Components

**components/aso-opportunities.tsx:**
```typescript
'use client';

import { useState, useEffect } from 'react';
import { ASOOpportunity } from '@/lib/gateway-client';

interface Props {
  opportunities: ASOOpportunity[];
  updateInterval?: number;
}

export function ASOOpportunitiesDisplay({ 
  opportunities: initialOpportunities,
  updateInterval = 900000 // 15 minutes default
}: Props) {
  const [opportunities, setOpportunities] = useState(initialOpportunities);
  const [lastUpdate, setLastUpdate] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    const interval = setInterval(async () => {
      setIsRefreshing(true);
      try {
        const response = await fetch('/api/aso/opportunities?limit=20');
        if (response.ok) {
          const data = await response.json();
          setOpportunities(data.opportunities);
          setLastUpdate(new Date());
        }
      } catch (error) {
        console.error('Failed to refresh opportunities:', error);
      } finally {
        setIsRefreshing(false);
      }
    }, updateInterval);

    return () => clearInterval(interval);
  }, [updateInterval]);

  return (
    <div className="opportunities-container">
      <div className="update-status">
        <span>Last updated: {lastUpdate.toLocaleTimeString()}</span>
        {isRefreshing && <span className="refreshing">Updating...</span>}
      </div>

      <div className="opportunities-grid">
        {opportunities.map((opp, index) => (
          <OpportunityCard key={`${opp.keyword}-${index}`} opportunity={opp} />
        ))}
      </div>
    </div>
  );
}

function OpportunityCard({ opportunity }: { opportunity: ASOOpportunity }) {
  return (
    <div className="opportunity-card">
      <div className="keyword-header">
        <h3>{opportunity.keyword}</h3>
        <span className={`trend trend-${opportunity.trend}`}>
          {opportunity.trend}
        </span>
      </div>
      
      <div className="metrics">
        <div className="metric">
          <label>Search Volume</label>
          <value>{opportunity.search_volume.toLocaleString()}</value>
        </div>
        <div className="metric">
          <label>Difficulty</label>
          <value>{opportunity.difficulty}/100</value>
        </div>
        <div className="metric">
          <label>Opportunity Score</label>
          <value>{opportunity.opportunity_score}/100</value>
        </div>
      </div>

      {opportunity.serp_features.length > 0 && (
        <div className="serp-features">
          <label>SERP Features:</label>
          <div className="features-list">
            {opportunity.serp_features.map((feature) => (
              <span key={feature} className="feature-badge">
                {feature}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
```

### 4.4 API Routes

**app/api/aso/opportunities/route.ts:**
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { getGatewayClient } from '@/lib/gateway-client';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const limit = parseInt(searchParams.get('limit') || '10', 10);

    const client = getGatewayClient();
    const opportunities = await client.getASOOpportunities(limit);

    return NextResponse.json({
      opportunities,
      generated_at: new Date().toISOString(),
    });
  } catch (error) {
    console.error('ASO API Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch opportunities' },
      { status: 500 }
    );
  }
}

// Enable caching with revalidation
export const revalidate = 900; // 15 minutes
```

**app/api/beta/apply/route.ts:**
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { getGatewayClient } from '@/lib/gateway-client';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Basic validation
    const requiredFields = ['company_name', 'contact_name', 'email', 'industry', 'goals'];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { success: false, message: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Submit to Gateway
    const client = getGatewayClient();
    const result = await client.submitBetaApplication(body);

    return NextResponse.json(result);
  } catch (error) {
    console.error('Beta application error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit application' },
      { status: 500 }
    );
  }
}
```

**app/api/leads/contact/route.ts:**
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { getGatewayClient } from '@/lib/gateway-client';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validation
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { success: false, message: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Submit to Gateway
    const client = getGatewayClient();
    const result = await client.submitContact(body);

    return NextResponse.json(result);
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit contact form' },
      { status: 500 }
    );
  }
}
```

---

## 5. DEPLOYMENT CONFIGURATION

### 5.1 Dockerfile

**Dockerfile:**
```dockerfile
# Use official Node.js LTS image
FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Set environment to production
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# Build Next.js app
RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# Create non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy necessary files
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# Start the application
CMD ["node", "server.js"]
```

**.dockerignore:**
```
.git
.gitignore
node_modules
.next
.env*.local
.vercel
*.log
README.md
.DS_Store
coverage
.vscode
```

### 5.2 Cloud Run Configuration

**cloudbuild.yaml:**
```yaml
steps:
  # Build the Docker image
  - name: 'gcr.io/cloud-builders/docker'
    args:
      - 'build'
      - '-t'
      - 'gcr.io/$PROJECT_ID/clearforge-website:$COMMIT_SHA'
      - '-t'
      - 'gcr.io/$PROJECT_ID/clearforge-website:latest'
      - '.'
    
  # Push to Container Registry
  - name: 'gcr.io/cloud-builders/docker'
    args:
      - 'push'
      - 'gcr.io/$PROJECT_ID/clearforge-website:$COMMIT_SHA'
  
  - name: 'gcr.io/cloud-builders/docker'
    args:
      - 'push'
      - 'gcr.io/$PROJECT_ID/clearforge-website:latest'
  
  # Deploy to Cloud Run
  - name: 'gcr.io/google.com/cloudsdktool/cloud-sdk'
    entrypoint: gcloud
    args:
      - 'run'
      - 'deploy'
      - 'clearforge-website'
      - '--image'
      - 'gcr.io/$PROJECT_ID/clearforge-website:$COMMIT_SHA'
      - '--region'
      - 'us-central1'
      - '--platform'
      - 'managed'
      - '--allow-unauthenticated'
      - '--min-instances'
      - '1'
      - '--max-instances'
      - '10'
      - '--memory'
      - '1Gi'
      - '--cpu'
      - '1'
      - '--port'
      - '3000'
      - '--set-env-vars'
      - 'NODE_ENV=production,NEXT_PUBLIC_ENVIRONMENT=production'
      - '--set-secrets'
      - 'GATEWAY_API_KEY=gateway-api-key:latest,NEXT_PUBLIC_GATEWAY_URL=gateway-url:latest'

images:
  - 'gcr.io/$PROJECT_ID/clearforge-website:$COMMIT_SHA'
  - 'gcr.io/$PROJECT_ID/clearforge-website:latest'

options:
  logging: CLOUD_LOGGING_ONLY
  machineType: 'N1_HIGHCPU_8'
```

### 5.3 Deployment Script

**deploy.sh:**
```bash
#!/bin/bash
set -e

PROJECT_ID="xynergy-dev-1757909467"
REGION="us-central1"
SERVICE_NAME="clearforge-website"

echo "🚀 Deploying ClearForge Website to Cloud Run..."

# Build and push Docker image
echo "📦 Building Docker image..."
docker build -t gcr.io/$PROJECT_ID/$SERVICE_NAME:latest .

echo "⬆️  Pushing to Container Registry..."
docker push gcr.io/$PROJECT_ID/$SERVICE_NAME:latest

# Deploy to Cloud Run
echo "☁️  Deploying to Cloud Run..."
gcloud run deploy $SERVICE_NAME \
  --image gcr.io/$PROJECT_ID/$SERVICE_NAME:latest \
  --region $REGION \
  --platform managed \
  --allow-unauthenticated \
  --min-instances 1 \
  --max-instances 10 \
  --memory 1Gi \
  --cpu 1 \
  --port 3000 \
  --set-env-vars NODE_ENV=production,NEXT_PUBLIC_ENVIRONMENT=production \
  --set-secrets GATEWAY_API_KEY=gateway-api-key:latest,NEXT_PUBLIC_GATEWAY_URL=gateway-url:latest

# Get service URL
SERVICE_URL=$(gcloud run services describe $SERVICE_NAME --region $REGION --format 'value(status.url)')

echo "✅ Deployment complete!"
echo "🌐 Service URL: $SERVICE_URL"
```

---

## 6. MONITORING & ANALYTICS

### 6.1 Google Analytics 4 Integration

**lib/analytics.ts:**
```typescript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Initialize GA4
export function initGA(measurementId: string) {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', measurementId, {
    page_path: window.location.pathname,
  });
}

// Track page views
export function trackPageView(url: string) {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!, {
    page_path: url,
  });
}

// Track events
export function trackEvent(
  action: string,
  category: string,
  label?: string,
  value?: number
) {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
}

// Track conversions
export function trackConversion(conversionName: string, value?: number) {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', 'conversion', {
    send_to: `${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}/${conversionName}`,
    value: value,
  });
}
```

**app/layout.tsx (GA4 Integration):**
```typescript
import Script from 'next/script';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="en">
      <head>
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
      </head>
      <body>{children}</body>
    </html>
  );
}
```

### 6.2 Event Tracking Implementation

**components/beta-application-form.tsx:**
```typescript
'use client';

import { useState } from 'react';
import { trackEvent, trackConversion } from '@/lib/analytics';

export function BetaApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Track form start
    trackEvent('form_start', 'beta_application', 'beta_form_v1');

    try {
      const formData = new FormData(e.target as HTMLFormElement);
      const data = Object.fromEntries(formData);

      const response = await fetch('/api/beta/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
        
        // Track successful submission
        trackEvent('form_submit', 'beta_application', 'beta_form_v1');
        trackConversion('beta_application');
        
        // Track to Gateway for internal analytics
        await fetch('/api/analytics/track', {
          method: 'POST',
          body: JSON.stringify({
            event: 'beta_application_submitted',
            properties: {
              industry: data.industry,
              source: window.location.pathname,
            },
          }),
        });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      trackEvent('form_error', 'beta_application', 'beta_form_v1');
      alert('Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="success-message">
        <h3>Application Received!</h3>
        <p>We'll be in touch within 24 hours to discuss next steps.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Apply for Beta'}
      </button>
    </form>
  );
}
```

### 6.3 Cloud Monitoring

**Metrics to Track:**
- Request latency (p50, p95, p99)
- Request count by endpoint
- Error rate (4xx, 5xx)
- CPU and memory utilization
- Instance count and scaling events
- Gateway API call success rate
- Form submission success rate

**Alerts to Configure:**
```yaml
# Error Rate Alert
- condition: error_rate > 5%
  duration: 5m
  severity: warning
  notification: email, slack

# Latency Alert
- condition: p95_latency > 3s
  duration: 5m
  severity: warning
  notification: email, slack

# Instance Scaling Alert
- condition: instance_count >= 8
  duration: 5m
  severity: info
  notification: slack

# Gateway Availability Alert
- condition: gateway_success_rate < 95%
  duration: 5m
  severity: critical
  notification: email, slack, pagerduty
```

---

## 7. TESTING REQUIREMENTS

### 7.1 Unit Tests

**Test Coverage Requirements:**
- Gateway client: 100%
- API routes: 100%
- Form validation: 100%
- Analytics tracking: 90%

**Example Test (gateway-client.test.ts):**
```typescript
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { GatewayClient } from '@/lib/gateway-client';

describe('GatewayClient', () => {
  let client: GatewayClient;

  beforeEach(() => {
    client = new GatewayClient({
      baseURL: 'http://localhost:8080',
      apiKey: 'test-key',
    });
  });

  describe('getASOOpportunities', () => {
    it('should fetch opportunities successfully', async () => {
      const opportunities = await client.getASOOpportunities(10);
      expect(opportunities).toBeInstanceOf(Array);
    });

    it('should handle API errors gracefully', async () => {
      // Mock API failure
      vi.spyOn(client, 'getASOOpportunities').mockRejectedValue(
        new Error('API Error')
      );

      const opportunities = await client.getASOOpportunities(10);
      expect(opportunities).toEqual([]);
    });
  });

  describe('submitBetaApplication', () => {
    it('should submit application successfully', async () => {
      const data = {
        company_name: 'Test Co',
        contact_name: 'John Doe',
        email: 'john@test.com',
        phone: '555-0123',
        industry: 'Technology',
        goals: 'Grow online presence',
      };

      const result = await client.submitBetaApplication(data);
      expect(result.success).toBe(true);
      expect(result.application_id).toBeDefined();
    });
  });
});
```

### 7.2 Integration Tests

**Test Scenarios:**
1. End-to-end form submission flow
2. ASO data fetching and display
3. Error handling and fallbacks
4. Analytics event firing
5. Gateway timeout handling
6. Rate limiting behavior

**Example Integration Test:**
```typescript
import { test, expect } from '@playwright/test';

test.describe('Beta Application Flow', () => {
  test('should submit beta application successfully', async ({ page }) => {
    await page.goto('/beta');

    // Fill form
    await page.fill('[name="company_name"]', 'Test Company');
    await page.fill('[name="contact_name"]', 'John Doe');
    await page.fill('[name="email"]', 'john@testco.com');
    await page.fill('[name="phone"]', '555-0123');
    await page.selectOption('[name="industry"]', 'Technology');
    await page.fill('[name="goals"]', 'Improve online visibility');

    // Submit
    await page.click('button[type="submit"]');

    // Verify success
    await expect(page.locator('.success-message')).toBeVisible();
    await expect(page.locator('.success-message h3')).toContainText(
      'Application Received'
    );
  });

  test('should validate required fields', async ({ page }) => {
    await page.goto('/beta');
    await page.click('button[type="submit"]');

    // Check for validation errors
    await expect(page.locator('.error-message')).toBeVisible();
  });
});
```

### 7.3 Performance Tests

**Load Testing with k6:**
```javascript
import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '2m', target: 100 }, // Ramp up to 100 users
    { duration: '5m', target: 100 }, // Stay at 100 users
    { duration: '2m', target: 0 },   // Ramp down to 0 users
  ],
  thresholds: {
    http_req_duration: ['p(95)<2000'], // 95% of requests under 2s
    http_req_failed: ['rate<0.05'],    // Less than 5% failure rate
  },
};

export default function () {
  // Test homepage
  const homeResponse = http.get('https://www.clearforgetech.com');
  check(homeResponse, {
    'homepage status is 200': (r) => r.status === 200,
    'homepage loads in < 2s': (r) => r.timings.duration < 2000,
  });

  sleep(1);

  // Test ASO data endpoint
  const asoResponse = http.get('https://www.clearforgetech.com/api/aso/opportunities');
  check(asoResponse, {
    'ASO API status is 200': (r) => r.status === 200,
    'ASO API loads in < 1s': (r) => r.timings.duration < 1000,
  });

  sleep(2);
}
```

---

## 8. SEO OPTIMIZATION

### 8.1 Metadata Configuration

**app/layout.tsx:**
```typescript
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.clearforgetech.com'),
  title: {
    default: 'ClearForge | Adaptive Search Optimization & Digital Marketing',
    template: '%s | ClearForge',
  },
  description:
    'ClearForge provides cutting-edge Adaptive Search Optimization (ASO) that combines SEO, GEO, and VSO to help businesses dominate search across all modalities.',
  keywords: [
    'adaptive search optimization',
    'ASO',
    'SEO',
    'GEO',
    'VSO',
    'digital marketing',
    'search engine optimization',
    'generative engine optimization',
    'voice search optimization',
  ],
  authors: [{ name: 'ClearForge Team' }],
  creator: 'ClearForge',
  publisher: 'ClearForge',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.clearforgetech.com',
    siteName: 'ClearForge',
    title: 'ClearForge | Adaptive Search Optimization',
    description:
      'Next-generation search optimization combining SEO, GEO, and VSO.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ClearForge - Adaptive Search Optimization',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ClearForge | Adaptive Search Optimization',
    description:
      'Next-generation search optimization combining SEO, GEO, and VSO.',
    images: ['/twitter-image.png'],
    creator: '@clearforge',
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
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};
```

### 8.2 Structured Data (JSON-LD)

**components/structured-data.tsx:**
```typescript
export function OrganizationStructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ClearForge',
    url: 'https://www.clearforgetech.com',
    logo: 'https://www.clearforgetech.com/logo.png',
    description:
      'Adaptive Search Optimization platform combining SEO, GEO, and VSO.',
    sameAs: [
      'https://twitter.com/clearforge',
      'https://www.linkedin.com/company/clearforge',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-0123',
      contactType: 'Customer Service',
      availableLanguage: ['English'],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function BreadcrumbStructuredData({ items }: { items: Array<{ name: string; url: string }> }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
```

### 8.3 Sitemap Generation

**app/sitemap.ts:**
```typescript
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.clearforgetech.com';
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/products/continuum-digital`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/products/the-forge`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/beta`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Add all 46 pages...
  ];
}
```

### 8.4 robots.txt

**app/robots.ts:**
```typescript
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/'],
      },
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
      },
    ],
    sitemap: 'https://www.clearforgetech.com/sitemap.xml',
  };
}
```

---

## 9. SECURITY

### 9.1 Content Security Policy

**middleware.ts:**
```typescript
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Content Security Policy
  response.headers.set(
    'Content-Security-Policy',
    `
      default-src 'self';
      script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com;
      style-src 'self' 'unsafe-inline';
      img-src 'self' data: https: blob:;
      font-src 'self' data:;
      connect-src 'self' https://intelligence-gateway-*.run.app https://www.google-analytics.com;
      frame-ancestors 'none';
      base-uri 'self';
      form-action 'self';
    `.replace(/\s{2,}/g, ' ').trim()
  );

  // Additional security headers
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=()'
  );

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
```

### 9.2 Rate Limiting

**lib/rate-limit.ts:**
```typescript
import { NextRequest } from 'next/server';

interface RateLimitConfig {
  interval: number; // Time window in milliseconds
  uniqueTokenPerInterval: number; // Max unique tokens per interval
}

class RateLimiter {
  private tokenCache = new Map<string, number[]>();
  private config: RateLimitConfig;

  constructor(config: RateLimitConfig) {
    this.config = config;
  }

  check(request: NextRequest, limit: number): { success: boolean; remaining: number } {
    const token = request.ip || 'anonymous';
    const now = Date.now();
    const windowStart = now - this.config.interval;

    // Get existing timestamps for this token
    const timestamps = this.tokenCache.get(token) || [];
    
    // Filter out old timestamps
    const validTimestamps = timestamps.filter((ts) => ts > windowStart);

    if (validTimestamps.length >= limit) {
      return { success: false, remaining: 0 };
    }

    // Add current timestamp
    validTimestamps.push(now);
    this.tokenCache.set(token, validTimestamps);

    // Clean up old entries
    if (this.tokenCache.size > this.config.uniqueTokenPerInterval) {
      const oldestKey = this.tokenCache.keys().next().value;
      this.tokenCache.delete(oldestKey);
    }

    return {
      success: true,
      remaining: limit - validTimestamps.length,
    };
  }
}

// Create rate limiter instances
export const apiRateLimiter = new RateLimiter({
  interval: 60 * 1000, // 1 minute
  uniqueTokenPerInterval: 500,
});

export const formRateLimiter = new RateLimiter({
  interval: 60 * 60 * 1000, // 1 hour
  uniqueTokenPerInterval: 100,
});
```

**Usage in API Route:**
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { formRateLimiter } from '@/lib/rate-limit';

export async function POST(request: NextRequest) {
  // Rate limit: 5 submissions per hour per IP
  const rateLimitResult = formRateLimiter.check(request, 5);
  
  if (!rateLimitResult.success) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    );
  }

  // Process request...
}
```

---

## 10. PERFORMANCE OPTIMIZATION

### 10.1 Image Optimization

**Image Configuration:**
- Use `next/image` for all images
- Serve WebP/AVIF formats
- Lazy load images below the fold
- Use appropriate sizes attribute
- Implement blur placeholders

**Example:**
```typescript
import Image from 'next/image';

<Image
  src="/hero-image.jpg"
  alt="Hero"
  width={1920}
  height={1080}
  priority // For above-the-fold images
  quality={85}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>
```

### 10.2 Code Splitting

**Dynamic Imports:**
```typescript
import dynamic from 'next/dynamic';

// Lazy load heavy components
const ASOOpportunitiesDisplay = dynamic(
  () => import('@/components/aso-opportunities').then((mod) => mod.ASOOpportunitiesDisplay),
  {
    loading: () => <LoadingSkeleton />,
    ssr: false, // Disable SSR for client-only components
  }
);

// Lazy load third-party libraries
const Chart = dynamic(() => import('react-chartjs-2').then((mod) => mod.Line), {
  ssr: false,
});
```

### 10.3 Caching Strategy

**Cache-Control Headers:**
```typescript
// Static pages (1 hour, revalidate in background)
export const revalidate = 3600;

// Dynamic pages (15 minutes)
export const revalidate = 900;

// API routes
export async function GET() {
  const response = NextResponse.json(data);
  response.headers.set('Cache-Control', 'public, s-maxage=900, stale-while-revalidate=1800');
  return response;
}
```

### 10.4 Performance Budget

**Target Metrics:**
- Time to First Byte (TTFB): < 600ms
- First Contentful Paint (FCP): < 1.8s
- Largest Contentful Paint (LCP): < 2.5s
- First Input Delay (FID): < 100ms
- Cumulative Layout Shift (CLS): < 0.1
- Total Blocking Time (TBT): < 300ms

**Monitoring:**
- Use Lighthouse CI in build pipeline
- Real User Monitoring (RUM) with GA4
- Core Web Vitals tracking
- Performance alerts if metrics degrade

---

## 11. DEPLOYMENT CHECKLIST

### 11.1 Pre-Deployment

- [ ] All environment variables configured in GCP Secret Manager
- [ ] Gateway service deployed and healthy
- [ ] SendGrid account configured with verified sender
- [ ] Firestore collections created with proper indexes
- [ ] Google Analytics 4 property created
- [ ] Custom domain configured in Cloud Run
- [ ] SSL certificate provisioned
- [ ] Unit tests passing (100% coverage for critical paths)
- [ ] Integration tests passing
- [ ] Performance tests passing (Lighthouse score > 90)
- [ ] Security scan completed (no high/critical vulnerabilities)
- [ ] Code review approved
- [ ] Staging deployment tested end-to-end

### 11.2 Deployment Steps

1. **Build and Test Locally:**
   ```bash
   npm run build
   npm run test
   npm run lint
   ```

2. **Build Docker Image:**
   ```bash
   docker build -t gcr.io/xynergy-dev-1757909467/clearforge-website:latest .
   docker push gcr.io/xynergy-dev-1757909467/clearforge-website:latest
   ```

3. **Deploy to Cloud Run:**
   ```bash
   ./deploy.sh
   ```

4. **Verify Deployment:**
   ```bash
   # Check service status
   gcloud run services describe clearforge-website --region us-central1
   
   # Test endpoints
   curl https://www.clearforgetech.com
   curl https://www.clearforgetech.com/api/aso/opportunities
   ```

5. **Smoke Tests:**
   - [ ] Homepage loads successfully
   - [ ] ASO data displays correctly
   - [ ] Beta application form submits
   - [ ] Contact form works
   - [ ] Newsletter signup works
   - [ ] All 46 pages accessible
   - [ ] Analytics tracking fires
   - [ ] No console errors

### 11.3 Post-Deployment

- [ ] Update DNS records to point to Cloud Run service
- [ ] Configure Cloud CDN for static assets
- [ ] Set up monitoring dashboards
- [ ] Configure alerting rules
- [ ] Enable Cloud Logging
- [ ] Document deployment in runbook
- [ ] Notify team of successful deployment
- [ ] Monitor for first 24 hours
- [ ] Verify analytics data flowing
- [ ] Test from multiple locations/devices

---

## 12. ROLLBACK PROCEDURE

### 12.1 Automatic Rollback Triggers

**Conditions:**
- Error rate > 10% for 5 minutes
- p95 latency > 5 seconds for 5 minutes
- Instance count reaches max (10) for 10 minutes
- Health check failures > 50%

### 12.2 Manual Rollback Steps

```bash
# List recent revisions
gcloud run revisions list \
  --service clearforge-website \
  --region us-central1

# Rollback to previous revision
gcloud run services update-traffic clearforge-website \
  --region us-central1 \
  --to-revisions REVISION_NAME=100

# Verify rollback
gcloud run services describe clearforge-website \
  --region us-central1 \
  --format='value(status.traffic)'
```

### 12.3 Post-Rollback Actions

1. Investigate root cause
2. Fix issue in development
3. Test fix thoroughly
4. Deploy fix with monitoring
5. Document incident
6. Update runbook

---

## 13. SUCCESS METRICS

### 13.1 Technical Metrics

**Week 1:**
- [ ] 99.9% uptime
- [ ] p95 latency < 2s
- [ ] Error rate < 1%
- [ ] All forms functional
- [ ] ASO data updating every 15 minutes

**Month 1:**
- [ ] 100K+ page views
- [ ] 10+ beta applications
- [ ] 100+ contact submissions
- [ ] 500+ newsletter signups
- [ ] Core Web Vitals: All Green

### 13.2 Business Metrics

**Week 1:**
- [ ] 5+ beta applications
- [ ] 20+ contact form submissions
- [ ] 50+ newsletter signups
- [ ] Zero critical issues

**Month 1:**
- [ ] 20+ beta applications
- [ ] 100+ contact submissions
- [ ] 200+ newsletter signups
- [ ] 5+ qualified leads
- [ ] Beta program at 20% capacity

---

## 14. MAINTENANCE & SUPPORT

### 14.1 Regular Maintenance Tasks

**Daily:**
- Monitor error logs
- Check form submissions
- Verify ASO data updates
- Review analytics

**Weekly:**
- Review performance metrics
- Check for dependency updates
- Analyze conversion funnel
- Review A/B test results (if running)

**Monthly:**
- Security patches
- Dependency updates
- Performance audit
- Content refresh
- SEO audit

### 14.2 Support Procedures

**Issue Triage:**
1. Check Cloud Logging for errors
2. Verify Gateway service health
3. Test forms manually
4. Check analytics tracking
5. Review recent deployments

**Escalation Path:**
1. Level 1: On-call engineer (< 1 hour)
2. Level 2: Tech lead (< 4 hours)
3. Level 3: CTO (< 24 hours)

---

## 15. APPENDIX

### 15.1 Useful Commands

```bash
# View logs
gcloud logging read "resource.type=cloud_run_revision AND resource.labels.service_name=clearforge-website" --limit 50

# Check service metrics
gcloud run services describe clearforge-website --region us-central1 --format=json

# Update environment variable
gcloud run services update clearforge-website \
  --update-env-vars NEW_VAR=value \
  --region us-central1

# Scale service
gcloud run services update clearforge-website \
  --min-instances=2 \
  --max-instances=20 \
  --region us-central1
```

### 15.2 Troubleshooting Guide

**Problem: ASO data not displaying**
- Check Gateway service health
- Verify API key in secrets
- Check network connectivity
- Review error logs

**Problem: Forms not submitting**
- Check SendGrid API key
- Verify Firestore permissions
- Test Gateway endpoints directly
- Check rate limiting

**Problem: Slow page loads**
- Check instance count and scaling
- Review API response times
- Analyze bundle size
- Check external dependencies

**Problem: Analytics not tracking**
- Verify GA4 measurement ID
- Check gtag script loading
- Review console for errors
- Test in incognito mode

---

## 16. TIMELINE

### Day 1-2: Development
- Implement Gateway client library
- Build API routes
- Add analytics integration
- Create forms and components
- Write unit tests

### Day 3-4: Testing & Optimization
- Run integration tests
- Performance optimization
- Security audit
- Accessibility testing
- Cross-browser testing

### Day 5: Staging Deployment
- Deploy to staging environment
- End-to-end testing
- Load testing
- Beta user testing

### Day 6: Production Deployment
- Deploy to production
- DNS configuration
- Smoke tests
- Monitoring setup
- Team notification

### Day 7: Post-Launch
- Monitor metrics
- Fix any issues
- Gather feedback
- Document learnings

**Total Effort:** 1 week (5-7 days)

---

**Document Status:** Ready for Implementation  
**Dependencies:** Intelligence Gateway Service (must be deployed first)  
**Next Steps:** Begin Day 1 development tasks  
**Questions:** Refer to Intelligence Gateway TRD or consult tech lead