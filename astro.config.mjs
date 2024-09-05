import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-gallery.v9x.net/", //change to your site
  integrations: [tailwind(), robotsTxt(), sitemap()],
});
