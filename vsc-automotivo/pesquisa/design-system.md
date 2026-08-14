# Design system inicial — VSC Serviços Automotivos

Versão 0.1, criada em 14/08/2026 a partir de três peças sociais e do logo branco fornecidos. Os valores de cor são aproximações visuais e devem ser amostrados/validados na implementação.

## Conceito de marca

**Tecnologia que inspira confiança.** A linguagem combina oficina premium, diagnóstico técnico e comunicação direta. O carro é tratado como protagonista; o design deve parecer preciso, rápido e seguro, sem cair em estética de corrida ou tuning.

Palavras-chave: técnico, confiável, contemporâneo, robusto, preciso, acessível.

## Hierarquia da linguagem visual

1. **Principal — performance técnica:** preto profundo, fotografia recortada de veículo, azul elétrico, títulos condensados em caixa alta e grafismos finos.
2. **Secundária — conteúdo educativo:** azul-marinho, composição diagonal, listas/checklists, pictogramas e tipografia sans mais aberta.
3. **Conversão:** CTA curto, WhatsApp evidente e alto contraste; nunca competir com vários botões equivalentes.

## Paleta proposta

| Token | Valor inicial | Uso |
|---|---:|---|
| `ink-950` | `#03070C` | fundo principal, hero e footer |
| `ink-900` | `#07111D` | superfícies elevadas escuras |
| `navy-800` | `#0D2B63` | seções editoriais e cards informativos |
| `blue-500` | `#00AEEF` | CTA, links, títulos destacados e ícones |
| `cyan-400` | `#11C8C3` | linhas técnicas e microdetalhes; uso restrito |
| `white` | `#FFFFFF` | títulos e texto de máximo contraste |
| `steel-300` | `#B8C2CF` | texto secundário sobre fundo escuro |
| `steel-600` | `#536274` | bordas, divisórias e estados discretos |

### Regra de proporção

- 70% preto/azul muito escuro
- 20% branco e tons de aço
- 8% azul elétrico
- 2% ciano técnico

O ciano e o azul não devem virar grandes massas simultaneamente. O azul é a cor principal de ação; o ciano funciona como precisão e detalhe.

## Tipografia

As fontes exatas dos posts não foram identificadas pelos arquivos rasterizados. Para o site, a combinação recomendada é:

- **Display:** `Barlow Condensed`, pesos 700–800. Títulos curtos, caixa alta, entrelinha compacta.
- **Texto e interface:** `Inter`, pesos 400–700. Parágrafos, navegação, dados e botões.

Alternativa se for necessário um título ainda mais impactante: `Oswald`. Não misturar mais de duas famílias.

### Escala sugerida

- Hero: `clamp(3.5rem, 8vw, 7.5rem)`, 0,86–0,94 de entrelinha
- H2: `clamp(2.25rem, 5vw, 4.5rem)`, 0,95 de entrelinha
- H3: `clamp(1.25rem, 2vw, 1.75rem)`
- Corpo grande: `1.125rem–1.25rem`
- Corpo: `1rem`, entrelinha 1,6
- Label: `0.75rem–0.875rem`, caixa alta e tracking positivo

Títulos podem destacar uma ou duas palavras em azul, repetindo o padrão “PERDA DE / POTÊNCIA”. Evitar colorir frases inteiras.

## Grid e composição

- Conteúdo central com largura máxima entre 1180 e 1280 px.
- Grid desktop de 12 colunas; mobile de 4 colunas.
- Espaçamento base de 8 px.
- Seções generosas: 96–144 px no desktop e 64–88 px no mobile.
- Heroes e campanhas usam composição assimétrica: texto à esquerda e veículo/imagem à direita.
- Imagens podem escapar do grid e tocar a borda da viewport.
- Diagonais são permitidas como transição ou máscara de imagem, especialmente em conteúdo educativo.

## Formas e grafismos

- Linhas finas em azul/ciano com quinas angulares.
- Grade de pontos com fade, usada apenas em cantos ou fundos amplos.
- Pequenos grupos de barras diagonais como assinatura de encerramento.
- Sublinhado curto azul sob títulos ou introduções.
- Contornos técnicos de 1 px em cards e ícones.
- Cantos levemente arredondados: 8–12 px em cards; botões podem usar 8 px, evitando pílulas excessivas.

