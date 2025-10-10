/**
 * Rate Limiter
 * In-memory rate limiting for API routes to prevent abuse and runaway costs
 */

interface RateLimitRecord {
  count: number;
  resetAt: number;
}

// In-memory store for rate limit tracking
const requestCounts = new Map<string, RateLimitRecord>();

// Cleanup old entries every 5 minutes to prevent memory leaks
setInterval(() => {
  const now = Date.now();
  for (const [key, record] of requestCounts.entries()) {
    if (now > record.resetAt) {
      requestCounts.delete(key);
    }
  }
}, 300000);

/**
 * Check if a request should be rate limited
 * @param identifier - Unique identifier (IP address or user ID)
 * @param limit - Maximum number of requests allowed in the time window
 * @param windowMs - Time window in milliseconds (default: 1 minute)
 * @returns true if request is allowed, false if rate limit exceeded
 */
export function rateLimit(
  identifier: string,
  limit: number = 10,
  windowMs: number = 60000
): boolean {
  const now = Date.now();
  const record = requestCounts.get(identifier);

  // No record or window expired - create new record
  if (!record || now > record.resetAt) {
    requestCounts.set(identifier, {
      count: 1,
      resetAt: now + windowMs,
    });
    return true;
  }

  // Rate limit exceeded
  if (record.count >= limit) {
    return false;
  }

  // Increment count and allow request
  record.count++;
  return true;
}

/**
 * Get the identifier from a request (IP address)
 * @param headers - Request headers
 * @returns IP address or 'unknown'
 */
export function getIdentifier(headers: Headers): string {
  // Check for forwarded IP (from load balancer/proxy)
  const forwarded = headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }

  // Check for real IP header
  const realIp = headers.get('x-real-ip');
  if (realIp) {
    return realIp;
  }

  // Fallback
  return 'unknown';
}

/**
 * Get remaining requests for an identifier
 * @param identifier - Unique identifier
 * @param limit - Maximum number of requests allowed
 * @returns Number of remaining requests
 */
export function getRemainingRequests(
  identifier: string,
  limit: number = 10
): number {
  const record = requestCounts.get(identifier);
  if (!record || Date.now() > record.resetAt) {
    return limit;
  }
  return Math.max(0, limit - record.count);
}

/**
 * Get reset time for an identifier
 * @param identifier - Unique identifier
 * @returns Reset time in seconds, or 0 if no limit active
 */
export function getResetTime(identifier: string): number {
  const record = requestCounts.get(identifier);
  if (!record || Date.now() > record.resetAt) {
    return 0;
  }
  return Math.ceil((record.resetAt - Date.now()) / 1000);
}
