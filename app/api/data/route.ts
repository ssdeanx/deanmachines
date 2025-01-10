// Create a proper API endpoint for data
// app/api/data/route.ts
import { NextResponse } from "next/server";
import { CosmosClient } from "@azure/cosmos";

import config from "../../../config/config";

const client = new CosmosClient({
  endpoint: config.cosmosDB.endpoint,
  key: config.cosmosDB.key,
});

export async function GET() {
  try {
    const database = client.database(config.cosmosDB.databaseId);
    const container = database.container(config.cosmosDB.containerId);
    const items = await container.items.readAll().toArray();

    return NextResponse.json(items);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch data." },
      { status: 500 }
    );
  }
}
