/**
 * API Route: /api/agents
 *
 * Handles requests for agent data, proxying to the Mastra backend API.
 * This endpoint abstracts the backend API details and provides a consistent
 * interface for frontend components.
 *
 * @module api/agents
 */

import { NextRequest, NextResponse } from "next/server";
import { auth } from "../../../../auth";
import { getApiAgents, RequestOptions } from "@/lib/api/mastra";

/**
 * GET handler for /api/agents
 *
 * Returns a list of all available agents from the Mastra API.
 * Requires authentication.
 *
 * @throws Will respond with 401 if user is not authenticated
 * @throws Will respond with error details from the Mastra API on failure
 * @returns NextResponse with agent data
 */
export async function GET(req: NextRequest): Promise<NextResponse> {
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

    // Fetch agents from the Mastra API
    const response = await getApiAgents(options);

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
    console.error("Error fetching agents:", error);
    return NextResponse.json(
      { error: "Internal Error", message: "Failed to fetch agents" },
      { status: 500 }
    );
  }
}
