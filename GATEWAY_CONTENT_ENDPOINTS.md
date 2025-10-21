# Intelligence Gateway Content Endpoints

This document specifies the API endpoints that need to be implemented in the **Intelligence Gateway** to support the ClearForge website blog/content system.

## Overview

The website blog system expects content to be served from the Intelligence Gateway via REST API endpoints. All endpoints should:
- Use API key authentication (X-API-Key header)
- Return JSON responses
- Include proper error handling
- Support CORS for the website domain

---

## Firestore Collection Structure

**Collection:** `generated_content`

**Document Schema:**
```typescript
{
  id: string;                  // Firestore document ID
  slug: string;                // URL-friendly identifier (e.g., "ai-transparency-101")
  title: string;               // Article title
  excerpt: string;             // Short description/summary (150-300 chars)
  content: string;             // Full article content in Markdown format

  author: {
    name: string;              // Author name (e.g., "ClearForge Team")
    avatar?: string;           // Optional avatar URL
    role?: string;             // Optional role (e.g., "Chief AI Officer")
  };

  category: string;            // One of: 'blog', 'how-to', 'white-paper', 'playbook', 'opinion'
  tags: string[];              // Array of tags (e.g., ["AI", "Transparency", "SMB"])

  featured_image?: string;     // Optional URL to header/hero image
  published_at: Timestamp;     // Firestore timestamp
  updated_at?: Timestamp;      // Optional last update timestamp

  status: string;              // 'draft' or 'published' (only serve 'published')
  featured?: boolean;          // True if article should appear in featured section
  views?: number;              // Optional view counter

  seo?: {
    title?: string;            // Optional custom SEO title
    description?: string;      // Optional custom SEO description
    og_image?: string;         // Optional custom Open Graph image
  };
}
```

---

## Required Endpoints

### 1. GET /api/public/content/articles

**Purpose:** Fetch a paginated list of published articles

**Query Parameters:**
- `limit` (number, default: 20) - Number of articles to return
- `category` (string, optional) - Filter by category ('blog', 'how-to', etc.)
- `page` (number, default: 1) - Page number for pagination

**Authentication:** Requires X-API-Key header

**Firestore Query:**
```javascript
const query = db.collection('generated_content')
  .where('status', '==', 'published')
  .orderBy('published_at', 'desc');

// If category provided:
if (category) {
  query = query.where('category', '==', category);
}

// Pagination:
query = query.limit(limit);
if (page > 1) {
  query = query.offset((page - 1) * limit);
}
```

**Response:**
```json
{
  "articles": [
    {
      "id": "abc123",
      "slug": "ai-transparency-explained",
      "title": "AI Transparency Explained",
      "excerpt": "Understanding why AI systems need to explain themselves...",
      "content": "# AI Transparency Explained\n\nFull markdown content here...",
      "author": {
        "name": "ClearForge Team",
        "avatar": "https://...",
        "role": "Content Team"
      },
      "category": "blog",
      "tags": ["AI", "Transparency", "Ethics"],
      "featured_image": "https://...",
      "published_at": "2025-10-15T10:00:00Z",
      "updated_at": "2025-10-16T14:30:00Z",
      "views": 1250,
      "featured": true,
      "seo": {
        "title": "AI Transparency Guide",
        "description": "Complete guide to AI transparency...",
        "og_image": "https://..."
      }
    }
  ],
  "total": 45,
  "page": 1,
  "limit": 20
}
```

**Error Responses:**
- `400` - Invalid parameters
- `401` - Invalid API key
- `500` - Server error

---

### 2. GET /api/public/content/articles/:slug

**Purpose:** Fetch a single article by its slug

**Path Parameters:**
- `slug` (string) - Article slug (e.g., "ai-transparency-explained")

**Authentication:** Requires X-API-Key header

**Firestore Query:**
```javascript
const doc = await db.collection('generated_content')
  .where('slug', '==', slug)
  .where('status', '==', 'published')
  .limit(1)
  .get();
```

**Optional:** Increment view counter when article is fetched

