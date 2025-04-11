/**
 * Mastra API Client
 *
 * This module serves as the integration layer between the frontend and the Mastra AI backend API.
 * It abstracts away the details of API communication and provides a clean interface for frontend components.
 *
 * @module api/mastra
 */

import { type ApiResponse, type ApiError } from "@/types/api";

/**
 * Base URL for the Mastra API
 * This should be configured via environment variables
 */
const API_BASE_URL =
  process.env.NEXT_PUBLIC_MASTRA_API_URL || "http://localhost:4111";

/**
 * Default request timeout in milliseconds
 */
const DEFAULT_TIMEOUT = 30000;

/**
 * Configuration options for API requests
 */
export interface RequestOptions {
  /**
   * Authentication token to include in requests
   */
  token?: string;

  /**
   * Request timeout in milliseconds
   * @default 30000
   */
  timeout?: number;

  /**
   * Signal object that allows you to abort the request
   */
  signal?: AbortSignal;
}

/**
 * Generic API request helper with error handling and timeout support
 *
 * @template T - The expected response data type
 * @param path - API endpoint path (without base URL)
 * @param method - HTTP method
 * @param data - Optional request body data
 * @param options - Request options including authentication
 * @returns Promise resolving to the API response data
 * @throws Will throw an error if the request fails or times out
 */
async function makeRequest<T>(
  path: string,
  method: string,
  data?: unknown,
  options: RequestOptions = {}
): Promise<ApiResponse<T>> {
  const { token, timeout = DEFAULT_TIMEOUT, signal } = options;

  // Create URL with base and path
  const url = new URL(path, API_BASE_URL);

  // Set up headers
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  // Add authorization header if token is provided
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  // Prepare fetch options
  const fetchOptions: RequestInit = {
    method,
    headers,
    signal,
  };

  // Add body for non-GET requests
  if (data && method !== "GET") {
    fetchOptions.body = JSON.stringify(data);
  }

  try {
    // Setup timeout controller
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    // If a signal was provided, listen for abort events from it
    if (signal) {
      signal.addEventListener("abort", () => controller.abort());
    }

    // Use the controller's signal for the fetch request
    fetchOptions.signal = fetchOptions.signal || controller.signal;

    // Make the request
    const response = await fetch(url.toString(), fetchOptions);

    // Clear timeout since request completed
    clearTimeout(timeoutId);

    // Parse response as JSON
    const responseData = await response.json();

    // Check if request was successful
    if (!response.ok) {
      // Format error according to API error structure
      const error: ApiError = {
        status: response.status,
        message: responseData.message || "An unexpected error occurred",
        errors: responseData.errors,
      };

      throw error;
    }

    // Return successful response
    return {
      data: responseData as T,
      status: response.status,
      headers: response.headers,
    };
  } catch (error) {
    // Handle AbortError (timeout or manual abort)
    if (error instanceof DOMException && error.name === "AbortError") {
      throw {
        status: 408,
        message: "Request timeout",
      } as ApiError;
    }

    // Rethrow ApiError objects
    if ((error as ApiError).status) {
      throw error;
    }

    // Handle other errors
    throw {
      status: 0,
      message: (error as Error).message || "Network error",
    } as ApiError;
  }
}

/**
 * Get a new or existing thread ID for agent conversations
 *
 * @param _options - Request options
 * @returns Promise resolving to an object containing the threadId
 */
export async function getThreadId(
  _options: RequestOptions = {}
): Promise<{ threadId: string }> {
  // This is a placeholder implementation - real implementation will call the actual API
  // return makeRequest<{ threadId: string }>("/threads/create", "POST", {}, options);

  // For now, return a mock thread ID
  return Promise.resolve({ threadId: `thread-${Date.now()}` });
}

/**
 * Send a message to an AI agent
 *
 * @param threadId - The thread ID for the conversation
 * @param message - The message to send
 * @param _agentId - Optional ID of the specific agent to target
 * @param _options - Request options
 * @returns Promise resolving to the agent's response
 */
export async function sendMessageToAgent(
  threadId: string,
  message: string,
  _agentId?: string,
  _options: RequestOptions = {}
): Promise<{ response: string; threadId: string }> {
  // This is a placeholder implementation - real implementation will call the actual API
  /*
  return makeRequest<{ response: string; threadId: string }>(
    "/agents/message",
    "POST",
    { threadId, message, agentId },
    options
  );
  */

  // For now, return a mock response
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    response: `This is a mock response to your message: "${message}"`,
    threadId,
  };
}

/**
 * Get conversation history for a thread
 *
 * @param _threadId - The thread ID to get history for
 * @param _options - Request options
 * @returns Promise resolving to an array of conversation messages
 */
