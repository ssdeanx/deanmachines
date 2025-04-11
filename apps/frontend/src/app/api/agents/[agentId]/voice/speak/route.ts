/**
 * API Route: /api/agents/[agentId]/voice/speak
 *
 * Handles text-to-speech conversion using an agent's voice provider,
 * proxying to the Mastra backend API.
 *
 * @module api/agents/[agentId]/voice/speak
 */

import { NextRequest } from "next/server";
import { auth } from "../../../../../../../auth";
import { speakAgentVoice, RequestOptions } from "@/lib/api/mastra";

/**
 * POST handler for /api/agents/[agentId]/voice/speak
 *
 * Converts text to speech using the agent's voice provider.
 * Returns audio data in the requested format.
 * Requires authentication.
 *
 * @param req - The incoming request with text to convert
 * @param context - The route context containing params
 * @throws Will respond with 401 if user is not authenticated
 * @throws Will respond with 400 if the request body is invalid
 * @throws Will respond with error details from the Mastra API on failure
 * @returns Response containing audio data
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

    // Validate input text
    if (!body.input || typeof body.input !== "string") {
      return new Response(
        JSON.stringify({
          error: "Bad Request",
          message: "Missing or invalid input text",
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

    try {
      // Call the Mastra API to convert text to speech
      const response = await speakAgentVoice(params.agentId, body, options);

      // Determine content type from the response or default to audio/mpeg
      const contentType = response.headers?.get("content-type") || "audio/mpeg";

      // Return the audio data as a blob
      return new Response(await response.blob(), {
        headers: {
          "Content-Type": contentType,
          "Cache-Control": "no-cache",
        },
      });
    } catch (apiError) {
      // Handle API-specific errors
      if (
        typeof apiError === "object" &&
        apiError !== null &&
        "status" in apiError
      ) {
        const typedError = apiError as { status: number; message: string };
        return new Response(
          JSON.stringify({
            error: "API Error",
            message: typedError.message,
          }),
          {
            status: typedError.status,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      }

      throw apiError; // Re-throw for general error handling
    }
  } catch (error: unknown) {
    // Handle unexpected errors
    console.error(
      `Error in speak endpoint for agent ${params.agentId}:`,
      error
    );
    return new Response(
      JSON.stringify({
        error: "Internal Error",
        message: "Failed to convert text to speech",
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
