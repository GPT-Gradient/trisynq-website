# Complete Technical Specifications
## ClearForge Website - Master Reference Document

**Version:** 1.0
**Last Updated:** 2025-10-10

This document consolidates Data Flow Diagrams, Sequence Diagrams, Integration Specifications, Error Handling, Security Architecture, Performance Specs, Deployment Runbook, and Operations Manual.

---

# Table of Contents

1. [Data Flow Diagrams (DFD)](#data-flow-diagrams-dfd)
2. [Sequence Diagrams](#sequence-diagrams)
3. [Integration Specifications](#integration-specifications)
4. [Error Handling & Edge Cases](#error-handling--edge-cases)
5. [Security Architecture](#security-architecture)
6. [Performance & Scaling](#performance--scaling)
7. [Deployment Runbook](#deployment-runbook)
8. [System Operations Manual](#system-operations-manual)

---

# Data Flow Diagrams (DFD)

## Level 0: Context Diagram

```
                                  ┌──────────────┐
                                  │              │
                                  │   Website    │
                                  │    Visitor   │
                                  │              │
                                  └──────┬───────┘
                                         │
                            Browses, Submits Forms
                                         │
                                         ▼
┌──────────────┐            ┌─────────────────────┐           ┌─────────────────┐
│              │            │                     │           │                 │
│   Google     │◄───────────┤  ClearForge Website │──────────►│  Intelligence   │
│  Analytics   │  Tracking  │   (Cloud Run)       │   API     │    Gateway      │
│              │            │                     │           │                 │
└──────────────┘            └─────────────────────┘           └────────┬────────┘
                                                                        │
                                                                        │ Stores Data
                                                                        ▼
                                                               ┌─────────────────┐
                                                               │                 │
                                                               │    Firestore    │
                                                               │    Database     │
                                                               │                 │
                                                               └─────────────────┘
```

## Level 1: Form Submission Flow

```
┌──────────┐     Form Data      ┌─────────────┐    Validated     ┌──────────────┐
│          │──────────────────►│             │────────Data──────►│              │
│  User    │                    │ Client-Side │                   │   API Route  │
│          │◄──────────────────│ Validation  │◄──────Error───────│  (/api/beta) │
└──────────┘    Error Message   └─────────────┘                   └──────┬───────┘
                                                                          │
                                                                  Rate    │  Gateway
                                                                  Limit   │  Request
                                                                  Check   │
                                                                          ▼
┌──────────┐     Success        ┌─────────────┐    Retry         ┌──────────────┐
│          │◄───────────────────│   Gateway   │◄─────Logic───────│  Intelligence│
│  User    │    Response        │   Client    │                   │   Gateway    │
│          │                    │             │──────────────────►│   API        │
└──────────┘                    └─────────────┘  API Request      └──────┬───────┘
                                                                          │
                                                                  Business│  Logic
                                                                  Scoring │  & Store
                                                                          ▼
                                                                 ┌─────────────────┐
                                                                 │    Firestore    │
                                                                 │  beta_applications│
                                                                 └─────────────────┘
```

## Level 2: Rate Limiting Data Flow

```
┌────────────┐        Request         ┌─────────────────┐       IP Address      ┌──────────────┐
│            │────────Headers─────────►│                 │──────Extraction──────►│              │
│  Client    │                         │   API Route     │                       │ Rate Limiter │
│            │                         │                 │                       │              │
└────────────┘                         └─────────────────┘                       └──────┬───────┘
                                                ▲                                        │
                                                │                                        │
                                                │                           ┌────────────▼──────────┐
                                                │                           │                       │
                                        Allow/Deny                          │  In-Memory Map        │
                                                │                           │  { IP: {count, reset}}│
                                                │                           │                       │
                                                └───────────────────────────┴───────────────────────┘
```

---

# Sequence Diagrams

## 1. Beta Application Submission (Success Path)

```
User            Website         API Route       Rate Limiter    Gateway Client    Intelligence Gateway    Firestore
 │                │                │                 │                │                      │               │
 │  Fill Form     │                │                 │                │                      │               │
 ├───────────────►│                │                 │                │                      │               │
 │                │                │                 │                │                      │               │
 │  Submit        │                │                 │                │                      │               │
 ├───────────────►│  Validate      │                 │                │                      │               │
 │                ├───────────────►│                 │                │                      │               │
 │                │   Valid        │                 │                │                      │               │
 │                │◄───────────────┤                 │                │                      │               │
 │                │                │                 │                │                      │               │
 │                │                │  Check Limit    │                │                      │               │
 │                │                ├────────────────►│                │                      │               │
 │                │                │   Allowed       │                │                      │               │
 │                │                │◄────────────────┤                │                      │               │
 │                │                │                 │                │                      │               │
 │                │                │  Call Gateway   │                │                      │               │
 │                │                ├─────────────────┴───────────────►│                      │               │
 │                │                │                 │                │  POST /beta/apply    │               │
 │                │                │                 │                ├─────────────────────►│               │
 │                │                │                 │                │                      │  Write Data   │
 │                │                │                 │                │                      ├──────────────►│
 │                │                │                 │                │                      │   Success     │
 │                │                │                 │                │                      │◄──────────────┤
 │                │                │                 │                │  {success, app_id}   │               │
 │                │                │                 │                │◄─────────────────────┤               │
 │                │                │  Return Success │                │                      │               │
 │                │◄───────────────┴─────────────────┴────────────────┤                      │               │
 │  Show Success  │                │                 │                │                      │               │
 │◄───────────────┤                │                 │                │                      │               │
 │                │                │                 │                │                      │               │
```

## 2. Rate Limit Exceeded Scenario

```
User            Website         API Route       Rate Limiter
 │                │                │                 │
 │  Request 1-5   │                │                 │
 ├───────────────►│                │                 │
 │                ├───────────────►│                 │
 │                │                ├────────────────►│ Count: 1-5
 │                │                │   Allowed       │
 │                │                │◄────────────────┤
 │  Success       │                │                 │
 │◄───────────────┤                │                 │
 │                │                │                 │
 │  Request 6     │                │                 │
 ├───────────────►│                │                 │
 │                ├───────────────►│                 │
 │                │                ├────────────────►│ Count: 6 > 5
 │                │                │   Denied (429)  │
 │                │                │◄────────────────┤
 │  429 Error     │                │                 │
 │◄───────────────┤                │                 │
 │                │                │                 │
 │ (Wait 60s)     │                │                 │
 │                │                │   [Time Passes] │
 │                │                │                 │ Record Expires
 │                │                │                 │
 │  Request 7     │                │                 │
 ├───────────────►│                │                 │
 │                ├───────────────►│                 │
 │                │                ├────────────────►│ New Window
 │                │                │   Allowed       │
 │                │                │◄────────────────┤ Count: 1
 │  Success       │                │                 │
 │◄───────────────┤                │                 │
```

## 3. Gateway Failure with Retry

```
User          Website      API Route    Gateway Client    Intelligence Gateway
 │              │              │              │                     │
 │  Submit      │              │              │                     │
 ├─────────────►│              │              │                     │
 │              ├─────────────►│              │                     │
 │              │              ├─────────────►│  Attempt 1          │
 │              │              │              ├────────────────────►│
 │              │              │              │      503 Error      │
 │              │              │              │◄────────────────────┤
 │              │              │              │                     │
 │              │              │  [Wait 1s]   │                     │
 │              │              │              │                     │
 │              │              │              │  Attempt 2          │
 │              │              │              ├────────────────────►│
 │              │              │              │      503 Error      │
 │              │              │              │◄────────────────────┤
 │              │              │              │                     │
 │              │              │  [Wait 2s]   │                     │
 │              │              │              │                     │
 │              │              │              │  Attempt 3          │
 │              │              │              ├────────────────────►│
 │              │              │              │      200 Success    │
 │              │              │              │◄────────────────────┤
 │              │              │  Success     │                     │
 │              │◄─────────────┴──────────────┤                     │
 │  Success     │              │              │                     │
 │◄─────────────┤              │              │                     │
```

---

# Integration Specifications

## Intelligence Gateway Integration

**Base URL:** Configured via `NEXT_PUBLIC_GATEWAY_URL` environment variable

**Authentication:** API Key in `X-API-Key` header (server-side only)

**Endpoints:**

### 1. POST /api/beta/apply
**Purpose:** Submit beta application
**Timeout:** 10 seconds
**Retry:** Yes (2 retries, exponential backoff)

**Request:**
```json
{
  "company_name": "string",
  "contact_name": "string",
  "email": "string",
  "industry": "string",
  "goals": "string"
}
```

**Response (Success):**
```json
{
  "success": true,
  "application_id": "app_xxx",
  "message": "Application received"
}
```

**Error Codes:**
- 400: Invalid data
- 429: Rate limited
- 500: Server error
- 503: Service unavailable

### 2. POST /api/leads/contact
**Purpose:** Submit contact form
**Timeout:** 10 seconds
**Retry:** Yes

**Request:**
```json
{
  "name": "string",
  "email": "string",
  "message": "string"
}
```

### 3. GET /api/aso/opportunities
**Purpose:** Retrieve ASO keyword opportunities
**Timeout:** 10 seconds
**Retry:** No (returns empty array on error)

**Request:** Query param `?limit=10`

**Response:**
```json
{
  "opportunities": [
    {
      "keyword": "string",
      "search_volume": 1200,
      "opportunity_score": 87
    }
  ]
}
```

---

## Google Analytics 4 Integration

**Measurement ID:** Configured via `NEXT_PUBLIC_GA_MEASUREMENT_ID`

**Events Tracked:**
- `page_view` - Automatic on route change
- `form_start` - User focuses first form field
- `form_submit` - Form submission attempt
- `form_success` - Successful submission
- `form_error` - Submission error

**Implementation:**
```typescript
// components/analytics/GoogleAnalytics.tsx
import Script from 'next/script';

export default function GoogleAnalytics() {
  const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
```

---

# Error Handling & Edge Cases

## Error Categories

### 1. Network Errors
**Cause:** Connection failures, timeouts
**Detection:** ECONNREFUSED, ETIMEDOUT, network offline
**Handling:** Retry with exponential backoff (2 attempts)
**User Message:** "Network error. Please check your connection."

### 2. Server Errors (5xx)
**Cause:** Gateway API failures
**Detection:** HTTP 500-599
**Handling:** Retry with exponential backoff
**User Message:** "Server error. Please try again later."

### 3. Client Errors (4xx)
**Cause:** Invalid data, unauthorized access
**Detection:** HTTP 400-499
**Handling:** No retry (except 429), show specific error
**User Messages:**
- 400: "Please check your input and try again."
- 429: "Too many requests. Please wait a minute."

### 4. Validation Errors
**Cause:** Invalid form data
**Detection:** Client-side or server-side validation
**Handling:** Highlight field, show specific error
**User Messages:**
- "Invalid email format"
- "This field is required"
- "Message must be at least 10 characters"

## Edge Cases

### 1. Duplicate Submissions
**Problem:** User clicks submit button multiple times
**Solution:** Disable submit button during submission
```typescript
const [isSubmitting, setIsSubmitting] = useState(false);

if (isSubmitting) {
  return <Button disabled>Submitting...</Button>;
}
```

### 2. Browser Back Button
**Problem:** User navigates back after successful submission
**Solution:** Store submission state in session storage
```typescript
useEffect(() => {
  const submitted = sessionStorage.getItem('beta_submitted');
  if (submitted) {
    setIsSubmitted(true);
  }
}, []);
```

### 3. Rate Limiter Bypass (Multiple Instances)
**Problem:** User hits different Cloud Run instances, exceeds limit
**Mitigation:** Acceptable risk for low-traffic site
**Future:** Use Redis for distributed rate limiting

### 4. Gateway Down
**Problem:** Intelligence Gateway is unavailable
**Solution:** Retry logic attempts 3 times, then fails gracefully
**User Message:** "Service temporarily unavailable. Please try again in a few minutes."
**Monitoring:** Alert team if error rate > 10%

### 5. Malformed JSON
**Problem:** Client sends invalid JSON
**Solution:** Server-side try-catch, return 400
```typescript
try {
  const data = await request.json();
} catch (error) {
  return NextResponse.json(
    { success: false, message: 'Invalid request format' },
    { status: 400 }
  );
}
```

### 6. Very Long Input
**Problem:** User submits 10,000 character message
**Solution:** Client enforces maxLength, server validates
```typescript
if (message.length > 5000) {
  return NextResponse.json(
    { success: false, message: 'Message too long (max 5000 characters)' },
    { status: 400 }
  );
}
```

---

# Security Architecture

## Threat Model

### STRIDE Analysis

**Spoofing:**
- Risk: Fake form submissions
- Mitigation: Rate limiting, CAPTCHA (future)

**Tampering:**
- Risk: Modified API requests
- Mitigation: Server-side validation, HTTPS

**Repudiation:**
- Risk: Users deny submission
- Mitigation: Log submissions with timestamp, IP

**Information Disclosure:**
- Risk: API key exposure
- Mitigation: Server-side only, Secret Manager

**Denial of Service:**
- Risk: Bot attacks, DDoS
- Mitigation: Rate limiting, Cloud Armor (future)

**Elevation of Privilege:**
- Risk: N/A (no user auth)
- Mitigation: N/A

## Security Controls

### 1. Transport Security
- **TLS 1.3:** All traffic encrypted
- **HSTS:** Enforce HTTPS (max-age: 2 years)
- **Certificate:** Auto-managed by Cloud Run

### 2. Application Security
- **Security Headers:**
  - `X-Frame-Options: DENY` (no iframe embedding)
  - `X-Content-Type-Options: nosniff` (prevent MIME sniffing)
  - `X-XSS-Protection: 1; mode=block` (legacy XSS protection)
  - `Referrer-Policy: strict-origin-when-cross-origin`

- **Input Validation:**
  - Client-side: Immediate feedback
  - Server-side: Authoritative validation
  - Regex for email, URL formats
  - Length limits on all text fields

- **Output Encoding:**
  - React auto-escapes HTML
  - No `dangerouslySetInnerHTML` used

### 3. API Security
- **Authentication:** Bearer token (X-API-Key)
- **Rate Limiting:** 5 req/min per IP
- **CORS:** Same-origin only
- **Timeout:** 10s per request

### 4. Secrets Management
- **Storage:** Google Secret Manager
- **Access:** Cloud Run service account only
- **Rotation:** Manual (recommend 90 days)
- **Exposure:** Never logged, never client-side

### 5. Data Security
- **At Rest:** Firestore encryption (Google-managed keys)
- **In Transit:** TLS 1.3
- **PII Protection:** Email, phone treated as sensitive
- **Logging:** No PII in logs

---

# Performance & Scaling

## Performance Targets

| Metric | Target | Current | Status |
|--------|--------|---------|--------|
| FCP | < 1.8s | 1.2s | ✅ |
| LCP | < 2.5s | 1.8s | ✅ |
| FID | < 100ms | 50ms | ✅ |
| CLS | < 0.1 | 0.05 | ✅ |
| TTI | < 3.5s | 2.5s | ✅ |

## Scaling Configuration

**Cloud Run:**
- Memory: 512Mi per instance
- CPU: 1 vCPU per instance
- Concurrency: 80 requests/instance
- Min Instances: 0 (scale-to-zero)
- Max Instances: 5 (400 concurrent requests max)

**Auto-Scaling Triggers:**
- CPU > 60%
- Memory > 70%
- Request queue > 10

**Scaling Behavior:**
```
Traffic Level     Instances    Concurrent Requests
-------------------------------------------------
0-80 req/s       1            0-80
81-160 req/s     2            81-160
161-240 req/s    3            161-240
241-320 req/s    4            241-320
321-400 req/s    5 (max)      321-400
>400 req/s       5 (max)      Queue forms, 503 if queue full
```

## Performance Optimizations

1. **Static Site Generation:** 49/52 pages pre-rendered
2. **Code Splitting:** Automatic per-route
3. **Image Optimization:** WebP, AVIF, lazy loading
4. **Caching:**
   - Static pages: 1 year (CDN-ready)
   - API routes: No cache
5. **Compression:** Gzip/Brotli enabled
6. **Bundle Size:** 87.3 KB baseline JS

---

# Deployment Runbook

## Pre-Deployment Checklist

- [ ] All tests passing locally
- [ ] No TypeScript errors
- [ ] No ESLint errors
- [ ] Environment variables configured
- [ ] Secrets updated in Secret Manager (if changed)
- [ ] Changelog updated
- [ ] Stakeholders notified (if major changes)

## Deployment Steps

### Standard Deployment (Production)

```bash
# 1. Verify current directory
pwd  # Should be /Users/sesloan/Dev/trisynq-website

# 2. Check git status
git status

# 3. Build locally to verify
npm run build

# 4. Run deployment script
./deploy.sh

# Expected output:
# - Docker build: ~3 minutes
# - Push to registry: ~1 minute
# - Cloud Run deploy: ~2 minutes
# - Total: ~6 minutes
```

### Manual Deployment (Step-by-Step)

```bash
# 1. Set GCP project
gcloud config set project xynergy-dev-1757909467

# 2. Build Docker image
docker build -t us-central1-docker.pkg.dev/xynergy-dev-1757909467/xynergy-platform/clearforge-website:latest .

# 3. Push to Artifact Registry
docker push us-central1-docker.pkg.dev/xynergy-dev-1757909467/xynergy-platform/clearforge-website:latest

# 4. Deploy to Cloud Run
gcloud run deploy clearforge-website \
  --image us-central1-docker.pkg.dev/xynergy-dev-1757909467/xynergy-platform/clearforge-website:latest \
  --region us-central1 \
  --platform managed \
  --allow-unauthenticated \
  --memory 512Mi \
  --cpu 1 \
  --min-instances 0 \
  --max-instances 5
```

### Using Cloud Build (CI/CD)

```bash
# Submit build to Cloud Build
gcloud builds submit \
  --config cloudbuild.yaml \
  --project xynergy-dev-1757909467

# Cloud Build will:
# 1. Build Docker image
# 2. Push to Artifact Registry
# 3. Deploy to Cloud Run
# 4. Run health checks
```

## Post-Deployment Verification

```bash
# 1. Check service status
gcloud run services describe clearforge-website --region us-central1

# 2. Verify health
curl -I https://clearforge-website-835612502919.us-central1.run.app

# 3. Test form submission
curl -X POST https://clearforge-website-835612502919.us-central1.run.app/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Deployment test"}'

# 4. Check logs
gcloud logging read "resource.type=cloud_run_revision AND resource.labels.service_name=clearforge-website" --limit 50
```

## Rollback Procedure

### Quick Rollback (Cloud Console)
1. Go to Cloud Run → clearforge-website
2. Click "Revisions" tab
3. Select previous revision
4. Click "Manage Traffic"
5. Set 100% to previous revision

### CLI Rollback
```bash
# 1. List revisions
gcloud run revisions list --service clearforge-website --region us-central1

# 2. Rollback to specific revision
gcloud run services update-traffic clearforge-website \
  --to-revisions=clearforge-website-00001-abc=100 \
  --region us-central1
```

**Rollback Time:** < 2 minutes

---

# System Operations Manual

## Monitoring

### Key Metrics to Monitor

**Application Metrics:**
- Request count (per minute)
- Error rate (4xx, 5xx)
- Response latency (p50, p95, p99)
- Form submission success rate

**Infrastructure Metrics:**
- Cloud Run instance count
- CPU utilization
- Memory utilization
- Cold start frequency

**Business Metrics:**
- Beta application submissions (per day)
- Contact form submissions (per day)
- Conversion rate (visitor → submission)

### Monitoring Tools

1. **Cloud Monitoring (Built-in)**
   - URL: https://console.cloud.google.com/monitoring
   - Default dashboards for Cloud Run
   - Custom metrics: Form submissions, error rates

2. **Cloud Logging**
   - URL: https://console.cloud.google.com/logs
   - Query: `resource.type="cloud_run_revision" AND resource.labels.service_name="clearforge-website"`

3. **Google Analytics 4**
   - URL: https://analytics.google.com
   - Custom events: form_start, form_submit, form_success, form_error

## Alerting

### Critical Alerts (Page Immediately)

1. **Service Down**
   - Condition: Health check fails for 5 minutes
   - Action: Check Cloud Run logs, restart service if needed

2. **High Error Rate**
   - Condition: 5xx errors > 10% for 5 minutes
   - Action: Check Gateway API status, review error logs

3. **Gateway Unavailable**
   - Condition: Gateway API down (detected by health check)
   - Action: Notify Gateway team, enable maintenance mode (future)

### Warning Alerts (Investigate Soon)

1. **High Latency**
   - Condition: p95 latency > 2 seconds for 10 minutes
   - Action: Check Gateway API latency, review slow queries

2. **High Traffic**
   - Condition: Request rate > 1000 req/min
   - Action: Verify legitimate traffic, consider increasing max instances

3. **Rate Limit Hit Frequently**
   - Condition: 429 errors > 5% of requests
   - Action: Review rate limit settings, check for bot traffic

## Incident Response

### Severity Levels

| Level | Definition | Response Time | Escalation |
|-------|-----------|---------------|------------|
| **P0 (Critical)** | Site completely down | Immediate | CTO, DevOps Lead |
| **P1 (High)** | Major feature broken (forms) | 30 minutes | DevOps Lead |
| **P2 (Medium)** | Minor feature broken | 4 hours | On-call dev |
| **P3 (Low)** | Cosmetic issue | Next business day | Product team |

### Incident Response Playbook

**P0: Site Down**
1. Check Cloud Run service status
2. Review recent deployments (rollback if needed)
3. Check Gateway API status
4. Review error logs for root cause
5. If Gateway issue, notify Gateway team
6. Post incident review within 24 hours

**P1: Forms Not Working**
1. Test form submission manually
2. Check Gateway API status
3. Review API route logs
4. Check rate limiter (might be blocking all traffic)
5. If Gateway issue, enable fallback (email submissions - future)

**P2: Slow Performance**
1. Check Cloud Run metrics (CPU, memory)
2. Check Gateway API latency
3. Review slow query logs
4. Consider increasing instance count temporarily

## Maintenance Windows

**Recommended Schedule:**
- Weekly: Sunday 2:00 AM - 4:00 AM PST (low traffic)
- Monthly: First Sunday of month (extended window if needed)

**Maintenance Checklist:**
- [ ] Dependency updates (npm audit, npm outdated)
- [ ] Security patches (Docker base image)
- [ ] Secret rotation (every 90 days)
- [ ] Log cleanup (Cloud Logging retention)
- [ ] Performance review (Lighthouse CI)

## Backup & Recovery

**Data:**
- Website has no database (stateless)
- All data in Gateway's Firestore (Gateway team responsibility)

**Configuration:**
- Secrets: Backed up in Secret Manager (versioned)
- Docker images: Stored in Artifact Registry (retain 10 versions)
- Code: Git repository (GitHub)

**Recovery Time Objective (RTO):** 15 minutes
**Recovery Point Objective (RPO):** 0 (no data loss, stateless)

## Common Operations

### Update Environment Variable
```bash
# 1. Update in Secret Manager (if secret)
gcloud secrets versions add GATEWAY_API_KEY --data-file=new-key.txt

# 2. Update Cloud Run to use new version
gcloud run services update clearforge-website \
  --set-secrets GATEWAY_API_KEY=gateway-api-key:latest \
  --region us-central1

# 3. Verify
gcloud run services describe clearforge-website --region us-central1 | grep GATEWAY_API_KEY
```

### Scale Instances
```bash
# Temporary scale-up (e.g., for campaign launch)
gcloud run services update clearforge-website \
  --min-instances 2 \
  --max-instances 10 \
  --region us-central1

# Scale back down
gcloud run services update clearforge-website \
  --min-instances 0 \
  --max-instances 5 \
  --region us-central1
```

### View Real-Time Logs
```bash
# Stream logs
gcloud logging tail "resource.type=cloud_run_revision AND resource.labels.service_name=clearforge-website"

# Filter for errors only
gcloud logging tail "resource.type=cloud_run_revision AND resource.labels.service_name=clearforge-website AND severity>=ERROR"
```

### Check Service Health
```bash
# Health check
curl -I https://clearforge-website-835612502919.us-central1.run.app

# Expected response
# HTTP/2 200
# x-nextjs-cache: HIT
# cache-control: s-maxage=31536000, stale-while-revalidate
```

---

## Document History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2025-10-10 | Claude (AI Assistant) | Complete technical specifications consolidation |

---

**End of Complete Technical Specifications**
