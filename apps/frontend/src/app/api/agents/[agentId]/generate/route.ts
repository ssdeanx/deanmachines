/**
 * API Route: /api/agents/[agentId]/generate
 *
 * Handles requests for generating responses from a specific agent,
 * proxying to the Mastra backend API. This endpoint abstracts the backend API
 * details and provides a consistent interface for frontend components.
 *
 * @module api/agents/[agentId]/generate
 */

import { NextRequest, NextResponse } from "next/server";
import { auth } from "../../../../../../auth";
import { generateAgentResponse, RequestOptions } from "@/lib/api/mastra";

/**
 * POST handler for /api/agents/[agentId]/generate
 *
 * Generates a response from a specific agent based on provided messages.
 * Requires authentication.
 *
 * @param req - The incoming request with message data
 * @param context - The route context containing params
 * @throws Will respond with 401 if user is not authenticated
 * @throws Will respond with 400 if the request body is invalid
 * @throws Will respond with error details from the Mastra API on failure
 * @returns NextResponse with the generated agent response
 */
export async function POST(
  req: NextRequest,
  { params }: { params: { agentId: string } }
): Promise<NextResponse> {
  // Validate authentication
  const session = await auth();
  if (!session || !session.user) {
    return NextResponse.json(
      { error: "Unauthorized", message: "Authentication required" },
      { status: 401 }
    );
  }

  try {
    // Parse and validate request body
    const body = await req.json();

    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { error: "Bad Request", message: "Invalid request body" },
        { status: 400 }
      );
    }

    // Validate messages array
    if (!Array.isArray(body.messages) || body.messages.length === 0) {
      return NextResponse.json(
        {
          error: "Bad Request",
          message: "Messages field must be a non-empty array",
        },
        { status: 400 }
      );
    }

    // Set up request options with authentication if available
    const options: RequestOptions = {};
    // Assume accessToken might be added in auth config callbacks
    const sessionWithToken = session as unknown as { accessToken?: string };
    if (sessionWithToken.accessToken) {
      options.token = sessionWithToken.accessToken;
    }

    // Generate response from the agent via Mastra API
    const response = await generateAgentResponse(params.agentId, body, options);

    // Return the generated response to the client
    return NextResponse.json(response.data, { status: response.status });
  } catch (error: unknown) {
    // Handle errors from the Mastra API
    if (typeof error === "object" && error !== null && "status" in error) {
      const apiError = error as { status: number; message: string };
      return NextResponse.json(
        { error: "API Error", message: apiError.message },
        { status: apiError.status }
      );
    }

    // Handle unexpected errors
    console.error(
      `Error generating agent response for ${params.agentId}:`,
      error
    );
    return NextResponse.json(
      {
        error: "Internal Error",
        message: "Failed to generate agent response",
      },
      { status: 500 }
    );
  }
}
