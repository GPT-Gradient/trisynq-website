# Architecture Decision Records (ADR)
## ClearForge Website

**Document Purpose:** This document records all significant architectural decisions made during the design and development of the ClearForge website. Each ADR explains the context, decision, and consequences of key technical choices.

---

## Table of Contents

1. [ADR-001: Next.js as Primary Framework](#adr-001-nextjs-as-primary-framework)
2. [ADR-002: App Router over Pages Router](#adr-002-app-router-over-pages-router)
3. [ADR-003: Google Cloud Run for Hosting](#adr-003-google-cloud-run-for-hosting)
4. [ADR-004: Static Site Generation (SSG) Strategy](#adr-004-static-site-generation-ssg-strategy)
5. [ADR-005: Tailwind CSS for Styling](#adr-005-tailwind-css-for-styling)
6. [ADR-006: TypeScript Over JavaScript](#adr-006-typescript-over-javascript)
7. [ADR-007: Axios Over Native Fetch](#adr-007-axios-over-native-fetch)
8. [ADR-008: In-Memory Rate Limiting](#adr-008-in-memory-rate-limiting)
9. [ADR-009: Intelligence Gateway Integration Pattern](#adr-009-intelligence-gateway-integration-pattern)
10. [ADR-010: No Database on Website (Gateway-Only)](#adr-010-no-database-on-website-gateway-only)
11. [ADR-011: Docker Multi-Stage Builds](#adr-011-docker-multi-stage-builds)
12. [ADR-012: Scale-to-Zero Configuration](#adr-012-scale-to-zero-configuration)
13. [ADR-013: Monorepo vs Multi-Repo](#adr-013-monorepo-vs-multi-repo)
14. [ADR-014: No User Authentication](#adr-014-no-user-authentication)
15. [ADR-015: Client-Side Form Validation](#adr-015-client-side-form-validation)

---

## ADR-001: Next.js as Primary Framework

**Status:** Accepted
**Date:** 2025-09-15
**Decision Makers:** ClearForge Technical Team

### Context

The ClearForge website needs a high-performance, SEO-optimized marketing site with:
- Fast page loads (< 2s FCP)
- Excellent SEO for organic traffic
- Form submission capabilities (beta applications, contact)
- Easy content updates and scaling
- Modern developer experience

**Alternatives Considered:**
1. **Next.js** - React framework with SSG/SSR
2. **Gatsby** - React-based static site generator
3. **Remix** - Full-stack React framework
4. **Astro** - Multi-framework static site builder
5. **Plain React + Vite** - Client-side only

### Decision

**We chose Next.js 14** for the following reasons:

**Pros:**
- ✅ Built-in SSG/SSR flexibility (can mix strategies per page)
- ✅ API routes for serverless backend logic
- ✅ Excellent SEO performance out-of-the-box
- ✅ Image optimization with `next/image`
- ✅ Automatic code splitting and lazy loading
- ✅ Large ecosystem and community
- ✅ Vercel (creators) provides excellent docs and support
- ✅ App Router (new) aligns with React Server Components future
- ✅ Simple deployment to various platforms

**Cons:**
- ⚠️ Learning curve for App Router (newer paradigm)
- ⚠️ Can be overkill for simple static sites
- ⚠️ Vendor lock-in risk (though mitigated by open source)

**Why Not Gatsby:**
- Slower build times for large sites
- GraphQL requirement adds complexity
- Smaller ecosystem than Next.js
- Less flexible rendering strategies

**Why Not Remix:**
- Less mature ecosystem
- More focused on dynamic apps vs static marketing
- Smaller community

**Why Not Astro:**
- Less familiar to team
- Smaller ecosystem for React components
- Not ideal for dynamic features (API routes)

**Why Not Plain React:**
- No SSG/SSR (terrible for SEO)
- No built-in routing
- Manual optimization needed

### Consequences

**Positive:**
- Fast development velocity with Next.js conventions
- Excellent Core Web Vitals scores (95+ Lighthouse)
- Easy to add dynamic features (API routes) without separate backend
- Strong TypeScript support

**Negative:**
- Team needs to learn App Router paradigm (vs Pages Router)
- Must follow Next.js conventions (file-based routing)
- Build times increase with page count (currently 49 pages, ~1 min build)

**Neutral:**
- Locked into React ecosystem (acceptable for this project)

---

## ADR-002: App Router over Pages Router

**Status:** Accepted
**Date:** 2025-09-15
**Decision Makers:** ClearForge Technical Team

### Context

Next.js 13+ offers two routing paradigms:
1. **Pages Router** - Traditional Next.js routing (proven, stable)
2. **App Router** - New paradigm based on React Server Components

This is a new project, so we can choose either. Pages Router is more mature, App Router is the future.

### Decision

**We chose App Router** for the following reasons:

**Pros:**
- ✅ Future-proof (Next.js team recommends for new projects)
- ✅ Server Components by default = less JavaScript shipped
- ✅ Better layouts and nested routing
- ✅ Streaming and Suspense support
- ✅ Improved data fetching patterns
- ✅ Better TypeScript integration

**Cons:**
- ⚠️ Newer, less Stack Overflow answers
- ⚠️ Some third-party libraries not yet optimized for it
- ⚠️ Team learning curve

**Why Not Pages Router:**
- Will eventually be deprecated (5+ years, but still)
- Missing Server Components benefits
- Less efficient data loading patterns

### Consequences

**Positive:**
- Smaller JavaScript bundles (87.3 KB baseline vs ~110 KB with Pages Router)
- Better performance scores
- Future-proof architecture
- Cleaner code organization (co-located components)

**Negative:**
- Some confusion during development (when to use 'use client')
- Less community examples for edge cases

**Mitigation:**
- Thorough documentation of patterns
- Team training on Server vs Client Components
- Reference official Next.js docs extensively

---

## ADR-003: Google Cloud Run for Hosting

**Status:** Accepted
**Date:** 2025-09-20
**Decision Makers:** ClearForge Technical Team

### Context

The website needs a hosting platform that is:
- Cost-effective (especially at low traffic)
- Scalable (handle traffic spikes)
- Easy to deploy and manage
- Supports Docker containers
- Integrates with existing GCP infrastructure (Intelligence Gateway is on GCP)

**Alternatives Considered:**
1. **Google Cloud Run** - Serverless containers
2. **Vercel** - Next.js creators' platform
3. **AWS Elastic Beanstalk** - PaaS for containers
4. **Google App Engine** - PaaS
5. **Google Kubernetes Engine (GKE)** - Full Kubernetes
6. **Traditional VPS** (DigitalOcean, Linode)

### Decision

**We chose Google Cloud Run** for the following reasons:

**Pros:**
- ✅ **Scale to zero** - No charges when idle ($0 vs $5-50/month baseline)
- ✅ **Pay per request** - Cost scales linearly with usage
- ✅ **Fully managed** - No server management, auto-scaling
- ✅ **Fast deployments** - ~2 minutes from push to live
- ✅ **Docker support** - Use standard Dockerfile
- ✅ **GCP integration** - Same project as Intelligence Gateway, shared secrets
- ✅ **HTTPS included** - Automatic SSL certificates
- ✅ **Low cost** - ~$15/month for expected traffic

**Cons:**
- ⚠️ Cold starts (~2-3s for first request)
- ⚠️ Cloud vendor lock-in (mitigated by Docker portability)
- ⚠️ Requires GCP knowledge

**Why Not Vercel:**
- **Cost:** $20/month minimum for team features, usage-based pricing can spike
- **Vendor lock-in:** Harder to migrate away
- **Control:** Less control over infrastructure
- **Pro:** Vercel is excellent for Next.js (creators), zero config, great DX

**Why Not AWS Elastic Beanstalk:**
- More complex setup
- Less cost-effective for low traffic
- No scale-to-zero

**Why Not App Engine:**
- Less flexible than Cloud Run
- Higher baseline costs
- Harder to use Docker

**Why Not GKE:**
- Massive overkill for a marketing website
- Complex management (Kubernetes)
- High costs (~$70/month minimum for cluster)

**Why Not VPS:**
- No auto-scaling
- Manual server management
- Higher costs at scale
- No scale-to-zero

### Consequences

**Positive:**
- **Cost savings:** $15/month vs $20-50+ on other platforms
- **Zero maintenance:** No server patching, scaling handled automatically
- **Fast iteration:** Quick deployments encourage experimentation
- **GCP ecosystem:** Easy integration with other services (Secret Manager, etc.)

**Negative:**
- **Cold starts:** First request after idle period is slower (mitigated by keeping min-instances=1 during peak hours if needed)
- **GCP learning:** Team must learn gcloud CLI and GCP console

**Neutral:**
- **Docker requirement:** Must maintain Dockerfile (but good practice anyway)

**Cost Comparison (monthly, estimated):**
| Platform | Low Traffic (100 req/day) | Medium (1000 req/day) | High (10K req/day) |
|----------|---------------------------|-----------------------|--------------------|
| Cloud Run | $1-5 | $15-25 | $80-120 |
| Vercel | $20 (min) | $50-100 | $200-500 |
| AWS EB | $15-25 | $40-70 | $150-300 |
| VPS | $10 (fixed) | $20 (fixed) | $80 (upgraded) |

---

## ADR-004: Static Site Generation (SSG) Strategy

**Status:** Accepted
**Date:** 2025-09-20
**Decision Makers:** ClearForge Technical Team

### Context

Next.js offers three rendering strategies:
1. **Static Site Generation (SSG)** - Pre-render at build time
2. **Server-Side Rendering (SSR)** - Render on each request
3. **Client-Side Rendering (CSR)** - Render in browser

Most website pages are marketing content that rarely changes. API routes need to be dynamic.

### Decision

**We chose SSG for all content pages, SSR for API routes** for the following reasons:

**SSG for Content Pages:**
- ✅ **Fastest performance** - HTML pre-rendered, served instantly
- ✅ **Lowest costs** - No server processing per request
- ✅ **CDN-friendly** - Can cache at edge globally
- ✅ **SEO perfect** - Search engines get fully rendered HTML
- ✅ **Offline capable** - Static files can be cached

**SSR for API Routes:**
- ✅ **Dynamic data** - Forms, ASO opportunities need real-time processing
- ✅ **Security** - Can validate, rate-limit server-side
- ✅ **Integration** - Call Intelligence Gateway with secrets

**Why Not SSR for Content:**
- Slower (100-500ms server processing per request)
- Higher costs (more CPU usage)
- More complex caching
- Content changes rarely enough that build-time rendering is fine

**Why Not CSR for Content:**
- Terrible for SEO (empty HTML until JS loads)
- Slower perceived load time
- Not accessible without JavaScript

### Consequences

**Positive:**
- **Excellent performance:** < 1s FCP for all static pages
- **Low costs:** Static pages are essentially free to serve
- **Reliability:** No server failures for content (just HTML files)
- **SEO dominance:** Google loves static pages

**Negative:**
- **Content updates require rebuild** - Must rebuild and redeploy to update content (1-2 min process)
- **Build time:** ~1 minute for 49 pages (acceptable, but grows with more pages)

**Neutral:**
- **Hybrid approach:** Mix of SSG (content) and SSR (API) is more complex but necessary

**Future Enhancement:**
- **Incremental Static Regeneration (ISR):** Rebuild pages on-demand after X minutes
- **On-demand revalidation:** Webhook from CMS triggers page rebuild

---

## ADR-005: Tailwind CSS for Styling

**Status:** Accepted
**Date:** 2025-09-18
**Decision Makers:** ClearForge Technical Team

### Context

Website needs a consistent, professional design system with:
- Responsive design (mobile, tablet, desktop)
- Dark theme with brand colors (blue, purple, pink)
- Reusable components
- Fast development velocity
- Small CSS bundle size

**Alternatives Considered:**
1. **Tailwind CSS** - Utility-first CSS framework
2. **CSS Modules** - Scoped CSS files
3. **Styled Components** - CSS-in-JS
4. **Emotion** - CSS-in-JS
5. **Plain CSS/SCSS** - Traditional stylesheets
6. **Chakra UI** - Component library

### Decision

**We chose Tailwind CSS** for the following reasons:

**Pros:**
- ✅ **Utility-first** - Rapid prototyping, no naming conventions
- ✅ **Tree-shaking** - Unused classes purged, tiny bundle
- ✅ **Responsive design** - Built-in breakpoints (`md:`, `lg:`, etc.)
- ✅ **Design system** - Colors, spacing, typography in config
- ✅ **Dark mode** - Built-in dark mode utilities
- ✅ **No CSS conflicts** - No global namespace issues
- ✅ **Great DX** - IntelliSense support, fast iteration

**Cons:**
- ⚠️ Ugly markup (long className strings)
- ⚠️ Learning curve for team
- ⚠️ Harder to reuse complex styles (mitigated by components)

**Why Not CSS Modules:**
- More verbose (create separate CSS file for each component)
- Manual responsive design
- Larger bundle size

**Why Not Styled Components/Emotion:**
- Runtime overhead (CSS generated at runtime)
- Larger JavaScript bundle
- Harder to debug
- Worse performance

**Why Not Plain CSS:**
- No purging (large bundle)
- Global namespace conflicts
- Manual responsive design
- Harder to maintain consistency

**Why Not Chakra UI:**
- Opinionated component design (harder to match brand)
- Larger bundle size
- Less flexibility

### Consequences

**Positive:**
- **Fast development:** Can style components without leaving JSX
- **Tiny CSS bundle:** Only used classes included (~10 KB after purge)
- **Consistent design:** Config file ensures brand colors, spacing used everywhere
- **Responsive by default:** Mobile-first design easy to implement

**Negative:**
- **Markup verbosity:** Long className strings
- **Learning curve:** Team had to learn Tailwind conventions

**Mitigation:**
- Created reusable components (Button, Card, Section) to reduce duplication
- Documented common patterns in style guide
- Used @apply in rare cases for complex component styles

**Example:**
```jsx
// Instead of this (repeated):
<button className="bg-primary-blue hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors">
  Submit
</button>

// We created Button component:
<Button variant="primary" size="lg">Submit</Button>
```

---

## ADR-006: TypeScript Over JavaScript

**Status:** Accepted
**Date:** 2025-09-15
**Decision Makers:** ClearForge Technical Team

### Context

Need to choose between JavaScript and TypeScript for the entire codebase.

### Decision

**We chose TypeScript** for the following reasons:

**Pros:**
- ✅ **Type safety** - Catch bugs at compile time, not runtime
- ✅ **Better IDE support** - IntelliSense, autocomplete, refactoring
- ✅ **Self-documenting** - Interfaces serve as inline documentation
- ✅ **Easier refactoring** - Compiler catches breaking changes
- ✅ **Team productivity** - Fewer runtime errors, faster debugging
- ✅ **Next.js first-class support** - Optimized for TypeScript

**Cons:**
- ⚠️ Slightly slower development (type definitions take time)
- ⚠️ Learning curve for team
- ⚠️ Build step required (though Next.js handles this)

**Why Not JavaScript:**
- No type checking until runtime
- More runtime errors
- Harder to refactor
- Poor IDE support

### Consequences

**Positive:**
- **Fewer bugs:** Type system catches 60-70% of bugs before runtime
- **Better collaboration:** Interfaces make code contracts explicit
- **Easier onboarding:** New developers can understand code structure from types

**Negative:**
- **Initial slowdown:** Team spent extra time learning TypeScript
- **Boilerplate:** Some extra code for type definitions

**Metrics:**
- **TypeScript coverage:** ~95% (some `.js` config files remain)
- **Build errors caught:** Estimated 20+ bugs caught by TypeScript before deployment

---

## ADR-007: Axios Over Native Fetch

**Status:** Accepted
**Date:** 2025-09-25
**Decision Makers:** ClearForge Technical Team

### Context

Need an HTTP client for calling the Intelligence Gateway API. Options are:
1. **Axios** - Popular HTTP library
2. **Native Fetch API** - Built into browsers and Node.js 18+

### Decision

**We chose Axios** for the following reasons:

**Pros:**
- ✅ **Request/response interceptors** - Centralized logging, error handling
- ✅ **Automatic JSON transformation** - No manual `response.json()`
- ✅ **Timeout support** - Built-in `timeout` option
- ✅ **Better error handling** - Rejects promise on HTTP errors (fetch doesn't)
- ✅ **Request cancellation** - AbortController built-in
- ✅ **Progress events** - Upload/download progress tracking

**Cons:**
- ⚠️ Extra dependency (~13 KB gzipped)
- ⚠️ Not native (requires import)

**Why Not Fetch:**
- **No interceptors:** Must manually add headers, logging to each call
- **Manual JSON parsing:** Must call `.json()` on every response
- **No timeout:** Must manually implement with AbortController
- **Error handling:** Doesn't reject on 4xx/5xx, must check `response.ok`

### Consequences

**Positive:**
- **Cleaner code:** Interceptors handle auth, logging globally
- **Better errors:** Automatic error handling for 4xx/5xx
- **Easier testing:** Can mock Axios instance

**Negative:**
- **Bundle size:** +13 KB (acceptable for benefits)
- **Dependency:** Must update Axios periodically

**Example Benefit:**
```typescript
// Axios (current):
const client = axios.create({
  baseURL: config.baseURL,
  timeout: 10000,
  headers: { 'X-API-Key': config.apiKey },
});

client.interceptors.response.use(
  response => response,
  error => {
    console.error('API Error:', error.response?.status);
    throw error;
  }
);

// Fetch (alternative - verbose):
async function callAPI(endpoint, options) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000);

  try {
    const response = await fetch(`${baseURL}${endpoint}`, {
      ...options,
      signal: controller.signal,
      headers: {
        'X-API-Key': apiKey,
        'Content-Type': 'application/json',
      },
    });

    clearTimeout(timeout);

    if (!response.ok) {
      console.error('API Error:', response.status);
      throw new Error(`HTTP ${response.status}`);
    }

    return response.json();
  } catch (error) {
    clearTimeout(timeout);
    console.error('API Error:', error);
    throw error;
  }
}
```

---

## ADR-008: In-Memory Rate Limiting

**Status:** Accepted
**Date:** 2025-10-05
**Decision Makers:** ClearForge Technical Team

### Context

API routes need rate limiting to prevent:
- DDoS attacks
- Bot spam on forms
- Accidental runaway costs (user rapidly clicking submit)

**Alternatives Considered:**
1. **In-memory (Map)** - Store rate limits in server memory
2. **Redis/Memorystore** - External distributed cache
3. **Firestore** - Database-based rate limiting
4. **Cloud Armor** - GCP-level rate limiting
5. **No rate limiting** - Trust users

### Decision

**We chose in-memory rate limiting** for the following reasons:

**Pros:**
- ✅ **Zero cost** - No external service required
- ✅ **Simple implementation** - Just a Map and cleanup interval
- ✅ **Fast** - No network calls, sub-millisecond lookups
- ✅ **No dependencies** - Pure Node.js

**Cons:**
- ⚠️ **Not distributed** - Each Cloud Run instance has separate state
- ⚠️ **Lost on restart** - Rate limit counters reset when container restarts
- ⚠️ **Memory usage** - Grows with unique IPs (mitigated by cleanup)

**Why Not Redis:**
- **Cost:** $20-50/month for Memorystore
- **Complexity:** Additional service to manage
- **Overkill:** Website traffic doesn't justify distributed state
- **Pro:** Would sync across instances (eliminates per-instance bypass)

**Why Not Firestore:**
- **Slow:** 50-100ms per check (vs <1ms in-memory)
- **Cost:** 10K reads/day = $0.60/month (small but adds up)
- **Complexity:** Database queries for rate limiting

**Why Not Cloud Armor:**
- **Cost:** $15/month + $0.50/million requests
- **Coarse-grained:** Can't customize per-endpoint
- **Pro:** Protects against true DDoS

**Why Not Nothing:**
- **Risk:** Bots could spam forms, rack up Gateway API costs
- **Risk:** Accidental user actions (double-click submit)

### Consequences

**Positive:**
- **Cost:** $0 (vs $20-50 for Redis)
- **Performance:** < 1ms rate limit checks
- **Simplicity:** ~100 lines of code, easy to understand

**Negative:**
- **Per-instance limits:** User can exceed 5 req/min if hitting different instances
- **Memory leaks:** Must cleanup old entries (implemented with 5-min interval)

**Risk Assessment:**
- **Low traffic site:** Max 5 instances, so user could send 25 req/min (5 per instance)
- **Acceptable:** Still provides 5x protection vs no rate limiting
- **Mitigation:** Can upgrade to Redis if traffic increases significantly

**Future Enhancement:**
- If traffic exceeds 1000 req/hour sustained, upgrade to Redis/Memorystore

---

## ADR-009: Intelligence Gateway Integration Pattern

**Status:** Accepted
**Date:** 2025-09-25
**Decision Makers:** ClearForge Technical Team

### Context

Website needs to submit data to Intelligence Gateway (beta applications, contact forms, ASO data). Integration must be:
- Secure (API keys never exposed to client)
- Reliable (handle transient failures)
- Fast (minimize latency)

**Alternatives Considered:**
1. **Server-side proxy (current)** - Next.js API routes call Gateway
2. **Direct client-side calls** - Browser directly calls Gateway
3. **Serverless functions** (Cloud Functions) - Separate from website
4. **Message queue** (Pub/Sub) - Async processing

### Decision

**We chose server-side proxy pattern** for the following reasons:

**Pros:**
- ✅ **Security:** API key stays server-side, never exposed to client
- ✅ **Rate limiting:** Can rate-limit before calling Gateway
- ✅ **Validation:** Server-side validation before forwarding to Gateway
- ✅ **Retry logic:** Can retry transient failures without client involvement
- ✅ **Logging:** Centralized error logging
- ✅ **Simple architecture:** No additional services

**Cons:**
- ⚠️ Additional latency (~50-100ms for Next.js API route processing)
- ⚠️ Server costs (though minimal with Cloud Run)

**Why Not Direct Client Calls:**
- **Security risk:** API key exposed in browser (critical flaw)
- **No rate limiting:** Bots could spam Gateway directly
- **CORS complexity:** Would need to configure Gateway for browser calls

**Why Not Cloud Functions:**
- **Complexity:** Separate deployment, monitoring
- **Cost:** Cloud Run already runs functions (API routes)
- **Latency:** No performance benefit

**Why Not Message Queue:**
- **Complexity:** Adds Pub/Sub, worker service
- **User experience:** No immediate feedback ("Your form was queued...")
- **Overkill:** Forms are low-volume, don't need async processing

### Consequences

**Positive:**
- **Secure:** API key never exposed
- **Reliable:** Retry logic handles transient Gateway failures (2 retries, exponential backoff)
- **Flexible:** Can add caching, transformation, logging without changing client code

**Negative:**
- **Latency:** +50-100ms for proxy layer (acceptable for form submissions)
- **Server dependency:** If Next.js server is down, can't submit forms (but whole site is down anyway)

**Architecture:**
```
Browser → POST /api/beta → [API Route] → [Gateway Client] → [Retry Logic] → Intelligence Gateway
                             ↓                 ↓                  ↓
                        Rate Limit       Add Auth Headers    Exponential Backoff
                        Validation       Timeout (10s)       (1s, 2s, 4s)
```

---

## ADR-010: No Database on Website (Gateway-Only)

**Status:** Accepted
**Date:** 2025-09-20
**Decision Makers:** ClearForge Technical Team

### Context

Website needs to persist data (beta applications, contact forms). Options:
1. **No database** - Forward all data to Intelligence Gateway
2. **Firestore on website** - Store data directly in website's Firestore
3. **PostgreSQL** - Dedicated SQL database
4. **Dual-write** - Write to both website DB and Gateway

### Decision

**We chose no database (Gateway-only)** for the following reasons:

**Pros:**
- ✅ **Single source of truth:** All data in Gateway's Firestore
- ✅ **No synchronization:** No need to sync between website and Gateway
- ✅ **Lower costs:** No duplicate database costs
- ✅ **Simpler architecture:** One less service to manage
- ✅ **Business logic centralized:** Lead scoring, qualification in Gateway (not duplicated)

**Cons:**
- ⚠️ **Gateway dependency:** If Gateway is down, can't accept submissions
- ⚠️ **No caching:** Can't cache frequently-accessed data locally (but no use case currently)

**Why Not Firestore on Website:**
- **Data duplication:** Would need to sync to Gateway anyway
- **Complexity:** Two databases to manage, keep in sync
- **Cost:** Duplicate storage costs
- **Logic duplication:** Would need to replicate Gateway's business logic

**Why Not PostgreSQL:**
- **Overkill:** No relational data, no complex queries needed
- **Cost:** $20-50/month for managed Postgres
- **Complexity:** Schema migrations, backup management

**Why Not Dual-Write:**
- **Consistency issues:** What if website DB succeeds but Gateway fails?
- **Complexity:** Must handle partial failures
- **No benefit:** No use case for website-only data

### Consequences

**Positive:**
- **Simplicity:** Website is truly stateless (except rate limiter)
- **Cost savings:** $0 database costs
- **Data consistency:** No sync issues, Gateway is single source of truth

**Negative:**
- **Gateway dependency:** If Gateway is down, entire submit flow breaks (but this is acceptable - Gateway is critical to business anyway)
- **No offline capability:** Can't queue submissions when Gateway is offline (future enhancement)

**Future Enhancement:**
- **Offline queue:** If Gateway is down, queue submissions in browser's IndexedDB, submit when back online

---

## ADR-011: Docker Multi-Stage Builds

**Status:** Accepted
**Date:** 2025-09-22
**Decision Makers:** ClearForge Technical Team

### Context

Need to containerize Next.js app for Cloud Run. Dockerfile must:
- Produce small image (faster deploys, lower costs)
- Be reproducible (same build every time)
- Be secure (minimal attack surface)

### Decision

**We chose multi-stage Docker build** with 4 stages:

```dockerfile
# Stage 1: Base - Common Node.js image
FROM node:20-alpine AS base

# Stage 2: Dependencies - Install packages
FROM base AS deps
COPY package.json package-lock.json ./
RUN npm ci

# Stage 3: Builder - Build the app
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Stage 4: Runner - Final production image
FROM base AS runner
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
CMD ["node", "server.js"]
```

**Pros:**
- ✅ **Small final image:** ~150 MB (vs ~800 MB single-stage)
- ✅ **Security:** Only production dependencies in final image
- ✅ **Layer caching:** Rebuild only changed layers
- ✅ **Fast deploys:** Smaller image = faster push/pull

**Cons:**
- ⚠️ More complex Dockerfile
- ⚠️ Longer build time (multiple stages)

**Why Not Single-Stage:**
- **Large image:** Includes build tools, dev dependencies (~800 MB)
- **Security:** More attack surface
- **Slower deploys:** Takes longer to push/pull

**Why Not Alpine Base:**
- We ARE using Alpine (node:20-alpine)
- Smallest Node.js base image (~50 MB vs ~300 MB for node:20)

### Consequences

**Positive:**
- **Fast deploys:** 150 MB image deploys in ~30 seconds
- **Lower storage costs:** Artifact Registry charges by GB
- **Better security:** Minimal packages in production image

**Negative:**
- **Build complexity:** Must understand multi-stage builds to modify Dockerfile

**Image Size Comparison:**
| Approach | Image Size | Deploy Time |
|----------|-----------|-------------|
| Single-stage (node:20) | ~800 MB | ~2 min |
| Single-stage (node:20-alpine) | ~400 MB | ~1 min |
| **Multi-stage (current)** | **~150 MB** | **~30 sec** |

---

## ADR-012: Scale-to-Zero Configuration

**Status:** Accepted
**Date:** 2025-10-05
**Decision Makers:** ClearForge Technical Team

### Context

Cloud Run can be configured with:
- **min-instances:** Minimum containers always running
- **max-instances:** Maximum containers that can run

Options:
1. **Scale-to-zero (min=0)** - No idle costs, but cold starts
2. **Always warm (min=1)** - No cold starts, but idle costs
3. **Hybrid (min=1 during business hours)** - Scheduled warm instances

**Cost Implications:**
- min=0: $0 idle + $15/month usage = ~$15/month
- min=1: $15 idle + $15/month usage = ~$30/month

### Decision

**We chose scale-to-zero (min=0)** for the following reasons:

**Pros:**
- ✅ **50% cost savings:** $15/month vs $30/month
- ✅ **No waste:** Only pay for actual usage
- ✅ **Scalable cost:** As traffic grows, costs grow proportionally

**Cons:**
- ⚠️ **Cold starts:** First request after idle takes ~2-3 seconds
- ⚠️ **User experience:** Occasional slow page load

**Why Not Always Warm (min=1):**
- **Cost:** Double the cost ($30 vs $15)
- **Waste:** Instance idle most of the time (site has low traffic)
- **Benefit:** No cold starts (faster first request)

**Why Not Hybrid:**
- **Complexity:** Must manage scheduling
- **Limited benefit:** Site traffic is sporadic, not predictable by time

### Consequences

**Positive:**
- **Cost savings:** $15/month (50% reduction)
- **Sustainable:** Costs scale with usage, not time

**Negative:**
- **Occasional slow load:** ~5% of requests experience 2-3s cold start

**Mitigation:**
- **Lightweight image:** 150 MB Alpine-based image starts faster
- **Optimized boot:** Minimal startup code in Next.js
- **Future:** Can set min=1 during campaign launches if needed

**Cold Start Analysis:**
- **Idle time:** 15+ minutes with no traffic
- **Cold start frequency:** Estimated 5-10% of requests
- **Impact:** Affects first visitor after idle period only
- **Acceptable:** For a marketing site (not a SaaS dashboard)

**When to Change:**
- If traffic exceeds 100 req/hour sustained, consider min=1
- If cold starts cause >10% bounce rate, consider min=1

---

## ADR-013: Monorepo vs Multi-Repo

**Status:** Accepted
**Date:** 2025-09-15
**Decision Makers:** ClearForge Technical Team

### Context

ClearForge has multiple codebases:
- ClearForge Website (this project)
- Intelligence Gateway (backend API)
- Xynergy Platform (future product)
- Internal tools

Need to decide: one repo for everything (monorepo) or separate repos (multi-repo)?

### Decision

**We chose multi-repo** for the following reasons:

**Pros:**
- ✅ **Independent deployments:** Website can deploy without Gateway changes
- ✅ **Simple CI/CD:** Each repo has own build pipeline
- ✅ **Access control:** Can grant website access to contractors without Gateway access
- ✅ **Technology flexibility:** Website can use different stack than Gateway

**Cons:**
- ⚠️ **Harder to share code:** No shared components (yet)
- ⚠️ **Version coordination:** Must manually sync shared interfaces (e.g., API contracts)

**Why Not Monorepo:**
- **Complexity:** Requires monorepo tools (Turborepo, Nx)
- **Large repo:** Cloning all code just to work on website
- **Build times:** Must build entire repo (or configure smart caching)
- **Overkill:** No shared code currently

### Consequences

**Positive:**
- **Simple workflow:** Clone one repo, work on one project
- **Fast CI/CD:** Build only what changed
- **Clear ownership:** Each repo has dedicated team

**Negative:**
- **API contract drift:** Must manually keep website and Gateway in sync
- **No code sharing:** If we build UI components for both, must duplicate

**Mitigation:**
- **Shared type packages:** Future enhancement - publish shared types to npm
- **API spec:** Maintain OpenAPI spec for Gateway, generate TypeScript types for website

**Future Enhancement:**
- If we build 3+ related frontend projects, revisit monorepo (use Turborepo)

---

## ADR-014: No User Authentication

**Status:** Accepted
**Date:** 2025-09-20
**Decision Makers:** ClearForge Technical Team

### Context

Website is a public marketing site with:
- Static content (about, mission, etc.)
- Forms (beta application, contact)
- No user accounts

Do we need user authentication?

### Decision

**We chose no authentication** for the following reasons:

**Pros:**
- ✅ **Simpler architecture:** No auth provider, no session management
- ✅ **Better UX:** Users can submit forms without creating account
- ✅ **Lower costs:** No Auth0/Firebase Auth subscription
- ✅ **No security overhead:** No password resets, no 2FA, no GDPR login logs

**Cons:**
- ⚠️ **No user tracking:** Can't see if same user submits multiple forms
- ⚠️ **No personalization:** Can't customize content per user
- ⚠️ **Spam risk:** Bots can submit forms (mitigated by rate limiting, future CAPTCHA)

**Why Not Add Auth:**
- **No use case:** No user-specific features currently
- **Friction:** Creates barrier to form submission
- **Complexity:** Must choose provider, integrate, test

### Consequences

**Positive:**
- **Simple codebase:** No auth code, no session management
- **Better conversion:** Fewer steps to submit beta application
- **Lower maintenance:** No auth-related bugs, no password reset flows

**Negative:**
- **Can't track users:** Don't know if user submits multiple applications
- **Spam vulnerability:** Must rely on rate limiting, CAPTCHA

**Future Enhancement:**
- **Beta partner portal:** When beta partners need access to dashboard, add auth
- **Implementation:** Use Auth0 or Firebase Auth (add later without major refactor)

---

## ADR-015: Client-Side Form Validation

**Status:** Accepted
**Date:** 2025-09-28
**Decision Makers:** ClearForge Technical Team

### Context

Forms need validation (required fields, email format, etc.). Options:
1. **Client-side only** - JavaScript validation in browser
2. **Server-side only** - Validate in API route
3. **Both** - Validate on both client and server

### Decision

**We chose both client-side and server-side validation** for the following reasons:

**Client-Side:**
- ✅ **Instant feedback:** User sees errors without server round-trip
- ✅ **Better UX:** No page reload or loading spinner for simple errors
- ✅ **Reduce server load:** Don't send invalid requests to server

**Server-Side:**
- ✅ **Security:** Never trust client (users can disable JavaScript)
- ✅ **Consistent:** Same validation rules enforced regardless of client
- ✅ **Protection:** Prevents malicious users from bypassing client validation

**Why Not Client-Only:**
- **Security risk:** Users can bypass JavaScript validation
- **Bots:** Automated submissions won't validate
- **Critical flaw:** Server must validate anyway

**Why Not Server-Only:**
- **Poor UX:** User must submit, wait for server, see error, fix, repeat
- **Higher server load:** Every invalid submission hits server
- **Slower:** Round-trip adds 500-1000ms per validation error

### Consequences

**Positive:**
- **Best UX:** Instant feedback for users
- **Secure:** Server enforces validation regardless of client
- **Lower load:** Most invalid submissions caught before hitting server

**Negative:**
- **Code duplication:** Validation logic exists in both client and server (but minimal)

**Implementation:**
```typescript
// Client-side (BetaApplicationForm.tsx)
if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
  setError('Invalid email format');
  return;
}

// Server-side (app/api/beta/route.ts)
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(data.email)) {
  return NextResponse.json(
    { success: false, message: 'Invalid email format' },
    { status: 400 }
  );
}
```

**Future Enhancement:**
- **Shared validation library:** Extract validation rules to shared function used by both client and server (DRY principle)

---

## Summary of Architectural Decisions

| Decision | Status | Impact | Cost Implication |
|----------|--------|--------|------------------|
| Next.js 14 | ✅ Accepted | High - Foundation | $0 (open source) |
| App Router | ✅ Accepted | Medium - Performance | $0 |
| Cloud Run | ✅ Accepted | High - Hosting | ~$15/month |
| SSG Strategy | ✅ Accepted | High - Performance | $0 (reduces costs) |
| Tailwind CSS | ✅ Accepted | Medium - Styling | $0 |
| TypeScript | ✅ Accepted | High - Quality | $0 |
| Axios | ✅ Accepted | Low - HTTP Client | $0 |
| In-Memory Rate Limiting | ✅ Accepted | Medium - Security | $0 (vs $20 Redis) |
| Gateway Proxy | ✅ Accepted | High - Security | $0 |
| No Website DB | ✅ Accepted | High - Simplicity | $0 (saves $20-50) |
| Multi-Stage Docker | ✅ Accepted | Medium - Performance | $0 (reduces storage) |
| Scale-to-Zero | ✅ Accepted | High - Cost | Saves $15/month |
| Multi-Repo | ✅ Accepted | Medium - Organization | $0 |
| No Auth | ✅ Accepted | Medium - Simplicity | $0 (saves $20-50) |
| Dual Validation | ✅ Accepted | Medium - UX + Security | $0 |

**Total Monthly Cost Impact of Decisions:** ~$15/month (one of the most cost-effective stacks possible)

---

## Document History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2025-10-10 | Claude (AI Assistant) | Initial ADR compilation |

---

**End of Architecture Decision Records**
