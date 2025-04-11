import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, BarChart, Brain, Database, LucideIcon, Wrench, Workflow } from "lucide-react"

import { siteConfig } from "@/config/site"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { IconWrapper } from "@/components/common/IconWrapper"

export const metadata: Metadata = {
  title: `Features - ${siteConfig.name}`,
  description: "Explore the powerful features of our AI platform that help you build, deploy, and scale intelligent systems.",
}

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon; // Use the specific LucideIcon type
  href: string;
}

function FeatureCard({ title, description, icon, href }: FeatureCardProps) {
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
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button asChild variant="ghost" className="w-full justify-between">
          <Link href={href}>
            Learn more <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default function FeaturesPage() {
  const features = [
    {
      title: "AI Agents",
      description: "Build intelligent agents that can perform complex tasks, reason about data, and interact with users naturally.",
      icon: Brain,
      href: "/features/agents",
    },
    {
      title: "Memory Systems",
      description: "Implement persistent memory solutions that allow your AI systems to remember past interactions and learn over time.",
      icon: Database,
      href: "/features/memory",
    },
    {
      title: "Tool Integration",
      description: "Connect your AI systems to external tools and APIs, enabling them to retrieve information and perform actions in the real world.",
      icon: Wrench,
      href: "/features/tools",
    },
    {
      title: "Workflow Automation",
      description: "Create sophisticated workflows that coordinate multiple AI agents and systems to solve complex problems efficiently.",
      icon: Workflow,
      href: "/features/workflow",
    },
    {
      title: "Visualizations",
      description: "Create sophisticated visual representations of AI processes",
      href: "/features/visualizations",
      icon: BarChart, // Use a LucideIcon component
    },
  ]

  return (
    <div className="container relative">
      {/* Hero Section */}
      <section className="mx-auto max-w-5xl py-12 text-center md:py-20">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
          Powerful AI Features
        </h1>
        <p className="mt-6 text-lg text-muted-foreground md:text-xl">
          Our comprehensive suite of AI capabilities enables you to build, deploy, and scale intelligent systems.
        </p>
      </section>

      <Separator className="my-8" />

      {/* Features Grid */}
      <section className="py-12 md:py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              href={feature.href}
            />
          ))}
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-12 md:py-16">
        <h2 className="mb-6 text-2xl font-bold md:text-3xl">Common Use Cases</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Customer Service</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Intelligent agents that handle customer inquiries, route to appropriate departments, and solve common issues without human intervention.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Data Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <p>AI systems that process and analyze large datasets to extract insights, generate reports, and make data-driven recommendations.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Process Automation</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Automate complex business processes with intelligent workflows that adapt to changing conditions and optimize for efficiency.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="my-12 rounded-lg bg-slate-50 p-8 dark:bg-slate-900 md:my-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">Ready to Build with DeanMachines?</h2>
          <p className="mb-6 text-muted-foreground">
            Start building intelligent AI systems today with our comprehensive platform and developer tools.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg">
              <Link href="/docs">Read the Docs</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