Evitar engrenagens, bandeiras quadriculadas, velocímetros genéricos em excesso e texturas metálicas decorativas. Um pictograma técnico deve explicar conteúdo, não preencher espaço.

## Fotografia

- Veículos em ângulo 3/4 frontal, mostrando faróis e grade.
- Contraste alto, pretos densos e luz azul fria de recorte.
- Piso ou cenário com reflexão discreta para dar profundidade.
- Nos blocos institucionais, priorizar fotos reais da oficina, equipe e equipamentos.
- Aplicar overlay escuro para garantir leitura; não depender de texto sobre áreas detalhadas da foto.
- Evitar banco de imagem excessivamente polido quando houver material real disponível.

## Iconografia

- Ícones lineares, monoline, com 1,5–2 px de espessura.
- Azul elétrico para ação; branco para conteúdo dentro de superfícies azuis.
- Terminais e cantos levemente arredondados.
- Conjunto prioritário: freios, pneus, óleo, bateria, arrefecimento, elétrica, ar-condicionado, diagnóstico e WhatsApp.

## Componentes do futuro site

### Header

- Fundo preto translúcido ou sólido.
- Logo branco à esquerda.
- Navegação curta: Serviços, A VSC, Diferenciais, Contato.
- CTA “Agendar avaliação” em azul.

### Hero

- Eyebrow técnico: “Serviços automotivos em Santo André”.
- Headline direta com uma expressão em azul.
- Texto curto de confiança e transparência.
- CTA principal para WhatsApp e link secundário para serviços.
- Foto real forte ou veículo em recorte à direita.

### Cards de serviço

- Fundo `ink-900`, borda discreta e ícone linear.
- Título branco, resumo em `steel-300` e microação azul.
- Hover com deslocamento mínimo, borda azul e linha técnica; sem efeitos 3D exagerados.

### Checklist / conteúdo educativo

- Superfície `navy-800`.
- Itens em linhas contornadas com ícone e check azul.
- Pode usar recorte diagonal de fotografia, herdado do terceiro post.

### Faixa de confiança

- Dados objetivos: mais de 25 anos, localização, equipe especializada e serviços multimarcas — após confirmação final da copy.
- Números grandes e descrições curtas.

### CTA final

- Fundo azul ou imagem escura com glow azul.
- Mensagem única e WhatsApp em destaque.
- Telefone exibido como `(11) 95340-8436`.

## Movimento e interação

- Entrada suave de 200–400 ms, com deslocamentos pequenos.
- Linhas técnicas podem crescer horizontalmente ao entrar na viewport.
- Imagens podem ter parallax muito leve apenas no desktop.
- Hover deve comunicar estado, não criar espetáculo.
- Respeitar `prefers-reduced-motion`.

## Acessibilidade

- Texto corrido nunca em azul elétrico sobre branco.
- Garantir contraste AA para textos e controles.
- Não transmitir significado somente pela cor.
- Alvos de toque com pelo menos 44 × 44 px.
- Manter foco visível azul/ciano sobre superfícies escuras.
- Texto sobre imagem sempre com overlay ou superfície própria.

## Aplicação específica no site

O site não deve copiar literalmente o layout quadrado dos posts. Deve traduzir a mesma marca para uma experiência responsiva: fundos escuros, fotografia ampla, títulos fortes, detalhes técnicos e CTAs claros. A peça de checklist serve como base para seções informativas; as duas peças de diesel definem o tom do hero e das campanhas.

## Pendências de marca

- Confirmar se existe manual de marca com códigos oficiais de cor.
- Solicitar logo vetorial ou PNG com transparência real e margem adequada.
- Confirmar se o arquivo recebido tem fundo transparente utilizável em produção.
- Identificar ou aprovar as fontes definitivas.
- Receber fotos atuais da oficina, equipe e equipamentos.
- Confirmar autorização de uso das imagens de veículos e das peças sociais.

