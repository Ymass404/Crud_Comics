/// <reference types="vitest" />
import { defineConfig } from "vitest/config";
import { loadEnvConfig } from "@next/env";

const projectDir = process.cwd();
loadEnvConfig(projectDir);

export default defineConfig({
  test: {
    alias: { "@": "src" },
    exclude: ["node_modules", ".next", "public"],
    include: ["src/**/*.test.ts", "scripts/**/*.test.ts"],
  },
});