export async function getConversationHistory(
  _threadId: string,
  _options: RequestOptions = {}
): Promise<
  Array<{ role: "user" | "agent"; content: string; timestamp: string }>
> {
  // This is a placeholder implementation - real implementation will call the actual API
  /*
  return makeRequest<Array<{ role: "user" | "agent"; content: string; timestamp: string }>>(
    `/threads/${threadId}/history`,
    "GET",
    undefined,
    options
  ).then(response => response.data);
  */

  // For now, return mock conversation history
  return [
    {
      role: "user",
      content: "Hello, I need help with creating an AI agent",
      timestamp: new Date(Date.now() - 60000).toISOString(),
    },
    {
      role: "agent",
      content:
        "Hi there! I'd be happy to help you create an AI agent. What type of agent are you looking to build?",
      timestamp: new Date(Date.now() - 50000).toISOString(),
    },
    {
      role: "user",
      content: "I need a research agent that can help with market analysis",
      timestamp: new Date(Date.now() - 40000).toISOString(),
    },
    {
      role: "agent",
      content:
        "A research agent for market analysis is a great choice. To get started, you'll need to define the data sources, key metrics, and specific markets you want to analyze.",
      timestamp: new Date(Date.now() - 30000).toISOString(),
    },
  ];
}

/**
 * Get dashboard metrics for the authenticated user
 *
 * @param _options - Request options
 * @returns Promise resolving to dashboard metrics data
 */
export async function getDashboardMetrics(
  _options: RequestOptions = {}
): Promise<{
  agents: number;
  activeThreads: number;
  messagesSent: number;
  apiCalls: number;
  usageData: Array<{ date: string; calls: number }>;
}> {
  // This is a placeholder implementation - real implementation will call the actual API
  /*
  return makeRequest<{
    agents: number;
    activeThreads: number;
    messagesSent: number;
    apiCalls: number;
    usageData: Array<{ date: string; calls: number }>;
  }>(
    "/dashboard/metrics",
    "GET",
    undefined,
    options
  ).then(response => response.data);
  */

  // For now, return mock dashboard metrics
  // Generate some random usage data for the past 7 days
  const usageData = Array.from({ length: 7 }).map((_, index) => {
    const date = new Date();
    date.setDate(date.getDate() - (6 - index));
    return {
      date: date.toISOString().split("T")[0],
      calls: Math.floor(Math.random() * 100) + 50,
    };
  });

  return {
    agents: 5,
    activeThreads: 12,
    messagesSent: 342,
    apiCalls: 1248,
    usageData,
  };
}

// =====================================================================
// Agent API Functions
// =====================================================================

/**
 * Get API status.
 *
 * @param options - Request options
 * @returns Promise resolving to API status information
 */
export async function getApiStatus(
  options: RequestOptions = {}
): Promise<ApiResponse<{ message: string }>> {
  return makeRequest<{ message: string }>("/api", "GET", undefined, options);
}

/**
 * Get all available agents.
 *
 * @param options - Request options
 * @returns Promise resolving to an array of agents
 */
export async function getApiAgents(
  options: RequestOptions = {}
): Promise<ApiResponse<any[]>> {
  return makeRequest<any[]>("/api/agents", "GET", undefined, options);
}

/**
 * Get agent by ID.
 *
 * @param agentId - ID of the agent to retrieve
 * @param options - Request options
 * @returns Promise resolving to agent details
 */
export async function getApiAgentById(
  agentId: string,
  options: RequestOptions = {}
): Promise<ApiResponse<any>> {
  return makeRequest<any>(`/api/agents/${agentId}`, "GET", undefined, options);
}

/**
 * Get CI evals by agent ID.
 *
 * @param agentId - ID of the agent to retrieve evals for
 * @param options - Request options
 * @returns Promise resolving to an array of CI evals
 */
export async function getAgentCiEvals(
  agentId: string,
  options: RequestOptions = {}
): Promise<ApiResponse<any[]>> {
  return makeRequest<any[]>(
    `/api/agents/${agentId}/evals/ci`,
    "GET",
    undefined,
    options
  );
}

/**
 * Get live evals by agent ID.
 *
 * @param agentId - ID of the agent to retrieve evals for
 * @param options - Request options
 * @returns Promise resolving to an array of live evals
 */
export async function getAgentLiveEvals(
  agentId: string,
  options: RequestOptions = {}
): Promise<ApiResponse<any[]>> {
  return makeRequest<any[]>(
    `/api/agents/${agentId}/evals/live`,
    "GET",
    undefined,
    options
  );
}

/**
 * Generate a response from an agent.
 *
 * @param agentId - ID of the agent to generate a response from
 * @param body - Request body containing messages and optional parameters
 * @param options - Request options
 * @returns Promise resolving to the generated response
 */
