# ClearForge Website - Intelligence Gateway Integration

This document describes the integration between the ClearForge website and the Intelligence Gateway service.

## Overview

The ClearForge website integrates with the Intelligence Gateway to provide:
- **ASO Opportunities**: Real-time keyword and search optimization data
- **Beta Applications**: Lead capture for beta program signups
- **Contact Forms**: General inquiries and partnership requests
- **Newsletter Subscriptions**: Email list management (future)

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│         ClearForge Website (Next.js 14 + App Router)        │
│                                                             │
│  ┌───────────────────────────────────────────────────────┐ │
│  │ API Routes                                            │ │
│  │  - GET  /api/aso/opportunities                        │ │
│  │  - POST /api/beta                                     │ │
│  │  - POST /api/contact                                  │ │
│  └───────────────────────────────────────────────────────┘ │
│                         │                                   │
│                         ▼                                   │
│  ┌───────────────────────────────────────────────────────┐ │
│  │ Gateway Client (lib/gateway-client.ts)                │ │
│  │  - Axios-based HTTP client                            │ │
│  │  - Bearer token authentication (X-API-Key header)     │ │
│  │  - Error handling and logging                         │ │
│  └───────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
                         │
                         │ HTTPS
                         ▼
┌─────────────────────────────────────────────────────────────┐
│         Intelligence Gateway Service                        │
│         https://intelligence-gateway-{hash}-uc.a.run.app    │
│                                                             │
│  - GET  /api/aso/opportunities                              │
│  - POST /api/beta/apply                                     │
│  - POST /api/leads/contact                                  │
│  - POST /api/leads/newsletter                               │
│  - GET  /health                                             │
└─────────────────────────────────────────────────────────────┘
```

## Environment Variables

### Required

| Variable | Purpose | Example |
|----------|---------|---------|
| `NEXT_PUBLIC_GATEWAY_URL` | Intelligence Gateway base URL | `https://intelligence-gateway-xxx-uc.a.run.app` |
| `GATEWAY_API_KEY` | Authentication token for Gateway | Secret value from GCP Secret Manager |

### Optional

| Variable | Purpose | Default |
|----------|---------|---------|
| `NEXT_PUBLIC_ENABLE_ASO_DATA` | Enable ASO features | `true` |
| `NEXT_PUBLIC_ENABLE_BETA_APPLICATIONS` | Enable beta signup | `true` |
| `NEXT_PUBLIC_ENABLE_NEWSLETTER` | Enable newsletter signup | `true` |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics tracking ID | Not set |

## API Endpoints

### GET /api/aso/opportunities

Fetches ASO (Adaptive Search Optimization) opportunities from the Intelligence Gateway.

**Query Parameters:**
- `limit` (optional): Number of opportunities to return (default: 10, max: 50)

**Response:**
```json
{
  "opportunities": [
    {
      "keyword": "ai marketing automation",
      "search_volume": 12500,
      "difficulty": 65,
      "relevance_score": 82,
      "opportunity_score": 78,
      "trend": "rising",
      "serp_features": ["featured_snippet", "people_also_ask"],
      "generated_at": "2025-10-09T12:00:00Z"
    }
  ],
  "count": 1,
  "generated_at": "2025-10-09T12:00:00Z"
}
```

**Caching:** Revalidates every 15 minutes (900 seconds)

---

### POST /api/beta

Submits a beta program application.

**Request Body:**
```json
{
  "company_name": "Acme Corp",
  "contact_name": "John Doe",
  "email": "john@acme.com",
  "phone": "555-0123",
  "website": "https://acme.com",
  "industry": "Technology",
  "monthly_revenue": "$50k-$100k",
  "current_marketing": ["seo", "paid_ads"],
  "goals": "Improve organic search visibility",
  "referred_by": "Google Search"
}
```

**Required Fields:** `company_name`, `contact_name`, `email`, `industry`, `goals`

**Response:**
```json
{
  "success": true,
  "application_id": "app_abc123",
  "message": "Application submitted successfully. We'll review and respond within 24 hours."
}
```

---

### POST /api/contact

Submits a contact form inquiry.

**Request Body:**
```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "phone": "555-0456",
  "company": "Example Inc",
  "subject": "Partnership Inquiry",
  "message": "I'd like to discuss partnership opportunities..."
}
```

**Required Fields:** `name`, `email`, `message`

**Response:**
```json
{
  "success": true,
  "submission_id": "sub_xyz789",
  "message": "Thank you for your inquiry. We'll respond within 24-48 hours."
}
```

## Gateway Client Usage

### Server-Side Usage

```typescript
import { getGatewayClient } from '@/lib/gateway-client';

// In a server component or API route
async function fetchOpportunities() {
  const client = getGatewayClient();
  const opportunities = await client.getASOOpportunities(20);
  return opportunities;
}
```

### API Route Usage

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { getGatewayClient } from '@/lib/gateway-client';

export async function POST(request: NextRequest) {
  const data = await request.json();

  const client = getGatewayClient();
  const result = await client.submitBetaApplication(data);

  return NextResponse.json(result);
}
```

## Error Handling

The Gateway client includes comprehensive error handling:

1. **Network Errors**: Caught and logged, returns empty arrays or error messages
2. **HTTP Errors**: Logged with status codes and URLs
3. **Validation Errors**: Field-level validation before submission
4. **Timeout**: 10-second default timeout for all requests

Example error response:
```json
{
  "success": false,
  "message": "Failed to submit application. Please try again."
}
```

## Deployment

### Using Cloud Build (Recommended)

```bash
gcloud builds submit --config=cloudbuild.yaml
```

This will:
1. Build the Docker image
2. Push to Google Container Registry
3. Deploy to Cloud Run with secrets and environment variables
4. Set up auto-scaling (min: 1, max: 10 instances)

### Using Deployment Script

```bash
./deploy.sh
```

The script handles:
- Docker image building and pushing
- Cloud Run deployment with proper configuration
- Secrets injection from GCP Secret Manager
- Service URL retrieval

### Manual Deployment

```bash
# Build image
docker build -t gcr.io/xynergy-dev-1757909467/clearforge-website:latest .

