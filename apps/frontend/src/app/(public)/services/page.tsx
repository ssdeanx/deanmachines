import { Metadata } from "next"
import * as icons from "lucide-react"

import { siteConfig } from "@/config/site"
import { ServiceCard } from "@/components/sections/ServiceCard"
import { CallToAction } from "@/components/common/CallToAction"

export const metadata: Metadata = {
  title: `Services - ${siteConfig.name}`,
  description: "Explore our comprehensive AI development and deployment services.",
}

// Use the same type definition as ServiceCard component for consistency
type IconName = keyof typeof icons;

type Service = {
  title: string
  description: string
  iconName: IconName
  features: string[]
}

const services: Service[] = [
  {
    title: "AI Development",
    description: "Custom AI solutions tailored to your business needs",
    iconName: "Brain",
    features: [
      "Custom model development",
      "Fine-tuning and optimization",
      "Integration support",
      "Performance monitoring",
    ],
  },
  {
    title: "Intelligent Agents",
    description: "Build and deploy AI agents that adapt to your requirements",
    iconName: "Bot",
    features: [
      "Autonomous agents",
      "Multi-agent systems",
      "Natural language processing",
      "Task automation",
    ],
  },
  {
    title: "Machine Learning Ops",
    description: "End-to-end MLOps solutions for your AI infrastructure",
    iconName: "Cpu",
    features: [
      "Model deployment",
      "Monitoring and logging",
      "Version control",
      "Automated testing",
    ],
  },
  {
    title: "AI Networks",
    description: "Create and manage networks of intelligent agents",
    iconName: "Network",
    features: [
      "Agent communication",
      "Network orchestration",
      "Load balancing",
      "Scalability solutions",
    ],
  },
  {
    title: "Workflow Automation",
    description: "Streamline processes with AI-powered automation",
    iconName: "Workflow",
    features: [
      "Process optimization",
      "Custom workflows",
      "Integration with existing systems",
      "Analytics and reporting",
    ],
  },
  {
    title: "Security & Compliance",
    description: "Ensure your AI systems are secure and compliant",
    iconName: "Lock",
    features: [
      "Security audits",
      "Compliance checking",
      "Data protection",
      "Access control",
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="container relative">
      {/* Hero Section */}
      <section className="mx-auto max-w-5xl py-12 text-center md:py-20">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
          Our Services
        </h1>
        <p className="mt-6 text-lg text-muted-foreground md:text-xl">
          Comprehensive AI solutions to power your next breakthrough
        </p>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              iconName={service.iconName}
              features={service.features}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <CallToAction
        title="Ready to Get Started?"
        description="Contact us to learn more about how we can help you implement AI solutions."
        href="/contact"
      />
    </div>
  )
}
