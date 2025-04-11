import { Metadata } from "next"
import { auth } from "../../../../auth"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ResourceUtilization } from "@/components/visualization/ResourceUtilization"
import { MLMetricsPlot } from "@/components/visualization/MLMetricsPlot"
import { AIActivityHeatmap } from "@/components/visualization/AIActivityHeatmap"
import { generateMockData } from "@/lib/mock-data"

export const metadata: Metadata = {
  title: "Admin Dashboard - DeanMachines",
  description: "Administrative dashboard for system monitoring",
}

export default async function AdminDashboard() {
  const session = await auth()
  const { aiActivityData, mlMetricsData, resourceData } = generateMockData()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">System Overview</h1>
        <p className="text-muted-foreground">
          Monitor system health, performance, and user activity.
        </p>
      </div>

      {/* System Health Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,285</div>
            <p className="text-xs text-muted-foreground">
              +85 in last hour
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3,842</div>
            <p className="text-xs text-muted-foreground">
              +156 this week
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">System Health</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-500">Excellent</div>
            <p className="text-xs text-muted-foreground">
              All systems operational
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">API Usage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.1M</div>
            <p className="text-xs text-muted-foreground">
              Requests today
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Real-time Performance Monitoring */}
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>System Resource Utilization</CardTitle>
          </CardHeader>
          <CardContent>
            <ResourceUtilization
              data={resourceData}
              title="Real-time Resource Usage"
            />
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>ML Model Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <MLMetricsPlot
                data={mlMetricsData}
                title="Global Model Metrics"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>System Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <AIActivityHeatmap
                data={aiActivityData}
                height={300}
              />
            </CardContent>
          </Card>
        </div>

        {/* Additional System Metrics */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Top Active Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Customer Service Bot", requests: "523k", change: "+12%" },
                  { name: "Data Analysis Pipeline", requests: "428k", change: "+8%" },
                  { name: "Image Recognition API", requests: "312k", change: "+15%" },
                ].map((project) => (
                  <div key={project.name} className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">{project.name}</p>
                      <p className="text-sm text-muted-foreground">{project.requests} requests</p>
                    </div>
                    <span className="text-green-500 text-sm">{project.change}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>System Alerts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">                {[
                  { message: "Resource optimization recommended", level: "info" },
                  { message: "New model version available", level: "info" },
                  { message: "Backup completed successfully", level: "success" },
                ].map((alert, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${
                      alert.level === 'info' ? 'bg-blue-500' : 'bg-green-500'
                    }`} />
                    <p className="text-sm">{alert.message}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Resource Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Compute", used: "72%", total: "128 vCPUs" },
                  { name: "Memory", used: "65%", total: "512 GB" },
                  { name: "Storage", used: "48%", total: "4 TB" },
                ].map((resource) => (
                  <div key={resource.name} className="space-y-2">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium">{resource.name}</p>
                      <p className="text-sm text-muted-foreground">{resource.total}</p>
                    </div>
                    <div className="h-2 bg-secondary rounded-full">
                      <div
                        className="h-full bg-primary rounded-full"
                        style={{ width: resource.used }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
