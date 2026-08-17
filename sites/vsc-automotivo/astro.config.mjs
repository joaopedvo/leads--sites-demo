import { basename } from 'node:path';
import { defineConfig } from 'astro/config';

// Cada demo é publicado em /leads--sites-demo/<nome-da-pasta>. Derivar o base
// do nome da pasta evita que uma cópia esqueça de trocá-lo e sobrescreva outro demo.
const slug = basename(process.cwd());

export default defineConfig({
  site: 'https://joaopedvo.github.io',
  base: `/leads--sites-demo/${slug}`,
  output: 'static',
  vite: { server: { host: true } }
});
