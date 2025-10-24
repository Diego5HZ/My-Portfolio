import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://diego5hz.github.io/My-Portfolio',
  base: '/',
  integrations: [tailwind({
    applyBaseStyles: true
  })],
});
