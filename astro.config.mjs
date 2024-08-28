import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import icon from "astro-icon";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/adapter-vercel";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), icon(), tailwind()],
  output: 'server', // o 'hybrid' para SSR
  adapters: [vercel()],
});