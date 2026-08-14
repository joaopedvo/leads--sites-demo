import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://joaopedvo.github.io',
  base: '/leads--sites-demo',
  output: 'static',
  vite: { server: { host: true } }
});
