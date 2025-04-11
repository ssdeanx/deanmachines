/**
 * Mock documentation data for use while Contentlayer integration is being fixed
 *
 * This file provides temporary mock document content for each documentation page
 * to ensure proper Table of Contents generation and page rendering.
 *
 * @remarks
 * Once Contentlayer integration is complete, this file can be removed and
 * real document data from Contentlayer should be used instead.
 */

import type { Doc } from "@/types/docs";

/**
 * Collection of mock document data organized by slugAsParams path
 */
export const mockDocs: Record<string, Doc> = {
  // Introduction / Index
  "index": {
    slug: "index",
    slugAsParams: "index",
    body: {
      raw: `# deanmachines AI Documentation

Welcome to the deanmachines AI documentation. Here you'll find everything you need to build and deploy intelligent AI solutions.

## Getting Started

Our platform provides powerful tools for creating, deploying, and managing AI agents. Follow our guides to get started quickly.

## Core Concepts

Understanding the key concepts behind deanmachines AI will help you build more effective solutions.

## Examples & Tutorials

Learn by example with our comprehensive tutorials and example projects.

## Popular Guides

Explore our most popular guides to solve common challenges and implement best practices.

## Additional Resources

Find more resources to help you make the most of the deanmachines AI platform.`,
      code: `# deanmachines AI Documentation

Welcome to the deanmachines AI documentation. Here you'll find everything you need to build and deploy intelligent AI solutions.

## Getting Started

Our platform provides powerful tools for creating, deploying, and managing AI agents. Follow our guides to get started quickly.

## Core Concepts

Understanding the key concepts behind deanmachines AI will help you build more effective solutions.

## Examples & Tutorials

Learn by example with our comprehensive tutorials and example projects.

## Popular Guides

Explore our most popular guides to solve common challenges and implement best practices.

## Additional Resources

Find more resources to help you make the most of the deanmachines AI platform.`
    },
    title: "Documentation",
    description: "Documentation and guides for deanmachines AI platform."
  },

  // Core Concepts
  "core-concepts/overview": {
    slug: "core-concepts/overview",
    slugAsParams: "core-concepts/overview",
    body: {
      raw: `# Core Concepts

deanmachines AI is built on several key concepts that work together to create powerful AI applications.

## Architectural Overview

The platform is organized around a few central concepts:

- **Agents** - Autonomous AI entities that can perform tasks
- **Memory** - Contextual storage for agents
- **Networks** - Systems of interconnected agents
- **Tools** - Capabilities that agents can use to interact with external systems
- **Workflows** - Structured sequences of agent interactions

## Components

Each deanmachines AI application consists of:

### Core Engine
The central system that orchestrates all AI activities.

### Agent Framework
Tools and libraries for creating and managing agents.

### Memory Systems
Storage mechanisms for maintaining context and knowledge.

### Integration Layer
Connectors for external systems and data sources.

## Interaction Patterns

The platform supports several interaction patterns:

1. **Direct Interaction** - One-to-one conversations with agents
2. **Workflow Execution** - Structured processes with multiple steps
3. **Agent Networks** - Multiple agents collaborating on complex tasks
4. **Hybrid Systems** - Combinations of the above patterns

## Implementation Approaches

There are several ways to implement deanmachines AI:

- **Hosted Solutions** - Cloud-based, managed implementations
- **Self-Hosted** - On-premise deployments for specialized needs
- **Hybrid Deployments** - Combinations of hosted and self-hosted components

## Further Reading

- [Advanced Features](/docs/advanced-features)
- [API Reference](/docs/api-reference)
- [Example Projects](/docs/examples)`,
      code: `# Core Concepts

deanmachines AI is built on several key concepts that work together to create powerful AI applications.

## Architectural Overview

The platform is organized around a few central concepts:

- **Agents** - Autonomous AI entities that can perform tasks
- **Memory** - Contextual storage for agents
- **Networks** - Systems of interconnected agents
- **Tools** - Capabilities that agents can use to interact with external systems
- **Workflows** - Structured sequences of agent interactions

## Components

Each deanmachines AI application consists of:

### Core Engine
The central system that orchestrates all AI activities.

### Agent Framework
Tools and libraries for creating and managing agents.

### Memory Systems
Storage mechanisms for maintaining context and knowledge.

### Integration Layer
Connectors for external systems and data sources.

## Interaction Patterns

The platform supports several interaction patterns:

1. **Direct Interaction** - One-to-one conversations with agents
2. **Workflow Execution** - Structured processes with multiple steps
3. **Agent Networks** - Multiple agents collaborating on complex tasks
4. **Hybrid Systems** - Combinations of the above patterns

## Implementation Approaches

There are several ways to implement deanmachines AI:

- **Hosted Solutions** - Cloud-based, managed implementations
- **Self-Hosted** - On-premise deployments for specialized needs
- **Hybrid Deployments** - Combinations of hosted and self-hosted components

## Further Reading

- [Advanced Features](/docs/advanced-features)
- [API Reference](/docs/api-reference)
- [Example Projects](/docs/examples)`
    },
    title: "Core Concepts",
    description: "Understanding the fundamental concepts and architecture of deanmachines AI."
  },

  // Agents
  "core-concepts/agents": {
    slug: "core-concepts/agents",
    slugAsParams: "core-concepts/agents",
    body: {
      raw: `# AI Agents

## What are AI Agents?

AI agents are autonomous software entities that can perceive their environment, make decisions, and take actions to achieve specific goals. Within DeanMachines AI, agents serve as the fundamental building blocks for creating intelligent systems.

## Agent Components

- **Perception**: Processing and understanding inputs
- **Decision Making**: Analyzing information and determining actions
- **Action**: Executing operations based on decisions
- **Memory**: Storing and retrieving information
- **Learning**: Improving performance based on experience

## Agent Types

### Research Agent
Research agents specialize in information gathering and synthesis.

### Analyst Agent
Analyst agents focus on data processing and pattern recognition.

### Writer Agent
Writer agents generate natural language content based on inputs and requirements.

## Building Your First Agent

Creating an effective agent involves defining its:

1. **Capabilities**: What can the agent do?
2. **Knowledge**: What information can the agent access?
3. **Goals**: What objectives guide the agent's behavior?
4. **Constraints**: What limits are placed on the agent's actions?

## Best Practices

- Start with clearly defined scopes
- Implement proper memory management
- Incorporate feedback mechanisms
- Test in controlled environments before deployment`,
      code: `# AI Agents

## What are AI Agents?

AI agents are autonomous software entities that can perceive their environment, make decisions, and take actions to achieve specific goals. Within DeanMachines AI, agents serve as the fundamental building blocks for creating intelligent systems.

## Agent Components

- **Perception**: Processing and understanding inputs
- **Decision Making**: Analyzing information and determining actions
- **Action**: Executing operations based on decisions
- **Memory**: Storing and retrieving information
- **Learning**: Improving performance based on experience

## Agent Types

### Research Agent
Research agents specialize in information gathering and synthesis.

### Analyst Agent
Analyst agents focus on data processing and pattern recognition.

### Writer Agent
Writer agents generate natural language content based on inputs and requirements.

## Building Your First Agent

Creating an effective agent involves defining its:

1. **Capabilities**: What can the agent do?
2. **Knowledge**: What information can the agent access?
3. **Goals**: What objectives guide the agent's behavior?
4. **Constraints**: What limits are placed on the agent's actions?

## Best Practices

- Start with clearly defined scopes
- Implement proper memory management
- Incorporate feedback mechanisms
- Test in controlled environments before deployment`
    },
    title: "AI Agents",
    description: "Understanding AI agents, their capabilities, and how to build them effectively."
  },
  // Memory Management
  "core-concepts/memory": {
    slug: "core-concepts/memory",
    slugAsParams: "core-concepts/memory",
    body: {
      raw: `# Memory Management

## Overview

Memory management is a critical component of the DeanMachines AI platform, allowing agents to maintain context, learn from experiences, and build knowledge over time.

## Memory Types

### Short-Term Memory

Short-term memory provides temporary storage for recent interactions and immediate context. It typically includes:

- Recent conversation history
- Current task parameters
- Active constraints and goals

### Long-Term Memory

Long-term memory stores persistent information that agents can access across sessions:

- Historical interactions
- Learned patterns and facts
- User preferences and settings
- Domain knowledge

### Episodic Memory

Episodic memory captures specific interactions or "episodes" that may be relevant for future reference:

- Past problem-solving experiences
- Notable user interactions
- Successful strategies

## Memory Storage Options

DeanMachines AI supports multiple storage backends for different use cases:

- **Vector Databases** (Pinecone, Qdrant) - For semantic storage and retrieval
- **Document Stores** (Firebase, MongoDB) - For structured data
- **Relational Databases** (PostgreSQL, MySQL) - For complex relationships
- **In-Memory Stores** (Redis) - For high-performance caching
- **File System** - For persistent local storage

## Memory Retrieval

The platform provides several methods for accessing stored information:

### Direct Access
Retrieving specific information using keys or identifiers.

### Semantic Search
Finding relevant information based on meaning rather than exact matches.

### Associative Recall
Retrieving information based on related concepts or contexts.

## Best Practices

- Define clear memory retention policies
- Implement appropriate context windowing
- Consider privacy and data protection requirements
- Balance between comprehensive memory and performance
- Use tiered storage strategies for efficiency`,
      code: `# Memory Management

## Overview

Memory management is a critical component of the DeanMachines AI platform, allowing agents to maintain context, learn from experiences, and build knowledge over time.

## Memory Types

### Short-Term Memory

Short-term memory provides temporary storage for recent interactions and immediate context. It typically includes:

- Recent conversation history
- Current task parameters
- Active constraints and goals

### Long-Term Memory

Long-term memory stores persistent information that agents can access across sessions:

- Historical interactions
- Learned patterns and facts
- User preferences and settings
- Domain knowledge

### Episodic Memory

Episodic memory captures specific interactions or "episodes" that may be relevant for future reference:

- Past problem-solving experiences
- Notable user interactions
- Successful strategies

## Memory Storage Options

DeanMachines AI supports multiple storage backends for different use cases:

- **Vector Databases** (Pinecone, Qdrant) - For semantic storage and retrieval
- **Document Stores** (Firebase, MongoDB) - For structured data
- **Relational Databases** (PostgreSQL, MySQL) - For complex relationships
- **In-Memory Stores** (Redis) - For high-performance caching
- **File System** - For persistent local storage

## Memory Retrieval

The platform provides several methods for accessing stored information:

### Direct Access
Retrieving specific information using keys or identifiers.

### Semantic Search
Finding relevant information based on meaning rather than exact matches.

### Associative Recall
Retrieving information based on related concepts or contexts.

## Best Practices

- Define clear memory retention policies
- Implement appropriate context windowing
- Consider privacy and data protection requirements
- Balance between comprehensive memory and performance
- Use tiered storage strategies for efficiency`
    },
    title: "Memory Management",
    description: "Learn how AI agents maintain context and learn from interactions using the memory system."
  },

  // Agent Networks
  "core-concepts/networks": {
    slug: "core-concepts/networks",
    slugAsParams: "core-concepts/networks",
    body: {
      raw: `# Agent Networks

## What are Agent Networks?

Agent networks are interconnected systems of AI agents working together to solve complex problems. They enable division of labor, specialization, and collaborative problem-solving among multiple agents.

## Network Topologies

### Hub and Spoke

In a hub and spoke topology, a central coordinator agent delegates tasks to specialized agents and synthesizes their outputs.

\`\`\`
       ┌───────┐
       │ Agent │
       │   B   │
       └───┬───┘
           │
┌───────┐  │  ┌───────┐
│ Agent │──┼──│ Agent │
│   A   │  │  │   C   │
└───────┘  │  └───────┘
           │
       ┌───┴───┐
       │ Hub   │
       │ Agent │
       └───┬───┘
           │
┌───────┐  │  ┌───────┐
│ Agent │──┼──│ Agent │
│   D   │  │  │   E   │
└───────┘  │  └───────┘
           │
       ┌───┴───┐
       │ Agent │
       │   F   │
       └───────┘
\`\`\`

### Mesh Network

In a mesh network, agents communicate directly with each other as needed, without a central coordinator.

\`\`\`
┌───────┐     ┌───────┐
│ Agent │─────│ Agent │
│   A   │     │   B   │
└───┬───┘     └───┬───┘
    │             │
    │    ┌────────┘
    │    │
┌───┴────┴──┐     ┌───────┐
│  Agent    │─────│ Agent │
│     C     │     │   D   │
└───┬────┬──┘     └───┬───┘
    │    │            │
    │    └────────────┘
    │                 │
┌───┴───┐     ┌───────┴─┐
│ Agent │─────│  Agent  │
│   E   │     │    F    │
└───────┘     └─────────┘
\`\`\`

### Hierarchical Network

In a hierarchical network, agents are organized in layers with specific responsibilities.

\`\`\`
       ┌───────────┐
       │ Executive │
       │   Agent   │
       └─────┬─────┘
             │
    ┌────────┴────────┐
    │                 │
┌───┴───┐       ┌─────┴───┐
│ Team  │       │  Team   │
│Lead A │       │ Lead B  │
└───┬───┘       └─────┬───┘
    │                 │
┌───┴───┐       ┌─────┴───┐
│Worker │       │ Worker  │
│Agents │       │ Agents  │
└───────┘       └─────────┘
\`\`\`

## Communication Patterns

### Request-Response
Agent A sends a specific request to Agent B and waits for a response.

### Publish-Subscribe
Agents publish information to channels, and other agents subscribe to receive updates.

### Broadcast
An agent sends information to all other agents in the network.

### Targeted Messaging
Agents communicate directly with specific other agents based on need.

## Coordination Mechanisms

### Centralized Control
A designated coordinator agent manages the workflow.

### Decentralized Consensus
Agents reach agreement on tasks and priorities collectively.

### Market-Based Allocation
Agents bid on tasks based on their capabilities and availability.

### Rule-Based Systems
Predefined rules determine agent interactions and responsibilities.

## Best Practices

- Design for clear communication protocols
- Implement effective error handling across agents
- Plan for scalability and network growth
- Monitor network performance and interactions
- Test with various scenarios and edge cases`,
      code: `# Agent Networks

## What are Agent Networks?

Agent networks are interconnected systems of AI agents working together to solve complex problems. They enable division of labor, specialization, and collaborative problem-solving among multiple agents.

## Network Topologies

### Hub and Spoke

In a hub and spoke topology, a central coordinator agent delegates tasks to specialized agents and synthesizes their outputs.

\`\`\`
       ┌───────┐
       │ Agent │
       │   B   │
       └───┬───┘
           │
┌───────┐  │  ┌───────┐
│ Agent │──┼──│ Agent │
│   A   │  │  │   C   │
└───────┘  │  └───────┘
           │
       ┌───┴───┐
       │ Hub   │
       │ Agent │
       └───┬───┘
           │
┌───────┐  │  ┌───────┐
│ Agent │──┼──│ Agent │
│   D   │  │  │   E   │
└───────┘  │  └───────┘
           │
       ┌───┴───┐
       │ Agent │
       │   F   │
       └───────┘
\`\`\`

### Mesh Network

In a mesh network, agents communicate directly with each other as needed, without a central coordinator.

\`\`\`
┌───────┐     ┌───────┐
│ Agent │─────│ Agent │
│   A   │     │   B   │
└───┬───┘     └───┬───┘
    │             │
    │    ┌────────┘
    │    │
┌───┴────┴──┐     ┌───────┐
│  Agent    │─────│ Agent │
│     C     │     │   D   │
└───┬────┬──┘     └───┬───┘
    │    │            │
    │    └────────────┘
    │                 │
┌───┴───┐     ┌───────┴─┐
│ Agent │─────│  Agent  │
│   E   │     │    F    │
└───────┘     └─────────┘
\`\`\`

### Hierarchical Network

In a hierarchical network, agents are organized in layers with specific responsibilities.

\`\`\`
       ┌───────────┐
       │ Executive │
       │   Agent   │
       └─────┬─────┘
             │
    ┌────────┴────────┐
    │                 │
┌───┴───┐       ┌─────┴───┐
│ Team  │       │  Team   │
│Lead A │       │ Lead B  │
└───┬───┘       └─────┬───┘
    │                 │
┌───┴───┐       ┌─────┴───┐
│Worker │       │ Worker  │
│Agents │       │ Agents  │
└───────┘       └─────────┘
\`\`\`

## Communication Patterns

### Request-Response
Agent A sends a specific request to Agent B and waits for a response.

### Publish-Subscribe
Agents publish information to channels, and other agents subscribe to receive updates.

### Broadcast
An agent sends information to all other agents in the network.

### Targeted Messaging
Agents communicate directly with specific other agents based on need.

## Coordination Mechanisms

### Centralized Control
A designated coordinator agent manages the workflow.

### Decentralized Consensus
Agents reach agreement on tasks and priorities collectively.

### Market-Based Allocation
Agents bid on tasks based on their capabilities and availability.

### Rule-Based Systems
Predefined rules determine agent interactions and responsibilities.

## Best Practices

- Design for clear communication protocols
- Implement effective error handling across agents
- Plan for scalability and network growth
- Monitor network performance and interactions
- Test with various scenarios and edge cases`
    },
    title: "Agent Networks",
    description: "Learn how to create and manage networks of cooperating AI agents."
  },

  // Add more mock documents for other sections as needed...

  // Getting Started
  "getting-started/quick-start": {
    slug: "getting-started/quick-start",
    slugAsParams: "getting-started/quick-start",
    body: {
      raw: `# Quick Start Guide

This guide will help you set up and deploy your first AI agent using the deanmachines platform.

## Prerequisites

Before you begin, ensure you have the following:

- Node.js 20.0 or later
- npm 10.0 or later (or equivalent package manager)
- deanmachines API key (sign up at dashboard.deanmachines.ai)
- Basic knowledge of JavaScript/TypeScript

## Installation

Install the deanmachines SDK using your preferred package manager:

\`\`\`bash
npm install @deanmachines/sdk
# or
yarn add @deanmachines/sdk
# or
pnpm add @deanmachines/sdk
\`\`\`

## Basic Setup

Create a new file called \`my-first-agent.js\` and add the following code:

\`\`\`javascript
import { Agent, Memory } from '@deanmachines/sdk';

// Initialize the agent with your API key
const agent = new Agent({
  apiKey: process.env.DEANMACHINES_API_KEY,
  name: 'MyFirstAgent',
  description: 'A simple agent that responds to user queries',
  model: 'gemini-pro',
});

// Add memory system
const memory = new Memory.ShortTermMemory();
agent.useMemory(memory);

// Define a basic handler for user messages
agent.onMessage(async (message, context) => {
  // Process the message
  const response = await agent.generateResponse(message, context);

  // Return the response
  return response;
});

// Start the agent
agent.start({ port: 3000 });
console.log('Agent is running on http://localhost:3000');
\`\`\`

## Running Your Agent

1. Create a \`.env\` file with your API key:

\`\`\`
DEANMACHINES_API_KEY=your_api_key_here
\`\`\`

2. Run the agent:

\`\`\`bash
node -r dotenv/config my-first-agent.js
\`\`\`

3. Open your browser to http://localhost:3000 to interact with your agent.

## Adding Capabilities

Let's enhance our agent with the ability to search the web:

\`\`\`javascript
import { Agent, Memory, Tools } from '@deanmachines/sdk';

// Initialize the agent
const agent = new Agent({
  apiKey: process.env.DEANMACHINES_API_KEY,
  name: 'ResearchAgent',
  description: 'An agent that can search the web for information',
  model: 'gemini-pro',
});

// Add memory system
const memory = new Memory.ShortTermMemory();
agent.useMemory(memory);

// Add web search capability
const searchTool = new Tools.WebSearch();
agent.addTool(searchTool);

// Define message handler with search capability
agent.onMessage(async (message, context) => {
  // Check if this is a query that needs web search
  if (message.includes('search') || message.includes('find') || message.includes('look up')) {
    const searchResults = await agent.useTool(searchTool.id, { query: message });

    // Incorporate search results into the response
    const response = await agent.generateResponse(
      message,
      { ...context, searchResults }
    );

    return response;
  }

  // Default response generation
  return agent.generateResponse(message, context);
});

agent.start({ port: 3000 });
console.log('Research Agent is running on http://localhost:3000');
\`\`\`

## Next Steps

- [Core Concepts](/docs/core-concepts/overview) - Understand how DeanMachines AI works
- [Examples](/docs/examples/chatbot) - Explore more complex examples
- [API Reference](/docs/api-reference/agent) - Learn about the full API`,
      code: `# Quick Start Guide

This guide will help you set up and deploy your first AI agent using the deanmachines platform.

## Prerequisites

Before you begin, ensure you have the following:

- Node.js 20.0 or later
- npm 10.0 or later (or equivalent package manager)
- deanmachines API key (sign up at dashboard.deanmachines.ai)
- Basic knowledge of JavaScript/TypeScript

## Installation

Install the deanmachines SDK using your preferred package manager:

\`\`\`bash
npm install @deanmachines/sdk
# or
yarn add @deanmachines/sdk
# or
pnpm add @deanmachines/sdk
\`\`\`

## Basic Setup

Create a new file called \`my-first-agent.js\` and add the following code:

\`\`\`javascript
import { Agent, Memory } from '@deanmachines/sdk';

// Initialize the agent with your API key
const agent = new Agent({
  apiKey: process.env.DEANMACHINES_API_KEY,
  name: 'MyFirstAgent',
  description: 'A simple agent that responds to user queries',
  model: 'gemini-pro',
});

// Add memory system
const memory = new Memory.ShortTermMemory();
agent.useMemory(memory);

// Define a basic handler for user messages
agent.onMessage(async (message, context) => {
  // Process the message
  const response = await agent.generateResponse(message, context);

  // Return the response
  return response;
});

// Start the agent
agent.start({ port: 3000 });
console.log('Agent is running on http://localhost:3000');
\`\`\`

## Running Your Agent

1. Create a \`.env\` file with your API key:

\`\`\`
DEANMACHINES_API_KEY=your_api_key_here
\`\`\`

2. Run the agent:

\`\`\`bash
node -r dotenv/config my-first-agent.js
\`\`\`

3. Open your browser to http://localhost:3000 to interact with your agent.

## Adding Capabilities

Let's enhance our agent with the ability to search the web:

\`\`\`javascript
import { Agent, Memory, Tools } from '@deanmachines/sdk';

// Initialize the agent
const agent = new Agent({
  apiKey: process.env.DEANMACHINES_API_KEY,
  name: 'ResearchAgent',
  description: 'An agent that can search the web for information',
  model: 'gemini-pro',
});

// Add memory system
const memory = new Memory.ShortTermMemory();
agent.useMemory(memory);

// Add web search capability
const searchTool = new Tools.WebSearch();
agent.addTool(searchTool);

// Define message handler with search capability
agent.onMessage(async (message, context) => {
  // Check if this is a query that needs web search
  if (message.includes('search') || message.includes('find') || message.includes('look up')) {
    const searchResults = await agent.useTool(searchTool.id, { query: message });

    // Incorporate search results into the response
    const response = await agent.generateResponse(
      message,
      { ...context, searchResults }
    );

    return response;
  }

  // Default response generation
  return agent.generateResponse(message, context);
});

agent.start({ port: 3000 });
console.log('Research Agent is running on http://localhost:3000');
\`\`\`

## Next Steps

- [Core Concepts](/docs/core-concepts/overview) - Understand how DeanMachines AI works
- [Examples](/docs/examples/chatbot) - Explore more complex examples
- [API Reference](/docs/api-reference/agent) - Learn about the full API`
    },
    title: "Quick Start Guide",
    description: "Learn how to create your first AI agent in just a few minutes."
  },
};
