// Monta dist/index.html a partir das pastas em sites/.
// Cada demo pode trazer um demo.json com { cliente, descricao, cidade }.
// Sem demo.json, o card cai para o nome da pasta — nunca quebra o build.

import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const RAIZ_SITES = 'sites';
const DESTINO = join('dist', 'index.html');

const escapar = (valor) =>
  String(valor).replace(
    /[&<>"']/g,
    (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c],
  );

async function lerMetadados(slug) {
  try {
    const bruto = await readFile(join(RAIZ_SITES, slug, 'demo.json'), 'utf8');
    return JSON.parse(bruto);
  } catch {
    return {};
  }
}

const entradas = await readdir(RAIZ_SITES, { withFileTypes: true });
const demos = [];

for (const entrada of entradas) {
  if (!entrada.isDirectory()) continue;
  const meta = await lerMetadados(entrada.name);
  demos.push({
    slug: entrada.name,
    cliente: meta.cliente || entrada.name,
    descricao: meta.descricao || '',
    cidade: meta.cidade || '',
  });
}

demos.sort((a, b) => a.cliente.localeCompare(b.cliente, 'pt-BR'));

const cards = demos
  .map((demo) => {
    const linhaCidade = demo.cidade
      ? `<p class="cidade">${escapar(demo.cidade)}</p>`
      : '';
    const linhaDescricao = demo.descricao
      ? `<p class="descricao">${escapar(demo.descricao)}</p>`
      : '';
    return `      <li class="card">
        <a href="./${escapar(demo.slug)}/">
          <h2>${escapar(demo.cliente)}</h2>
          ${linhaCidade}
          ${linhaDescricao}
          <span class="link">Abrir demonstração →</span>
        </a>
      </li>`;
  })
  .join('\n');

const html = `<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="noindex, nofollow" />
    <title>Demonstrações de redesign</title>
    <style>
      :root {
        color-scheme: light dark;
        --fundo: #f6f7f9;
        --superficie: #ffffff;
        --texto: #14181f;
        --suave: #5b6472;
        --borda: #e2e6ec;
        --realce: #17527f;
      }
      @media (prefers-color-scheme: dark) {
        :root {
          --fundo: #0d1117;
          --superficie: #161b22;
          --texto: #e8edf4;
          --suave: #9aa6b6;
          --borda: #262d38;
          --realce: #6ea8e0;
        }
      }
      * { box-sizing: border-box; }
      body {
        margin: 0;
        padding: 4rem 1.5rem;
        background: var(--fundo);
        color: var(--texto);
        font: 16px/1.6 system-ui, -apple-system, "Segoe UI", sans-serif;
      }
      main { max-width: 60rem; margin: 0 auto; }
      h1 { font-size: 1.9rem; margin: 0 0 .5rem; letter-spacing: -.02em; }
      .intro { color: var(--suave); margin: 0 0 2.5rem; max-width: 42rem; }
      ul { list-style: none; padding: 0; margin: 0; display: grid; gap: 1rem;
           grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr)); }
      .card a {
        display: block; height: 100%; padding: 1.5rem; text-decoration: none;
        color: inherit; background: var(--superficie);
        border: 1px solid var(--borda); border-radius: .75rem;
        transition: border-color .15s ease, transform .15s ease;
      }
      .card a:hover { border-color: var(--realce); transform: translateY(-2px); }
      .card h2 { font-size: 1.1rem; margin: 0 0 .25rem; }
      .cidade { margin: 0 0 .75rem; font-size: .85rem; color: var(--suave); }
      .descricao { margin: 0 0 1rem; font-size: .9rem; color: var(--suave); }
      .link { font-size: .875rem; font-weight: 600; color: var(--realce); }
      .vazio { color: var(--suave); }
      footer { margin-top: 3rem; font-size: .8rem; color: var(--suave); }
    </style>
  </head>
  <body>
    <main>
      <h1>Demonstrações de redesign</h1>
      <p class="intro">
        Cada link abaixo é uma proposta visual construída para um negócio específico.
        São páginas de demonstração, não sites oficiais das empresas.
      </p>
${cards || '      <p class="vazio">Nenhuma demonstração publicada ainda.</p>'}
      <footer>${demos.length} demonstração(ões) publicada(s).</footer>
    </main>
  </body>
</html>
`;

await writeFile(DESTINO, html, 'utf8');
console.log(`Índice gerado com ${demos.length} demo(s): ${DESTINO}`);