export async function generateAgentResponse(
  agentId: string,
  body: any,
  options: RequestOptions = {}
): Promise<ApiResponse<any>> {
  return makeRequest<any>(
    `/api/agents/${agentId}/generate`,
    "POST",
    body,
    options
  );
}

/**
 * Stream a response from an agent.
 *
 * @param agentId - ID of the agent to stream a response from
 * @param body - Request body containing messages and optional parameters
 * @param options - Request options
 * @returns Promise resolving to a streaming response
 */
export async function streamAgentResponse(
  agentId: string,
  body: any,
  options: RequestOptions = {}
): Promise<Response> {
  const url = `${API_BASE_URL}/api/agents/${agentId}/stream`;
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (options.token) {
    headers["Authorization"] = `Bearer ${options.token}`;
  }

  const fetchOptions: RequestInit = {
    method: "POST",
    headers,
    body: JSON.stringify(body),
    signal: options.signal,
  };

  return fetch(url, fetchOptions);
}

/**
 * Update an agent's instructions.
 *
 * @param agentId - ID of the agent to update
 * @param body - Request body containing new instructions
 * @param options - Request options
 * @returns Promise resolving to the updated agent
 */
export async function updateAgentInstructions(
  agentId: string,
  body: { instructions: string },
  options: RequestOptions = {}
): Promise<ApiResponse<any>> {
  return makeRequest<any>(
    `/api/agents/${agentId}/instructions`,
    "POST",
    body,
    options
  );
}

/**
 * Generate an improved system prompt from instructions.
 *
 * @param agentId - ID of the agent whose model will be used for prompt generation
 * @param body - Request body containing instructions and optional comment
 * @param options - Request options
 * @returns Promise resolving to the enhanced prompt with explanation
 */
export async function enhanceAgentInstructions(
  agentId: string,
  body: { instructions: string; comment?: string },
  options: RequestOptions = {}
): Promise<ApiResponse<{ explanation: string; new_prompt: string }>> {
  return makeRequest<{ explanation: string; new_prompt: string }>(
    `/api/agents/${agentId}/instructions/enhance`,
    "POST",
    body,
    options
  );
}

/**
 * Get available speakers for an agent's voice.
 *
 * @param agentId - ID of the agent to get speakers for
 * @param options - Request options
 * @returns Promise resolving to an array of available speakers
 */
export async function getAgentVoiceSpeakers(
  agentId: string,
  options: RequestOptions = {}
): Promise<ApiResponse<any[]>> {
  return makeRequest<any[]>(
    `/api/agents/${agentId}/voice/speakers`,
    "GET",
    undefined,
    options
  );
}

/**
 * Convert text to speech using the agent's voice provider.
 *
 * @param agentId - ID of the agent to use for text-to-speech
 * @param body - Request body containing input text and options
 * @param options - Request options
 * @returns Promise resolving to the raw Response object containing audio data
 * @throws {ApiError} If the request fails or times out.
 */
export async function speakAgentVoice(
  agentId: string,
  body: { input: string; options?: { speaker?: string; [key: string]: any } },
  options: RequestOptions = {}
): Promise<Response> {
  const path = `/api/agents/${agentId}/voice/speak`;
  const url = new URL(path, API_BASE_URL);
  const { token, timeout = DEFAULT_TIMEOUT, signal: userSignal } = options;

  const headers: HeadersInit = {
    "Content-Type": "application/json",
    Accept: "audio/mpeg, audio/*", // Request audio response
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  // Setup timeout controller
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort("timeout"), timeout);

  // Combine user signal with timeout signal
  // Check if AbortSignal.any is supported and userSignal is provided
  const signal =
    typeof AbortSignal.any === "function" && userSignal
      ? AbortSignal.any([userSignal, controller.signal])
      : userSignal ?? controller.signal; // Fallback if AbortSignal.any is not available or no userSignal

  const fetchOptions: RequestInit = {
    method: "POST",
    headers,
    body: JSON.stringify(body),
    signal,
  };

  try {
    const response = await fetch(url.toString(), fetchOptions);
    clearTimeout(timeoutId); // Clear timeout as fetch initiated

    if (!response.ok) {
      let errorData: any = {};
      try {
        // Try to parse error response as JSON
        errorData = await response.json();
      } catch (e) {
        // Ignore if error response is not JSON
      }
      throw {
        status: response.status,
        message:
          errorData?.message || response.statusText || "Failed to fetch audio",
        errors: errorData?.errors,
      } as ApiError;
    }

    // Return the raw response; caller needs to handle .blob(), .arrayBuffer(), etc.
    return response;
  } catch (error) {
    clearTimeout(timeoutId); // Ensure timeout is cleared on error

    if (error instanceof DOMException && error.name === "AbortError") {
      const reason =
        controller.signal.reason === "timeout"
          ? "Request timeout"
          : "Request aborted";
      throw {
        status: 408, // Use 408 for timeout/abort consistency
        message: reason,
      } as ApiError;
    }

    if ((error as ApiError).status) {
      throw error; // Rethrow known ApiError
    }

    // Handle other network errors
    throw {
      status: 0, // Indicate network-level failure
      message: (error as Error).message || "Network error during audio fetch",
    } as ApiError;
  }
}

