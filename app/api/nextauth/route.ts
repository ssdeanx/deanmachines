import NextAuth from "next-auth"
import PostgresAdapter from "@auth/pg-adapter"
import { Pool } from "@neondatabase/serverless"
 
// *DO NOT* create a `Pool` here, outside the request handler.
// Neon's Postgres cannot keep a pool alive between requests.
 
export const { handlers, auth, signIn, signOut } = NextAuth(() => {
  // Create a `Pool` inside the request handler.
  const pool = new Pool({ connectionString: process.env.DATABASE_URL })
  return {
    adapter: PostgresAdapter(pool),
    providers: [],
  }
})
