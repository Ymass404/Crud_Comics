import "dotenv/config";
import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import { getDatabaseUrl } from "@/utils/database-url";

const pool = new Pool({
  connectionString: getDatabaseUrl(),
});

export const db = drizzle(pool);
