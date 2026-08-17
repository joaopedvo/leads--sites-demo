# leads--sites-demo

Vitrine de demonstrações de redesign. Cada pasta em `sites/` é um projeto
independente, publicado como uma subpasta do mesmo GitHub Pages:

| URL | Origem |
| --- | --- |
| `https://joaopedvo.github.io/leads--sites-demo/` | índice gerado automaticamente |
| `https://joaopedvo.github.io/leads--sites-demo/ebenezer/` | `sites/ebenezer` |
| `https://joaopedvo.github.io/leads--sites-demo/vsc-automotivo/` | `sites/vsc-automotivo` |

O link enviado ao lead é o da subpasta dele. O índice na raiz lista todas as
demonstrações — veja a ressalva em *Visibilidade*.

## Adicionar uma demonstração

1. Crie `sites/<slug>/` com um projeto Astro (copiar um existente serve como ponto de partida).
2. Crie `sites/<slug>/demo.json`:

   ```json
   {
     "cliente": "Nome do negócio",
     "cidade": "Cidade / UF",
     "descricao": "Uma linha sobre a proposta."
   }
   ```

3. Commit na `master`.

Não há workflow para editar e não há `base` para ajustar. O build percorre
`sites/*/`, e cada `astro.config.mjs` deriva o próprio `base` do nome da pasta:

```js
const slug = basename(process.cwd());
// base: /leads--sites-demo/<slug>
```

Foi assim para evitar o erro que essa estrutura convida: duas demos com o mesmo
`base` disputam a mesma URL, e a última publicada apaga a anterior.

### Caminhos dentro do site

Todo link e asset precisa respeitar o `base`, ou funciona em `dev` e quebra no
Pages. Use `import.meta.env.BASE_URL`:

```astro
---
const base = import.meta.env.BASE_URL.replace(/\/$/, "");
---
<img src={`${base}/img/foto.webp`} alt="…" />
```

## Rodar localmente

```bash
cd sites/<slug> && npm install && npm run dev
```

Para reproduzir o resultado publicado, incluindo o índice:

```bash
for d in sites/*/; do (cd "$d" && npm ci && npm run build); done
node scripts/gerar-indice.mjs
```

## Visibilidade

O repositório é público e as demonstrações reproduzem a identidade de empresas
reais. Cada página declara `<meta name="robots" content="noindex, nofollow">`
para não ser indexada nem concorrer com o site verdadeiro do cliente.

Um `robots.txt` **não** resolveria: o Pages só honra `/robots.txt` na raiz do
domínio (`joaopedvo.github.io`), que pertence ao repositório de usuário, não a
este. A meta tag é o controle que funciona aqui.

Ainda assim, os arquivos são públicos e o índice da raiz lista todos os leads.
Quem receber um link consegue chegar aos demais.
