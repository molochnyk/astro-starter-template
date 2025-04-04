// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",

  // site: "",
  // base: "/",

  trailingSlash: "never",
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
          // assetFileNames: "styles/[name].css",
          assetFileNames: "assets/[name][extname]",
        },
      },
    },
  },
});
