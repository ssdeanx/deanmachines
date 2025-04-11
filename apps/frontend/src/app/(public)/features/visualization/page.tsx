import { Metadata } from "next";
import { generateMockData } from "@/lib/mock-data";
import { ResourceUtilization } from "@/components/visualization/ResourceUtilization";
import { MLMetricsPlot } from "@/components/visualization/MLMetricsPlot";
import { AIActivityHeatmap } from "@/components/visualization/AIActivityHeatmap";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Advanced AI Visualizations (2025 Ready) | DeanMachines AI",
  description: "Explore DeanMachines AI's cutting-edge 2025 visualization suite. Real-time analytics, predictive insights, and multimodal data visualization for AI systems.",
  keywords: [
    "AI visualization", "data visualization", "machine learning visualization",
    "AI dashboard", "real-time analytics", "predictive analytics visualization",
    "D3.js AI", "Plotly AI", "Recharts AI",
    "AI system monitoring", "SGE visualization insights", "multimodal data visualization",
    "AI performance metrics", "anomaly detection visualization", "interactive AI charts",
    "DeanMachines AI visualization", "DeanMachines AI features"
  ],
  openGraph: {
    title: "DeanMachines AI: Cutting-Edge AI Visualizations (2025 Trends)",
    description: "Visualize complex AI system performance with DeanMachines AI's advanced, real-time analytics suite.",
    url: "https://deanmachines.com/features/visualization",
    siteName: "DeanMachines AI",
    images: [
      {
        url: "https://deanmachines.com/og-image-visualization-2025.png",
        width: 1200,
        height: 630,
        alt: "DeanMachines AI Advanced Visualizations",
      },
    ],
    locale: "en_US",
    type: "article",
    publishedTime: new Date().toISOString(),
    modifiedTime: new Date().toISOString(),
    section: "Features",
  },
  twitter: {
    card: "summary_large_image",
    title: "DeanMachines AI: Advanced 2025 Visualizations",
    description: "Monitor AI performance in real-time with DeanMachines AI's interactive visualization tools.",
    images: ["https://deanmachines.com/twitter-image-visualization-2025.png"],
  },
  alternates: {
    canonical: "https://deanmachines.com/features/visualization",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function VisualizationFeaturePage() {
  const { aiActivityData, mlMetricsData, resourceData } = generateMockData();

  return (
    <div className="container py-12 md:py-16">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          Advanced AI System Visualizations
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore DeanMachines AI's cutting-edge 2025 visualization suite designed for deep insights into modern AI systems.
        </p>
      </div>

      <div className="space-y-12 md:space-y-16">
        <section className="scroll-mt-20" id="resource-analytics">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-4">Resource Utilization Analytics</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Gain real-time visibility into CPU, memory, and network usage across your AI infrastructure. Our advanced charts correlate resource consumption with request rates and automatically highlight potential anomalies using predictive algorithms.
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Correlate multiple resource metrics simultaneously.</li>
                <li>Visualize anomaly scores for proactive issue detection.</li>
                <li>Track request rates alongside resource usage.</li>
                <li>Optimized for real-time data streams.</li>
              </ul>
            </div>
            <ResourceUtilization
              data={resourceData}
              title="System Resource Analytics"
            />
          </div>
        </section>

        <section className="scroll-mt-20" id="ml-performance">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="md:order-last">
              <h2 className="text-3xl font-semibold mb-4">ML Model Performance Metrics</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Monitor the critical performance indicators of your machine learning models. Track accuracy, loss, and inference latency over time to ensure optimal performance and identify areas for retraining or optimization. Supports multi-metric views for comprehensive analysis.
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Track accuracy, loss, and latency trends.</li>
                <li>Compare performance across different model versions.</li>
                <li>Identify performance degradation quickly.</li>
                <li>Supports real-time monitoring during training and inference.</li>
              </ul>
            </div>
            <MLMetricsPlot
              data={mlMetricsData}
              title="Model Performance Analytics"
            />
          </div>
        </section>

        <section className="scroll-mt-20" id="activity-patterns">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-4">AI Activity Patterns</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Understand how your AI systems are being utilized with intuitive heatmaps. Visualize workload distribution across different categories (API calls, inference, training) and time periods to identify peak usage times, bottlenecks, and operational patterns.
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Visualize activity intensity across time and categories.</li>
                <li>Identify peak hours and usage trends.</li>
                <li>Analyze workload distribution for resource planning.</li>
                <li>Supports large datasets for long-term pattern analysis.</li>
              </ul>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>AI System Activity Heatmap</CardTitle>
              </CardHeader>
              <CardContent>
                <AIActivityHeatmap
                  data={aiActivityData}
                  height={400}
                />
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="bg-muted/50 rounded-lg p-8 mt-16">
          <h2 className="text-3xl font-semibold mb-6 text-center">Why Choose DeanMachines AI Visualizations?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Real-time Analytics", desc: "Live monitoring with sub-second latency for immediate insights." },
              { title: "Anomaly Detection", desc: "Advanced algorithms identify and highlight system anomalies automatically." },
              { title: "Predictive Insights", desc: "AI-powered forecasting helps prevent issues before they occur." },
              { title: "Interactive Exploration", desc: "Rich interaction capabilities for deep diving into your data." },
              { title: "Adaptive Theming", desc: "Seamless light/dark mode support with customizable color schemes." },
              { title: "Performance Optimized", desc: "Built for handling large datasets without compromising responsiveness." },
            ].map((feature) => (
              <div key={feature.title}>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
