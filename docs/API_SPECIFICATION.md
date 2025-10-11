# API Specification Document
## ClearForge Website API Routes

**Version:** 1.0
**Last Updated:** 2025-10-10
**Base URL:** `https://clearforge-website-835612502919.us-central1.run.app`

---

## Overview

The ClearForge website exposes 3 Next.js API routes for form submissions and data retrieval. All routes implement rate limiting (5 req/min per IP) and retry logic for resilience.

---

## API Routes

### 1. POST /api/beta

**Purpose:** Submit beta program application

**Authentication:** None (public endpoint)

**Rate Limit:** 5 requests per minute per IP

**Validation:** Zod schema validation with detailed error reporting

**Request:**
```http
POST /api/beta
Content-Type: application/json

{
  "company_name": "Acme Corp",
  "contact_name": "John Doe",
  "email": "john@acme.com",
  "industry": "Real Estate",
  "phone": "+1-555-123-4567",
  "website": "https://acme.com",
  "monthly_revenue": "$100k-$500k",
  "current_marketing": ["google-ads", "seo", "social-media"],
  "goals": "Increase leads by 50% in 6 months",
  "referred_by": "Jane Smith"
}
```

**Response (201 Created):**
```json
{
  "success": true,
  "application_id": "app_1234567890abcdef",
  "message": "Application received. You'll hear from us within 48 hours."
}
```

**Response (400 Bad Request - Validation Error):**
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    {
      "code": "invalid_type",
      "expected": "string",
      "received": "undefined",
      "path": ["email"],
      "message": "Required"
    }
  ]
}
```

**Response (429 Too Many Requests):**
```json
{
  "success": false,
  "message": "Too many requests. Please try again in a minute."
}
```

**Response (500 Internal Server Error):**
```json
{
  "success": false,
  "message": "Failed to submit application. Please try again."
}
```

---

### 2. POST /api/contact

**Purpose:** Submit contact form

**Authentication:** None (public endpoint)

**Rate Limit:** 5 requests per minute per IP

**Validation:** Zod schema validation with detailed error reporting

**Request:**
```http
POST /api/contact
Content-Type: application/json

{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "phone": "+1-555-987-6543",
  "company": "Example Inc",
  "message": "I'm interested in learning more about ClearForge..."
}
```

**Response (201 Created):**
```json
{
  "success": true,
  "submission_id": "sub_9876543210fedcba",
  "message": "Message received. We'll respond within 24 hours."
}
```

**Response (400 Bad Request - Validation Error):**
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    {
      "code": "invalid_string",
      "validation": "email",
      "path": ["email"],
      "message": "Invalid email"
    }
  ]
}
```

**Response (429 Too Many Requests):**
```json
{
  "success": false,
  "message": "Too many requests. Please try again in a minute."
}
```

---

### 3. GET /api/aso/opportunities

**Purpose:** Retrieve ASO keyword opportunities

**Authentication:** None (public endpoint)

**Rate Limit:** 5 requests per minute per IP (same as other endpoints)

**Cache:** 15 minute revalidation (ISR with Next.js)

**Request:**
```http
GET /api/aso/opportunities?limit=10
```

**Query Parameters:**
| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `limit` | number | No | 10 | Number of opportunities to return (max 50) |

**Response (200 OK):**
```json
{
  "opportunities": [
    {
      "keyword": "ai business transformation",
      "search_volume": 1200,
      "difficulty": 45,
      "relevance_score": 92,
      "opportunity_score": 87,
      "trend": "rising",
      "serp_features": ["featured_snippet", "people_also_ask"],
      "generated_at": "2025-10-10T12:00:00Z"
    }
  ]
}
```

**Response (500 Internal Server Error):**
```json
{
  "opportunities": []
}
```

**Note:** This endpoint returns empty array on error instead of throwing, to gracefully degrade UI.

---

### 4. GET /api/health

**Purpose:** Health check endpoint for Cloud Run monitoring

**Authentication:** None (public endpoint)

**Rate Limit:** None (health check endpoint)

**Request:**
```http
GET /api/health
```

**Response (200 OK):**
```json
{
  "status": "healthy",
  "service": "clearforge-website",
  "timestamp": "2025-10-10T14:32:15.123Z"
}
```

---

## Rate Limiting

**Implementation:** In-memory sliding window (per Cloud Run instance)

**Headers (Response):**
```
X-RateLimit-Limit: 5
X-RateLimit-Remaining: 3
Retry-After: 60
```

