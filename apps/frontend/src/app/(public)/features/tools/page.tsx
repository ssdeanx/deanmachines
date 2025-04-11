import { Metadata } from "next"
import Link from "next/link"
import { Wrench,Globe, Code, FileJson, Calculator, Search, Database, LucideIcon } from "lucide-react"

import { siteConfig } from "@/config/site"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { IconWrapper } from "@/components/common/IconWrapper"

export const metadata: Metadata = {
  title: `Tool Integration - ${siteConfig.name}`,
  description: "Connect your AI systems to external tools and APIs, enabling them to retrieve information and perform actions in the real world.",
}

interface ToolCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  useCases: string[];
}

function ToolCard({ title, description, icon, useCases }: ToolCardProps) {
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
        <h4 className="font-medium text-sm mb-2">Example Use Cases:</h4>
        <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
          {useCases.map((useCase, index) => (
            <li key={index}>{useCase}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

export default function ToolsFeaturesPage() {
  const tools = [
    {
      title: "Web Search",
      description: "Enable your AI to search the web for real-time information.",
      icon: Globe,
      useCases: [
        "Answer questions about current events",
        "Retrieve up-to-date factual information",
        "Research topics not in training data"
      ]
    },
    {
      title: "API Integrations",
      description: "Connect to external APIs to fetch data or perform actions.",
      icon: Code,
      useCases: [
        "Check weather forecasts",
        "Retrieve stock prices",
        "Access user account data"
      ]
    },
    {
      title: "Data Processing",
      description: "Parse, analyze, and transform structured and unstructured data.",
      icon: FileJson,
      useCases: [
        "Extract information from documents",
        "Process CSV and JSON data",
        "Generate reports from datasets"
      ]
    },
    {
      title: "Calculation Engine",
      description: "Perform complex mathematical calculations and data analysis.",
      icon: Calculator,
      useCases: [
        "Financial modeling",
        "Scientific calculations",
        "Statistical analysis"
      ]
    },
    {
      title: "Search Systems",
      description: "Search through documents, knowledge bases, and structured data.",
      icon: Search,
      useCases: [
        "Question answering over documents",
        "Knowledge base retrieval",
        "Internal data search"
      ]
    },
    {
      title: "Database Connectors",
      description: "Connect to SQL and NoSQL databases to query and update data.",
      icon: Database,
      useCases: [
        "User data lookups",
        "Record keeping and updates",
        "Historical data analysis"
      ]
    }
  ]

  return (
    <div className="container relative">
      {/* Hero Section */}
      <section className="mx-auto max-w-5xl py-12 text-center md:py-20">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
          Tool Integration
        </h1>
        <p className="mt-6 text-lg text-muted-foreground md:text-xl">
          Connect your AI to the world. Our tool integration framework allows your AI systems to retrieve information
          and perform actions through external APIs and services.
        </p>
      </section>

      <Separator className="my-8" />

      {/* Tools Section */}
      <section className="py-12 md:py-16">
        <h2 className="mb-8 text-2xl font-bold md:text-3xl">Available Tools</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {tools.map((tool) => (
            <ToolCard
              key={tool.title}
              title={tool.title}
              description={tool.description}
              icon={tool.icon}
              useCases={tool.useCases}
            />
          ))}
        </div>
      </section>

      {/* Code Example Section */}
      <section className="py-12 md:py-16">
        <h2 className="mb-8 text-2xl font-bold md:text-3xl">Simple Tool Registration</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-4">Unified Tool Interface</h3>
            <p className="mb-6 text-muted-foreground">
              Our tool framework makes it easy to create and register custom tools. Simply define your tool's
              functionality and register it with the system using our standardized interface.
            </p>
            <div>
              <Button asChild>
                <Link href="/docs/tools">View Documentation</Link>
              </Button>
            </div>
          </div>
          <div className="rounded-lg bg-slate-950 p-4 overflow-x-auto">
            <pre className="text-sm text-slate-50">
              <code>{`import { createTool } from "@deanmachines/tools";

// Define a simple weather tool
const weatherTool = createTool({
  name: "get_weather",
  description: "Get current weather for a location",
  parameters: {
    location: {
      type: "string",
      description: "City name or coordinates",
      required: true
    },
    units: {
      type: "string",
      description: "Temperature units (celsius/fahrenheit)",
      defaultValue: "celsius"
    }
  },
  execute: async ({ location, units }) => {
    // Implement API call to weather service
    const weather = await fetchWeatherData(location, units);
    return {
      temperature: weather.temp,
      conditions: weather.conditions,
      forecast: weather.forecast
    };
  }
});

// Register with your AI system
agent.registerTool(weatherTool);`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16">
        <h2 className="mb-8 text-2xl font-bold md:text-3xl">Key Features</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Automatic Tool Selection</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Our AI systems automatically determine when and which tools to use based on user requests, selecting the optimal tool for each task.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Tool Chaining</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Complex operations are handled by chaining multiple tools together, with outputs from one tool feeding into the inputs of another.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Tool Versioning</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Maintain multiple versions of tools to ensure backward compatibility while allowing for continuous improvement and updates.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="my-12 rounded-lg bg-slate-50 p-8 dark:bg-slate-900 md:my-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">Build Powerful AI Tools</h2>
          <p className="mb-6 text-muted-foreground">
            Start connecting your AI systems to external services and APIs today with our comprehensive tool framework.
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
