import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ResourceUtilization } from "@/components/visualization/ResourceUtilization"
import { MLMetricsPlot } from "@/components/visualization/MLMetricsPlot"
import { AIActivityHeatmap } from "@/components/visualization/AIActivityHeatmap"
import { generateMockData } from "@/lib/mock-data"
import { Plus } from "lucide-react"

export const metadata: Metadata = {
  title: "Projects - DeanMachines",
  description: "Manage your AI projects",
}

// Mock project data
const projects = [
  {
    id: "proj-1",
    name: "Customer Service Bot",
    description: "AI-powered customer support automation",
    status: "active",
    models: 3,
    requests: "12.3k",
    uptime: "99.9%"
  },
  {
    id: "proj-2",
    name: "Data Analysis Pipeline",
    description: "Automated data processing and analysis",
    status: "active",
    models: 2,
    requests: "8.1k",
    uptime: "99.8%"
  }
];

export default function ProjectsPage() {
  const { aiActivityData, mlMetricsData, resourceData } = generateMockData()

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
          <p className="text-muted-foreground">
            Create and manage your AI projects.
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Project
        </Button>
      </div>

      {projects.length > 0 ? (
        <div className="grid gap-6">
          {projects.map((project) => (
            <Card key={project.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{project.name}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Settings</Button>
                    <Button size="sm">View Details</Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {/* Project Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Active Models</p>
                    <p className="text-2xl font-bold">{project.models}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Total Requests</p>
                    <p className="text-2xl font-bold">{project.requests}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Uptime</p>
                    <p className="text-2xl font-bold">{project.uptime}</p>
                  </div>
                </div>

                {/* Project Analytics */}
                <Tabs defaultValue="performance" className="space-y-4">
                  <TabsList>
                    <TabsTrigger value="performance">Performance</TabsTrigger>
                    <TabsTrigger value="resources">Resources</TabsTrigger>
                    <TabsTrigger value="activity">Activity</TabsTrigger>
                  </TabsList>

                  <TabsContent value="performance">
                    <MLMetricsPlot
                      data={mlMetricsData}
                      title="Model Performance"
                    />
                  </TabsContent>

                  <TabsContent value="resources">
                    <ResourceUtilization
                      data={resourceData}
                      title="Resource Usage"
                    />
                  </TabsContent>

                  <TabsContent value="activity">
                    <div className="h-[300px]">
                      <AIActivityHeatmap
                        data={aiActivityData}
                        height={300}
                      />
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-8">
          <p className="text-muted-foreground text-center">No projects created yet.</p>
        </div>
      )}
    </div>
  )
}
