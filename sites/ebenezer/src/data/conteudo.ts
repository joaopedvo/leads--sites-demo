/**
 * Toda a copy do site mora aqui.
 *
 * Os componentes não têm texto escrito dentro deles — leem tudo deste arquivo.
 * Para trocar o conteúdo, edite só este arquivo.
 *
 * Fonte: copy aprovada do cliente. O que ainda depende de confirmação está
 * marcado com TODO. Nada aqui deve afirmar algo que a copy não afirme —
 * prazo de garantia, laudo, certificação e depoimento são declarações sobre um
 * negócio real e só entram com a palavra do cliente.
 */

const base = import.meta.env.BASE_URL.replace(/\/$/, "");

export const empresa = {
  nome: "Ebenézer",
  nomeCompleto: "Dedetizadora e Desentupidora Ebenézer",
  slogan: "Dedetização, desentupimento e limpeza de caixa d'água em Betim e região",
  cidade: "Betim",
  uf: "MG",

  /** Só dígitos, com DDI e DDD — é o que monta o link do WhatsApp. */
  whatsapp: "5531999589665",
  whatsappExibicao: "(31) 99958-9665",

  /** Só dígitos, com DDI e DDD — é o que monta o link tel:. */
  telefone: "553135973341",
  telefoneExibicao: "(31) 3597-3341",

  /** Campos abaixo: deixe string vazia para a seção não renderizar. */
  email: "",
  endereco: "",
  instagram: "",
  /**
   * Licença sanitária e responsável técnico. Exigidos por lei para empresa de
   * controle de pragas e normalmente cobrados na fiscalização — pedir ao cliente.
   */
  licenca: "",
  horario: "",
};

/** Mensagem que já vai preenchida quando o visitante abre o WhatsApp. */
export const mensagemWhatsapp =
  "Olá! Vim pelo site e quero um orçamento.";

export const seo = {
  titulo: `${empresa.nomeCompleto} — Dedetização e Desentupimento em ${empresa.cidade}`,
  descricao:
    "Dedetização, desentupimento, limpeza de caixa d'água, caixa de gordura e fossa em Betim, Contagem, BH e região metropolitana. Mais de 20 anos de mercado. Orçamento sem compromisso pelo WhatsApp.",
};

export const hero = {
  eyebrow: "Mais de 20 anos em Betim e região",
  titulo: "Acabe com as pragas e os entupimentos da sua casa ou empresa",
  subtitulo:
    "A Ebenézer faz dedetização, desentupimento e limpeza de caixa d'água em Betim e em toda a região metropolitana de BH. São mais de 20 anos resolvendo esse tipo de problema com segurança e sem enrolação.",
  ctaPrimario: "Falar agora no WhatsApp",
  ctaSecundario: "Ver serviços",
  selos: [
    "Mais de 20 anos de mercado",
    "Produtos antialérgicos",
    "Casa, condomínio e empresa",
  ],
  nota: "Atendemos Betim, Contagem, BH e toda a região metropolitana",
};

/** Faixa de ticker logo abaixo do hero. */
export const ticker = [
  "Baratas",
  "Formigas",
  "Ratos",
  "Cupins",
  "Escorpiões",
  "Pia e vaso entupidos",
  "Coluna de prédio",
  "Esgoto e rede pluvial",
  "Caixa d'água",
  "Caixa de gordura",
  "Fossa séptica",
];

export const problema = {
  eyebrow: "O problema",
  titulo:
    "Barata na cozinha, rato no forro, cupim no móvel, esgoto voltando pela pia",
  texto:
    "Esse tipo de coisa não espera e piora com o tempo. Quanto mais você adia, maior fica o estrago e mais caro sai pra resolver depois.",
  destaque:
    "A boa notícia é que tem solução rápida, feita por quem trabalha nisso há mais de 20 anos.",
};

/**
 * Imagens da página.
 *
 * Os arquivos em `public/img/` são artes vetoriais provisórias, desenhadas no
 * mesmo traço do set de ícones. **Trocar por fotos reais da equipe e dos
 * equipamentos** — é o item de maior impacto que falta na página.
 *
 * Para trocar: aponte `src` para o arquivo novo (`/img/equipe.webp`, por
 * exemplo) e ajuste o `alt` para descrever a foto de verdade. O recorte é feito
 * por `object-fit: cover`, então qualquer proporção funciona.
 *
 * `alt: ""` marca imagem decorativa — leitor de tela pula, que é o certo
 * enquanto for arte de fundo. Com foto real, escrever a descrição.
 */
/**
 * Logo da Ebenézer.
 *
 * O arquivo que veio do cliente (`logo-ebenezer.svg`, 470 KB) é um `<svg>` que
 * só embrulha um PNG em base64 — não é vetor, não escala e não recolore.
 * O que está aqui foi extraído dele: recortado no conteúdo (o original tinha
 * 57% de altura em padding transparente) e reduzido para o tamanho de uso.
 *
 * `branco` é a versão de contraste para fundo escuro (header e rodapé), com as
 * formas do original e a cor chapada em branco. O logo colorido é feito para
 * fundo claro: sobre o azul-escuro do header, o lettering azul fica em 4,2:1 e
 * as barras vermelhas em 3,2:1 — visível, mas apagado.
 *
 * Vale pedir o vetor de verdade (.ai, .eps ou SVG com paths) ao cliente.
 */
export const logo = {
  cor: `${base}/img/logo-ebenezer.png`,
  branco: `${base}/img/logo-ebenezer-branco.png`,
  alt: "Dedetizadora e Desentupidora Ebenézer",
  /** proporção do arquivo, usada para reservar o espaço e evitar salto de layout */
  largura: 519,
  altura: 76,
};

