# ClearForge Website - Technical Requirements Document (TRD)
**Version**: 2.0 (Revised)  
**Date**: October 10, 2025  
**Status**: Phase 1 - Foundation Planning  
**For**: Claude Code Implementation  
**Project**: xynergy-dev-1757909467

---

## EXECUTIVE SUMMARY

This TRD outlines the complete technical requirements for the ClearForge marketing website deployment on Google Cloud Run and its integration with the Xynergy platform backend services. 

**Critical Finding**: Intelligence Gateway does not exist (0% implementation) but is required for website connectivity.

**Primary Goal**: Deploy ClearForge website to Cloud Run with functional beta applications, contact forms, and ASO data display

**Timeline**: 2-4 weeks for complete implementation

---

## TABLE OF CONTENTS

1. [System Architecture](#system-architecture)
2. [Infrastructure Requirements](#infrastructure-requirements)
3. [Implementation Phases](#implementation-phases)
4. [Service Specifications](#service-specifications)
5. [API Integration](#api-integration)
6. [Security & Authentication](#security--authentication)
7. [Deployment Strategy](#deployment-strategy)
8. [Testing Requirements](#testing-requirements)
9. [Monitoring & Observability](#monitoring--observability)
10. [Success Criteria](#success-criteria)

---

## SYSTEM ARCHITECTURE

### Current Architecture

```
┌──────────────────────────────────────────────────────────┐
│  GCP Project: xynergy-dev-1757909467                     │
│  Region: us-central1                                     │
└──────────────────────────────────────────────────────────┘
         │
         ├─► Artifact Registry
         │   └─► us-central1-docker.pkg.dev/xynergy-dev-1757909467/xynergy-platform
         │
         ├─► Cloud Run Services (11 Deployed)
         │   ├─► AI Routing Engine ✅
         │   ├─► Marketing Engine ✅
         │   ├─► ASO Engine ✅
         │   ├─► Platform Dashboard ✅
         │   └─► ... 7 more services
         │
         ├─► Firestore (Primary Database)
         ├─► Redis (Caching)
         ├─► BigQuery (Analytics)
         └─► Pub/Sub (7 core topics)
```

### Target Architecture

```
┌─────────────────────┐
│  ClearForge Website │  (NEW - To Be Built)
│  (Next.js + TS)     │  Cloud Run Service
│  clearforge-website │
└──────────┬──────────┘
           │
           │ HTTPS
           ▼
┌──────────────────────────────┐
│  Intelligence Gateway        │  (NEW - To Be Built)
│  (Node.js + Express + TS)    │  Cloud Run Service
│  xynergyos-intelligence-      │
│  gateway                      │
└────────┬─────────────────────┘
         │
         │ Routes to:
         ├──────────────────────────┐
         │                          │
         ▼                          ▼
┌─────────────────┐      ┌─────────────────┐
│ Marketing Engine│  ✅  │   ASO Engine    │  ✅
│ (Forms Handler) │      │ (Opportunities) │
└─────────────────┘      └─────────────────┘
         │                          │
         ▼                          ▼
┌─────────────────────────────────────────┐
│          Firestore Collections          │
│  • beta_applications                    │
│  • contact_submissions                  │
└─────────────────────────────────────────┘
```

### Data Flow

**Beta Application Flow:**
```
User → Website Form → Intelligence Gateway → Firestore
                    ↓
                Cloud Function → SendGrid → Team Email
```

**Contact Form Flow:**
```
User → Website Form → Intelligence Gateway → Firestore
                    ↓
                Cloud Function → SendGrid → Team Email
```

**ASO Opportunities Flow:**
```
User → Website → Intelligence Gateway → ASO Engine
                                      ↓
                                Redis Cache (1hr TTL)
```

---

## INFRASTRUCTURE REQUIREMENTS

### GCP Project Details

**Project Information:**
- **Project ID**: xynergy-dev-1757909467
- **Project Number**: 835612502919
- **Region**: us-central1 (standardized)
- **Service Account**: xynergy-platform-sa@xynergy-dev-1757909467.iam.gserviceaccount.com

**Artifact Registry:**
- **URL**: us-central1-docker.pkg.dev/xynergy-dev-1757909467/xynergy-platform
- **Naming Convention**: `{service-name}:latest` and `{service-name}:{version}`

### Required GCP Services

**Already Enabled** ✅:
- Cloud Run Admin API
- Cloud Build API
- Artifact Registry API
- Firebase Management + Hosting APIs
- IAM + IAM Credentials APIs
- Secret Manager API
- Firestore
- Cloud Storage
- Pub/Sub
- BigQuery

**Additional Services Needed** (if not already enabled):
- Cloud Functions (for notifications)
- Cloud Logging
- Cloud Monitoring
- Cloud Trace

### Infrastructure Components

**1. Firestore Collections**
```
xynergy-production/
├── beta_applications/
│   └── {applicationId}/
│       ├── company_name: string
│       ├── contact_name: string
│       ├── email: string
│       ├── industry: string
│       ├── phone?: string
│       ├── website?: string
│       ├── goals: string
│       ├── interests: string[]
│       ├── referred_by?: string
│       ├── timestamp: Timestamp
│       ├── status: "pending" | "reviewing" | "approved" | "rejected"
│       └── source: "website"
│
└── contact_submissions/
    └── {submissionId}/
        ├── name: string
        ├── email: string
        ├── message: string
        ├── phone?: string
        ├── company?: string
        ├── timestamp: Timestamp
        ├── status: "new" | "read" | "responded"
        └── source: "website"
```

**Indexes Required:**
- `beta_applications`: email, timestamp, status
- `contact_submissions`: email, timestamp, status

**Security Rules:**
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Beta applications - write public, read authenticated
    match /beta_applications/{docId} {
      allow create: if true; // Public form submission
      allow read, update, delete: if request.auth != null;
    }
    
    // Contact submissions - same pattern
    match /contact_submissions/{docId} {
      allow create: if true;
      allow read, update, delete: if request.auth != null;
    }
  }
}
```

**2. Cloud Functions** (for notifications)

**Function**: `notifyTeamBetaApplication`
- **Trigger**: Firestore onCreate → `beta_applications/{docId}`
- **Runtime**: Node.js 20
- **Memory**: 256MB
- **Timeout**: 60s
- **Action**: Send email via SendGrid to team

**Function**: `notifyTeamContactSubmission`
- **Trigger**: Firestore onCreate → `contact_submissions/{docId}`
- **Runtime**: Node.js 20
- **Memory**: 256MB
- **Timeout**: 60s
- **Action**: Send email via SendGrid to team

**3. Secret Manager Secrets**
```
projects/xynergy-dev-1757909467/secrets/
├── sendgrid-api-key
├── firebase-admin-key
└── gateway-internal-api-key (for service-to-service auth)
```

---

## IMPLEMENTATION PHASES

### **PHASE 1: Intelligence Gateway (Week 1-2)**
**Owner**: Backend team / Claude Code  
**Priority**: P0 - BLOCKING

**Objective**: Build the Intelligence Gateway service to handle website API requests

**Tasks**:
1. Create `xynergyos-intelligence-gateway` service
   - Node.js 20 + TypeScript + Express.js
   - Docker multi-stage build
   - Deploy to Cloud Run
2. Implement public routes:
   - POST `/api/public/beta`
   - POST `/api/public/contact`
   - GET `/api/public/aso/opportunities`
3. Add rate limiting (in-memory, 5 req/min)
4. Add request validation
5. Implement service routing to Marketing Engine & ASO Engine
6. Add health checks
7. Configure CORS for website
8. Add logging with Winston

**Deliverables**:
- ✅ Gateway service deployed to Cloud Run
- ✅ All 3 public endpoints functional
- ✅ Rate limiting active
- ✅ Integration tests passing
- ✅ Documentation complete

**Exit Criteria**: 
- Gateway returns 200 on health check
- Can submit beta application and get application_id
- Rate limiting blocks excessive requests
- Service accessible at: `https://xynergyos-intelligence-gateway-835612502919.us-central1.run.app`

**Reference**: See `Intelligence Gateway - Implementation Requirements.txt`

---

### **PHASE 2: Website Service Build (Week 1-2 - Parallel)**
**Owner**: Frontend team / Claude Code  
**Priority**: P0 - BLOCKING

**Objective**: Containerize and deploy ClearForge website to Cloud Run

**Tasks**:
1. **Dockerfile Creation**
   - Multi-stage build (build + production)
   - Node.js 20-alpine base
   - Next.js standalone output
   - Non-root user
   - Platform linux/amd64
   
2. **Environment Configuration**
   - `.env.production` for Cloud Run
   - Point to Intelligence Gateway URL
   - Firebase config
   - Analytics config
   
3. **API Route Implementation**
   - `/api/beta` → calls Gateway
   - `/api/contact` → calls Gateway
   - `/api/aso/opportunities` → calls Gateway
   
4. **Form Components**
   - Update BetaApplicationForm submission handler
   - Update ContactForm submission handler
   - Add loading states
   - Add error handling
   - Add success confirmations
   
5. **Build & Deploy**
   - Build Docker image
   - Push to Artifact Registry
   - Deploy to Cloud Run
   - Configure custom domain

**Deliverables**:
- ✅ Dockerfile with optimized multi-stage build
- ✅ Website deployed to Cloud Run
- ✅ Forms functional end-to-end
- ✅ ASO opportunities displaying
- ✅ Custom domain configured

**Exit Criteria**:
- Website accessible at Cloud Run URL
- All forms submit successfully
- No console errors
- Lighthouse score > 90
- Mobile responsive

---

### **PHASE 3: Notification System (Week 2)**
**Owner**: Backend team  
**Priority**: P1 - HIGH

**Objective**: Set up automated team notifications for form submissions

**Tasks**:
1. Configure SendGrid account
2. Create email templates
3. Deploy Cloud Functions
4. Test notification delivery
5. Set up failure alerting

**Deliverables**:
- ✅ Cloud Functions deployed
- ✅ Email notifications working
- ✅ Team receives submissions within 1 minute
- ✅ Monitoring active

---

### **PHASE 4: Testing & Go-Live (Week 3)**
**Owner**: QA + All teams  
**Priority**: P0 - BLOCKING

**Objective**: Comprehensive testing and production launch

**Tasks**:
1. End-to-end testing
2. Load testing
3. Security audit
4. Performance optimization
5. Documentation finalization
6. Team training
7. Production deployment
8. Post-launch monitoring

**Deliverables**:
- ✅ All tests passing
- ✅ Security audit complete
- ✅ Production deployed
- ✅ Monitoring dashboards active
- ✅ Team trained

---

## SERVICE SPECIFICATIONS

### Service 1: ClearForge Website

**Service Name**: `clearforge-website`

**Technology Stack**:
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS
- **Forms**: React Hook Form + Zod validation
- **API Client**: Axios with retry logic

**Container Specifications**:
```dockerfile
# Build stage
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage  
FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=8080

# Create non-root user
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

USER nextjs
EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s \
  CMD node -e "require('http').get('http://localhost:8080/api/health', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

CMD ["node", "server.js"]
```

**Cloud Run Configuration**:
```yaml
Service: clearforge-website
Region: us-central1
CPU: 1 vCPU
Memory: 512Mi
Min Instances: 0 (scale to zero)
Max Instances: 10
Timeout: 60s
Port: 8080
Concurrency: 80
Ingress: All traffic
Authentication: Allow unauthenticated
```

**Environment Variables**:
```bash
# Intelligence Gateway
NEXT_PUBLIC_GATEWAY_URL=https://xynergyos-intelligence-gateway-835612502919.us-central1.run.app

# Firebase (for future auth features)
NEXT_PUBLIC_FIREBASE_PROJECT_ID=xynergy-dev-1757909467
NEXT_PUBLIC_FIREBASE_API_KEY=<from-firebase-console>
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=xynergy-dev-1757909467.firebaseapp.com

# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Feature Flags
NEXT_PUBLIC_ENABLE_BETA_FORM=true
NEXT_PUBLIC_ENABLE_CONTACT_FORM=true
NEXT_PUBLIC_ENABLE_ASO_DISPLAY=true

# Build
NODE_ENV=production
PORT=8080
```

**Build Commands**:
```bash
# Local development
npm install
npm run dev

# Production build
npm run build

# Docker build
docker build --platform linux/amd64 \
  -t us-central1-docker.pkg.dev/xynergy-dev-1757909467/xynergy-platform/clearforge-website:latest .

# Push to registry
docker push us-central1-docker.pkg.dev/xynergy-dev-1757909467/xynergy-platform/clearforge-website:latest

# Deploy to Cloud Run
gcloud run deploy clearforge-website \
  --image us-central1-docker.pkg.dev/xynergy-dev-1757909467/xynergy-platform/clearforge-website:latest \
  --platform managed \
  --region us-central1 \
  --project xynergy-dev-1757909467 \
  --allow-unauthenticated \
  --port 8080 \
  --memory 512Mi \
  --cpu 1 \
  --min-instances 0 \
  --max-instances 10 \
  --timeout 60
```

---

### Service 2: Intelligence Gateway

**Service Name**: `xynergyos-intelligence-gateway`

**See**: `Intelligence Gateway - Implementation Requirements.txt` for complete specifications

**Quick Reference**:
- **Technology**: Node.js 20 + TypeScript + Express.js
- **Port**: 8080
- **CPU**: 2 vCPU
- **Memory**: 2Gi
- **Min Instances**: 1 (always warm)
- **Max Instances**: 20

**Key Endpoints**:
```typescript
POST /api/public/beta            // Beta applications
POST /api/public/contact         // Contact forms
GET  /api/public/aso/opportunities  // ASO data
GET  /health                     // Health check
GET  /health/deep                // Deep health check
```

---

## API INTEGRATION

### Website API Routes

**Location**: `app/api/` directory in Next.js app

**1. Beta Application Route**

**File**: `app/api/beta/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import axios from 'axios';

const GATEWAY_URL = process.env.NEXT_PUBLIC_GATEWAY_URL;

const BetaSchema = z.object({
  company_name: z.string().min(1).max(100),
  contact_name: z.string().min(1).max(100),
  email: z.string().email(),
  industry: z.string().min(1).max(50),
  phone: z.string().optional(),
  website: z.string().url().optional(),
  goals: z.string().min(10).max(1000),
  interests: z.array(z.string()).optional(),
  referred_by: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = BetaSchema.parse(body);

    const response = await axios.post(
      `${GATEWAY_URL}/api/public/beta`,
      validated,
      {
        timeout: 10000,
        headers: { 'Content-Type': 'application/json' },
      }
    );

    return NextResponse.json(response.data, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: 'Validation failed', details: error.errors },
        { status: 400 }
      );
    }

    if (axios.isAxiosError(error)) {
      if (error.response?.status === 429) {
        return NextResponse.json(
          { success: false, error: 'Too many requests. Please try again later.' },
          { status: 429 }
        );
      }
    }

    console.error('Beta submission error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit application' },
      { status: 500 }
    );
  }
}
```

**2. Contact Form Route**

**File**: `app/api/contact/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import axios from 'axios';

const GATEWAY_URL = process.env.NEXT_PUBLIC_GATEWAY_URL;

const ContactSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(2000),
  phone: z.string().optional(),
  company: z.string().max(100).optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = ContactSchema.parse(body);

    const response = await axios.post(
      `${GATEWAY_URL}/api/public/contact`,
      validated,
      {
        timeout: 10000,
        headers: { 'Content-Type': 'application/json' },
      }
    );

    return NextResponse.json(response.data, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: 'Validation failed', details: error.errors },
        { status: 400 }
      );
    }

    if (axios.isAxiosError(error)) {
      if (error.response?.status === 429) {
        return NextResponse.json(
          { success: false, error: 'Too many requests. Please try again later.' },
          { status: 429 }
        );
      }
    }

    console.error('Contact submission error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
```

**3. ASO Opportunities Route**

**File**: `app/api/aso/opportunities/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

const GATEWAY_URL = process.env.NEXT_PUBLIC_GATEWAY_URL;

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = searchParams.get('limit') || '10';

    const response = await axios.get(
      `${GATEWAY_URL}/api/public/aso/opportunities`,
      {
        params: { limit },
        timeout: 10000,
      }
    );

    return NextResponse.json(response.data, {
      status: 200,
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200',
      },
    });
  } catch (error) {
    console.error('ASO opportunities error:', error);
    
    // Return fallback static data if service unavailable
    return NextResponse.json({
      opportunities: [
        {
          keyword: 'app store optimization',
          search_volume: 5400,
          difficulty: 42,
          opportunity_score: 85,
        },
        // ... fallback data
      ],
    }, { status: 200 });
  }
}
```

**4. Health Check Route**

**File**: `app/api/health/route.ts`

```typescript
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: 'healthy',
    service: 'clearforge-website',
    timestamp: new Date().toISOString(),
  });
}
```

---

## SECURITY & AUTHENTICATION

### Security Requirements

**1. Input Validation**
- All user inputs validated with Zod schemas
- Max length limits enforced
- Email format validation
- XSS prevention (automatic with Next.js)
- SQL injection N/A (using Firestore)

**2. Rate Limiting**
- Handled at Intelligence Gateway level
- 5 requests per minute per IP for forms
- Returns 429 with clear error message

**3. CORS Configuration**

**Intelligence Gateway CORS**:
```typescript
const allowedOrigins = [
  'http://localhost:3000',
  'https://clearforge-website-835612502919.us-central1.run.app',
  'https://clearforge.ai',
  'https://www.clearforge.ai',
];
```

**4. API Keys**
- Internal service-to-service communication uses shared secret
- Stored in Secret Manager
- Never exposed to client
- Rotated every 90 days

**5. HTTPS/TLS**
- Enforced by Cloud Run (automatic)
- TLS 1.2+ only
- HSTS enabled

**6. Data Privacy**
- GDPR compliance through privacy policy
- Data retention: 90 days for unsuccessful applications
- User right to deletion (admin panel)
- No tracking without consent

---

## DEPLOYMENT STRATEGY

### Infrastructure as Code (Terraform)

**All infrastructure MUST be defined in Terraform**

**Directory Structure**:
```
platform/terraform/
├── main.tf
├── variables.tf
├── outputs.tf
├── modules/
│   ├── cloud-run/
│   ├── firestore/
│   ├── cloud-functions/
│   └── secrets/
└── environments/
    ├── dev/
    └── production/
```

**Example Cloud Run Service** (Terraform):
```hcl
resource "google_cloud_run_service" "clearforge_website" {
  name     = "clearforge-website"
  location = var.region
  project  = var.project_id

  template {
    spec {
      service_account_name = var.service_account_email
      
      containers {
        image = "${var.artifact_registry}/clearforge-website:latest"
        
        ports {
          container_port = 8080
        }
        
        resources {
          limits = {
            cpu    = "1000m"
            memory = "512Mi"
          }
        }
        
        env {
          name  = "NODE_ENV"
          value = "production"
        }
        
        env {
          name  = "NEXT_PUBLIC_GATEWAY_URL"
          value = google_cloud_run_service.intelligence_gateway.status[0].url
        }
      }
    }
    
    metadata {
      annotations = {
        "autoscaling.knative.dev/minScale" = "0"
        "autoscaling.knative.dev/maxScale" = "10"
      }
    }
  }

  traffic {
    percent         = 100
    latest_revision = true
  }
}

resource "google_cloud_run_service_iam_member" "clearforge_website_public" {
  service  = google_cloud_run_service.clearforge_website.name
  location = google_cloud_run_service.clearforge_website.location
  role     = "roles/run.invoker"
  member   = "allUsers"
}
```

### CI/CD Pipeline

**Git Workflow**:
1. Feature branch from `main`
2. Development and testing
3. Pull request with code review
4. Automated tests run
5. Merge to `main`
6. Automatic deployment trigger

**Cloud Build Configuration** (cloudbuild.yaml):
```yaml
steps:
  # Run tests
  - name: 'node:20'
    entrypoint: npm
    args: ['ci']
  
  - name: 'node:20'
    entrypoint: npm
    args: ['test']
  
  # Build Docker image
  - name: 'gcr.io/cloud-builders/docker'
    args:
      - 'build'
      - '--platform=linux/amd64'
      - '-t'
      - 'us-central1-docker.pkg.dev/$PROJECT_ID/xynergy-platform/clearforge-website:$SHORT_SHA'
      - '-t'
      - 'us-central1-docker.pkg.dev/$PROJECT_ID/xynergy-platform/clearforge-website:latest'
      - '.'
  
  # Push to Artifact Registry
  - name: 'gcr.io/cloud-builders/docker'
    args:
      - 'push'
      - '--all-tags'
      - 'us-central1-docker.pkg.dev/$PROJECT_ID/xynergy-platform/clearforge-website'
  
  # Deploy to Cloud Run
  - name: 'gcr.io/google.com/cloudsdktool/cloud-sdk'
    entrypoint: gcloud
    args:
      - 'run'
      - 'deploy'
      - 'clearforge-website'
      - '--image'
      - 'us-central1-docker.pkg.dev/$PROJECT_ID/xynergy-platform/clearforge-website:$SHORT_SHA'
      - '--region'
      - 'us-central1'
      - '--platform'
      - 'managed'

options:
  logging: CLOUD_LOGGING_ONLY
  machineType: 'N1_HIGHCPU_8'

timeout: '1200s'
```

### Deployment Steps

**1. Pre-Deployment Checklist**:
- [ ] All tests passing locally
- [ ] Dockerfile builds successfully
- [ ] Environment variables configured
- [ ] Secrets created in Secret Manager
- [ ] Firestore collections created
- [ ] Security rules deployed
- [ ] Cloud Functions deployed
- [ ] Domain DNS configured

**2. Initial Deployment**:
```bash
# 1. Build and push Intelligence Gateway
cd platform/xynergyos-intelligence-gateway
docker build --platform linux/amd64 \
  -t us-central1-docker.pkg.dev/xynergy-dev-1757909467/xynergy-platform/xynergyos-intelligence-gateway:latest .
docker push us-central1-docker.pkg.dev/xynergy-dev-1757909467/xynergy-platform/xynergyos-intelligence-gateway:latest

gcloud run deploy xynergyos-intelligence-gateway \
  --image us-central1-docker.pkg.dev/xynergy-dev-1757909467/xynergy-platform/xynergyos-intelligence-gateway:latest \
  --region us-central1 \
  --project xynergy-dev-1757909467 \
  --service-account xynergy-platform-sa@xynergy-dev-1757909467.iam.gserviceaccount.com \
  --allow-unauthenticated

# 2. Build and push Website
cd website
docker build --platform linux/amd64 \
  -t us-central1-docker.pkg.dev/xynergy-dev-1757909467/xynergy-platform/clearforge-website:latest .
docker push us-central1-docker.pkg.dev/xynergy-dev-1757909467/xynergy-platform/clearforge-website:latest

gcloud run deploy clearforge-website \
  --image us-central1-docker.pkg.dev/xynergy-dev-1757909467/xynergy-platform/clearforge-website:latest \
  --region us-central1 \
  --project xynergy-dev-1757909467 \
  --allow-unauthenticated

# 3. Configure custom domain
gcloud run domain-mappings create \
  --service clearforge-website \
  --domain www.clearforgetech.com \
  --region us-central1
```

**3. Smoke Tests**:
```bash
# Test website health
curl https://clearforge-website-835612502919.us-central1.run.app/api/health

# Test gateway health  
curl https://xynergyos-intelligence-gateway-835612502919.us-central1.run.app/health

# Test beta submission
curl -X POST https://clearforge-website-835612502919.us-central1.run.app/api/beta \
  -H "Content-Type: application/json" \
  -d '{
    "company_name": "Test Co",
    "contact_name": "Test User",
    "email": "test@example.com",
    "industry": "Technology",
    "goals": "Testing the beta application submission flow"
  }'
```

**4. Rollback Procedure**:
```bash
# List revisions
gcloud run revisions list --service clearforge-website --region us-central1

# Rollback to previous revision
gcloud run services update-traffic clearforge-website \
  --to-revisions REVISION_NAME=100 \
  --region us-central1
```

---

## TESTING REQUIREMENTS

### Unit Tests

**Framework**: Jest + React Testing Library

**Coverage Target**: ≥80%

**Example**:
```typescript
// __tests__/api/beta.test.ts
import { POST } from '@/app/api/beta/route';
import { NextRequest } from 'next/server';

describe('POST /api/beta', () => {
  it('validates required fields', async () => {
    const req = new NextRequest('http://localhost/api/beta', {
      method: 'POST',
      body: JSON.stringify({}),
    });

    const res = await POST(req);
    const data = await res.json();

    expect(res.status).toBe(400);
    expect(data.success).toBe(false);
    expect(data.error).toBe('Validation failed');
  });

  it('accepts valid submission', async () => {
    const req = new NextRequest('http://localhost/api/beta', {
      method: 'POST',
      body: JSON.stringify({
        company_name: 'Test Inc',
        contact_name: 'John Doe',
        email: 'john@test.com',
        industry: 'Tech',
        goals: 'Want to optimize our app',
      }),
    });

    const res = await POST(req);
    const data = await res.json();

    expect(res.status).toBe(201);
    expect(data.success).toBe(true);
    expect(data.application_id).toBeDefined();
  });
});
```

### Integration Tests

**Framework**: Playwright

**Test Scenarios**:
1. Complete beta application flow
2. Complete contact form flow
3. ASO opportunities display
4. Error handling
5. Rate limiting
6. Mobile responsiveness

**Example**:
```typescript
// tests/integration/beta-flow.spec.ts
import { test, expect } from '@playwright/test';

test('complete beta application flow', async ({ page }) => {
  await page.goto('/beta');

  // Fill form
  await page.fill('[name="company_name"]', 'Test Company');
  await page.fill('[name="contact_name"]', 'John Doe');
  await page.fill('[name="email"]', 'john@testcompany.com');
  await page.selectOption('[name="industry"]', 'Technology');
  await page.fill('[name="goals"]', 'We want to improve our ASO');

  // Submit
  await page.click('button[type="submit"]');

  // Verify success
  await expect(page.locator('[data-testid="success-message"]')).toBeVisible();
  await expect(page.locator('[data-testid="success-message"]')).toContainText('Application submitted');
});

test('handles rate limiting', async ({ page }) => {
  // Submit 6 times rapidly
  for (let i = 0; i < 6; i++) {
    await page.goto('/beta');
    await fillAndSubmitForm(page);
    
    if (i === 5) {
      await expect(page.locator('[data-testid="error-message"]'))
        .toContainText('Too many requests');
    }
  }
});
```

### Load Testing

**Tool**: k6

**Test Scenario**: Simulate 100 concurrent users

```javascript
// loadtest.js
import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '2m', target: 100 },
    { duration: '5m', target: 100 },
    { duration: '2m', target: 0 },
  ],
  thresholds: {
    http_req_duration: ['p(95)<500'], // 95% under 500ms
    http_req_failed: ['rate<0.01'],   // <1% failures
  },
};

export default function () {
  const payload = JSON.stringify({
    company_name: `LoadTest-${__VU}`,
    contact_name: 'Load Tester',
    email: `load${__VU}@test.com`,
    industry: 'Testing',
    goals: 'Load testing the application',
  });

  const res = http.post(
    'https://clearforge-website-835612502919.us-central1.run.app/api/beta',
    payload,
    { headers: { 'Content-Type': 'application/json' } }
  );

  check(res, {
    'status is 201 or 429': (r) => r.status === 201 || r.status === 429,
    'response time < 500ms': (r) => r.timings.duration < 500,
  });

  sleep(1);
}
```

---

## MONITORING & OBSERVABILITY

### Cloud Logging

**Log Queries**:

**Beta Applications**:
```
resource.type="cloud_run_revision"
resource.labels.service_name="clearforge-website"
jsonPayload.message=~"Beta submission"
```

**Errors**:
```
resource.type="cloud_run_revision"
severity="ERROR"
resource.labels.service_name="clearforge-website"
```

**Rate Limiting**:
```
resource.type="cloud_run_revision"
resource.labels.service_name="xynergyos-intelligence-gateway"
jsonPayload.statusCode="429"
```

### Cloud Monitoring Dashboards

**Key Metrics**:
1. **Request Rate**: Requests/minute
2. **Error Rate**: Errors/total requests (%)
3. **Latency**: P50, P95, P99 response times
4. **Container CPU**: % utilization
5. **Container Memory**: % utilization
6. **Instance Count**: Active instances
7. **Form Submissions**: Beta + Contact per hour

**Sample Dashboard JSON**:
```json
{
  "displayName": "ClearForge Website - Production",
  "dashboardFilters": [],
  "widgets": [
    {
      "title": "Request Rate",
      "xyChart": {
        "dataSets": [{
          "timeSeriesQuery": {
            "timeSeriesFilter": {
              "filter": "resource.type=\"cloud_run_revision\" resource.labels.service_name=\"clearforge-website\"",
              "aggregation": {
                "perSeriesAligner": "ALIGN_RATE",
                "crossSeriesReducer": "REDUCE_SUM"
              }
            }
          }
        }]
      }
    }
  ]
}
```

### Alerts

**Critical Alerts** (PagerDuty/Email):
1. **Error Rate > 5%** for 5 minutes
2. **Latency P95 > 1000ms** for 5 minutes
3. **Service Down** (health check fails)
4. **Zero Instances** running during business hours

**Warning Alerts** (Slack):
1. **Error Rate > 1%** for 10 minutes
2. **Latency P95 > 500ms** for 10 minutes
3. **Instance count > 8** (near max)
4. **Form submission failures**

**Example Alert Policy** (Terraform):
```hcl
resource "google_monitoring_alert_policy" "high_error_rate" {
  display_name = "High Error Rate - ClearForge Website"
  combiner     = "OR"
  
  conditions {
    display_name = "Error rate > 5%"
    
    condition_threshold {
      filter          = "resource.type=\"cloud_run_revision\" AND resource.labels.service_name=\"clearforge-website\""
      duration        = "300s"
      comparison      = "COMPARISON_GT"
      threshold_value = 0.05
      
      aggregations {
        alignment_period   = "60s"
        per_series_aligner = "ALIGN_RATE"
      }
    }
  }
  
  notification_channels = [
    google_monitoring_notification_channel.email.id
  ]
}
```

### Application Performance Monitoring

**Tool**: Google Cloud Trace + Cloud Profiler

**Instrumentation**:
```typescript
// app/layout.tsx
import { trace } from '@opentelemetry/api';

const tracer = trace.getTracer('clearforge-website');

export async function RootLayout() {
  const span = tracer.startSpan('render-layout');
  
  try {
    // Component rendering
  } finally {
    span.end();
  }
}
```

---

## SUCCESS CRITERIA

### Technical Success Metrics

**Service Health**:
- ✅ Website uptime ≥ 99.9%
- ✅ Gateway uptime ≥ 99.9%
- ✅ Average response time < 500ms (P95 < 1000ms)
- ✅ Error rate < 0.1%
- ✅ Zero data loss
- ✅ Zero security vulnerabilities

**Performance**:
- ✅ Lighthouse score ≥ 90 (all categories)
- ✅ First Contentful Paint < 1.5s
- ✅ Time to Interactive < 3.5s
- ✅ Cumulative Layout Shift < 0.1

**Functionality**:
- ✅ Beta applications stored correctly in Firestore
- ✅ Contact forms stored correctly in Firestore
- ✅ Email notifications delivered within 60 seconds
- ✅ ASO opportunities display correctly
- ✅ Rate limiting prevents abuse
- ✅ All error states handled gracefully

### Business Success Metrics

**Conversion**:
- ✅ Beta form completion rate > 70%
- ✅ Contact form completion rate > 80%
- ✅ Zero abandoned submissions due to errors

**User Experience**:
- ✅ Average time to submit < 2 minutes
- ✅ Zero user-reported bugs
- ✅ Mobile experience equivalent to desktop

**Operations**:
- ✅ Team receives all submissions
- ✅ Team can access Firestore console to view submissions
- ✅ Clear documentation for team operations

---

## OPEN QUESTIONS & DECISIONS REQUIRED

### Critical Decisions Needed

1. **Email Notification Recipients**
   - ❓ Who should receive beta application notifications?
   - ❓ Who should receive contact form notifications?
   - ❓ Should applicants receive confirmation emails?

2. **SendGrid Configuration**
   - ❓ Do we have a SendGrid account?
   - ❓ What email templates do we need?
   - ❓ What's the sender email address?

3. **ASO Engine Integration**
   - ❓ Exact endpoint path in ASO Engine?
   - ❓ Does it require authentication?
   - ❓ What's the data refresh rate?

4. **Custom Domain**
   - ✅ Domain registered: `clearforgetech.com`
   - ❓ Do we want `www.clearforgetech.com` or just `clearforgetech.com`?
   - ❓ Who manages DNS?

5. **Analytics**
   - ❓ Do we have a Google Analytics 4 property?
   - ❓ What events should we track?
   - ❓ Do we need conversion tracking?

6. **Rate Limiting**
   - ❓ Are 5 req/min limits appropriate?
   - ❓ Should we increase for authenticated users in future?

### Assumptions

- ✅ GCP project `xynergy-dev-1757909467` is production-ready
- ✅ Service account has required permissions
- ✅ Artifact Registry is configured
- ✅ Firestore is in production mode (not emulator)
- ✅ Team has access to GCP Console
- ✅ Budget approved for Cloud Run costs (~$50-100/month initially)

---

## NEXT STEPS

### Week 1 (Immediate Actions)

**Monday**:
- [ ] Answer all open questions
- [ ] Create SendGrid account (if needed)
- [ ] Verify GCP permissions
- [ ] Set up Firestore collections
- [ ] Deploy security rules

**Tuesday-Wednesday**:
- [ ] Build Intelligence Gateway (Priority 1)
- [ ] Deploy to Cloud Run
- [ ] Test all endpoints
- [ ] Verify rate limiting

**Thursday-Friday**:
- [ ] Build website Docker container
- [ ] Deploy to Cloud Run
- [ ] Configure environment variables
- [ ] End-to-end testing

### Week 2 (Integration & Testing)

**Monday-Tuesday**:
- [ ] Deploy Cloud Functions for notifications
- [ ] Test email delivery
- [ ] Configure SendGrid templates
- [ ] Integration testing

**Wednesday-Thursday**:
- [ ] Load testing with k6
- [ ] Performance optimization
- [ ] Security audit completion
- [ ] Documentation review

**Friday**:
- [ ] Final end-to-end testing
- [ ] Pre-production checklist review
- [ ] Team training session
- [ ] Go/no-go decision

### Week 3 (Production Deployment)

**Monday**:
- [ ] Final production configuration review
- [ ] Custom domain DNS setup
- [ ] SSL certificate verification
- [ ] Backup verification

**Tuesday**:
- [ ] Production deployment (morning)
- [ ] Smoke tests (all endpoints)
- [ ] Monitor for first 4 hours
- [ ] Team availability for issues

**Wednesday-Friday**:
- [ ] Monitor metrics and alerts
- [ ] Collect initial user feedback
- [ ] Address any minor issues
- [ ] Document lessons learned
- [ ] Post-launch retrospective

### Week 4 (Optimization & Iteration)

**Throughout**:
- [ ] Performance optimization based on real data
- [ ] User feedback incorporation
- [ ] Analytics review
- [ ] Cost optimization
- [ ] Documentation updates

---

## APPENDIX A: FIRESTORE SECURITY RULES

**File**: `firestore.rules`

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // Helper functions
    function isAuthenticated() {
      return request.auth != null;
    }
    
    function isAdmin() {
      return isAuthenticated() && 
             get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
    
    // Beta Applications Collection
    match /beta_applications/{applicationId} {
      // Anyone can submit a beta application (public form)
      allow create: if true;
      
      // Only authenticated users (team members) can read
      allow read: if isAuthenticated();
      
      // Only admins can update or delete
      allow update, delete: if isAdmin();
    }
    
    // Contact Submissions Collection
    match /contact_submissions/{submissionId} {
      // Anyone can submit a contact form (public form)
      allow create: if true;
      
      // Only authenticated users (team members) can read
      allow read: if isAuthenticated();
      
      // Only admins can update or delete
      allow update, delete: if isAdmin();
    }
    
    // Users Collection
    match /users/{userId} {
      // Users can read their own profile
      allow read: if isAuthenticated() && request.auth.uid == userId;
      
      // Users can update their own profile
      allow update: if isAuthenticated() && request.auth.uid == userId;
      
      // Only admins can create new users or delete users
      allow create, delete: if isAdmin();
    }
  }
}
```

**Deployment**:
```bash
firebase deploy --only firestore:rules
```

---

## APPENDIX B: CLOUD FUNCTIONS

### Function 1: Beta Application Notification

**File**: `functions/src/notifyBetaApplication.ts`

```typescript
import * as functions from 'firebase-functions';
import * as sgMail from '@sendgrid/mail';
import { getFirestore } from 'firebase-admin/firestore';

sgMail.setApiKey(functions.config().sendgrid.api_key);

export const notifyBetaApplication = functions.firestore
  .document('beta_applications/{applicationId}')
  .onCreate(async (snap, context) => {
    const application = snap.data();
    const applicationId = context.params.applicationId;

    try {
      // Send email to team
      await sgMail.send({
        to: 'team@clearforgetech.com',
        from: 'notifications@clearforgetech.com',
        templateId: 'd-xxxxxxxxxxxxx', // SendGrid template ID
        dynamicTemplateData: {
          company_name: application.company_name,
          contact_name: application.contact_name,
          email: application.email,
          industry: application.industry,
          phone: application.phone || 'Not provided',
          website: application.website || 'Not provided',
          goals: application.goals,
          interests: application.interests?.join(', ') || 'Not specified',
          referred_by: application.referred_by || 'Direct',
          application_id: applicationId,
          application_url: `https://console.firebase.google.com/project/xynergy-dev-1757909467/firestore/data/beta_applications/${applicationId}`,
        },
      });

      // Update document to mark notification as sent
      await snap.ref.update({
        notificationSent: true,
        notificationTimestamp: new Date(),
      });

      console.log(`Beta application notification sent for ${applicationId}`);
    } catch (error) {
      console.error('Error sending beta application notification:', error);
      
      // Update document to mark notification as failed
      await snap.ref.update({
        notificationSent: false,
        notificationError: error.message,
      });
      
      throw error;
    }
  });
```

### Function 2: Contact Form Notification

**File**: `functions/src/notifyContactSubmission.ts`

```typescript
import * as functions from 'firebase-functions';
import * as sgMail from '@sendgrid/mail';

sgMail.setApiKey(functions.config().sendgrid.api_key);

export const notifyContactSubmission = functions.firestore
  .document('contact_submissions/{submissionId}')
  .onCreate(async (snap, context) => {
    const submission = snap.data();
    const submissionId = context.params.submissionId;

    try {
      // Send email to team
      await sgMail.send({
        to: 'team@clearforgetech.com',
        from: 'notifications@clearforgetech.com',
        templateId: 'd-yyyyyyyyyyyyy', // SendGrid template ID
        dynamicTemplateData: {
          name: submission.name,
          email: submission.email,
          message: submission.message,
          phone: submission.phone || 'Not provided',
          company: submission.company || 'Not provided',
          submission_id: submissionId,
          submission_url: `https://console.firebase.google.com/project/xynergy-dev-1757909467/firestore/data/contact_submissions/${submissionId}`,
        },
      });

      // Send confirmation email to user
      await sgMail.send({
        to: submission.email,
        from: 'hello@clearforgetech.com',
        templateId: 'd-zzzzzzzzzzzzz', // SendGrid confirmation template ID
        dynamicTemplateData: {
          name: submission.name,
        },
      });

      // Update document to mark notifications as sent
      await snap.ref.update({
        notificationSent: true,
        notificationTimestamp: new Date(),
      });

      console.log(`Contact form notification sent for ${submissionId}`);
    } catch (error) {
      console.error('Error sending contact form notification:', error);
      
      await snap.ref.update({
        notificationSent: false,
        notificationError: error.message,
      });
      
      throw error;
    }
  });
```

**Deployment**:
```bash
cd functions
npm install
npm run deploy
```

---

## APPENDIX C: SENDGRID EMAIL TEMPLATES

### Template 1: Beta Application Notification (Team)

**Template ID**: `d-xxxxxxxxxxxxx`

**Subject**: New Beta Application: {{company_name}}

**HTML Content**:
```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #0066cc; color: white; padding: 20px; text-align: center; }
    .content { background: #f9f9f9; padding: 20px; margin-top: 20px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #0066cc; }
    .button { display: inline-block; background: #0066cc; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; margin-top: 20px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🎉 New Beta Application Received!</h1>
    </div>
    
    <div class="content">
      <div class="field">
        <span class="label">Company:</span> {{company_name}}
      </div>
      
      <div class="field">
        <span class="label">Contact:</span> {{contact_name}}
      </div>
      
      <div class="field">
        <span class="label">Email:</span> <a href="mailto:{{email}}">{{email}}</a>
      </div>
      
      <div class="field">
        <span class="label">Phone:</span> {{phone}}
      </div>
      
      <div class="field">
        <span class="label">Website:</span> {{website}}
      </div>
      
      <div class="field">
        <span class="label">Industry:</span> {{industry}}
      </div>
      
      <div class="field">
        <span class="label">Interests:</span> {{interests}}
      </div>
      
      <div class="field">
        <span class="label">Referred By:</span> {{referred_by}}
      </div>
      
      <div class="field">
        <span class="label">Goals:</span><br>
        <p style="background: white; padding: 15px; border-left: 3px solid #0066cc;">
          {{goals}}
        </p>
      </div>
      
      <a href="{{application_url}}" class="button">View in Firebase Console</a>
    </div>
  </div>
</body>
</html>
```

### Template 2: Contact Form Notification (Team)

**Template ID**: `d-yyyyyyyyyyyyy`

**Subject**: New Contact Form: {{name}} - {{company}}

**HTML Content**:
```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #28a745; color: white; padding: 20px; text-align: center; }
    .content { background: #f9f9f9; padding: 20px; margin-top: 20px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #28a745; }
    .button { display: inline-block; background: #28a745; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; margin-top: 20px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>📧 New Contact Form Submission</h1>
    </div>
    
    <div class="content">
      <div class="field">
        <span class="label">Name:</span> {{name}}
      </div>
      
      <div class="field">
        <span class="label">Email:</span> <a href="mailto:{{email}}">{{email}}</a>
      </div>
      
      <div class="field">
        <span class="label">Phone:</span> {{phone}}
      </div>
      
      <div class="field">
        <span class="label">Company:</span> {{company}}
      </div>
      
      <div class="field">
        <span class="label">Message:</span><br>
        <p style="background: white; padding: 15px; border-left: 3px solid #28a745;">
          {{message}}
        </p>
      </div>
      
      <a href="{{submission_url}}" class="button">View in Firebase Console</a>
      <a href="mailto:{{email}}?subject=Re: Your message to ClearForge" class="button" style="background: #6c757d; margin-left: 10px;">Reply to {{name}}</a>
    </div>
  </div>
</body>
</html>
```

### Template 3: Contact Confirmation (User)

**Template ID**: `d-zzzzzzzzzzzzz`

**Subject**: Thanks for reaching out to ClearForge!

**HTML Content**:
```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #0066cc; color: white; padding: 20px; text-align: center; }
    .content { padding: 20px; }
    .signature { margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Thanks for reaching out!</h1>
    </div>
    
    <div class="content">
      <p>Hi {{name}},</p>
      
      <p>Thank you for contacting ClearForge Technologies. We've received your message and someone from our team will get back to you within 1-2 business days.</p>
      
      <p>In the meantime, feel free to explore:</p>
      <ul>
        <li><a href="https://clearforgetech.com/about">Learn more about ClearForge</a></li>
        <li><a href="https://clearforgetech.com/blog">Read our latest insights</a></li>
        <li><a href="https://clearforgetech.com/beta">Join our beta program</a></li>
      </ul>
      
      <div class="signature">
        <p>Best regards,<br>
        <strong>The ClearForge Team</strong></p>
        
        <p style="font-size: 12px; color: #666;">
          ClearForge Technologies<br>
          Forging clear paths through artificial complexity<br>
          <a href="https://clearforgetech.com">clearforgetech.com</a>
        </p>
      </div>
    </div>
  </div>
</body>
</html>
```

---

## APPENDIX D: TERRAFORM CONFIGURATION EXAMPLE

**File**: `platform/terraform/modules/cloud-run-service/main.tf`

```hcl
resource "google_cloud_run_service" "service" {
  name     = var.service_name
  location = var.region
  project  = var.project_id

  template {
    spec {
      service_account_name = var.service_account_email
      container_concurrency = var.container_concurrency
      timeout_seconds      = var.timeout_seconds

      containers {
        image = var.image

        ports {
          container_port = var.container_port
        }

        resources {
          limits = {
            cpu    = var.cpu
            memory = var.memory
          }
        }

        dynamic "env" {
          for_each = var.environment_variables
          content {
            name  = env.key
            value = env.value
          }
        }

        dynamic "env" {
          for_each = var.secret_environment_variables
          content {
            name = env.key
            value_from {
              secret_key_ref {
                name = env.value.secret_name
                key  = env.value.secret_key
              }
            }
          }
        }
      }
    }

    metadata {
      annotations = {
        "autoscaling.knative.dev/minScale" = var.min_instances
        "autoscaling.knative.dev/maxScale" = var.max_instances
        "run.googleapis.com/client-name"   = "terraform"
      }

      labels = {
        environment = var.environment
        managed-by  = "terraform"
        service     = var.service_name
      }
    }
  }

  traffic {
    percent         = 100
    latest_revision = true
  }

  lifecycle {
    ignore_changes = [
      template[0].metadata[0].annotations["run.googleapis.com/client-name"],
      template[0].metadata[0].annotations["run.googleapis.com/client-version"],
    ]
  }
}

resource "google_cloud_run_service_iam_member" "public_access" {
  count = var.allow_unauthenticated ? 1 : 0

  service  = google_cloud_run_service.service.name
  location = google_cloud_run_service.service.location
  role     = "roles/run.invoker"
  member   = "allUsers"
}

output "service_url" {
  value = google_cloud_run_service.service.status[0].url
}
```

**File**: `platform/terraform/environments/production/website.tf`

```hcl
module "clearforge_website" {
  source = "../../modules/cloud-run-service"

  project_id            = var.project_id
  region                = var.region
  service_name          = "clearforge-website"
  image                 = "${var.artifact_registry}/clearforge-website:latest"
  service_account_email = var.service_account_email

  container_port        = 8080
  cpu                   = "1000m"
  memory                = "512Mi"
  min_instances         = 0
  max_instances         = 10
  timeout_seconds       = 60
  container_concurrency = 80
  allow_unauthenticated = true

  environment_variables = {
    NODE_ENV                        = "production"
    NEXT_PUBLIC_GATEWAY_URL         = module.intelligence_gateway.service_url
    NEXT_PUBLIC_FIREBASE_PROJECT_ID = var.firebase_project_id
    NEXT_PUBLIC_GA_MEASUREMENT_ID   = var.ga_measurement_id
    NEXT_PUBLIC_ENABLE_BETA_FORM    = "true"
    NEXT_PUBLIC_ENABLE_CONTACT_FORM = "true"
    NEXT_PUBLIC_ENABLE_ASO_DISPLAY  = "true"
  }

  secret_environment_variables = {}

  environment = "production"
}

# Custom domain mapping
resource "google_cloud_run_domain_mapping" "website_domain" {
  location = var.region
  name     = "www.clearforgetech.com"

  metadata {
    namespace = var.project_id
  }

  spec {
    route_name = module.clearforge_website.service_name
  }
}

output "website_url" {
  value = module.clearforge_website.service_url
}
```

---

## APPENDIX E: MONITORING QUERIES

### Cloud Logging Queries

**All Beta Applications**:
```
resource.type="cloud_run_revision"
resource.labels.service_name="xynergyos-intelligence-gateway"
jsonPayload.message=~"Beta application"
severity="INFO"
```

**Failed Beta Applications**:
```
resource.type="cloud_run_revision"
resource.labels.service_name="xynergyos-intelligence-gateway"
jsonPayload.message=~"Beta application.*failed"
severity="ERROR"
```

**Rate Limiting Events**:
```
resource.type="cloud_run_revision"
jsonPayload.statusCode="429"
httpRequest.requestUrl=~"/api/public/(beta|contact)"
```

**All Website Errors**:
```
resource.type="cloud_run_revision"
resource.labels.service_name="clearforge-website"
severity>="ERROR"
```

### Cloud Monitoring Metrics

**Request Count by Status**:
```
fetch cloud_run_revision
| metric 'run.googleapis.com/request_count'
| filter resource.service_name == 'clearforge-website'
| group_by [response_code_class], 1m, [value_request_count_aggregate: aggregate(value.request_count)]
```

**P95 Response Latency**:
```
fetch cloud_run_revision
| metric 'run.googleapis.com/request_latencies'
| filter resource.service_name == 'clearforge-website'
| align delta(1m)
| every 1m
| group_by [], [value_request_latencies_percentile: percentile(value.request_latencies, 95)]
```

**Instance Count**:
```
fetch cloud_run_revision
| metric 'run.googleapis.com/container/instance_count'
| filter resource.service_name == 'clearforge-website'
| group_by 1m, [value_instance_count_mean: mean(value.instance_count)]
```

---

## APPENDIX F: TROUBLESHOOTING GUIDE

### Common Issues and Solutions

#### Issue 1: Forms Submitting but No Firestore Document

**Symptoms**: 
- Form submission returns 201 success
- No document appears in Firestore

**Diagnosis**:
```bash
# Check Gateway logs
gcloud logging read "resource.type=cloud_run_revision AND resource.labels.service_name=xynergyos-intelligence-gateway" --limit 50 --format json

# Check Firestore permissions
gcloud projects get-iam-policy xynergy-dev-1757909467 --flatten="bindings[].members" --filter="bindings.members:xynergy-platform-sa@*"
```

**Solution**:
1. Verify service account has Firestore write permissions
2. Check Firestore security rules allow creation
3. Verify collection name matches exactly (snake_case)

#### Issue 2: Rate Limiting Not Working

**Symptoms**:
- Can submit forms unlimited times
- No 429 errors

**Diagnosis**:
```bash
# Check rate limiter logs
gcloud logging read "resource.labels.service_name=xynergyos-intelligence-gateway AND jsonPayload.rateLimit" --limit 20
```

**Solution**:
1. Verify rate limiter middleware is registered
2. Check IP extraction logic (behind Cloud Load Balancer?)
3. Verify Redis connection if using Redis-based rate limiting

#### Issue 3: Email Notifications Not Sending

**Symptoms**:
- Forms submitted successfully
- No team email received

**Diagnosis**:
```bash
# Check Cloud Function logs
gcloud functions logs read notifyBetaApplication --limit 20

# Check SendGrid API status
curl -X GET https://api.sendgrid.com/v3/scopes \
  -H "Authorization: Bearer YOUR_API_KEY"
```

**Solution**:
1. Verify Cloud Function deployed successfully
2. Check SendGrid API key is valid
3. Verify template IDs are correct
4. Check SendGrid dashboard for delivery status
5. Verify sender email is verified in SendGrid

#### Issue 4: CORS Errors in Browser

**Symptoms**:
- Form submission fails with CORS error in console
- "Access-Control-Allow-Origin" header missing

**Diagnosis**:
```javascript
// Browser console
fetch('https://xynergyos-intelligence-gateway-835612502919.us-central1.run.app/api/public/beta', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ test: 'data' })
})
.then(r => console.log(r))
.catch(e => console.error(e));
```

**Solution**:
1. Verify CORS middleware configured in Gateway
2. Check allowed origins include website domain
3. Verify preflight OPTIONS requests handled
4. Check browser is not caching CORS errors (hard refresh)

#### Issue 5: High Latency / Slow Response

**Symptoms**:
- Form submissions take >2 seconds
- Users see loading state for too long

**Diagnosis**:
```bash
# Check trace data
gcloud alpha monitoring dashboards describe --format=json | jq '.charts[] | select(.title=="Request Latencies")'

# Manual timing test
time curl -X POST https://clearforge-website-835612502919.us-central1.run.app/api/beta \
  -H "Content-Type: application/json" \
  -d '{"company_name":"Test","contact_name":"User","email":"test@example.com","industry":"Tech","goals":"Testing performance"}'
```

**Solution**:
1. Check if Gateway is cold starting (min_instances=0)
2. Verify database queries are indexed
3. Check external API latency (ASO Engine)
4. Enable Redis caching for repeated queries
5. Consider increasing min_instances to 1

---

## APPENDIX G: PERFORMANCE OPTIMIZATION CHECKLIST

### After Launch Optimizations

**Week 1 Post-Launch**:
- [ ] Review actual vs expected request patterns
- [ ] Identify slowest endpoints (Cloud Trace)
- [ ] Check cache hit rates
- [ ] Review error patterns
- [ ] Adjust resource allocations if needed

**Week 2 Post-Launch**:
- [ ] Implement caching for ASO opportunities
- [ ] Optimize database queries (add indexes if needed)
- [ ] Review and optimize container size
- [ ] Consider CDN for static assets
- [ ] Fine-tune autoscaling parameters

**Month 1 Post-Launch**:
- [ ] Analyze cost per request
- [ ] Optimize cold start time
- [ ] Review and remove unused code
- [ ] Implement lazy loading for heavy components
- [ ] Consider image optimization (WebP, compression)

### Performance Targets

**Response Times**:
- P50: < 200ms (target)
- P95: < 500ms (target)
- P99: < 1000ms (acceptable)

**Resource Utilization**:
- CPU: < 60% average
- Memory: < 70% average
- Instance count: < 5 during normal traffic

**User Experience**:
- Lighthouse Performance: > 90
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1

---

## CONCLUSION

This Technical Requirements Document provides a complete specification for deploying the ClearForge marketing website to Google Cloud Run with full integration to Xynergy backend services via the Intelligence Gateway.

### Key Deliverables Summary

**Infrastructure** (2 new Cloud Run services):
1. ✅ Intelligence Gateway - API routing and authentication
2. ✅ ClearForge Website - Next.js marketing site

**Data Layer**:
- ✅ 2 Firestore collections (beta_applications, contact_submissions)
- ✅ Security rules configured
- ✅ Indexes created

**Integrations**:
- ✅ 2 Cloud Functions for email notifications
- ✅ SendGrid integration with 3 email templates
- ✅ ASO Engine integration for opportunities display

**Monitoring**:
- ✅ Cloud Logging queries defined
- ✅ Cloud Monitoring dashboards created
- ✅ Alert policies configured

### Critical Success Factors

1. **Build Intelligence Gateway First** - Website depends on it
2. **Test Incrementally** - Each component should work independently
3. **Monitor Proactively** - Set up monitoring before launch
4. **Document Everything** - Keep documentation updated as you build
5. **Team Training** - Ensure team can access Firestore and respond to submissions

### Final Pre-Launch Checklist

Before going live, ensure:
- [ ] All services deployed and healthy
- [ ] Domain DNS configured correctly
- [ ] SSL certificates active
- [ ] Forms tested end-to-end
- [ ] Email notifications working
- [ ] Monitoring dashboards visible
- [ ] Alert policies active
- [ ] Team trained on checking submissions
- [ ] Rollback plan documented and tested
- [ ] Post-launch support schedule confirmed

### Support and Resources

**Documentation**:
- This TRD (reference for all implementation details)
- Integration Design Checklist (for future features)
- Intelligence Gateway Implementation Requirements
- ClearForge Master Knowledge Base

**Team Contacts**:
- Technical Lead: [Name]
- DevOps: [Name]
- Frontend: [Name]
- On-Call: [Schedule]

**External Resources**:
- GCP Console: https://console.cloud.google.com/run?project=xynergy-dev-1757909467
- Firebase Console: https://console.firebase.google.com/project/xynergy-dev-1757909467
- SendGrid Dashboard: https://app.sendgrid.com/
- Domain Registrar: [Provider]

---

**Document Version**: 2.0  
**Last Updated**: October 10, 2025  
**Next Review**: After production deployment  
**Maintained By**: Shawn Sloan / ClearForge Technologies

**End of Document**