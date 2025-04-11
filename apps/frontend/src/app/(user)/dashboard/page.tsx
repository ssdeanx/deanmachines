import { Metadata } from "next"
import { auth } from "../../../../auth"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ResourceUtilization } from "@/components/visualization/ResourceUtilization"
import { MLMetricsPlot } from "@/components/visualization/MLMetricsPlot"
import { AIActivityHeatmap } from "@/components/visualization/AIActivityHeatmap"
import { generateMockData } from "@/lib/mock-data"

export const metadata: Metadata = {
  title: "Dashboard - DeanMachines",
  description: "User dashboard for DeanMachines platform",
}

export default async function DashboardPage() {
  const session = await auth()
  const user = session?.user
  const { aiActivityData, mlMetricsData, resourceData } = generateMockData()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Welcome back, {user?.name}</h1>
        <p className="text-muted-foreground">
          Here&apos;s an overview of your AI system&apos;s performance and activity.
        </p>
      </div>

      <div className="grid gap-6">
        {/* Quick Stats */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Models</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">
                +2 from last week
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg. Response Time</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">126ms</div>
              <p className="text-xs text-muted-foreground">
                -14ms from last hour
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Requests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">45.2k</div>
              <p className="text-xs text-muted-foreground">
                +2.3k from yesterday
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">System Health</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-500">98.2%</div>
              <p className="text-xs text-muted-foreground">
                Normal operation
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Resource Utilization Chart */}
        <ResourceUtilization
          data={resourceData}
          title="System Resource Utilization"
        />

        {/* ML Metrics Chart */}
        <MLMetricsPlot
          data={mlMetricsData}
          title="ML Model Performance Metrics"
        />

        {/* AI Activity Heatmap */}
        <Card>
          <CardHeader>
            <CardTitle>AI Activity Patterns</CardTitle>
          </CardHeader>
          <CardContent>
            <AIActivityHeatmap
              data={aiActivityData}
              height={300}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