export const imagens = {
  hero: {
    src: `${base}/img/hero.svg`,
    alt: "",
    // com foto real: "Técnico da Ebenézer aplicando o serviço em uma cozinha"
  },
  problema: {
    src: `${base}/img/servicos.svg`,
    alt: "",
    // com foto real: "Equipe da Ebenézer com os equipamentos de aplicação"
  },
};

export const servicosHead = {
  eyebrow: "Serviços",
  titulo: "O que a Ebenézer resolve",
};

/**
 * `cta` é o texto usado no botão e na mensagem do WhatsApp daquele serviço.
 * Fica separado do título porque minusculizar o título quebra siglas e nomes.
 */
export const servicos = [
  {
    titulo: "Controle de pragas",
    icone: "praga",
    cta: "controle de pragas",
    resumo:
      "Baratas, formigas, ratos, cupins, escorpiões e outros insetos. Dedetização para residências, condomínios e empresas.",
    itens: ["Residências", "Condomínios", "Empresas"],
  },
  {
    titulo: "Desentupimento",
    icone: "cano",
    cta: "desentupimento",
    resumo:
      "Pia, vaso, ralo, coluna de prédio, esgoto e rede pluvial. Serviço preventivo e corretivo.",
    itens: ["Pia, vaso e ralo", "Coluna de prédio", "Esgoto e rede pluvial"],
  },
  {
    titulo: "Limpeza de caixa d'água",
    icone: "gota",
    cta: "limpeza de caixa d'água",
    resumo:
      "Higienização completa do reservatório, deixando a água própria pro consumo.",
    itens: ["Higienização completa", "Água própria pro consumo"],
  },
  {
    titulo: "Caixa de gordura e fossa",
    icone: "tanque",
    cta: "limpeza de caixa de gordura ou fossa",
    resumo: "Limpeza de caixa de gordura, fossa séptica e fossa negra.",
    itens: ["Caixa de gordura", "Fossa séptica", "Fossa negra"],
  },
];

export const diferenciais = {
  eyebrow: "Por que a Ebenézer",
  titulo: "Por que escolher a Ebenézer",
  itens: [
    {
      titulo: "Mais de 20 anos de mercado",
      icone: "relogio",
      texto: "Duas décadas atendendo Betim e a região metropolitana de BH.",
    },
    {
      titulo: "Produtos antialérgicos",
      icone: "folha",
      texto:
        "Aplicação segura para quem mora ou trabalha no local.",
    },
    {
      titulo: "Equipe treinada",
      icone: "capacete",
      texto: "Time preparado e dentro das normas de segurança.",
    },
    {
      titulo: "Atendimento rápido",
      icone: "cronometro",
      texto: "Do orçamento até a execução, sem enrolação.",
    },
    {
      titulo: "Casa, condomínio e empresa",
      icone: "predio",
      texto:
        "Mesmo padrão de serviço para imóvel residencial, predial e empresarial.",
    },
  ],
};

export const processo = {
  eyebrow: "Como funciona",
  titulo: "Três passos até o problema resolvido",
  etapas: [
    {
      passo: "01",
      titulo: "Você chama no WhatsApp",
      texto: "Manda uma mensagem contando qual é o seu problema.",
    },
    {
      passo: "02",
      titulo: "A gente avalia e orça",
      texto: "Avaliamos o caso e passamos o orçamento sem compromisso.",
    },
    {
      passo: "03",
      titulo: "A equipe executa",
      texto:
        "Equipe treinada resolve, dentro das normas de segurança e com produto antialérgico.",
    },
  ],
};

export const cobertura = {
  eyebrow: "Onde a gente atende",
  titulo: "Betim, Contagem, BH e toda a região metropolitana",
  texto:
    "Se você está na dúvida se atendemos o seu bairro, é só chamar e perguntar.",
  cidades: ["Betim", "Contagem", "Belo Horizonte", "Região metropolitana de BH"],
};

/**
 * Prova social — a seção só aparece quando esta lista tem itens.
 * Preencher apenas com avaliações reais do Google ou depoimentos que o cliente
 * autorizar. Depoimento inventado em site de empresa real é risco jurídico.
 */
export const depoimentos: { texto: string; autor: string; contexto: string }[] = [];

/**
 * FAQ — a seção só aparece quando esta lista tem itens, e alimenta os dados
 * estruturados de FAQPage (as perguntas expandidas no Google).
 * Perguntas que valem a pena, quando o cliente responder:
 *   - Precisa sair de casa durante a dedetização? Por quanto tempo?
 *   - É seguro para crianças e animais?
 *   - Quanto tempo dura o efeito / de quanto em quanto tempo repetir?
 *   - Cobram a visita para orçar?
 *   - Emitem nota fiscal e laudo para a vigilância sanitária?
 *   - Tem garantia? Qual o prazo?
 *   - Atendem emergência fora do horário comercial?
 */
export const faq: { pergunta: string; resposta: string }[] = [];

export const ctaFinal = {
  titulo: "Resolva agora e fique tranquilo",
  texto:
    "Manda uma mensagem contando o seu problema. A gente avalia e passa o orçamento sem compromisso.",
  botaoWhatsapp: "Chamar no WhatsApp",
  botaoTelefone: "Ligar",
};

export const navegacao = [
  { rotulo: "Serviços", href: "#servicos" },
  { rotulo: "Por que nós", href: "#diferenciais" },
  { rotulo: "Como funciona", href: "#processo" },
  { rotulo: "Onde atendemos", href: "#cobertura" },
];

/** Monta o link do WhatsApp com a mensagem já preenchida. */
export function linkWhatsapp(mensagem: string = mensagemWhatsapp): string {
  return `https://wa.me/${empresa.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}