/**
 * Convert speech to text using the agent's voice provider.
 *
 * @param agentId - ID of the agent to use for speech-to-text
 * @param formData - Form data containing audio file
 * @param queryParams - Optional query parameters for provider-specific options
 * @param options - Request options
 * @returns Promise resolving to the transcribed text
 */
export async function listenAgentVoice(
  agentId: string,
  formData: FormData,
  queryParams?: Record<string, string>,
  options: RequestOptions = {}
): Promise<ApiResponse<{ text: string }>> {
  let path = `/api/agents/${agentId}/voice/listen`;

  // Add query parameters if provided
  if (queryParams && Object.keys(queryParams).length > 0) {
    const queryString = new URLSearchParams(queryParams).toString();
    path = `${path}?${queryString}`;
  }

  // Use fetch directly for FormData
  const url = new URL(path, API_BASE_URL);
  const headers: HeadersInit = {};

  if (options.token) {
    headers["Authorization"] = `Bearer ${options.token}`;
  }

  try {
    const response = await fetch(url.toString(), {
      method: "POST",
      headers,
      body: formData,
      signal: options.signal,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw {
        status: response.status,
        message: errorData.message || "An unexpected error occurred",
        errors: errorData.errors,
      } as ApiError;
    }

    const data = await response.json();

    return {
      data,
      status: response.status,
      headers: response.headers,
    };
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") {
      throw {
        status: 408,
        message: "Request timeout",
      } as ApiError;
    }

    if ((error as ApiError).status) {
      throw error;
    }

    throw {
      status: 0,
      message: (error as Error).message || "Network error",
    } as ApiError;
  }
}

/**
 * Execute a tool through an agent.
 *
 * @param agentId - ID of the agent to execute the tool
 * @param toolId - ID of the tool to execute
 * @param body - Request body containing tool parameters
 * @param options - Request options
 * @returns Promise resolving to the tool execution result
 */
export async function executeAgentTool(
  agentId: string,
  toolId: string,
  body: { data: any },
  options: RequestOptions = {}
): Promise<ApiResponse<any>> {
  return makeRequest<any>(
    `/api/agents/${agentId}/tools/${toolId}/execute`,
    "POST",
    body,
    options
  );
}

// =====================================================================
// Network API Functions
// =====================================================================

/**
 * Get all available networks.
 *
 * @param options - Request options
 * @returns Promise resolving to an array of networks
 */
export async function getApiNetworks(
  options: RequestOptions = {}
): Promise<ApiResponse<any[]>> {
  return makeRequest<any[]>("/api/networks", "GET", undefined, options);
}

/**
 * Get network by ID.
 *
 * @param networkId - ID of the network to retrieve
 * @param options - Request options
 * @returns Promise resolving to network details
 */
export async function getApiNetworkById(
  networkId: string,
  options: RequestOptions = {}
): Promise<ApiResponse<any>> {
  return makeRequest<any>(
    `/api/networks/${networkId}`,
    "GET",
    undefined,
    options
  );
}

/**
 * Generate a response from a network.
 *
 * @param networkId - ID of the network to generate a response from
 * @param body - Request body containing input text or messages
 * @param options - Request options
 * @returns Promise resolving to the generated response
 */
export async function generateNetworkResponse(
  networkId: string,
  body: { input: string | any[] },
  options: RequestOptions = {}
): Promise<ApiResponse<any>> {
  return makeRequest<any>(
    `/api/networks/${networkId}/generate`,
    "POST",
    body,
    options
  );
}

/**
 * Stream a response from a network.
 *
 * @param networkId - ID of the network to stream a response from
 * @param body - Request body containing input text or messages
 * @param options - Request options
 * @returns Promise resolving to a streaming response
 */
export async function streamNetworkResponse(
  networkId: string,
  body: { input: string | any[] },
  options: RequestOptions = {}
): Promise<Response> {
  const url = `${API_BASE_URL}/api/networks/${networkId}/stream`;
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (options.token) {
    headers["Authorization"] = `Bearer ${options.token}`;
  }

  const fetchOptions: RequestInit = {
    method: "POST",
    headers,
    body: JSON.stringify(body),
    signal: options.signal,
  };

  return fetch(url, fetchOptions);
}