**Algorithm:**
```typescript
// Rate limit check
const identifier = getIdentifier(request.headers); // IP address
const allowed = rateLimit(identifier, 5, 60000);   // 5 req/min

if (!allowed) {
  return Response(429, {
    success: false,
    message: 'Too many requests. Please try again in a minute.'
  });
}
```

---

## Error Handling

**Retry Logic (Server-Side):**
- Retries: 2 attempts (3 total tries)
- Backoff: Exponential (1s, 2s, 4s)
- Retryable errors: 5xx, 429, ECONNREFUSED, ETIMEDOUT
- Non-retryable: 4xx (except 429)

**Client-Side Handling:**
```javascript
// Example: Form submission with error handling
try {
  const response = await fetch('/api/beta', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });

  if (!response.ok) {
    if (response.status === 429) {
      showError('Too many requests. Please wait a minute.');
    } else if (response.status >= 500) {
      showError('Server error. Please try again later.');
    } else {
      const data = await response.json();
      showError(data.message);
    }
    return;
  }

  const data = await response.json();
  showSuccess(data.message);
} catch (error) {
  showError('Network error. Please check your connection.');
}
```

---

## Validation Rules

### Email Validation
**Regex:** `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`

**Examples:**
- ✅ `user@example.com`
- ✅ `jane.doe@company.co.uk`
- ❌ `invalid.email` (no @)
- ❌ `@example.com` (no local part)

### Zod Validation Schemas

**Beta Application Schema:**
```typescript
const BetaApplicationSchema = z.object({
  company_name: z.string().min(1).max(100),
  contact_name: z.string().min(1).max(100),
  email: z.string().email(),
  industry: z.string().min(1).max(50),
  phone: z.string().optional(),
  website: z.string().url().optional().or(z.literal('')),
  monthly_revenue: z.string().optional(),
  current_marketing: z.array(z.string()).min(1, 'Select at least one marketing channel'),
  goals: z.string().min(10).max(1000),
  referred_by: z.string().optional(),
});
```

**Contact Form Schema:**
```typescript
const ContactSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(2000),
  phone: z.string().optional(),
  company: z.string().max(100).optional(),
});
```

### Required Fields (Beta Application)
- `company_name` (1-100 chars)
- `contact_name` (1-100 chars)
- `email` (valid email format)
- `industry` (1-50 chars)
- `current_marketing` (array, min 1 item)
- `goals` (10-1000 chars)

### Required Fields (Contact Form)
- `name` (1-100 chars)
- `email` (valid email format)
- `message` (10-2000 chars)

---

## Integration with Intelligence Gateway

All API routes proxy requests to Intelligence Gateway:

**Beta Application:**
```
Website API Route (/api/beta)
  ↓ (transforms field names)
POST /api/beta/apply
  ↓ (Intelligence Gateway)
Firestore: beta_applications collection
```

**Contact Form:**
```
Website API Route (/api/contact)
  ↓
POST /api/leads/contact
  ↓ (Intelligence Gateway)
Firestore: contact_submissions collection
```

**Field Mapping (Beta):**
```javascript
// Website → Gateway
{
  businessName → company_name
  name → contact_name
  phone → phone (optional)
  // ... rest pass through
}
```

---

## Testing

### Manual Testing (cURL)

**Beta Application:**
```bash
curl -X POST https://clearforge-website-835612502919.us-central1.run.app/api/beta \
  -H "Content-Type: application/json" \
  -d '{
    "businessName": "Test Corp",
    "industry": "Technology",
    "name": "Test User",
    "email": "test@example.com",
    "goals": "Testing the API",
    "role": "Developer"
  }'
```

**Contact Form:**
```bash
curl -X POST https://clearforge-website-835612502919.us-central1.run.app/api/contact \
  -H "Content-Type": application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "Testing the contact API"
  }'
```

**Rate Limit Test:**
```bash
# Send 6 requests quickly (should get 429 on 6th)
for i in {1..6}; do
  curl -X POST .../api/contact -H "Content-Type: application/json" -d '{"name":"Test","email":"test@example.com","message":"Test"}'
done
```

---

## Security

**Secrets Protection:**
- `GATEWAY_API_KEY` never exposed to client
- API key sent in `X-API-Key` header to Gateway
- HTTPS enforced for all requests

**Input Sanitization:**
- Email format validation
- Max field lengths enforced
- HTML/script tags stripped (future)

**CORS Policy:**
```javascript
// Only allow requests from same origin
headers: {
  'Access-Control-Allow-Origin': process.env.NEXT_PUBLIC_APP_URL,
  'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type'
}
```

---

## Document History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2025-10-10 | Claude | Initial API specification |
