import { cn } from "@/lib/utils";

export interface DataPoint {
  name: string;
  value: number;
}

/**
 * Mock data generator for demo purposes
 */
export function generateMockData() {
  // AI Activity data
  const aiActivityData = Array.from({ length: 24 }, (_, i) => {
    const categories = [
      "Inference",
      "Training",
      "Data Processing",
      "API Calls",
    ];
    return categories.map((category) => ({
      timestamp: `${i}:00`,
      category,
      value: Math.random() * 100,
    }));
  }).flat();

  // ML Metrics data
  const timestamps = Array.from({ length: 48 }, (_, i) =>
    new Date(Date.now() - (47 - i) * 30 * 60000).toISOString()
  );
  const mlMetricsData = {
    timestamps,
    accuracy: timestamps.map(() => 0.75 + Math.random() * 0.2),
    loss: timestamps.map(() => Math.random() * 0.5),
    latency: timestamps.map(() => 50 + Math.random() * 100),
  };

  // Resource metrics data
  const resourceData = timestamps.map((timestamp) => ({
    timestamp,
    cpu: 30 + Math.random() * 50,
    memory: 40 + Math.random() * 40,
    network: 20 + Math.random() * 60,
    requests: 500 + Math.random() * 1500,
    anomalyScore:
      Math.random() > 0.9 ? 0.8 + Math.random() * 0.2 : Math.random() * 0.5,
  }));

  return {
    aiActivityData,
    mlMetricsData,
    resourceData,
  };
}