// =====================================================================
// Memory API Functions
// =====================================================================

/**
 * Get memory status.
 *
 * @param agentId - ID of the agent to get memory status for
 * @param options - Request options
 * @returns Promise resolving to memory status information
 */
export async function getMemoryStatus(
  agentId: string,
  options: RequestOptions = {}
): Promise<ApiResponse<any>> {
  return makeRequest<any>("/api/memory/status", "GET", { agentId }, options);
}

/**
 * Get all threads.
 *
 * @param resourceId - ID of the resource
 * @param agentId - ID of the agent
 * @param options - Request options
 * @returns Promise resolving to an array of threads
 */
export async function getMemoryThreads(
  resourceId: string,
  agentId: string,
  options: RequestOptions = {}
): Promise<ApiResponse<any[]>> {
  return makeRequest<any[]>(
    "/api/memory/threads",
    "GET",
    { resourceId, agentId },
    options
  );
}

/**
 * Create a new thread.
 *
 * @param agentId - ID of the agent
 * @param body - Request body containing thread creation parameters
 * @param options - Request options
 * @returns Promise resolving to the created thread
 */
export async function createMemoryThread(
  agentId: string,
  body: any,
  options: RequestOptions = {}
): Promise<ApiResponse<any>> {
  return makeRequest<any>(
    `/api/memory/threads?agentId=${encodeURIComponent(agentId)}`,
    "POST",
    body,
    options
  );
}

/**
 * Get thread by ID.
 *
 * @param threadId - ID of the thread to retrieve
 * @param agentId - ID of the agent
 * @param options - Request options
 * @returns Promise resolving to thread details
 */
export async function getMemoryThreadById(
  threadId: string,
  agentId: string,
  options: RequestOptions = {}
): Promise<ApiResponse<any>> {
  return makeRequest<any>(
    `/api/memory/threads/${threadId}`,
    "GET",
    { agentId },
    options
  );
}

/**
 * Update a thread.
 *
 * @param threadId - ID of the thread to update
 * @param agentId - ID of the agent
 * @param body - Request body containing thread update parameters
 * @param options - Request options
 * @returns Promise resolving to the updated thread
 */
export async function updateMemoryThread(
  threadId: string,
  agentId: string,
  body: any,
  options: RequestOptions = {}
): Promise<ApiResponse<any>> {
  return makeRequest<any>(
    `/api/memory/threads/${threadId}?agentId=${encodeURIComponent(agentId)}`,
    "PATCH",
    body,
    options
  );
}

/**
 * Delete a thread.
 *
 * @param threadId - ID of the thread to delete
 * @param agentId - ID of the agent
 * @param options - Request options
 * @returns Promise resolving to delete confirmation
 */
export async function deleteMemoryThread(
  threadId: string,
  agentId: string,
  options: RequestOptions = {}
): Promise<ApiResponse<any>> {
  return makeRequest<any>(
    `/api/memory/threads/${threadId}?agentId=${encodeURIComponent(agentId)}`,
    "DELETE",
    undefined,
    options
  );
}

/**
 * Get messages for a thread.
 *
 * @param threadId - ID of the thread to get messages for
 * @param agentId - ID of the agent
 * @param options - Request options
 * @returns Promise resolving to an array of messages
 */
export async function getMemoryThreadMessages(
  threadId: string,
  agentId: string,
  options: RequestOptions = {}
): Promise<ApiResponse<any[]>> {
  return makeRequest<any[]>(
    `/api/memory/threads/${threadId}/messages`,
    "GET",
    { agentId },
    options
  );
}

/**
 * Save messages.
 *
 * @param agentId - ID of the agent
 * @param body - Request body containing messages to save
 * @param options - Request options
 * @returns Promise resolving to save confirmation
 */
export async function saveMemoryMessages(
  agentId: string,
  body: { messages: any[] },
  options: RequestOptions = {}
): Promise<ApiResponse<any>> {
  return makeRequest<any>(
    `/api/memory/save-messages?agentId=${encodeURIComponent(agentId)}`,
    "POST",
    body,
    options
  );
}

// =====================================================================
// Telemetry API Functions
// =====================================================================

/**
 * Get all traces (paged).
 *
 * @param options - Request options
 * @returns Promise resolving to an array of telemetry traces
 */
export async function getTelemetryTraces(
  options: RequestOptions = {}
): Promise<ApiResponse<any[]>> {
  return makeRequest<any[]>("/api/telemetry", "GET", undefined, options);
}

