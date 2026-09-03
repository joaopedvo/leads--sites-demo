import { basename } from 'node:path';
import { defineConfig } from 'astro/config';

const slug = basename(process.cwd());

export default defineConfig({
  site: 'https://joaopedvo.github.io',
  base: `/leads--sites-demo/${slug}`,
  output: 'static',
  vite: { server: { host: true } }
});
