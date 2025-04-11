/**
 * API Route: /api/agents/[agentId]/stream
 *
 * Handles streaming response generation from a specific agent,
 * proxying to the Mastra backend API. This endpoint creates a streaming
 * connection for real-time agent responses.
 *
 * @module api/agents/[agentId]/stream
 */

import { NextRequest } from "next/server";
import { auth } from "../../../../../../auth";
import { streamAgentResponse, RequestOptions } from "@/lib/api/mastra";

/**
 * POST handler for /api/agents/[agentId]/stream
 *
 * Creates a streaming connection for real-time agent responses.
 * Requires authentication.
 *
 * @param req - The incoming request with message data
 * @param context - The route context containing params
 * @throws Will respond with 401 if user is not authenticated
 * @throws Will respond with 400 if the request body is invalid
 * @throws Will respond with error details from the Mastra API on failure
 * @returns Server-Sent Events (SSE) stream of agent responses
 */
export async function POST(
  req: NextRequest,
  { params }: { params: { agentId: string } }
) {
  // Validate authentication
  const session = await auth();
  if (!session || !session.user) {
    return new Response(
      JSON.stringify({
        error: "Unauthorized",
        message: "Authentication required",
      }),
      {
        status: 401,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  try {
    // Parse request body
    const body = await req.json();

    if (!body || typeof body !== "object") {
      return new Response(
        JSON.stringify({
          error: "Bad Request",
          message: "Invalid request body",
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    // Validate messages array
    if (!Array.isArray(body.messages) || body.messages.length === 0) {
      return new Response(
        JSON.stringify({
          error: "Bad Request",
          message: "Messages field must be a non-empty array",
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    // Set up request options with authentication if available
    const options: RequestOptions = {};
    // Assume accessToken might be added in auth config callbacks
    const sessionWithToken = session as unknown as { accessToken?: string };
    if (sessionWithToken.accessToken) {
      options.token = sessionWithToken.accessToken;
    }

    // Create headers for streaming response
    const headers = new Headers({
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
    });

    try {
      // Initialize streaming connection to Mastra API
      const apiResponse = await streamAgentResponse(
        params.agentId,
        body,
        options
      );

      // Validate API response
      if (!apiResponse.ok) {
        // Handle API error
        const errorData = await apiResponse.json();
        return new Response(
          JSON.stringify({
            error: "API Error",
            message: errorData.message || apiResponse.statusText,
          }),
          {
            status: apiResponse.status,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      }

      // Return the streaming response
      return new Response(apiResponse.body, {
        headers,
      });
    } catch (apiError) {
      // Handle streaming connection errors
      console.error(
        `Error connecting to streaming API for agent ${params.agentId}:`,
        apiError
      );
      return new Response(
        JSON.stringify({
          error: "Streaming Error",
          message: "Failed to establish streaming connection",
        }),
        {
          status: 502,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }
  } catch (error: unknown) {
    // Handle unexpected errors
    console.error(
      `Error in stream endpoint for agent ${params.agentId}:`,
      error
    );
    return new Response(
      JSON.stringify({
        error: "Internal Error",
        message: "An unexpected error occurred",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
