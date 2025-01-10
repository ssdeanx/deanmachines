// config.ts
export default {
  cosmosDB: {
    endpoint: process.env.COSMOS_DB_ENDPOINT || "",
    key: process.env.COSMOS_DB_KEY || "",
    databaseId: "sample-database",
    containerId: "sample-container",
  },
};
