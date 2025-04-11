import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Database, Brain, CloudCog, BarChart3 } from "lucide-react"

import { siteConfig } from "@/config/site"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { IconWrapper } from "@/components/common/IconWrapper"
import { HeroSection } from "@/components/sections/HeroSection"
import { FeatureGrid } from "@/components/sections/FeatureGrid"

export const metadata: Metadata = {
  title: `Memory Systems - ${siteConfig.name}`,
  description: "Implement persistent memory solutions that allow your AI systems to remember past interactions and learn over time.",
}

import { LucideIcon } from "lucide-react";

interface MemoryTypeCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  benefits: string[];
}

function MemoryTypeCard({ title, description, icon, benefits }: MemoryTypeCardProps) {
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
        <h4 className="font-medium text-sm mb-2">Key Benefits:</h4>
        <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
          {benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

export default function MemoryFeaturesPage() {
  const memoryTypes = [
    {
      title: "Conversation Memory",
      description: "Store and recall conversation history to maintain context across multiple interactions.",
      icon: Brain,
      benefits: [
        "Maintain coherent long-term conversations",
        "Reference previous user inputs and system responses",
        "Personalize interactions based on conversation history"
      ]
    },
    {
      title: "Vector Databases",
      description: "Store and query embeddings for semantic search and retrieval of relevant information.",
      icon: Database,
      benefits: [
        "Semantic similarity search",
        "Fast nearest-neighbor lookups",
        "Scale to billions of vectors"
      ]
    },
    {
      title: "Cloud Storage",
      description: "Persistent, scalable storage solutions for long-term memory retention across sessions.",
      icon: CloudCog,
      benefits: [
        "Durable data storage",
        "High availability",
        "Automated backups and recovery"
      ]
    },
    {
      title: "Analytics & Insights",
      description: "Extract patterns and insights from memory data to improve system performance over time.",
      icon: BarChart3,
      benefits: [
        "Track conversation patterns",
        "Identify common user needs",
        "Measure and improve system performance"
      ]
    }
  ]

  return (
    <div className="container relative">
      {/* Hero Section */}
      <section className="mx-auto max-w-5xl py-12 text-center md:py-20">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
          Memory Systems
        </h1>
        <p className="mt-6 text-lg text-muted-foreground md:text-xl">
          Give your AI a memory. Our persistent memory solutions allow your systems to learn from past interactions
          and build knowledge over time.
        </p>
      </section>

      <Separator className="my-8" />

      {/* Memory Types Section */}
      <section className="py-12 md:py-16">
        <h2 className="mb-8 text-2xl font-bold md:text-3xl">Memory Solutions</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {memoryTypes.map((memType) => (
            <MemoryTypeCard
              key={memType.title}
              title={memType.title}
              description={memType.description}
              icon={memType.icon}
              benefits={memType.benefits}
            />
          ))}
        </div>
      </section>

      {/* Code Example Section */}
      <section className="py-12 md:py-16">
        <h2 className="mb-8 text-2xl font-bold md:text-3xl">Easy Integration</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-4">Simple API for Memory Management</h3>
            <p className="mb-6 text-muted-foreground">
              Our memory systems integrate seamlessly with your AI applications through a simple,
              consistent API. Store, retrieve, and update memory with just a few lines of code.
            </p>
            <div>
              <Button asChild>
                <Link href="/docs/memory">View Documentation</Link>
              </Button>
            </div>
          </div>
          <div className="rounded-lg bg-slate-950 p-4 overflow-x-auto">
            <pre className="text-sm text-slate-50">
              <code>{`import { createMemoryManager } from "@deanmachines/memory";

// Initialize memory system with your preferred backend
const memory = createMemoryManager({
  type: "conversation",
  storage: "pinecone", // or "postgres", "redis", etc.
  sessionId: "user-123",
});

// Store new memory
await memory.add({
  role: "user",
  content: "My favorite color is blue."
});

// Retrieve context-aware memories
const relevantMemories = await memory.retrieve({
  query: "What colors do I like?",
  limit: 5,
});

// Use memories in your AI response generation
const aiResponse = await generateResponse({
  prompt: userQuery,
  context: relevantMemories,
});`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-12 md:py-16">
        <h2 className="mb-6 text-2xl font-bold md:text-3xl">Available Integrations</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["PostgreSQL", "Redis", "Pinecone", "Qdrant", "Weaviate", "Chroma", "Upstash", "MongoDB"].map((integration) => (
            <Card key={integration} className="flex items-center justify-center p-6 text-center">
              <p className="font-medium">{integration}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="my-12 rounded-lg bg-slate-50 p-8 dark:bg-slate-900 md:my-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">Ready to Build with Memory?</h2>
          <p className="mb-6 text-muted-foreground">
            Start creating AI systems with robust memory capabilities today using our developer-friendly tools.
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
