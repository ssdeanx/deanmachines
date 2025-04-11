import "dotenv/config";

import { createAISDKTools } from "@agentic/ai-sdk";
import { createMcpTools } from "@agentic/mcp";
import { google } from "@ai-sdk/google";
import { generateText } from "ai";

async function main() {
  // Create an MCP tools provider, which will start a local MCP server process
  // and use the stdio transport to communicate with it.
  const mcpTools = await createMcpTools({
    name: "agentic-mcp-filesystem",
    serverProcess: {
      command: "npx",
      args: [
        "-y",
        // This example uses a built-in example MCP server from Anthropic, which
        // provides a set of tools to access the local filesystem.
        "@modelcontextprotocol/server-filesystem",
        // Allow the MCP server to access the current working directory.
        process.cwd(),
        // Feel free to add additional directories the tool should have access to.
      ],
    },
  });

  const result = await generateText({
    model: google("models/gemini-2.0-flash"),
    // Use the MCP tools provider to create a set of tools for the AI model.
    tools: createAISDKTools(mcpTools),
    toolChoice: "required",
    temperature: 0,
    system: "You are a helpful assistant. Be as concise as possible.",
    prompt: "What files are in the current directory?",
    maxTokens: 400,
  });

  console.log(result.toolResults[0]);
}

await main();
