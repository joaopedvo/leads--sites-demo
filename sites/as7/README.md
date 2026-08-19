# AS7 Assessoria Contábil e Fiscal — demonstração de redesign

Proposta visual para `as7.com.br`. Site atual: WordPress + Elementor, quatro
páginas. Esta demo é uma one-page mais o **Informativo**, que no site atual é um
cabeçalho vazio e aqui vira um blog de verdade.

Publicada em `/leads--sites-demo/as7/`.

## Rodar

```bash
npm install
npm run dev
```

## O Informativo

A home do site atual tem dois cabeçalhos — "Informativo" e "Notícias" — sem nada
embaixo. Os dois viraram uma seção só, alimentada por Markdown.

| Caminho | O que é |
|---|---|
| `src/content/informativo/*.md` | um arquivo por publicação |
| `src/content.config.ts` | esquema dos campos e validação |
| `/informativo/` | listagem completa, com as categorias |
| `/informativo/<arquivo>/` | a publicação |

Para publicar, cria-se um `.md` na pasta com o frontmatter:

```yaml
---
titulo: "Título da publicação"
resumo: "Uma frase que aparece no card e na busca."
data: 2026-08-04
categoria: "Tributos"     # Tributos | Finanças | Fiscal | Societário
tempoLeitura: 4           # minutos
revisao: "pendente"       # pendente | aprovado
---
```

A home mostra as quatro mais recentes — a primeira em destaque, ocupando a linha
inteira. Nada precisa ser cadastrado em lugar nenhum: a ordem sai da data.

## ⚠️ Os textos são rascunho

**Nenhuma das quatro publicações foi revisada por contador.** Elas existem para
a demonstração ter conteúdo real em vez de lorem ipsum, e os temas saíram dos
serviços que a AS7 de fato presta.

Foram escritas de propósito **sem alíquota, sem prazo, sem número de artigo e
sem interpretação de norma** — só o enquadramento do problema. Ainda assim, é
conteúdo contábil assinado por um escritório: nada vai ao ar sem o responsável
técnico ler e aprovar.

O campo `revisao: "pendente"` no frontmatter existe para isso não passar batido.
Quando o contador aprovar, vira `"aprovado"`.

## Conteúdo

Tudo está em `src/data/conteudo.ts`, marcado por origem:

- **Verbatim do cliente** — os 21 serviços em 3 grupos, o texto de "Sobre Nós" e
  a missão. Copiados do site atual, sem alteração.
- **Proposta** — o H1, o subtítulo do topo e os textos de apoio. Precisam do
  aval deles.

Dados de contato, CNPJ e endereço vieram da página `/contato/` do site atual.

## Identidade visual

O logo da AS7 é **monocromático cinza** — não existe cor de marca definida. O
azul do site atual (`#1863dc`) vem das configurações globais do Elementor, não
da marca.

Então a paleta saiu do próprio logo, amostrada pixel a pixel: **`#898988`** é a
cor do monograma, com `#b5b5b5` e `#e3e3e3` nos tons claros. O site é
monocromático de propósito, porque a marca é. Preto quase puro (`#161615`) nos
botões, off-white (`#f7f7f6`) na base, e um único acento dessaturado
(`--acento`) que só preenche badge circular e pílula pequena.

**Tipografia em três papéis:**

| Fonte | Onde |
|---|---|
| Instrument Serif | títulos, números, valores de contato |
| Inter | corpo de texto |
| IBM Plex Mono | micro-rótulos em maiúsculo, botões, datas |

Nenhum título usa negrito: o peso vem do tamanho e do contraste da serifada, não
da gordura da letra.

**Regra de tamanho de texto:** título de seção até 5 palavras, linha de apoio
até 20. O texto longo do cliente não foi descartado — foi para onde texto longo
funciona (a seção "Sobre" e as publicações), em vez de virar manchete.

## Movimento

Três primitivas, e só três — mais que isso vira ruído:

| Atributo | O que faz |
|---|---|
| `data-surge` | entra subindo quando aparece na tela (`="escala"` ou `="lado"` mudam a direção) |
| `data-texto` | título revelado palavra a palavra, saindo de uma máscara |
| `data-conta` | número que corre até o valor final |

`style="--atraso: 120ms"` encadeia itens de uma lista. Tudo desliga com
`prefers-reduced-motion`.

**Rede de segurança:** o estado inicial de tudo que anima é invisível, então uma
falha do `IntersectionObserver` esconderia a página inteira em vez de só perder
a animação. O Layout revela tudo à força depois de 2,5s, e revela na hora se o
navegador não tiver `IntersectionObserver`. Isso não é hipotético — aconteceu no
ambiente de teste, onde a aba não compositava e o observador nunca disparava.

## Pendências com o cliente

- [ ] Logo em vetor — o que existe é PNG de 240×126, e a legenda embaixo do
      monograma fica ilegível em tamanho de header. Um lockup horizontal
      resolveria melhor.
- [ ] Fotos reais do escritório e da equipe — hoje não há nenhuma imagem própria
- [ ] Qual é o telefone e o e-mail oficiais (o site atual usa dois de cada)
- [ ] Aprovação dos textos do Informativo pelo responsável técnico
- [ ] Depoimentos ou casos — o site não tem prova social nenhuma
- [ ] Se o azul é cor de marca ou herança do tema

## O formulário não envia

O formulário de contato é demonstração e intercepta o envio, avisando na tela.
Num site em produção ele precisa de backend ou serviço de formulário — e de
aviso de tratamento de dados, porque escritório contábil recebe dado sensível
por esse canal.
