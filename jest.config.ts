/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from "jest";
import { resolve } from "path";

const root = resolve(__dirname);

const config: Config = {
  rootDir: root,
  displayName: "root-tests",
  testMatch: ["<rootDir>/src/**/*.test.ts", "<rootDir>/tests/**/*.test.ts"],
  testEnvironment: "node",
  clearMocks: true,
  preset: "ts-jest",
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/$1",
  },
  transformIgnorePatterns: ["/node_modules/(?!your-esm-package)/"],
};

export default config;
