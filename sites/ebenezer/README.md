# Dedetizadora e Desentupidora Ebenézer — one-page

Página de conversão em Astro para a Ebenézer (Betim/MG). Sem backend: o
objetivo da página é levar o visitante para o WhatsApp **(31) 99958-9665** ou
para o telefone **(31) 3597-3341**.

## Rodar

```bash
npm install
npm run dev
```

O Astro 7 sobe o servidor em segundo plano e imprime a porta. Para gerenciar:

```bash
npx astro dev status
npx astro dev logs
npx astro dev stop
```

Gerar os arquivos estáticos para publicar (saem em `dist/`):

```bash
npm run build
```

`dist/` é HTML/CSS/JS estático — sobe em Netlify, Vercel, Cloudflare Pages ou
qualquer hospedagem comum, sem Node no servidor.

## Onde mexer

**Toda a copy está em [`src/data/conteudo.ts`](src/data/conteudo.ts).** Os
componentes não têm texto escrito dentro deles. Trocar o conteúdo é editar esse
arquivo — e só ele.

**Cores:** [`src/styles/global.css`](src/styles/global.css), no `:root`. A
paleta **saiu do logo**, amostrada pixel a pixel do arquivo do cliente: azul
`#2179bb` (o lettering) e vermelho `#c21a21` (as barras). Os escuros da página
são azul-marinho do mesmo matiz, não preto neutro, para o site inteiro ler como
a cor da empresa. O verde do WhatsApp (`--color-whatsapp`) fica de fora de
propósito — é cor de marca deles, não da Ebenézer.

O vermelho segue no site o papel que tem no logo: **régua, nunca massa**. Está
na faixa do topo do header, nas barrinhas do eyebrow, no sublinhado do menu, na
régua do destaque de "O problema" e na linha que cresce no hover dos cards.
Nunca como fundo de botão.

**Ícones:** [`src/components/icones.ts`](src/components/icones.ts). Quinze
ícones traçados de 24×24, desenhados no projeto. Nenhuma fonte de ícone
externa: seria uma requisição de rede e um flash de texto sem ícone só para
desenhar alguns traços. Usar com `<Icone nome="gota" size={26} />`; a cor vem
sempre do contexto (`currentColor`).

**Imagens:** ver a seção abaixo.

**Animações:** `data-reveal` num elemento faz ele entrar quando chega na tela
(`data-reveal="zoom" | "direita" | "esquerda"` muda a direção). `data-entrada`
anima já no carregamento, sem esperar rolagem — é o que o hero usa. Em ambos,
`style="--atraso: 120ms"` encadeia os itens de uma lista. Tudo desligado
automaticamente para quem pediu menos movimento no sistema operacional.

## Pendente antes de publicar

Campos vazios em `conteudo.ts` **não renderizam** — a seção some em vez de virar
linha em branco. Então a página já está apresentável, mas falta:

- [ ] **Confirmar os dois telefones com o cliente** — `empresa.whatsapp` e
      `empresa.telefone`. São o produto inteiro desta página; número errado é
      um site que não gera nada.
- [ ] `empresa.licenca` — licença sanitária e responsável técnico. Exigidos por
      lei para empresa de controle de pragas e normalmente cobrados na
      fiscalização. Aparece no rodapé quando preenchido.
- [ ] `empresa.endereco`, `email`, `instagram`, `horario` — opcionais, cada um
      liga sua linha no rodapé quando preenchido.
- [ ] `depoimentos` — lista vazia hoje. Preencher com avaliações reais do Google
      ou depoimentos autorizados liga a seção de prova social entre "Como
      funciona" e o CTA. **Não inventar:** depoimento fabricado em site de
      empresa real é risco jurídico.
- [ ] `faq` — lista vazia hoje. Preencher liga a seção de dúvidas **e** os dados
      estruturados de `FAQPage` (perguntas expandidas no Google). As perguntas
      que valem a pena estão listadas em comentário no próprio arquivo; todas
      dependem de resposta do cliente.
- [ ] **Fotos reais** da equipe e dos equipamentos — ver a seção "Imagens".

## Logo

O arquivo que veio do cliente (`logo-ebenezer.svg`, 470 KB) **não é vetor**: é
um `<svg>` que só embrulha um PNG de 2188×718 em base64. Não escala, não
recolore e pesa como imagem. **Vale pedir o vetor de verdade** (.ai, .eps ou um
SVG com paths) — sem ele, ampliar o logo para banner, fachada ou impressão vai
pixelizar.

O que está em `public/img/` foi extraído dele:

| Arquivo | O que é | Onde aparece |
|---|---|---|
| `logo-ebenezer.png` | cores originais, 519×76, 43 KB | header (fundo branco) |
| `logo-ebenezer-branco.png` | mesmas formas, chapadas em branco, 10 KB | rodapé (fundo escuro) |

O original tinha 57% da altura em padding transparente e resolução muito acima
do uso; foi recortado no conteúdo e reduzido para o tamanho de exibição.

**Sobre a versão branca:** o logo colorido é feito para fundo claro. Sobre o
azul-escuro do rodapé, o lettering azul fica em 4,2:1 e as barras vermelhas em
3,2:1 — visível, mas apagado. Versão monocromática para fundo escuro é prática
padrão de manual de marca, mas **é decisão do cliente**: se ele preferir o logo
colorido em todo lugar, é trocar `logo.branco` por `logo.cor` no rodapé
([`conteudo.ts`](src/data/conteudo.ts)) — uma linha.

## Imagens

Os dois arquivos em `public/img/` são **artes vetoriais provisórias**,
desenhadas no projeto com o mesmo traço do set de ícones. Não são foto e não
tentam parecer foto — são composições abstratas que seguram a página até as
fotos reais chegarem, sem o cheiro de banco de imagem.

| Arquivo | Onde aparece |
|---|---|
| `hero.svg` | fundo do topo, atrás do véu escuro, com parallax leve |
| `servicos.svg` | coluna direita da seção "O problema" |

**Para trocar por foto real:** aponte `src` em `imagens` (dentro de
`conteudo.ts`) para o arquivo novo e escreva o `alt` descrevendo a foto. O
recorte é `object-fit: cover` com proporção fixa, então qualquer dimensão
funciona sem quebrar o layout. Enquanto for arte decorativa o `alt` fica vazio
de propósito — leitor de tela pula, que é o certo; com foto de verdade,
descrever.

Prefira WebP e algo em torno de 1600px de largura no hero.

## Estrutura

| Arquivo | O que é |
|---|---|
| `src/pages/index.astro` | monta a página e liga/desliga as seções condicionais |
| `src/layouts/Layout.astro` | `<head>` e dados estruturados de negócio local |
| `src/data/conteudo.ts` | **toda a copy** |
| `src/styles/global.css` | tokens de cor/espaço e classes utilitárias |
| `src/components/` | uma seção por arquivo |

Ordem das seções: hero → ticker → o problema → serviços → por que a Ebenézer →
como funciona → onde atendemos → *(depoimentos)* → *(FAQ)* → CTA final →
rodapé. As duas entre parênteses só aparecem quando têm conteúdo.

## SEO

O `<head>` emite `HomeAndConstructionBusiness` (e não `PestControlService`,
porque a empresa também faz desentupimento, fossa e limpeza de caixa d'água) com nome,
telefone, cidade e área atendida. Campos vazios são removidos antes de
serializar, para não declarar `"telephone": ""`.

O bloco `FAQPage` só é emitido quando `faq` tem itens.
