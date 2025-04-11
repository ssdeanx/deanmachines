import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ResourceUtilization } from "@/components/visualization/ResourceUtilization"
import { MLMetricsPlot } from "@/components/visualization/MLMetricsPlot"
import { AIActivityHeatmap } from "@/components/visualization/AIActivityHeatmap"
import { generateMockData } from "@/lib/mock-data"

export const metadata: Metadata = {
  title: "Analytics - Admin Dashboard",
  description: "Advanced analytics and monitoring for system administrators",
}

export default function AdminAnalyticsPage() {
  const { aiActivityData, mlMetricsData, resourceData } = generateMockData()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">System Analytics</h1>
        <p className="text-muted-foreground">
          Comprehensive system analytics and performance monitoring.
        </p>
      </div>

      {/* Overview Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,834</div>
            <p className="text-xs text-muted-foreground">
              +180 this month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">System Load</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">68%</div>
            <p className="text-xs text-muted-foreground">
              +12% from average
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Error Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-500">0.12%</div>
            <p className="text-xs text-muted-foreground">
              -0.08% this week
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Uptime</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">99.99%</div>
            <p className="text-xs text-muted-foreground">
              Last 30 days
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Analytics Tabs */}
      <Tabs defaultValue="resources" className="space-y-4">
        <TabsList>
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="ml">ML Performance</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
        </TabsList>

        <TabsContent value="resources" className="space-y-4">
          <div className="grid gap-4">
            <ResourceUtilization
              data={resourceData}
              title="Global Resource Utilization"
            />
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>CPU Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResourceUtilization
                    data={resourceData.map(d => ({
                      ...d,
                      memory: 0,
                      network: 0,
                      requests: 0
                    }))}
                    title="CPU Detailed View"
                  />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Memory Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResourceUtilization
                    data={resourceData.map(d => ({
                      ...d,
                      cpu: 0,
                      network: 0,
                      requests: 0
                    }))}
                    title="Memory Detailed View"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="ml" className="space-y-4">
          <MLMetricsPlot
            data={mlMetricsData}
            title="Global ML Performance Metrics"
          />
          <div className="grid md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Model Accuracy Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <MLMetricsPlot
                  data={{
                    ...mlMetricsData,
                    loss: mlMetricsData.loss.map(() => 0),
                    latency: mlMetricsData.latency.map(() => 0)
                  }}
                  title="Accuracy Analysis"
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Latency Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <MLMetricsPlot
                  data={{
                    ...mlMetricsData,
                    accuracy: mlMetricsData.accuracy.map(() => 0),
                    loss: mlMetricsData.loss.map(() => 0)
                  }}
                  title="Latency Trends"
                />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="activity" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>System Activity Heatmap</CardTitle>
            </CardHeader>
            <CardContent>
              <AIActivityHeatmap
                data={aiActivityData}
                height={400}
              />
            </CardContent>
          </Card>
          <div className="grid md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>User Activity Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <AIActivityHeatmap
                  data={aiActivityData.filter(d =>
                    d.category === "API Calls" || d.category === "Inference"
                  )}
                  height={300}
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>System Tasks Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <AIActivityHeatmap
                  data={aiActivityData.filter(d =>
                    d.category === "Training" || d.category === "Data Processing"
                  )}
                  height={300}
                />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
