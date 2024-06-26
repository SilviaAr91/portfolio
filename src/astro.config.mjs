// astro.config.mjs
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://silviaar91.github.io/portfolio",
  output: "static",
  integrations: [sitemap()],
  buildOptions: {
    site: "https://silviaar91.github.io/portfolio",
    sitemap: true,
  },
});
