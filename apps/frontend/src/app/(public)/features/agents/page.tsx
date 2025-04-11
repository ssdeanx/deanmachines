import { Metadata } from "next"
import Link from "next/link"
import { Brain, Zap, MessageSquare, Lightbulb, Puzzle, Settings, LucideIcon } from "lucide-react"

import { siteConfig } from "@/config/site"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { IconWrapper } from "@/components/common/IconWrapper"

export const metadata: Metadata = {
  title: `AI Agents - ${siteConfig.name}`,
  description: "Build intelligent agents that can perform complex tasks, reason about data, and interact with users naturally.",
}

interface AgentCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  capabilities: string[];
}

function AgentCard({ title, description, icon, capabilities }: AgentCardProps) {
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
        <h4 className="font-medium text-sm mb-2">Key Capabilities:</h4>
        <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
          {capabilities.map((capability, index) => (
            <li key={index}>{capability}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

export default function AgentFeaturesPage() {
  const agentTypes = [
    {
      title: "Conversational Agents",
      description: "Engage in natural, contextual conversations with users to understand and fulfill their needs.",
      icon: MessageSquare,
      capabilities: [
        "Natural language understanding",
        "Context-aware responses",
        "Multi-turn conversations",
        "Personality customization"
      ]
    },
    {
      title: "Reasoning Agents",
      description: "Apply logical reasoning to solve complex problems and make informed decisions.",
      icon: Brain,
      capabilities: [
        "Step-by-step reasoning",
        "Logic chain construction",
        "Hypothesis testing",
        "Decision explanation"
      ]
    },
    {
      title: "Creative Agents",
      description: "Generate creative content, ideas, and solutions tailored to specific requirements.",
      icon: Lightbulb,
      capabilities: [
        "Content generation",
        "Creative problem-solving",
        "Style adaptation",
        "Conceptual exploration"
      ]
    },
    {
      title: "Task-specific Agents",
      description: "Specialized agents designed to excel at specific tasks or domains with high efficiency.",
      icon: Zap,
      capabilities: [
        "Domain expertise",
        "Optimized performance",
        "Specialized knowledge",
        "Task automation"
      ]
    },
    {
      title: "Collaborative Agents",
      description: "Work together with other agents and humans to achieve complex goals through teamwork.",
      icon: Puzzle,
      capabilities: [
        "Role-based collaboration",
        "Knowledge sharing",
        "Task delegation",
        "Conflict resolution"
      ]
    },
    {
      title: "Autonomous Agents",
      description: "Self-directed agents that can plan, act, and learn with minimal human supervision.",
      icon: Settings,
      capabilities: [
        "Goal-oriented planning",
        "Self-improvement",
        "Autonomous decision making",
        "Adaptive learning"
      ]
    }
  ]

  return (
    <div className="container relative">
      {/* Hero Section */}
      <section className="mx-auto max-w-5xl py-12 text-center md:py-20">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
          AI Agents
        </h1>
        <p className="mt-6 text-lg text-muted-foreground md:text-xl">
          Build intelligent AI agents that can understand, reason, and act to solve complex problems
          and provide valuable assistance to users.
        </p>
      </section>

      <Separator className="my-8" />

      {/* Agent Types Section */}
      <section className="py-12 md:py-16">
        <h2 className="mb-8 text-2xl font-bold md:text-3xl">Agent Types</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {agentTypes.map((agentType) => (
            <AgentCard
              key={agentType.title}
              title={agentType.title}
              description={agentType.description}
              icon={agentType.icon}
              capabilities={agentType.capabilities}
            />
          ))}
        </div>
      </section>

      {/* Code Example Section */}
      <section className="py-12 md:py-16">
        <h2 className="mb-8 text-2xl font-bold md:text-3xl">Easy Agent Creation</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-4">Simple Agent Definition API</h3>
            <p className="mb-6 text-muted-foreground">
              Create powerful AI agents with just a few lines of code using our intuitive API.
              Define capabilities, personalities, and behaviors easily.
            </p>
            <div>
              <Button asChild>
                <Link href="/docs/agents">View Documentation</Link>
              </Button>
            </div>
          </div>
          <div className="rounded-lg bg-slate-950 p-4 overflow-x-auto">
            <pre className="text-sm text-slate-50">
              <code>{`import { createAgent } from "@deanmachines/agents";

// Create a customer service agent
const customerServiceAgent = createAgent({
  id: "customer-service",
  name: "Support Assistant",
  description: "Helpful customer support agent",

  // Define capabilities and behavior
  capabilities: ["conversation", "knowledge-retrieval"],
  personality: {
    tone: "friendly",
    formality: "professional",
    empathy: "high"
  },

  // Configure knowledge sources
  knowledge: {
    sources: ["support-docs", "product-catalog", "faq"],
    retrievalStrategy: "semantic"
  },

  // Set up tools the agent can use
  tools: ["ticket-creation", "order-lookup", "refund-processing"],

  // Define how the agent responds to user input
  responseStrategy: {
    greeting: "Hello! I'm {{name}}, your support assistant. How can I help you today?",
    clarification: "Could you provide more details about your issue?",
    unsolvable: "I'll need to escalate this to a human support specialist. One moment please."
  }
});

// Deploy the agent
await customerServiceAgent.deploy();`}</code>
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
              <CardTitle>Advanced Natural Language Understanding</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Our agents understand complex user requests, including context, intent, and nuance, to provide relevant and accurate responses.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Tool Utilization</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Agents can use various tools to gather information, perform actions, and interact with external systems to accomplish their tasks.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Memory & Context</CardTitle>
            </CardHeader>
            <CardContent>
              <p>With built-in memory systems, our agents maintain context across conversations and learn from past interactions to improve over time.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Use Case Section */}
      <section className="py-12 md:py-16 bg-slate-50 dark:bg-slate-900 rounded-lg p-8">
        <h2 className="mb-8 text-2xl font-bold md:text-3xl text-center">Popular Use Cases</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm text-center">
            <h3 className="font-bold mb-2">Customer Support</h3>
            <p className="text-sm text-muted-foreground">24/7 assistance for customer inquiries, troubleshooting, and issue resolution</p>
          </div>
          <div className="flex flex-col items-center p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm text-center">
            <h3 className="font-bold mb-2">Content Creation</h3>
            <p className="text-sm text-muted-foreground">Generate articles, marketing copy, reports, and creative content</p>
          </div>
          <div className="flex flex-col items-center p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm text-center">
            <h3 className="font-bold mb-2">Research Assistance</h3>
            <p className="text-sm text-muted-foreground">Gather, analyze, and synthesize information from multiple sources</p>
          </div>
          <div className="flex flex-col items-center p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm text-center">
            <h3 className="font-bold mb-2">Process Automation</h3>
            <p className="text-sm text-muted-foreground">Automate routine tasks and workflows to improve efficiency</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="my-12 rounded-lg bg-slate-50 p-8 dark:bg-slate-900 md:my-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">Build Your First Agent</h2>
          <p className="mb-6 text-muted-foreground">
            Start creating intelligent AI agents today with our comprehensive toolkit and developer-friendly platform.
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
