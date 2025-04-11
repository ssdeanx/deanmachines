import { NavItem } from "@/types/nav";

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    linkedin: string;
    twitter: string;
    github: string;
    discord?: string;
    docs: string;
  };
  mainNav: NavItem[];
}

export const siteConfig: SiteConfig = {
  name: "Deanmachines AI",
  description:
    "Build and deploy intelligent AI agents that adapt to your needs.",
  url: "https://deanmachines.com",
  ogImage: "/og.jpg",
  links: {
    linkedin: "https://linkedin.com/in/deanmachinesai",
    twitter: "https://twitter.com/deanmachinesai",
    github: "https://github.com/ssdeanx",
    discord: "https://discord.gg/deanmachinesai",
    docs: "/docs",
  },
  mainNav: [
    {
      title: "Features",
      href: "/features",
      children: [
        {
          title: "AI Agents",
          description:
            "Build intelligent agents that perform complex tasks automatically",
          href: "/features/agents",
          icon: "brain",
        },
        {
          title: "Memory Systems",
          description:
            "Implement persistent memory solutions for your AI systems",
          href: "/features/memory",
          icon: "database",
        },
        {
          title: "Tool Integration",
          description: "Connect your AI to external tools and APIs",
          href: "/features/tools",
          icon: "wrench",
        },
        {
          title: "Workflow Automation",
          description:
            "Create sophisticated workflows that coordinate multiple AI systems",
          href: "/features/workflow",
          icon: "workflow",
        },
        {
          title: "Visualizations",
          description:
            "Create sophisticated visual representations of AI processes",
          href: "/features/visualizations",
          icon: "chart",
        },
      ],
    },
    {
      title: "Solutions",
      href: "/solutions",
      children: [
        {
          title: "Enterprise AI",
          description: "AI solutions tailored for enterprise-scale operations",
          href: "/solutions/enterprise",
          icon: "building",
        },
        {
          title: "Customer Service",
          description: "Intelligent automation for customer support",
          href: "/solutions/customer-service",
          icon: "headset",
        },
        {
          title: "Data Processing",
          description: "Extract insights from structured and unstructured data",
          href: "/solutions/data-processing",
          icon: "barChart",
        },
      ],
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Docs",
      href: "/docs",
      children: [
        {
          title: "Getting Started",
          description: "Begin your journey with DeanMachines AI",
          href: "/docs/getting-started",
          icon: "rocket",
        },
        {
          title: "API Reference",
          description: "Technical documentation for developers",
          href: "/docs/api-reference",
          icon: "code",
        },
        {
          title: "Tutorials",
          description: "Step-by-step guides and examples",
          href: "/docs/tutorials",
          icon: "bookOpen",
        },
      ],
    },
    {
      title: "Pricing",
      href: "/pricing",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
};
