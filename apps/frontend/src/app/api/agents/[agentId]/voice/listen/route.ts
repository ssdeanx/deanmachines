/**
 * API Route: /api/agents/[agentId]/voice/listen
 *
 * Handles speech-to-text conversion using an agent's voice provider,
 * proxying to the Mastra backend API.
 *
 * @module api/agents/[agentId]/voice/listen
 */

import { NextRequest, NextResponse } from "next/server";
import { auth } from "../../../../../../../auth";
import { listenAgentVoice, RequestOptions } from "@/lib/api/mastra";

/**
 * POST handler for /api/agents/[agentId]/voice/listen
 *
 * Converts speech to text using the agent's voice provider.
 * Requires authentication.
 *
 * @param req - The incoming request with audio data
 * @param context - The route context containing params
 * @throws Will respond with 401 if user is not authenticated
 * @throws Will respond with 400 if the request format is invalid
 * @throws Will respond with error details from the Mastra API on failure
 * @returns NextResponse with transcribed text
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
    // Check if the request has the correct content type
    const contentType = req.headers.get("content-type") || "";

    if (
      !contentType.includes("multipart/form-data") &&
      !contentType.includes("audio/")
    ) {
      return NextResponse.json(
        {
          error: "Bad Request",
          message: "Expected multipart/form-data or audio content",
        },
        { status: 400 }
      );
    }

    // Extract query parameters if any
    const url = new URL(req.url);
    const queryParams: Record<string, string> = {};
    url.searchParams.forEach((value, key) => {
      queryParams[key] = value;
    });

    // Set up request options with authentication if available
    const options: RequestOptions = {};
    // Assume accessToken might be added in auth config callbacks
    const sessionWithToken = session as unknown as { accessToken?: string };
    if (sessionWithToken.accessToken) {
      options.token = sessionWithToken.accessToken;
    }

    // Clone the request to get a fresh body (formData consumes the body)
    const cloneReq = req.clone();

    try {
      // Parse the form data
      const formData = await cloneReq.formData();

      // Send the audio data to the Mastra API for transcription
      const response = await listenAgentVoice(
        params.agentId,
        formData,
        queryParams,
        options
      );

      // Return the transcribed text to the client
      return NextResponse.json(response.data, { status: response.status });
    } catch (formDataError) {
      // Handle cases where formData parsing fails (e.g., direct audio upload)
      console.warn(
        "FormData parsing failed, attempting direct audio processing"
      );

      try {
        // Get the raw audio blob
        const audioBlob = await req.blob();

        // Create a new FormData object and append the audio
        const manualFormData = new FormData();
        manualFormData.append("audio", audioBlob);

        // Send the audio data to the Mastra API
        const response = await listenAgentVoice(
          params.agentId,
          manualFormData,
          queryParams,
          options
        );

        // Return the transcribed text
        return NextResponse.json(response.data, { status: response.status });
      } catch (audioError) {
        console.error("Failed to process audio content:", audioError);
        return NextResponse.json(
          {
            error: "Bad Request",
            message: "Could not process audio content",
          },
          { status: 400 }
        );
      }
    }
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
      `Error in listen endpoint for agent ${params.agentId}:`,
      error
    );
    return NextResponse.json(
      { error: "Internal Error", message: "Failed to process speech to text" },
      { status: 500 }
    );
  }
}
