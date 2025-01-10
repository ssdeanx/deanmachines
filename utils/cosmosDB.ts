// services/cosmosDB.ts
import { CosmosClient, ItemResponse } from "@azure/cosmos"; // Added ItemResponse import

import config from "../config/config";

const client = new CosmosClient({
  endpoint: config.cosmosDB.endpoint,
  key: config.cosmosDB.key,
});

export async function getItem(
  itemId: string,
  partitionKeyValue: string,
): Promise<any> {
  const database = client.database(config.cosmosDB.databaseId);
  const container = database.container(config.cosmosDB.containerId);
  const response: ItemResponse<any> = await container
    .item(itemId, partitionKeyValue)
    .read();

  return response.body;
}
