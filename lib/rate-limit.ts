// Types
type TokenCount = [number, number]; // [count, timestamp]

interface RateLimitConfig {
  interval: number; // Time window in milliseconds
  uniqueTokenPerInterval: number; // Maximum number of unique tokens per interval
}

interface RateLimitError extends Error {
  status: number;
  headers: Record<string, string>;
}

/**
 * Creates a rate limiter instance
 * @param config - Rate limit configuration
 * @returns Object with check method to verify rate limits
 */
export function rateLimit({
  interval,
  uniqueTokenPerInterval,
}: RateLimitConfig) {
  // Store token counts in a Map
  const tokens = new Map<string, TokenCount>();

  // Clean up old tokens periodically
  setInterval(() => {
    const now = Date.now();

    for (const [token, [, timestamp]] of Array.from(tokens.entries())) {
      if (now - timestamp > interval) {
        tokens.delete(token);
      }
    }
  }, interval);

  return {
    /**
     * Checks if a request is within rate limits
     * @param req - Request object
     * @param limit - Maximum number of requests allowed per interval
     * @param token - Unique identifier for the client (e.g., IP address)
     * @throws {RateLimitError} When rate limit is exceeded
     */
    async check(req: Request, limit: number, token: string): Promise<void> {
      try {
        // Validate inputs
        if (limit <= 0) throw new Error("Limit must be greater than 0");
        if (!token) throw new Error("Token is required");

        const timestamp = Date.now();
        const tokenCount = tokens.get(token) || [0, timestamp];
        const [count, oldTimestamp] = tokenCount;

        // Reset count if interval has passed
        if (timestamp - oldTimestamp > interval) {
          tokens.set(token, [1, timestamp]);

          return;
        }

        // Check if limit is exceeded
        if (count >= limit) {
          const retryAfter = Math.ceil(
            (interval - (timestamp - oldTimestamp)) / 1000,
          );

          const error = new Error("Rate limit exceeded") as RateLimitError;

          error.status = 429;
          error.headers = {
            "Retry-After": String(retryAfter),
            "X-RateLimit-Limit": String(limit),
            "X-RateLimit-Remaining": "0",
            "X-RateLimit-Reset": String(
              Math.ceil((oldTimestamp + interval) / 1000),
            ),
          };
          throw error;
        }

        // Increment counter
        tokens.set(token, [count + 1, oldTimestamp]);

        // Clean up if too many tokens
        if (tokens.size > uniqueTokenPerInterval) {
          const oldestToken = Array.from(tokens.entries()).sort(
            ([, [, a]], [, [, b]]) => a - b,
          )[0][0];

          tokens.delete(oldestToken);
        }
      } catch (error) {
        if (error instanceof Error) {
          throw error;
        }
        throw new Error("Rate limit check failed");
      }
    },

    /**
     * Gets current rate limit status for a token
     * @param token - Unique identifier for the client
     * @returns Current count and timestamp
     */
    getStatus(token: string): { count: number; timestamp: number } | null {
      const status = tokens.get(token);

      if (!status) return null;

      return { count: status[0], timestamp: status[1] };
    },

    /**
     * Resets rate limit for a token
     * @param token - Unique identifier for the client
     */
    reset(token: string): void {
      tokens.delete(token);
    },

    /**
     * Clears all rate limit data
     */
    clear(): void {
      tokens.clear();
    },
  };
}

/**
 * Creates a rate limiter with default settings
 * @example
 * const limiter = createDefaultRateLimiter();
 * await limiter.check(req, "client-ip");
 */
export function createDefaultRateLimiter() {
  return rateLimit({
    interval: 60 * 1000, // 1 minute
    uniqueTokenPerInterval: 500,
  });
}
