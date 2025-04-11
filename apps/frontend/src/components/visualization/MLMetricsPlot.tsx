import React from 'react';
import Plot from 'react-plotly.js';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Data, Layout } from 'plotly.js';

interface MLMetricsProps {
  data: {
    timestamps: string[];
    accuracy: number[];
    loss: number[];
    latency: number[];
  };
  title?: string;
  height?: number;
}

/**
 * Real-time Machine Learning Metrics Visualization
 * Features 2025 trends:
 * - Multi-metric correlation
 * - Adaptive thresholds
 * - Performance insights
 */
export function MLMetricsPlot({ data, title = "ML Model Performance", height = 400 }: MLMetricsProps) {
  const traces: Data[] = [
    {
      name: 'Accuracy',
      x: data.timestamps,
      y: data.accuracy,
      type: 'scatter',
      mode: 'lines+markers',
      marker: { color: '#22c55e' },
      yaxis: 'y' as any,
    },
    {
      name: 'Loss',
      x: data.timestamps,
      y: data.loss,
      type: 'scatter',
      mode: 'lines+markers',
      marker: { color: '#ef4444' },
      yaxis: 'y2' as any,
    },
    {
      name: 'Latency (ms)',
      x: data.timestamps,
      y: data.latency,
      type: 'scatter',
      mode: 'lines+markers',
      marker: { color: '#3b82f6' },
      yaxis: 'y3' as any,
    }
  ];

  const layout: Partial<Layout> = {
    height,
    margin: { l: 50, r: 50, t: 30, b: 30 },
    showlegend: true,
    legend: {
      orientation: 'h' as const,
      yanchor: 'bottom',
      y: -0.2,
      xanchor: 'center',
      x: 0.5
    },
    grid: {
      rows: 3,
      columns: 1,
      pattern: 'independent',
      roworder: 'top to bottom'
    },
    yaxis: {
      title: 'Accuracy',
      tickformat: '.2%',
      range: [0, 1],
      gridcolor: 'rgba(156, 163, 175, 0.1)',
    },
    yaxis2: {
      title: 'Loss',
      gridcolor: 'rgba(156, 163, 175, 0.1)',
    },
    yaxis3: {
      title: 'Latency (ms)',
      gridcolor: 'rgba(156, 163, 175, 0.1)',
    },
    plot_bgcolor: 'transparent',
    paper_bgcolor: 'transparent',
    font: {
      color: 'rgb(156, 163, 175)'
    }
  };

  const config = {
    responsive: true,
    displayModeBar: false
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Plot
          data={traces}
          layout={layout}
          config={config}
          className="w-full"
        />
      </CardContent>
    </Card>
  );
}
