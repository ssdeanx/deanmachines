import { Metadata } from "next";
import Link from "next/link";
import {
  Building,
  Headset,
  BarChart,
  ArrowRight,
  Globe,
  FileText,
  Brain,
  LucideIcon,
} from "lucide-react";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { IconWrapper } from "@/components/common/IconWrapper";

export const metadata: Metadata = {
  title: `Solutions - ${siteConfig.name}`,
  description: "Industry-specific AI solutions designed to solve complex business challenges across various sectors.",
};
interface SolutionCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  benefits: string[];
}

function SolutionCard({ title, description, icon, href, benefits }: SolutionCardProps) {
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
      <CardFooter>
        <Button asChild variant="ghost" className="w-full justify-start group">
          <Link href={href}>
            <span className="flex items-center justify-between w-full">
              <span>Learn more</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default function SolutionsPage() {
  const primarySolutions = [
    {
      title: "Enterprise AI",
      description: "Comprehensive AI solutions tailored for enterprise-scale operations across departments.",
      icon: Building,
      href: "/solutions/enterprise",
      benefits: [
        "Automate routine business processes",
        "Enhance decision making with data-driven insights",
        "Improve operational efficiency and reduce costs",
        "Scale AI capabilities across your organization"
      ]
    },
    {
      title: "Customer Service",
      description: "Transform your customer experience with intelligent automation and personalized service.",
      icon: Headset,
      href: "/solutions/customer-service",
      benefits: [
        "24/7 AI-powered customer support",
        "Personalized customer interactions",
        "Efficient ticket routing and prioritization",
        "Reduced resolution time for customer issues"
      ]
    },
    {
      title: "Data Processing",
      description: "Extract valuable insights from structured and unstructured data with advanced AI processing.",
      icon: BarChart,
      href: "/solutions/data-processing",
      benefits: [
        "Automated data extraction and classification",
        "Advanced pattern recognition and trend analysis",
        "Integrate insights across multiple data sources",
        "Transform raw data into actionable intelligence"
      ]
    }
  ];

  const industrySolutions = [
    {
      title: "Finance",
      icon: Globe,
      description: "Intelligent solutions for risk assessment, fraud detection, and automated compliance."
    },
    {
      title: "Healthcare",
      icon: FileText,
      description: "AI applications for medical research, patient care optimization, and administrative efficiency."
    },
    {
      title: "Education",
      icon: Brain,
      description: "Personalized learning experiences and administrative automation for educational institutions."
    }
  ];

  return (
    <div className="container relative">
      {/* Hero Section */}
      <section className="mx-auto max-w-5xl py-12 text-center md:py-20">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
          AI Solutions for Every Industry
        </h1>
        <p className="mt-6 text-lg text-muted-foreground md:text-xl">
          Our specialized AI solutions address complex business challenges across industries,
          delivering measurable results and competitive advantages.
        </p>
      </section>

      <Separator className="my-8" />

      {/* Primary Solutions Section */}
      <section className="py-12 md:py-16">
        <h2 className="mb-8 text-2xl font-bold md:text-3xl">Core Solutions</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {primarySolutions.map((solution) => (
            <SolutionCard
              key={solution.title}
              title={solution.title}
              description={solution.description}
              icon={solution.icon}
              href={solution.href}
              benefits={solution.benefits}
            />
          ))}
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section className="py-12 md:py-16 bg-slate-50 dark:bg-slate-900 rounded-lg p-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold md:text-3xl mb-4">Industry-Specific Solutions</h2>
          <p className="text-muted-foreground">
            Tailored AI applications designed for the unique challenges faced by different sectors
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {industrySolutions.map((industry) => (
            <Card key={industry.title} className="text-center p-6">
              <div className="mx-auto bg-primary/10 p-3 rounded-full mb-4">
                <IconWrapper icon={industry.icon} size="lg" className="text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">{industry.title}</h3>
              <p className="text-muted-foreground">{industry.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-12 md:py-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold md:text-3xl mb-4">Success Stories</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See how our AI solutions have delivered measurable results for organizations across industries
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="overflow-hidden">
            <div className="h-48 bg-slate-200 dark:bg-slate-800">
              {/* Image placeholder */}
            </div>
            <CardHeader>
              <CardTitle>Global Financial Institution</CardTitle>
              <CardDescription>50% reduction in fraud detection time</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Implemented our AI detection system to identify suspicious patterns and prevent fraud in real-time,
                resulting in millions in savings and improved customer trust.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline">Read Case Study</Button>
            </CardFooter>
          </Card>
          <Card className="overflow-hidden">
            <div className="h-48 bg-slate-200 dark:bg-slate-800">
              {/* Image placeholder */}
            </div>
            <CardHeader>
              <CardTitle>Healthcare Network</CardTitle>
              <CardDescription>30% improvement in patient satisfaction</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Deployed an AI-powered patient care system that optimized scheduling, personalized communication,
                and improved diagnostic accuracy across multiple facilities.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline">Read Case Study</Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="my-12 rounded-lg bg-slate-50 p-8 dark:bg-slate-900 md:my-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">Ready to Transform Your Business?</h2>
          <p className="mb-6 text-muted-foreground">
            Schedule a consultation with our solutions team to discover how our AI technology
            can address your specific business challenges.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/docs">Explore Documentation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
