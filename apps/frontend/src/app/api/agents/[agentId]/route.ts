/**
 * API Route: /api/agents/[agentId]
 *
 * Handles requests for specific agent data by ID, proxying to the Mastra backend API.
 * This endpoint abstracts the backend API details and provides a consistent
 * interface for frontend components.
 *
 * @module api/agents/[agentId]
 */

import { NextRequest, NextResponse } from "next/server";
import { auth } from "../../../../../auth";
import {
  getApiAgentById,
  updateAgentInstructions,
  RequestOptions,
} from "@/lib/api/mastra";

/**
 * GET handler for /api/agents/[agentId]
 *
 * Returns details for a specific agent from the Mastra API.
 * Requires authentication.
 *
 * @param req - The incoming request
 * @param context - The route context containing params
 * @throws Will respond with 401 if user is not authenticated
 * @throws Will respond with error details from the Mastra API on failure
 * @returns NextResponse with agent data
 */
export async function GET(
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
    // Set up request options with authentication if available
    const options: RequestOptions = {};
    // Assume accessToken might be added in auth config callbacks
    const sessionWithToken = session as unknown as { accessToken?: string };
    if (sessionWithToken.accessToken) {
      options.token = sessionWithToken.accessToken;
    }

    // Fetch specific agent from the Mastra API
    const response = await getApiAgentById(params.agentId, options);

    // Return the agent data to the client
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
    console.error(`Error fetching agent ${params.agentId}:`, error);
    return NextResponse.json(
      { error: "Internal Error", message: "Failed to fetch agent details" },
      { status: 500 }
    );
  }
}

/**
 * PUT handler for /api/agents/[agentId]
 *
 * Updates a specific agent's properties, currently focused on instructions.
 * Requires authentication.
 *
 * @param req - The incoming request with agent update data
 * @param context - The route context containing params
 * @throws Will respond with 401 if user is not authenticated
 * @throws Will respond with 400 if the request body is invalid
 * @throws Will respond with error details from the Mastra API on failure
 * @returns NextResponse with updated agent data
 */
export async function PUT(
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

    // Currently focused on instructions update
    // Can be expanded to support other agent properties
    if (!body.instructions || typeof body.instructions !== "string") {
      return NextResponse.json(
        {
          error: "Bad Request",
          message: "Missing or invalid instructions field",
        },
        { status: 400 }
      );
    } // <-- Add missing closing brace here

    // Set up request options with authentication if available
    const options: RequestOptions = {};
    // Assume accessToken might be added in auth config callbacks
    const sessionWithToken = session as unknown as { accessToken?: string };
    if (sessionWithToken.accessToken) {
      options.token = sessionWithToken.accessToken;
    }

    // Update agent instructions through the Mastra API

    // Update agent instructions through the Mastra API
    const response = await updateAgentInstructions(
      params.agentId,
      { instructions: body.instructions },
      options
    );

    // Return the updated agent data to the client
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
    console.error(`Error updating agent ${params.agentId}:`, error);
    return NextResponse.json(
      { error: "Internal Error", message: "Failed to update agent" },
      { status: 500 }
    );
  }
}