/**
 * Store telemetry traces.
 *
 * @param body - Request body containing traces to store
 * @param options - Request options
 * @returns Promise resolving to store confirmation
 */
export async function storeTelemetryTraces(
  body: any,
  options: RequestOptions = {}
): Promise<ApiResponse<any>> {
  return makeRequest<any>("/api/telemetry", "POST", body, options);
}

// =====================================================================
// Workflow API Functions
// =====================================================================

/**
 * Get all workflows.
 *
 * @param options - Request options
 * @returns Promise resolving to an array of workflows
 */
export async function getApiWorkflows(
  options: RequestOptions = {}
): Promise<ApiResponse<any[]>> {
  return makeRequest<any[]>("/api/workflows", "GET", undefined, options);
}

/**
 * Get workflow by ID.
 *
 * @param workflowId - ID of the workflow to retrieve
 * @param options - Request options
 * @returns Promise resolving to workflow details
 */
export async function getApiWorkflowById(
  workflowId: string,
  options: RequestOptions = {}
): Promise<ApiResponse<any>> {
  return makeRequest<any>(
    `/api/workflows/${workflowId}`,
    "GET",
    undefined,
    options
  );
}

/**
 * Get all runs for a workflow.
 *
 * @param workflowId - ID of the workflow to get runs for
 * @param options - Request options
 * @returns Promise resolving to an array of workflow runs
 */
export async function getWorkflowRuns(
  workflowId: string,
  options: RequestOptions = {}
): Promise<ApiResponse<any[]>> {
  return makeRequest<any[]>(
    `/api/workflows/${workflowId}/runs`,
    "GET",
    undefined,
    options
  );
}

/**
 * Resume a suspended workflow step.
 *
 * @param workflowId - ID of the workflow to resume
 * @param runId - ID of the run to resume
 * @param body - Request body containing resume parameters
 * @param options - Request options
 * @returns Promise resolving to resume confirmation
 */
export async function resumeWorkflowStep(
  workflowId: string,
  runId: string,
  body: any,
  options: RequestOptions = {}
): Promise<ApiResponse<any>> {
  return makeRequest<any>(
    `/api/workflows/${workflowId}/resume?runId=${encodeURIComponent(runId)}`,
    "POST",
    body,
    options
  );
}

/**
 * Resume a suspended workflow step asynchronously.
 *
 * @param workflowId - ID of the workflow to resume
 * @param runId - ID of the run to resume
 * @param body - Request body containing resume parameters
 * @param options - Request options
 * @returns Promise resolving to resume confirmation
 */
export async function resumeWorkflowStepAsync(
  workflowId: string,
  runId: string,
  body: any,
  options: RequestOptions = {}
): Promise<ApiResponse<any>> {
  return makeRequest<any>(
    `/api/workflows/${workflowId}/resume-async?runId=${encodeURIComponent(
      runId
    )}`,
    "POST",
    body,
    options
  );
}

/**
 * Create a new workflow run.
 *
 * @param workflowId - ID of the workflow to create a run for
 * @param runId - Optional ID for the run
 * @param options - Request options
 * @returns Promise resolving to the created run
 */
export async function createWorkflowRun(
  workflowId: string,
  runId?: string,
  options: RequestOptions = {}
): Promise<ApiResponse<any>> {
  let path = `/api/workflows/${workflowId}/createRun`;
  if (runId) {
    path += `?runId=${encodeURIComponent(runId)}`;
  }
  return makeRequest<any>(path, "POST", undefined, options);
}

/**
 * Start a workflow asynchronously.
 *
 * @param workflowId - ID of the workflow to start
 * @param body - Request body containing workflow inputs
 * @param runId - Optional ID for the run
 * @param options - Request options
 * @returns Promise resolving to start confirmation
 */
export async function startWorkflowAsync(
  workflowId: string,
  body: any,
  runId?: string,
  options: RequestOptions = {}
): Promise<ApiResponse<any>> {
  let path = `/api/workflows/${workflowId}/startAsync`;
  if (runId) {
    path += `?runId=${encodeURIComponent(runId)}`;
  }
  return makeRequest<any>(path, "POST", body, options);
}

/**
 * Start a workflow.
 *
 * @param workflowId - ID of the workflow to start
 * @param runId - ID for the run
 * @param body - Request body containing workflow inputs
 * @param options - Request options
 * @returns Promise resolving to start confirmation
 */
export async function startWorkflow(
  workflowId: string,
  runId: string,
  body: any,
  options: RequestOptions = {}
): Promise<ApiResponse<any>> {
  return makeRequest<any>(
    `/api/workflows/${workflowId}/start?runId=${encodeURIComponent(runId)}`,
    "POST",
    body,
    options
  );
}

