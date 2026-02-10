import { getDatabaseUrl } from "./src/utils/database-url";
import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./src/database/migrations",
  schema: "./src/database/schemas/**/*.schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: getDatabaseUrl(),
  },
});
