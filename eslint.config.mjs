import { defineConfig, globalIgnores } from "eslint/config";
import handcrafted from "@handcraftech/eslint-config-handcrafted/browser";
import prettier from "eslint-config-prettier/flat";

export default defineConfig([
  // Bundles JS + TS + JSON + CSS now that the package supports TypeScript
  // natively — no separate typescript-eslint layering needed.
  handcrafted.configs.recommended,
  // Disables any stylistic rules (from the config above) that would
  // conflict with Prettier — always keep this last so its overrides win.
  prettier,
  globalIgnores([
    ".amplify/**",
    ".next/**",
    "node_modules/**",
    "package-lock.json",
  ]),
]);
