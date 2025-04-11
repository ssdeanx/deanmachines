/**
 * API Route: /api/agents/[agentId]/voice/speakers
 *
 * Handles requests for retrieving available voice speakers for an agent,
 * proxying to the Mastra backend API.
 *
 * @module api/agents/[agentId]/voice/speakers
 */

import { NextRequest, NextResponse } from "next/server";
import { auth } from "../../../../../../../auth";
import { getAgentVoiceSpeakers, RequestOptions } from "@/lib/api/mastra";

/**
 * GET handler for /api/agents/[agentId]/voice/speakers
 *
 * Returns a list of available voice speakers for a specific agent.
 * Requires authentication.
 *
 * @param req - The incoming request
 * @param context - The route context containing params
 * @throws Will respond with 401 if user is not authenticated
 * @throws Will respond with error details from the Mastra API on failure
 * @returns NextResponse with available speakers data
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

    // Fetch available voice speakers from the Mastra API
    const response = await getAgentVoiceSpeakers(params.agentId, options);

    // Return the speakers data to the client
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
      `Error fetching voice speakers for agent ${params.agentId}:`,
      error
    );
    return NextResponse.json(
      { error: "Internal Error", message: "Failed to fetch voice speakers" },
      { status: 500 }
    );
  }
}
