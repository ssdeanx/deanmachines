export function rateLimit({
  interval,
  _uniqueTokenPerInterval,
}: {
  interval: number;
  _uniqueTokenPerInterval: number;
}): { check(req: Request, limit: number, token: string): Promise<void> } {
  const tokens = new Map();

  return {
    async check(req: Request, limit: number, token: string) {
      const timestamp = Date.now();
      const tokenCount = tokens.get(token) || [0];
      const [count, oldTimestamp] = tokenCount;

      if (timestamp - oldTimestamp > interval) {
        tokens.set(token, [1, timestamp]);

        return;
      }

      if (count >= limit) {
        throw new Error("Rate limit exceeded");
      }

      tokens.set(token, [count + 1, oldTimestamp]);
    },
  };
}
