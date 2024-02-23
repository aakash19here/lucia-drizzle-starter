import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config();

export default {
  driver: "turso",
  out: "./lib/db/migrations",
  schema: "./lib/db/schema/todo.ts",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
    authToken: process.env.DATABASE_AUTH_TOKEN,
  },
  // Always ask for confirmation
  strict: true,
} satisfies Config;