/**
 * Watch workflow transitions in real-time.
 *
 * @param workflowId - ID of the workflow to watch
 * @param runId - Optional ID of the run to watch
 * @param options - Request options
 * @returns EventSource for watching transitions
 */
export function watchWorkflowTransitions(
  workflowId: string,
  runId?: string,
  options: RequestOptions = {}
): EventSource {
  let url = `${API_BASE_URL}/api/workflows/${workflowId}/watch`;
  const params = new URLSearchParams();
  if (runId) params.set("runId", runId);
  if (options.token) params.set("token", options.token);
  url += `?${params.toString()}`;

  return new EventSource(url);
}

// =====================================================================
// Log API Functions
// =====================================================================

/**
 * Get all logs.
 *
 * @param transportId - ID of the transport to get logs from
 * @param options - Request options
 * @returns Promise resolving to an array of logs
 */
export async function getApiLogs(
  transportId: string,
  options: RequestOptions = {}
): Promise<ApiResponse<any[]>> {
  return makeRequest<any[]>("/api/logs", "GET", { transportId }, options);
}

/**
 * List all log transports.
 *
 * @param options - Request options
 * @returns Promise resolving to an array of log transports
 */
export async function getLogTransports(
  options: RequestOptions = {}
): Promise<ApiResponse<any[]>> {
  return makeRequest<any[]>("/api/logs/transports", "GET", undefined, options);
}

/**
 * Get logs by run ID.
 *
 * @param runId - ID of the run to get logs for
 * @param transportId - ID of the transport to get logs from
 * @param options - Request options
 * @returns Promise resolving to an array of logs
 */
export async function getLogsByRunId(
  runId: string,
  transportId: string,
  options: RequestOptions = {}
): Promise<ApiResponse<any[]>> {
  return makeRequest<any[]>(
    `/api/logs/${runId}`,
    "GET",
    { transportId },
    options
  );
}

// =====================================================================
// Tools API Functions
// =====================================================================

/**
 * Get all tools.
 *
 * @param options - Request options
 * @returns Promise resolving to an array of tools
 */
export async function getApiTools(
  options: RequestOptions = {}
): Promise<ApiResponse<any[]>> {
  return makeRequest<any[]>("/api/tools", "GET", undefined, options);
}

/**
 * Get tool by ID.
 *
 * @param toolId - ID of the tool to retrieve
 * @param options - Request options
 * @returns Promise resolving to tool details
 */
export async function getApiToolById(
  toolId: string,
  options: RequestOptions = {}
): Promise<ApiResponse<any>> {
  return makeRequest<any>(`/api/tools/${toolId}`, "GET", undefined, options);
}

/**
 * Execute a tool.
 *
 * @param toolId - ID of the tool to execute
 * @param body - Request body containing tool parameters
 * @param options - Request options
 * @returns Promise resolving to the tool execution result
 */
export async function executeTool(
  toolId: string,
  body: { data: any },
  options: RequestOptions = {}
): Promise<ApiResponse<any>> {
  return makeRequest<any>(
    `/api/tools/${toolId}/execute`,
    "POST",
    body,
    options
  );
}

// =====================================================================
// Vector API Functions
// =====================================================================

/**
 * Upsert vectors into an index.
 *
 * @param vectorName - Name of the vector store
 * @param body - Request body containing vectors to upsert
 * @param options - Request options
 * @returns Promise resolving to upsert confirmation
 */
export async function upsertVectors(
  vectorName: string,
  body: {
    indexName: string;
    vectors: number[][];
    metadata?: object[];
    ids?: string[];
  },
  options: RequestOptions = {}
): Promise<ApiResponse<any>> {
  return makeRequest<any>(
    `/api/vector/${vectorName}/upsert`,
    "POST",
    body,
    options
  );
}

/**
 * Create a new vector index.
 *
 * @param vectorName - Name of the vector store
 * @param body - Request body containing index creation parameters
 * @param options - Request options
 * @returns Promise resolving to create confirmation
 */
export async function createVectorIndex(
  vectorName: string,
  body: {
    indexName: string;
    dimension: number;
    metric?: "cosine" | "euclidean" | "dotproduct";
  },
  options: RequestOptions = {}
): Promise<ApiResponse<any>> {
  return makeRequest<any>(
    `/api/vector/${vectorName}/create-index`,
    "POST",
    body,
    options
  );
}

/**
 * Query vectors from an index.
 *
 * @param vectorName - Name of the vector store
 * @param body - Request body containing query parameters
 * @param options - Request options
 * @returns Promise resolving to query results
 */
