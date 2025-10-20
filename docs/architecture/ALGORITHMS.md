# Algorithm Specifications
## ClearForge Website

**Version:** 1.0
**Last Updated:** 2025-10-10

---

## 1. Rate Limiting Algorithm

**Purpose:** Prevent API abuse and runaway costs

**Algorithm:** Sliding Window Counter

**Implementation:** `lib/rate-limiter.ts`

```typescript
function rateLimit(identifier: string, limit: number, windowMs: number): boolean {
  const now = Date.now();
  const record = requestCounts.get(identifier);

  // No record or window expired - allow and create new record
  if (!record || now > record.resetAt) {
    requestCounts.set(identifier, {
      count: 1,
      resetAt: now + windowMs
    });
    return true;
  }

  // Rate limit exceeded
  if (record.count >= limit) {
    return false;
  }

  // Increment counter and allow
  record.count++;
  return true;
}
```

**Time Complexity:** O(1)
**Space Complexity:** O(n) where n = unique IPs in time window

**Parameters:**
- `identifier`: User IP address (from headers)
- `limit`: Max requests allowed (default: 5)
- `windowMs`: Time window in milliseconds (default: 60000 = 1 min)

**Edge Cases:**
- Clock skew: Uses Date.now() which can jump forward/backward → Acceptable risk
- Memory leak: Cleanup interval (5 min) removes expired records
- Container restart: Rate limits reset → Acceptable (low-traffic site)

---

## 2. Exponential Backoff Retry

**Purpose:** Retry transient Gateway failures without overwhelming server

**Algorithm:** Exponential Backoff with Jitter

**Implementation:** `lib/retry.ts`

```typescript
async function withSmartRetry<T>(fn: () => Promise<T>, options: RetryOptions): Promise<T> {
  const { retries = 3, initialDelay = 1000, maxDelay = 10000, backoffFactor = 2 } = options;

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      if (!isRetryableError(error) || attempt === retries) {
        throw error;
      }

      const delay = Math.min(
        initialDelay * Math.pow(backoffFactor, attempt),
        maxDelay
      );

      await sleep(delay);
    }
  }
}

function isRetryableError(error: any): boolean {
  // Network errors
  if (error.code === 'ECONNREFUSED' || error.code === 'ETIMEDOUT') return true;

  // HTTP 5xx (server errors)
  if (error.response?.status >= 500 && error.response?.status < 600) return true;

  // HTTP 429 (rate limit)
  if (error.response?.status === 429) return true;

  return false;
}
```

**Time Complexity:** O(n) where n = retries
**Delay Sequence (default):** 1s → 2s → 4s → fail (total 7s max)

**Retryable Errors:**
- 5xx (server errors)
- 429 (rate limit - Gateway side)
- ECONNREFUSED (connection refused)
- ETIMEDOUT (timeout)

**Non-Retryable Errors:**
- 4xx (client errors - except 429)
- 2xx (success)
- 3xx (redirects)

---

## 3. IP Address Extraction

**Purpose:** Identify user for rate limiting

**Algorithm:** Header Precedence Chain

**Implementation:** `lib/rate-limiter.ts`

```typescript
function getIdentifier(headers: Headers): string {
  // 1. Check X-Forwarded-For (load balancer)
  const forwarded = headers.get('x-forwarded-for');
  if (forwarded) {
    // Take first IP (client, not proxies)
    return forwarded.split(',')[0].trim();
  }

  // 2. Check X-Real-IP (alternative header)
  const realIp = headers.get('x-real-ip');
  if (realIp) {
    return realIp;
  }

  // 3. Fallback (should never happen on Cloud Run)
  return 'unknown';
}
```

**Precedence:**
1. `x-forwarded-for` (Cloud Run sets this)
2. `x-real-ip` (fallback)
3. `'unknown'` (shouldn't happen)

**Edge Cases:**
- Multiple proxies: Takes first IP only (originating client)
- IPv6: Works (treats as string)
- VPN/Proxy: Different IP = different limit (acceptable)

---

## 4. Form Field Mapping

**Purpose:** Transform website field names to Gateway format

**Algorithm:** Object Transformation

**Implementation:** `app/api/beta/route.ts`

```typescript
const formData = await request.json();

// Map website fields → Gateway fields
const gatewayData = {
  company_name: formData.businessName,
  contact_name: formData.name,
  email: formData.email,
  phone: formData.phone,
  website: formData.website,
  industry: formData.industry,
  goals: formData.goals,
  // ... rest of mappings
};
```

**Time Complexity:** O(1) - fixed number of fields
**Space Complexity:** O(1) - new object with same field count

---

## 5. Memory Cleanup (Rate Limiter)

**Purpose:** Prevent memory leaks from stale rate limit records

**Algorithm:** Periodic Sweep

**Implementation:** `lib/rate-limiter.ts`

```typescript
// Run every 5 minutes
setInterval(() => {
  const now = Date.now();

  for (const [key, record] of requestCounts.entries()) {
    if (now > record.resetAt) {
      requestCounts.delete(key);
    }
  }
}, 300000); // 5 minutes
```

**Time Complexity:** O(n) where n = total records
**Frequency:** Every 5 minutes
**Memory Impact:** Prevents unbounded growth

**Edge Cases:**
- High traffic: Many IPs → More memory used → Cleanup more important
- Low traffic: Few IPs → Cleanup overhead negligible

---

## 6. Email Validation (Future: Advanced)

**Current:** Simple regex (`/^[^\s@]+@[^\s@]+\.[^\s@]+$/`)

**Future Enhancement:** Multi-stage validation

```typescript
async function validateEmail(email: string): Promise<boolean> {
  // Stage 1: Format validation
  if (!emailRegex.test(email)) return false;

  // Stage 2: Disposable email check (future)
  if (await isDisposableEmail(email)) return false;

  // Stage 3: MX record check (future)
  if (!await hasMXRecord(email)) return false;

  return true;
}
```

---

## Document History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2025-10-10 | Claude | Initial algorithm specs |
