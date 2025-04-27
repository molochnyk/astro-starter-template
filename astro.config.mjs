// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  output: "static",

  base: "/",

  trailingSlash: "ignore",
  compressHTML: false,

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "/src/styles/_variables.scss" as *;
            @use "/src/styles/_functions.scss" as *;
          `,
        },
      },
    },

    build: {
      minify: false,
      rollupOptions: {
        output: {
          assetFileNames: "styles/[name][extname]",
        },
      },
    },

    plugins: [tailwindcss()],
  },
});