export async function queryVectors(
  vectorName: string,
  body: {
    indexName: string;
    queryVector: number[];
    topK?: number;
    filter?: object;
    includeVector?: boolean;
  },
  options: RequestOptions = {}
): Promise<ApiResponse<any>> {
  return makeRequest<any>(
    `/api/vector/${vectorName}/query`,
    "POST",
    body,
    options
  );
}

/**
 * List all indexes for a vector store.
 *
 * @param vectorName - Name of the vector store
 * @param options - Request options
 * @returns Promise resolving to an array of index information
 */
export async function listVectorIndexes(
  vectorName: string,
  options: RequestOptions = {}
): Promise<ApiResponse<any[]>> {
  return makeRequest<any[]>(
    `/api/vector/${vectorName}/indexes`,
    "GET",
    undefined,
    options
  );
}

/**
 * Get details about a specific index.
 *
 * @param vectorName - Name of the vector store
 * @param indexName - Name of the index
 * @param options - Request options
 * @returns Promise resolving to index details
 */
export async function getVectorIndexDetails(
  vectorName: string,
  indexName: string,
  options: RequestOptions = {}
): Promise<ApiResponse<any>> {
  return makeRequest<any>(
    `/api/vector/${vectorName}/indexes/${indexName}`,
    "GET",
    undefined,
    options
  );
}

/**
 * Delete a specific index.
 *
 * @param vectorName - Name of the vector store
 * @param indexName - Name of the index to delete
 * @param options - Request options
 * @returns Promise resolving to delete confirmation
 */
export async function deleteVectorIndex(
  vectorName: string,
  indexName: string,
  options: RequestOptions = {}
): Promise<ApiResponse<any>> {
  return makeRequest<any>(
    `/api/vector/${vectorName}/indexes/${indexName}`,
    "DELETE",
    undefined,
    options
  );
}

/**
 * Get analytics data for admin dashboard
 *
 * @param period - Time period for the analytics data (day, week, month, year)
 * @param _options - Request options
 * @returns Promise resolving to analytics data
 */
export async function getAnalyticsData(
  period: "day" | "week" | "month" | "year" = "week",
  _options: RequestOptions = {}
): Promise<{
  totalUsers: number;
  activeUsers: number;
  totalAgents: number;
  totalApiCalls: number;
  userGrowth: Array<{ date: string; count: number }>;
  apiUsage: Array<{ date: string; count: number }>;
  agentDistribution: Record<string, number>;
}> {
  // This is a placeholder implementation - real implementation will call the actual API
  /*
  return makeRequest<{
    totalUsers: number;
    activeUsers: number;
    totalAgents: number;
    totalApiCalls: number;
    userGrowth: Array<{ date: string; count: number }>;
    apiUsage: Array<{ date: string; count: number }>;
    agentDistribution: Record<string, number>;
  }>(
    "/admin/analytics",
    "GET",
    { period },
    options
  ).then(response => response.data);
  */

  // For now, return mock analytics data
  // Generate datа for the selected period
  const dataPoints =
    period === "day"
      ? 24
      : period === "week"
      ? 7
      : period === "month"
      ? 30
      : 12;

  const userGrowth = Array.from({ length: dataPoints }).map((_, index) => {
    const date = new Date();
    if (period === "day") {
      date.setHours(date.getHours() - (dataPoints - 1 - index));
    } else if (period === "week" || period === "month") {
      date.setDate(date.getDate() - (dataPoints - 1 - index));
    } else {
      // year
      date.setMonth(date.getMonth() - (dataPoints - 1 - index));
    }

    const dateString =
      period === "day"
        ? date.toISOString().split("T")[1].substring(0, 5)
        : date.toISOString().split("T")[0];

    return {
      date: dateString,
      count: Math.floor(Math.random() * 100) + 500 + index * 10, // Increasing trend
    };
  });

  const apiUsage = Array.from({ length: dataPoints }).map((_, index) => {
    const date = new Date();
    if (period === "day") {
      date.setHours(date.getHours() - (dataPoints - 1 - index));
    } else if (period === "week" || period === "month") {
      date.setDate(date.getDate() - (dataPoints - 1 - index));
    } else {
      // year
      date.setMonth(date.getMonth() - (dataPoints - 1 - index));
    }

    const dateString =
      period === "day"
        ? date.toISOString().split("T")[1].substring(0, 5)
        : date.toISOString().split("T")[0];

    return {
      date: dateString,
      count: Math.floor(Math.random() * 5000) + 10000 + index * 500, // Increasing trend
    };
  });

  return {
    totalUsers: 1245,
    activeUsers: 876,
    totalAgents: 2879,
    totalApiCalls: 1248000,
    userGrowth,
    apiUsage,
    agentDistribution: {
      research: 35,
      analyst: 28,
      writer: 22,
      assistant: 15,
    },
  };
}
