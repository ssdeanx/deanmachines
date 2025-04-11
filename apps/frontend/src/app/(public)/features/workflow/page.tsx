import { Metadata } from "next"
import Link from "next/link"
import { Workflow, GitBranch, GitMerge, Network, Clock, Bot, type LucideIcon } from "lucide-react"

import { siteConfig } from "@/config/site"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { IconWrapper } from "@/components/common/IconWrapper"

export const metadata: Metadata = {
  title: `Workflow Automation - ${siteConfig.name}`,
  description: "Create sophisticated workflows that coordinate multiple AI agents and systems to solve complex problems efficiently.",
}

interface WorkflowCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

function WorkflowCard({ title, description, icon, features }: WorkflowCardProps) {
  return (
    <Card className="flex flex-col transition-all hover:shadow-md">
      <CardHeader>
        <div className="flex items-center gap-4">
          <IconWrapper
            icon={icon}
            size="lg"
            className="rounded-lg border bg-muted p-2"
          />
          <CardTitle>{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-base mb-4">{description}</CardDescription>
        <h4 className="font-medium text-sm mb-2">Key Features:</h4>
        <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

export default function WorkflowFeaturesPage() {
  const workflowTypes = [
    {
      title: "Sequential Workflows",
      description: "Execute a series of steps in a predefined order, with each step building on the previous one.",
      icon: GitBranch,
      features: [
        "Linear progression through tasks",
        "Conditional branching based on results",
        "Error handling and retry logic"
      ]
    },
    {
      title: "Parallel Workflows",
      description: "Execute multiple tasks simultaneously and combine their results to improve efficiency.",
      icon: GitMerge,
      features: [
        "Concurrent task execution",
        "Efficient resource utilization",
        "Result aggregation and synchronization"
      ]
    },
    {
      title: "Dynamic Workflows",
      description: "Adapt and modify workflow structure at runtime based on intermediate results and changing conditions.",
      icon: Network,
      features: [
        "Self-modifying execution paths",
        "Dynamic task generation",
        "Contextual decision making"
      ]
    },
    {
      title: "Scheduled Workflows",
      description: "Trigger workflows based on time or events to automate recurring processes.",
      icon: Clock,
      features: [
        "Time-based triggers",
        "Event-driven execution",
        "Recurring schedule support"
      ]
    },
    {
      title: "Multi-Agent Workflows",
      description: "Coordinate multiple specialized agents working together to solve complex problems.",
      icon: Bot,
      features: [
        "Agent role specialization",
        "Inter-agent communication",
        "Collaborative problem solving"
      ]
    },
    {
      title: "Integration Workflows",
      description: "Connect AI capabilities with external systems, databases, and applications.",
      icon: Workflow,
      features: [
        "API integration patterns",
        "Data transformation pipelines",
        "Third-party service connectors"
      ]
    }
  ]

  return (
    <div className="container relative">
      {/* Hero Section */}
      <section className="mx-auto max-w-5xl py-12 text-center md:py-20">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
          Workflow Automation
        </h1>
        <p className="mt-6 text-lg text-muted-foreground md:text-xl">
          Orchestrate complex AI processes. Our workflow engine allows you to coordinate multiple AI systems
          and external services to solve sophisticated problems efficiently.
        </p>
      </section>

      <Separator className="my-8" />

      {/* Workflow Types Section */}
      <section className="py-12 md:py-16">
        <h2 className="mb-8 text-2xl font-bold md:text-3xl">Workflow Types</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {workflowTypes.map((workflowType) => (
            <WorkflowCard
              key={workflowType.title}
              title={workflowType.title}
              description={workflowType.description}
              icon={workflowType.icon}
              features={workflowType.features}
            />
          ))}
        </div>
      </section>

      {/* Workflow Diagram */}
      <section className="py-12 md:py-16 bg-slate-50 dark:bg-slate-900 rounded-lg p-8">
        <h2 className="mb-8 text-2xl font-bold md:text-3xl text-center">How Workflows Operate</h2>
        <div className="mx-auto max-w-4xl">
          <div className="relative">
            {/* This would typically be an SVG or image of a workflow diagram */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="flex flex-col items-center p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                <div className="bg-primary/20 p-3 rounded-full mb-3">
                  <IconWrapper icon={Bot} size="lg" className="text-primary" />
                </div>
                <h3 className="font-bold mb-2">1. Input Processing</h3>
                <p className="text-sm text-muted-foreground">User requests are analyzed and routed to the appropriate workflow</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                <div className="bg-primary/20 p-3 rounded-full mb-3">
                  <IconWrapper icon={GitBranch} size="lg" className="text-primary" />
                </div>
                <h3 className="font-bold mb-2">2. Task Orchestration</h3>
                <p className="text-sm text-muted-foreground">Tasks are executed in sequence or parallel according to workflow design</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                <div className="bg-primary/20 p-3 rounded-full mb-3">
                  <IconWrapper icon={GitMerge} size="lg" className="text-primary" />
                </div>
                <h3 className="font-bold mb-2">3. Result Synthesis</h3>
                <p className="text-sm text-muted-foreground">Results from multiple tasks are combined into a coherent final output</p>
              </div>
            </div>
            {/* Connecting lines would go here in a real diagram */}
          </div>
        </div>
      </section>

      {/* Code Example Section */}
      <section className="py-12 md:py-16">
        <h2 className="mb-8 text-2xl font-bold md:text-3xl">Simple Workflow Definition</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-4">Declarative Workflow Configuration</h3>
            <p className="mb-6 text-muted-foreground">
              Define complex workflows using our intuitive API that handles orchestration,
              error handling, and state management automatically.
            </p>
            <div>
              <Button asChild>
                <Link href="/docs/workflows">View Documentation</Link>
              </Button>
            </div>
          </div>
          <div className="rounded-lg bg-slate-950 p-4 overflow-x-auto">
            <pre className="text-sm text-slate-50">
              <code>{`import { createWorkflow } from "@deanmachines/workflows";

// Define a customer support workflow
const customerSupportWorkflow = createWorkflow({
  id: "customer-support",
  description: "Handle customer support requests",
  steps: [
    {
      id: "classify-request",
      type: "agent",
      agentId: "request-classifier",
      description: "Classify the customer request type",
      input: (context) => ({
        message: context.initialRequest
      }),
      output: "classification"
    },
    {
      id: "retrieve-knowledge",
      type: "tool",
      toolId: "knowledge-base-search",
      description: "Search knowledge base for relevant information",
      input: (context) => ({
        query: context.classification.topic,
        limit: 3
      }),
      output: "knowledgeResults"
    },
    {
      id: "generate-response",
      type: "agent",
      agentId: "response-generator",
      description: "Generate a helpful response",
      input: (context) => ({
        classification: context.classification,
        knowledge: context.knowledgeResults,
        customerRequest: context.initialRequest
      }),
      output: "finalResponse"
    }
  ]
});

// Deploy the workflow
await customerSupportWorkflow.deploy();`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-16">
        <h2 className="mb-8 text-2xl font-bold md:text-3xl">Key Benefits</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Improved Efficiency</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Break complex processes into smaller, reusable components that can be executed in parallel to reduce processing time and resource usage.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Enhanced Reliability</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Built-in error handling, retries, and monitoring ensure workflows complete successfully even when individual steps encounter problems.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Scalable Architecture</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Our workflow engine scales automatically to handle varying workloads, from simple personal automation to enterprise-grade processing.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="my-12 rounded-lg bg-slate-50 p-8 dark:bg-slate-900 md:my-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">Automate Complex Processes</h2>
          <p className="mb-6 text-muted-foreground">
            Start building intelligent workflows today that coordinate your AI systems and external services.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg">
              <Link href="/docs/getting-started">Get Started</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/features">Explore More Features</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
