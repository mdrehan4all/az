import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const projectRoot = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  root: resolve(projectRoot, "spa"),
  publicDir: resolve(projectRoot, "public"),
  plugins: [tailwindcss(), viteReact()],
  resolve: {
    alias: {
      "@": resolve(projectRoot, "src"),
    },
  },
  build: {
    outDir: resolve(projectRoot, "dist-spa"),
    emptyOutDir: true,
  },
});