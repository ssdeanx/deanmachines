// services/postgreSQL.ts
import { Pool } from "pg";
import config from "../config/config";

const pool = new Pool({
  host: config.postgreSQL.host,
  port: config.postgreSQL.port,
  user: config.postgreSQL.user,
  password: config.postgreSQL.password,
  database: config.postgreSQL.database,
});

export async function getItem(
  itemId: string,
  partitionKeyValue: string
): Promise<any> {
  const client = await pool.connect();
  try {
    // Placeholder for the actual query
    const result = await client.query("SELECT * FROM items WHERE id = $1", [
      itemId,
    ]);
    return result.rows[0];
  } finally {
    client.release();
  }
}
