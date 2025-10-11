# Data Model / Schema Documentation
## ClearForge Website

**Version:** 1.0
**Last Updated:** 2025-10-10
**Database:** Firestore (managed by Intelligence Gateway)

---

## Overview

The ClearForge website is **stateless** - it does not maintain its own database. All data persistence is handled by the Intelligence Gateway API, which stores data in Google Firestore.

This document describes the data models used in the system, their relationships, and validation rules.

---

## Data Models

### 1. BetaApplication

**Purpose:** Beta program application submissions
**Collection:** `beta_applications` (in Gateway's Firestore)
**Lifecycle:** Created on form submission → Reviewed by team → Approved/Rejected

#### TypeScript Interface

```typescript
interface BetaApplication {
  // Identifiers
  application_id?: string;           // Auto-generated UUID

  // Business Information (Required)
  company_name: string;              // Min: 1, Max: 255 chars
  industry: string;                  // Min: 1, Max: 100 chars
  contact_name: string;              // Min: 1, Max: 100 chars
  email: string;                     // Validated email format

  // Business Information (Optional)
  phone?: string;                    // Any format accepted
  website?: string;                  // URL format preferred
  monthly_revenue?: string;          // Future field

  // Current State
  current_marketing?: string[];      // Checkbox selections

  // Goals & Vision (Required)
  goals: string;                     // Min: 10, Max: 5000 chars

  // Engagement
  interests?: string[];              // Selected areas of interest
  commitment?: string;               // Commitment level

  // Referral
  referred_by?: string;              // Referral source
  referral_details?: string;         // Additional referral info

  // Additional
  additional_info?: string;          // Free-form text

  // Metadata (Server-added)
  submitted_at?: string;             // ISO 8601 timestamp
  source_page?: string;              // Referring URL
  user_agent?: string;               // Browser info
  ip_address?: string;               // User IP (for analytics)

  // Status
  status?: 'pending' | 'reviewing' | 'approved' | 'rejected' | 'contacted';
  reviewed_by?: string;              // Team member email
  reviewed_at?: string;              // ISO 8601 timestamp
  notes?: string;                    // Internal notes

  // Scoring (Gateway-calculated)
  lead_score?: number;               // 0-100 score
  qualification_tier?: 'gold' | 'silver' | 'bronze' | 'unqualified';
}
```

#### Field Definitions

| Field | Type | Required | Validation | Description |
|-------|------|----------|------------|-------------|
| `application_id` | string | Auto | UUID v4 | Unique identifier |
| `company_name` | string | Yes | 1-255 chars | Business name |
| `industry` | string | Yes | 1-100 chars | Industry/vertical |
| `contact_name` | string | Yes | 1-100 chars | Applicant's full name |
| `email` | string | Yes | Email regex | Contact email |
| `phone` | string | No | None | Phone number (any format) |
| `website` | string | No | URL format | Company website |
| `goals` | string | Yes | 10-5000 chars | Business transformation goals |
| `interests` | string[] | No | Array | Selected focus areas |
| `commitment` | string | No | Enum | Level of involvement |
| `referred_by` | string | No | 1-100 chars | How they found us |
| `submitted_at` | string | Auto | ISO 8601 | Submission timestamp |
| `status` | string | Auto | Enum | Application status |
| `lead_score` | number | Auto | 0-100 | Quality score |

#### Firestore Schema

```javascript
// Collection: beta_applications
{
  // Document ID: auto-generated
  "application_id": "app_1234567890abcdef",
  "company_name": "Acme Corporation",
  "industry": "Real Estate",
  "contact_name": "John Doe",
  "email": "john@acme.com",
  "phone": "+1-555-123-4567",
  "website": "https://acme.com",
  "goals": "We want to improve our lead generation by 50% using AI...",
  "interests": ["search-optimization", "ai-amplification"],
  "commitment": "full",
  "referred_by": "referral",
  "referral_details": "Jane Smith recommended ClearForge",
  "submitted_at": "2025-10-10T14:30:00Z",
  "source_page": "https://clearforge.ai/beta",
  "user_agent": "Mozilla/5.0 ...",
  "ip_address": "203.0.113.45",
  "status": "pending",
  "lead_score": 87,
  "qualification_tier": "gold"
}
```

#### Indexes (Firestore)

```javascript
// Composite indexes
{
  "collectionGroup": "beta_applications",
  "queryScope": "COLLECTION",
  "fields": [
    { "fieldPath": "status", "order": "ASCENDING" },
    { "fieldPath": "lead_score", "order": "DESCENDING" },
    { "fieldPath": "submitted_at", "order": "DESCENDING" }
  ]
}

// Single-field indexes (auto-created)
- email (ASCENDING)
- submitted_at (DESCENDING)
- status (ASCENDING)
- lead_score (DESCENDING)
```

---

### 2. ContactSubmission

**Purpose:** General contact form submissions
**Collection:** `contact_submissions` (in Gateway's Firestore)
**Lifecycle:** Created on form submission → Routed to appropriate team member → Responded

#### TypeScript Interface

```typescript
interface ContactSubmission {
  // Identifiers
  submission_id?: string;            // Auto-generated UUID

  // Contact Information (Required)
  name: string;                      // Min: 1, Max: 100 chars
  email: string;                     // Validated email format
  message: string;                   // Min: 10, Max: 5000 chars

  // Contact Information (Optional)
  phone?: string;                    // Any format
  company?: string;                  // Company name
  subject?: string;                  // Message subject

  // Metadata (Server-added)
  submitted_at?: string;             // ISO 8601 timestamp
  source_page?: string;              // Referring URL
  user_agent?: string;               // Browser info
  ip_address?: string;               // User IP

  // Status
  status?: 'new' | 'assigned' | 'responded' | 'closed';
  assigned_to?: string;              // Team member email
  assigned_at?: string;              // ISO 8601 timestamp
  responded_at?: string;             // ISO 8601 timestamp
  notes?: string;                    // Internal notes

  // Classification (Gateway-calculated)
  intent?: 'sales' | 'support' | 'partnership' | 'general';
  priority?: 'urgent' | 'high' | 'normal' | 'low';
}
```

#### Field Definitions

| Field | Type | Required | Validation | Description |
|-------|------|----------|------------|-------------|
| `submission_id` | string | Auto | UUID v4 | Unique identifier |
| `name` | string | Yes | 1-100 chars | Contact's name |
| `email` | string | Yes | Email regex | Contact email |
| `message` | string | Yes | 10-5000 chars | Message content |
| `phone` | string | No | None | Phone number |
| `company` | string | No | 1-255 chars | Company name |
| `subject` | string | No | 1-255 chars | Message subject |
| `submitted_at` | string | Auto | ISO 8601 | Submission timestamp |
| `status` | string | Auto | Enum | Processing status |
| `intent` | string | Auto | Enum | Message classification |
| `priority` | string | Auto | Enum | Urgency level |

#### Firestore Schema

```javascript
// Collection: contact_submissions
{
  // Document ID: auto-generated
  "submission_id": "sub_9876543210fedcba",
  "name": "Jane Smith",
  "email": "jane@example.com",
  "phone": "+1-555-987-6543",
  "company": "Example Inc",
  "subject": "Partnership Inquiry",
  "message": "I'm interested in partnering with ClearForge on...",
  "submitted_at": "2025-10-10T15:45:00Z",
  "source_page": "https://clearforge.ai/contact",
  "user_agent": "Mozilla/5.0 ...",
  "ip_address": "203.0.113.67",
  "status": "new",
  "intent": "partnership",
  "priority": "high"
}
```

---

### 3. ASOOpportunity

**Purpose:** ASO (App Store Optimization) keyword opportunities
**Collection:** `aso_opportunities` (in Gateway's Firestore)
**Lifecycle:** Generated by ASO engine → Updated periodically → Served to website

#### TypeScript Interface

```typescript
interface ASOOpportunity {
  // Identifiers
  opportunity_id?: string;           // Auto-generated UUID
  keyword: string;                   // Search term

  // Metrics
  search_volume: number;             // Monthly search volume
  difficulty: number;                // 0-100 (0=easy, 100=hard)
  relevance_score: number;           // 0-100 (how relevant to ClearForge)
  opportunity_score: number;         // 0-100 (composite score)

  // Trend Analysis
  trend: 'rising' | 'stable' | 'declining';
  trend_percentage?: number;         // % change in 30 days

  // SERP Features
  serp_features: string[];           // e.g., ["featured_snippet", "people_also_ask"]

  // Competition
  competition_level?: 'low' | 'medium' | 'high';
  top_competitors?: string[];        // URLs of top-ranking pages

  // Metadata
  generated_at: string;              // ISO 8601 timestamp
  last_updated?: string;             // ISO 8601 timestamp
  data_source?: string;              // "google_trends", "semrush", etc.
}
```

#### Field Definitions

| Field | Type | Required | Validation | Description |
|-------|------|----------|------------|-------------|
| `keyword` | string | Yes | 1-255 chars | Search keyword |
| `search_volume` | number | Yes | >= 0 | Monthly searches |
| `difficulty` | number | Yes | 0-100 | Ranking difficulty |
| `relevance_score` | number | Yes | 0-100 | Relevance to business |
| `opportunity_score` | number | Yes | 0-100 | Overall opportunity |
| `trend` | string | Yes | Enum | Trend direction |
| `serp_features` | string[] | Yes | Array | SERP feature types |
| `generated_at` | string | Yes | ISO 8601 | Generation timestamp |

#### Firestore Schema

```javascript
// Collection: aso_opportunities
{
  // Document ID: auto-generated
  "opportunity_id": "aso_abc123def456",
  "keyword": "ai business transformation",
  "search_volume": 1200,
  "difficulty": 45,
  "relevance_score": 92,
  "opportunity_score": 87,
  "trend": "rising",
  "trend_percentage": 15.3,
  "serp_features": ["featured_snippet", "people_also_ask", "related_searches"],
  "competition_level": "medium",
  "top_competitors": [
    "https://example.com/ai-transformation",
    "https://competitor.com/business-ai"
  ],
  "generated_at": "2025-10-10T12:00:00Z",
  "last_updated": "2025-10-10T12:00:00Z",
  "data_source": "google_trends"
}
```

---

### 4. NewsletterSubscription (Future)

**Purpose:** Newsletter email subscriptions
**Collection:** `newsletter_subscriptions` (in Gateway's Firestore)
**Status:** Not yet implemented

#### TypeScript Interface

```typescript
interface NewsletterSubscription {
  subscription_id?: string;          // Auto-generated UUID
  email: string;                     // Validated email format
  source_page: string;               // Where they subscribed
  subscribed_at: string;             // ISO 8601 timestamp
  status: 'active' | 'unsubscribed' | 'bounced';
  preferences?: {
    frequency?: 'daily' | 'weekly' | 'monthly';
    topics?: string[];               // Interests
  };
  unsubscribed_at?: string;          // ISO 8601 timestamp
  last_email_sent_at?: string;       // ISO 8601 timestamp
}
```

---

## Data Relationships

### Entity Relationship Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                      Intelligence Gateway                        │
│                        (Firestore Database)                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  ┌──────────────────┐         ┌──────────────────────┐          │
│  │ beta_applications│         │ contact_submissions  │          │
│  ├──────────────────┤         ├──────────────────────┤          │
│  │ application_id   │         │ submission_id        │          │
│  │ email            │◄───┐    │ email                │          │
│  │ company_name     │    │    │ name                 │          │
│  │ status           │    │    │ message              │          │
│  │ lead_score       │    │    │ status               │          │
│  └──────────────────┘    │    │ intent               │          │
│                           │    └──────────────────────┘          │
│                           │                                      │
│                           │    ┌──────────────────────┐          │
│                           │    │ newsletter_subs      │          │
│                           │    ├──────────────────────┤          │
│                           └────┤ email                │          │
│                                │ status               │          │
│    No foreign keys             │ preferences          │          │
│    (NoSQL design)              └──────────────────────┘          │
│                                                                   │
│  ┌──────────────────┐                                            │
│  │ aso_opportunities│                                            │
│  ├──────────────────┤                                            │
│  │ opportunity_id   │                                            │
│  │ keyword          │          Independent collection           │
│  │ search_volume    │          (no relationships)                │
│  │ opportunity_score│                                            │
│  └──────────────────┘                                            │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

**Key Points:**
- **No foreign keys** - Firestore is NoSQL, no enforced relationships
- **Email commonality** - Email appears in multiple collections but not linked
- **Independent collections** - Each collection is standalone
- **Potential future joins** - Could query multiple collections by email to build user profile

---

## Validation Rules

### Email Validation

**Regex:** `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`

**Valid Examples:**
- `john@example.com`
- `jane.doe@company.co.uk`
- `support+beta@clearforge.ai`

**Invalid Examples:**
- `invalid.email` (no @)
- `@example.com` (no local part)
- `user@` (no domain)
- `user @example.com` (space)

### Phone Validation

**Rule:** Accept any format (no strict validation)

**Rationale:** International phone formats vary widely

**Examples Accepted:**
- `+1-555-123-4567`
- `(555) 123-4567`
- `555.123.4567`
- `+44 20 1234 5678`

### URL Validation

**Rule:** Must start with `http://` or `https://`

**Regex:** `/^https?:\/\/.+/`

**Valid Examples:**
- `https://example.com`
- `http://example.co.uk`
- `https://example.com/path?query=value`

**Invalid Examples:**
- `example.com` (no protocol)
- `www.example.com` (no protocol)
- `ftp://example.com` (wrong protocol)

### Text Field Limits

| Field Type | Min Length | Max Length | Rationale |
|------------|------------|------------|-----------|
| Name | 1 | 100 | Reasonable name length |
| Email | 5 | 255 | Email standard |
| Company | 1 | 255 | Business name length |
| Message | 10 | 5000 | Meaningful message |
| Goals | 10 | 5000 | Detailed description |
| Subject | 1 | 255 | Subject line length |

---

## Data Flow

### Beta Application Submission

```
1. User fills form → Client-side validation
2. Form submits to → POST /api/beta
3. API route validates → Server-side validation
4. API route calls → Gateway Client
5. Gateway Client retries → POST /api/beta/apply (Intelligence Gateway)
6. Gateway validates → Business rules
7. Gateway calculates → Lead score (algorithm)
8. Gateway writes → Firestore: beta_applications collection
9. Gateway returns → { success: true, application_id: "..." }
10. Website shows → Success message to user
```

### Contact Form Submission

```
1. User fills form → Client-side validation
2. Form submits to → POST /api/contact
3. API route validates → Server-side validation
4. API route calls → Gateway Client
5. Gateway Client retries → POST /api/leads/contact (Intelligence Gateway)
6. Gateway classifies → Intent detection (sales/support/partnership)
7. Gateway assigns → Priority level
8. Gateway writes → Firestore: contact_submissions collection
9. Gateway returns → { success: true, submission_id: "..." }
10. Website shows → Success message to user
```

---

## Security & Privacy

### PII (Personally Identifiable Information)

**PII Fields:**
- `email` - Primary PII
- `phone` - PII
- `name` / `contact_name` - PII
- `company_name` - Business identifier (not PII)
- `ip_address` - Potentially PII (stored for analytics)

### Data Protection

**Encryption:**
- **At Rest:** Firestore automatic encryption (Google-managed keys)
- **In Transit:** TLS 1.3 (HTTPS)

**Access Control:**
- **Website:** No direct database access (read or write)
- **Gateway:** Service account with specific Firestore permissions
- **Team:** Firebase Console access (role-based)

### GDPR Compliance

**Right to Access:** Gateway provides API to retrieve user data by email
**Right to Deletion:** Gateway provides API to delete user data by email
**Data Retention:** Configurable in Gateway (default: 7 years for business records)
**Consent:** Forms include privacy policy link and consent checkbox (future)

---

## Data Migrations

### Schema Evolution Strategy

**Approach:** Additive changes only (Firestore is schemaless)

**Process:**
1. Add new fields to TypeScript interfaces
2. Update validation rules
3. Deploy website changes
4. Deploy Gateway changes
5. Backfill existing documents (if needed)

**Example Migration:**
```javascript
// Add "industry_category" field to existing beta_applications

// Step 1: Update TypeScript interface
interface BetaApplication {
  // ... existing fields
  industry_category?: 'b2b' | 'b2c' | 'b2b2c'; // New field
}

// Step 2: Deploy website (handles new field)

// Step 3: Backfill script (run in Gateway)
const snapshot = await db.collection('beta_applications').get();
snapshot.forEach(async (doc) => {
  const industry = doc.data().industry;
  const category = categorizeIndustry(industry); // Business logic
  await doc.ref.update({ industry_category: category });
});
```

**No Downtime:** Schemaless design allows gradual migration

---

## Performance Considerations

### Firestore Limits

| Resource | Limit | Current Usage | Headroom |
|----------|-------|---------------|----------|
| **Reads/sec** | 10,000 | ~10 | 99.9% |
| **Writes/sec** | 10,000 | ~5 | 99.95% |
| **Document size** | 1 MB | ~5 KB avg | 99.5% |
| **Collection depth** | 100 levels | 1 level | 99% |

### Query Performance

**Indexed Queries:** < 100ms
**Non-indexed Queries:** Not used (all queries have indexes)
**Compound Queries:** < 200ms (status + score + date)

### Optimization Strategies

1. **Denormalization:** Store computed values (lead_score) to avoid recalculation
2. **Composite Indexes:** Pre-create indexes for common query patterns
3. **Pagination:** Limit query results to 50 documents max
4. **Caching:** Gateway caches frequently-accessed data (ASO opportunities)

---

## Document History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2025-10-10 | Claude (AI Assistant) | Initial schema documentation |

---

**End of Data Model / Schema Documentation**
