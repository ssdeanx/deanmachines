import { NavSection } from "@/types/nav";

export interface DocsConfig {
  sidebarNav: NavSection[];
}

export const docsConfig: DocsConfig = {
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
          description: "Learn about deanmachines AI and how to get started.",
        },
        {
          title: "Installation",
          href: "/docs/getting-started/installation",
          description:
            "How to install and set up your development environment.",
        },
        {
          title: "Quick Start",
          href: "/docs/getting-started/quick-start",
          description: "Create your first AI application in minutes.",
        },
      ],
    },
    {
      title: "Core Concepts",
      items: [
        {
          title: "Overview",
          href: "/docs/core-concepts/overview",
          description: "Understanding the core concepts and architecture.",
        },
        {
          title: "AI Agents",
          href: "/docs/core-concepts/agents",
          description: "Building and managing autonomous AI agents.",
        },
        {
          title: "Memory Management",
          href: "/docs/core-concepts/memory",
          description: "Maintaining context and learning capabilities.",
        },
        {
          title: "Agent Networks",
          href: "/docs/core-concepts/agent-networks",
          description: "Creating networks of cooperating AI agents.",
        },
        {
          title: "Deployment",
          href: "/docs/core-concepts/deployment",
          description: "Deploying and scaling in production.",
        },
      ],
    },
    {
      title: "Guides",
      items: [
        {
          title: "Security Best Practices",
          href: "/docs/guides/security",
          description: "Securing your AI applications.",
        },
        {
          title: "Monitoring & Observability",
          href: "/docs/guides/monitoring",
          description: "Setting up monitoring and logging.",
        },
        {
          title: "Scaling Strategies",
          href: "/docs/guides/scaling",
          description: "Scaling from prototype to production.",
        },
        {
          title: "Testing & Validation",
          href: "/docs/guides/testing",
          description: "Testing AI agents effectively.",
        },
      ],
    },
    {
      title: "Examples",
      items: [
        {
          title: "Build a Chatbot",
          href: "/docs/examples/chatbot",
          description: "Create an intelligent chatbot with memory.",
        },
        {
          title: "Data Processing Agent",
          href: "/docs/examples/data-processor",
          description: "Build a data processing and analysis agent.",
        },
      ],
    },
    {
      title: "API Reference",
      items: [
        {
          title: "Agent API",
          href: "/docs/api-reference/agent",
          description: "Complete API reference for agent management.",
        },
        {
          title: "Memory API",
          href: "/docs/api-reference/memory",
          description: "API reference for memory systems.",
        },
        {
          title: "Network API",
          href: "/docs/api-reference/network",
          description: "API reference for agent networks.",
        },
        {
          title: "Deployment API",
          href: "/docs/api-reference/deployment",
          description: "API reference for deployment and scaling.",
        },
      ],
    },
  ],
};
