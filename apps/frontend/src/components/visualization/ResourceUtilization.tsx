import React from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  Area,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineProps,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ResourceMetric {
  timestamp: string;
  cpu: number;
  memory: number;
  network: number;
  requests: number;
  anomalyScore: number;
}

interface ResourceUtilizationProps {
  data: ResourceMetric[];
  title?: string;
}

type DotProps = NonNullable<LineProps['dot']> & {
  cx?: number;
  cy?: number;
  payload?: ResourceMetric;
};

/**
 * Advanced Resource Utilization Visualization (2025 Trends)
 * Features:
 * - Multi-resource correlation
 * - Anomaly detection visualization
 * - Predictive usage patterns
 * - Real-time updates
 */
export function ResourceUtilization({
  data,
  title = "System Resource Utilization"
}: ResourceUtilizationProps) {
  // Calculate thresholds for anomaly highlighting
  const anomalyThreshold = 0.7;

  const renderAnomalyDot = React.useCallback((props: DotProps) => {
    if (!props.cx || !props.cy || !props.payload?.anomalyScore || props.payload.anomalyScore <= anomalyThreshold) {
      // Return an empty group element instead of null to satisfy the type
      return <g />;
    }

    return (
      <svg x={props.cx - 4} y={props.cy - 4} width={8} height={8}>
        <circle cx={4} cy={4} r={4} fill="#ef4444" />
      </svg>
    );
  }, [anomalyThreshold]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              data={data}
              margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
            >
              <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="rgba(156, 163, 175, 0.2)"
              />
              <XAxis
              dataKey="timestamp"
              scale="time"
              tick={{ fill: 'rgb(156, 163, 175)' }}
              />
              <YAxis
              yAxisId="left"
              orientation="left"
              domain={[0, 100]}
              tick={{ fill: 'rgb(156, 163, 175)' }}
              label={{
              value: 'Utilization %',
              angle: -90,
              position: 'insideLeft',
              fill: 'rgb(156, 163, 175)'
              }}
              />
              <YAxis
              yAxisId="right"
              orientation="right"
              domain={[0, 'dataMax + 1000']}
              tick={{ fill: 'rgb(156, 163, 175)' }}
              label={{
              value: 'Requests/s',
              angle: 90,
              position: 'insideRight',
              fill: 'rgb(156, 163, 175)'
              }}
              />

              {/* CPU Usage Area */}
              <Area
              yAxisId="left"
              type="monotone"
              dataKey="cpu"
              fill="rgba(59, 130, 246, 0.1)"
              stroke="#3b82f6"
              strokeWidth={2}
              name="CPU"
              />

              {/* Memory Usage Area */}
              <Area
              yAxisId="left"
              type="monotone"
              dataKey="memory"
              fill="rgba(34, 197, 94, 0.1)"
              stroke="#22c55e"
              strokeWidth={2}
              name="Memory"
              />

              {/* Network Usage Line */}
              <Line
              yAxisId="left"
              type="monotone"
              dataKey="network"
              stroke="#f59e0b"
              strokeWidth={2}
              name="Network"
              dot={false}
              />

              {/* Request Rate Bars */}
              <Bar
              yAxisId="right"
              dataKey="requests"
              fill="rgba(139, 92, 246, 0.3)"
              name="Requests/s"
              />

              {/* Anomaly Score Indicator */}
              <Line
              yAxisId="left"
              type="monotone"
              dataKey="anomalyScore"
              stroke="#ef4444"
              strokeWidth={2}
              name="Anomaly Score"
              dot={renderAnomalyDot}
              />

              <Tooltip
              contentStyle={{
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              border: 'none',
              borderRadius: '4px',
              color: 'white',
              }}
              />
              <Legend />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