**Response:**
```json
{
  "article": {
    "id": "abc123",
    "slug": "ai-transparency-explained",
    "title": "AI Transparency Explained",
    "excerpt": "Understanding why AI systems need to explain themselves...",
    "content": "# AI Transparency Explained\n\n## Introduction\n\nFull markdown content here...",
    "author": {
      "name": "ClearForge Team",
      "avatar": "https://...",
      "role": "Content Team"
    },
    "category": "blog",
    "tags": ["AI", "Transparency", "Ethics"],
    "featured_image": "https://...",
    "published_at": "2025-10-15T10:00:00Z",
    "updated_at": "2025-10-16T14:30:00Z",
    "views": 1251,
    "seo": {
      "title": "AI Transparency Guide",
      "description": "Complete guide to AI transparency...",
      "og_image": "https://..."
    }
  }
}
```

**Error Responses:**
- `404` - Article not found
- `401` - Invalid API key
- `500` - Server error

---

### 3. GET /api/public/content/featured

**Purpose:** Fetch featured articles for homepage/blog highlights

**Query Parameters:**
- `limit` (number, default: 3) - Number of featured articles to return

**Authentication:** Requires X-API-Key header

**Firestore Query:**
```javascript
const query = db.collection('generated_content')
  .where('status', '==', 'published')
  .where('featured', '==', true)
  .orderBy('published_at', 'desc')
  .limit(limit);
```

**Response:**
```json
{
  "articles": [
    {
      "id": "abc123",
      "slug": "ai-transparency-explained",
      "title": "AI Transparency Explained",
      "excerpt": "Understanding why AI systems need to explain themselves...",
      "content": "# AI Transparency Explained\n\nFull content...",
      "author": {
        "name": "ClearForge Team"
      },
      "category": "blog",
      "tags": ["AI", "Transparency"],
      "featured_image": "https://...",
      "published_at": "2025-10-15T10:00:00Z",
      "views": 1250
    }
  ]
}
```

**Error Responses:**
- `400` - Invalid parameters
- `401` - Invalid API key
- `500` - Server error

---

## Implementation Notes

### Authentication
All endpoints should verify the API key matches the configured key:
```javascript
const apiKey = req.headers['x-api-key'];
if (apiKey !== process.env.CONTENT_API_KEY) {
  return res.status(401).json({ error: 'Invalid API key' });
}
```

### Rate Limiting
- Apply same rate limiting as other public endpoints (5 req/min per IP)
- Already configured in website client

### Error Handling
- Return consistent JSON error format
- Log errors for debugging
- Don't expose internal error details

### CORS
- Allow requests from website domain
- Already configured in Gateway

### Caching
- Consider adding Cache-Control headers
- Website uses ISR (revalidates every 5-10 min)

---

## Testing

**Test with curl:**
```bash
# List articles
curl -X GET "https://your-gateway.run.app/api/public/content/articles?limit=10" \
  -H "X-API-Key: your-api-key-here"

# Get single article
curl -X GET "https://your-gateway.run.app/api/public/content/articles/ai-transparency-explained" \
  -H "X-API-Key: your-api-key-here"

# Get featured articles
curl -X GET "https://your-gateway.run.app/api/public/content/featured?limit=3" \
  -H "X-API-Key: your-api-key-here"
```

---

## Website Integration

The website will call these endpoints via:
- **Client:** `lib/gateway-client.ts`
- **Methods:** `getArticles()`, `getArticleBySlug()`, `getFeaturedArticles()`
- **Pages:** `/blog` (list), `/blog/[slug]` (individual article)
- **Rendering:** ISR with 5-10 minute revalidation

---

## Next Steps

1. Implement the 3 endpoints in Intelligence Gateway
2. Test endpoints with sample data in Firestore
3. Verify API key authentication works
4. Test from website (after deployment)
5. Monitor logs for errors
6. Add sample articles to test the system

---

**Questions?** Refer to:
- Website code: `lib/gateway-client.ts`
- Type definitions: `types/index.ts`
- Blog pages: `app/blog/page.tsx`, `app/blog/[slug]/page.tsx`
