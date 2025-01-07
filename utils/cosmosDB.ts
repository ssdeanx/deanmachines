// services/cosmosDB.ts
import { CosmosClient } from "@azure/cosmos";

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
  const { body: item } = await container.item(itemId, partitionKeyValue).read();

  return item;
}
