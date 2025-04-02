// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  vite: {
    build: {
      minify: false,
    },
  },
  compressHTML: false,
});
