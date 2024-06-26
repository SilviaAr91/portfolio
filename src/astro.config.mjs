// astro.config.mjs
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://silviaar91.github.io/silviaar91.github.io",
  output: "static",
  integrations: [sitemap()],
  buildOptions: {
    site: "https://silviaar91.github.io/silviaar91.github.io",
    sitemap: true,
  },
});
