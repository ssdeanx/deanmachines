/**
 * API Types
 *
 * This file defines TypeScript types for API interactions with the Mastra backend.
 *
 * @module types/api
 */

/**
 * Standard API response structure
 *
 * @template T - The type of data contained in the response
 */
export interface ApiResponse<T = unknown> {
  /**
   * The response data
   */
  data: T;

  /**
   * HTTP status code
   */
  status: number;

  /**
   * Response headers
   */
  headers: Headers;
}

/**
 * API error structure
 */
export interface ApiError {
  /**
   * HTTP status code
   */
  status: number;

  /**
   * Error message
   */
  message: string;

  /**
   * Optional array of specific validation errors
   */
  errors?: Array<{
    field?: string;
    message: string;
  }>;
}

/**
 * Agent types supported by the platform
 */
export type AgentType =
  | "research"
  | "analyst"
  | "writer"
  | "assistant"
  | "dataManager"
  | "custom";

/**
 * Agent capability identifiers
 */
export type AgentCapability =
  | "web_search"
  | "document_analysis"
  | "data_synthesis"
  | "data_processing"
  | "statistical_analysis"
  | "chart_generation"
  | "content_creation"
  | "editing"
  | "tone_adjustment"
  | "task_management"
  | "question_answering"
  | "scheduling"
  | "tool_usage"
  | "vector_search";

/**
 * Agent information
 */
export interface Agent {
  /**
   * Unique identifier for the agent
   */
  id: string;

  /**
   * Display name of the agent
   */
  name: string;

  /**
   * Detailed description of the agent's purpose and capabilities
   */
  description: string;

  /**
   * The type of agent
   */
  type: AgentType;

  /**
   * List of capabilities this agent has
   */
  capabilities: AgentCapability[];

  /**
   * Creation timestamp
   */
  createdAt: string;

  /**
   * Last update timestamp
   */
  updatedAt: string;
}

/**
 * Message in a conversation thread
 */
export interface Message {
  /**
   * Unique message identifier
   */
  id: string;

  /**
   * The thread this message belongs to
   */
  threadId: string;

  /**
   * Who sent the message
   */
  role: "user" | "agent" | "system";

  /**
   * The message content
   */
  content: string;

  /**
   * When the message was sent
   */
  timestamp: string;

  /**
   * Optional metadata about the message
   */
  metadata?: Record<string, unknown>;
}

/**
 * Conversation thread
 */
export interface Thread {
  /**
   * Unique thread identifier
   */
  id: string;

  /**
   * Title or subject of the thread
   */
  title?: string;

  /**
   * User who owns this thread
   */
  userId: string;

  /**
   * Agent assigned to this thread
   */
  agentId?: string;

  /**
   * Current status of the thread
   */
  status: "active" | "archived" | "deleted";

  /**
   * Creation timestamp
   */
  createdAt: string;

  /**
   * Last update timestamp
   */
  updatedAt: string;

  /**
   * Last activity timestamp
   */
  lastActiveAt: string;
}

/**
 * User dashboard metrics
 */
export interface DashboardMetrics {
  /**
   * Number of agents created by the user
   */
  agents: number;

  /**
   * Number of active conversation threads
   */
  activeThreads: number;

  /**
   * Total messages sent by the user
   */
  messagesSent: number;

  /**
   * Total API calls made
   */
  apiCalls: number;

  /**
   * Usage data over time
   */
  usageData: Array<{
    /**
     * Date in ISO format (YYYY-MM-DD)
     */
    date: string;

    /**
     * Number of API calls on this date
     */
    calls: number;
  }>;
}

/**
 * Admin analytics data
 */
export interface AnalyticsData {
  /**
   * Total number of registered users
   */
  totalUsers: number;

  /**
   * Number of active users in the selected period
   */
  activeUsers: number;

  /**
   * Total number of agents created across all users
   */
  totalAgents: number;

  /**
   * Total API calls made across all users
   */
  totalApiCalls: number;

  /**
   * User growth over time
   */
  userGrowth: Array<{
    /**
     * Date or time period
     */
    date: string;

    /**
     * User count for this period
     */
    count: number;
  }>;

  /**
   * API usage over time
   */
  apiUsage: Array<{
    /**
     * Date or time period
     */
    date: string;

    /**
     * API call count for this period
     */
    count: number;
  }>;

  /**
   * Distribution of agent types
   */
  agentDistribution: Record<string, number>;
}