# Push to registry
docker push gcr.io/xynergy-dev-1757909467/clearforge-website:latest

# Deploy to Cloud Run
gcloud run deploy clearforge-website \
  --image gcr.io/xynergy-dev-1757909467/clearforge-website:latest \
  --region us-central1 \
  --platform managed \
  --allow-unauthenticated \
  --min-instances 1 \
  --max-instances 10 \
  --memory 1Gi \
  --cpu 1 \
  --port 3000 \
  --set-env-vars NODE_ENV=production,NEXT_PUBLIC_ENVIRONMENT=production \
  --set-secrets GATEWAY_API_KEY=gateway-api-key:latest,NEXT_PUBLIC_GATEWAY_URL=gateway-url:latest
```

## Required GCP Secrets

Before deployment, create these secrets in GCP Secret Manager:

```bash
# Gateway API key
echo -n "your-api-key-here" | gcloud secrets create gateway-api-key --data-file=-

# Gateway URL
echo -n "https://intelligence-gateway-xxx-uc.a.run.app" | gcloud secrets create gateway-url --data-file=-

# Google Analytics ID (optional)
echo -n "G-XXXXXXXXXX" | gcloud secrets create ga-measurement-id --data-file=-
```

Grant Cloud Run service account access:
```bash
gcloud secrets add-iam-policy-binding gateway-api-key \
  --member="serviceAccount:PROJECT_NUMBER-compute@developer.gserviceaccount.com" \
  --role="roles/secretmanager.secretAccessor"

gcloud secrets add-iam-policy-binding gateway-url \
  --member="serviceAccount:PROJECT_NUMBER-compute@developer.gserviceaccount.com" \
  --role="roles/secretmanager.secretAccessor"
```

## Testing

### Local Testing

1. Create `.env.local`:
```bash
NEXT_PUBLIC_GATEWAY_URL=http://localhost:8080
GATEWAY_API_KEY=dev-key-12345
NEXT_PUBLIC_ENABLE_ASO_DATA=true
NEXT_PUBLIC_ENABLE_BETA_APPLICATIONS=true
```

2. Start Intelligence Gateway locally (port 8080)

3. Run website:
```bash
npm install
npm run dev
```

4. Test endpoints:
```bash
# ASO data
curl http://localhost:3000/api/aso/opportunities?limit=5

# Beta application
curl -X POST http://localhost:3000/api/beta \
  -H "Content-Type: application/json" \
  -d '{"company_name":"Test","contact_name":"John","email":"john@test.com","industry":"Tech","goals":"Testing"}'
```

### Production Testing

```bash
# Health check
curl https://clearforge-website-xxx-uc.a.run.app/

# ASO data
curl https://clearforge-website-xxx-uc.a.run.app/api/aso/opportunities

# Check service logs
gcloud logging read "resource.type=cloud_run_revision AND resource.labels.service_name=clearforge-website" --limit 50
```

## Monitoring

### Key Metrics

- **Request Latency**: p95 should be < 2 seconds
- **Error Rate**: Should be < 1%
- **Gateway Availability**: Monitor `/health` endpoint
- **Form Submission Success Rate**: Track via GA4

### Logs

View real-time logs:
```bash
gcloud logging tail "resource.type=cloud_run_revision AND resource.labels.service_name=clearforge-website"
```

Filter for errors:
```bash
gcloud logging read "resource.type=cloud_run_revision AND resource.labels.service_name=clearforge-website AND severity>=ERROR" --limit 100
```

## Troubleshooting

### Gateway Connection Errors

**Problem**: `Gateway configuration missing` error

**Solution**: Verify environment variables are set:
```bash
gcloud run services describe clearforge-website --region us-central1 --format=json | grep -A 5 env
```

---

**Problem**: `Failed to fetch ASO opportunities`

**Solution**:
1. Check Gateway service is running
2. Verify API key is correct
3. Check CORS configuration if calling from browser
4. Review Gateway logs for errors

---

### Deployment Issues

**Problem**: Build fails with missing dependencies

**Solution**: Clear Docker cache and rebuild:
```bash
docker system prune -a
docker build --no-cache -t gcr.io/xynergy-dev-1757909467/clearforge-website:latest .
```

---

**Problem**: Service returns 500 errors

**Solution**: Check logs for detailed error:
```bash
gcloud logging read "resource.type=cloud_run_revision AND resource.labels.service_name=clearforge-website AND severity>=ERROR" --limit 10 --format=json
```

## Next Steps

1. **Install Dependencies**: Run `npm install` to add axios
2. **Configure Secrets**: Set up GCP secrets for Gateway URL and API key
3. **Deploy**: Run `./deploy.sh` to deploy to Cloud Run
4. **Test Integration**: Verify all endpoints work with Intelligence Gateway
5. **Monitor**: Set up alerts for error rates and latency
6. **Optimize**: Review performance and adjust caching as needed

## Support

For integration issues:
1. Check this documentation
2. Review Gateway service logs
3. Test endpoints individually
4. Contact tech lead if issues persist

---

**Last Updated**: 2025-10-09
**Version**: 1.0
**Dependencies**: Intelligence Gateway Service must be deployed and accessible
