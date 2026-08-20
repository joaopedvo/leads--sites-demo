/**
 * Todo o texto do site mora aqui.
 *
 * Origem: extraído de assessoriaetec.com.br em 17/08/2026.
 *   VERBATIM — copiado do site do cliente, sem alteração.
 *   PROPOSTA — escrito para o redesign; precisa do aval deles.
 */

export const empresa = {
  nome: "Etec",
  nomeCompleto: "Etec Assessoria Contábil", // VERBATIM
  fundacao: 1987, // VERBATIM — 11 de maio de 1987
  fundador: "Daniel Sousa", // VERBATIM
  cidade: "Castanhal",
  uf: "PA",
  endereco: "Av. Maximino Porpino da Silva, 2054", // VERBATIM
  bairro: "Centro",
  email: "etec@assessoriaetec.com.br", // VERBATIM
  telefones: ["(91) 3721-1562", "(91) 3721-6437"], // VERBATIM
  whatsapp: "5591988143437", // VERBATIM — (91) 98814-3437
  whatsappExibicao: "(91) 98814-3437",
};

export const linkWhatsapp = (assunto: string) =>
  `https://wa.me/${empresa.whatsapp}?text=${encodeURIComponent(
    `Olá! Vim pelo site e quero falar sobre ${assunto}.`,
  )}`;

/**
 * Logos fornecidos pelo cliente. A Marilar é a mesma empresa do depoimento —
 * o nome no logo é a prova visual de quem está falando.
 */
export const clientes = [
  { nome: "Boi Bravo", arquivo: "boi-bravo.png" },
  { nome: "CCA", arquivo: "cca.png" },
  { nome: "Concecp Saúde", arquivo: "concecp-saude.png" },
  { nome: "Lojas Marilar", arquivo: "marilar.png" },
  { nome: "Via Norte", arquivo: "via-norte.png" },
];

export const clientesTitulo = "Quem confia na Etec"; // PROPOSTA

export const hero = {
  eyebrow: "ASSESSORIA CONTÁBIL · CASTANHAL, PA", // PROPOSTA
  titulo: ["Contabilidade que", "sustenta decisão."], // PROPOSTA
  // A frase do site atual ("ABRA SUA EMPRESA! Nós podemos ajudar você a
  // realizar seu sonho.") virou apoio: funciona como convite, não como
  // manchete de um escritório com 39 anos de casa.
  apoio:
    "Desde 1987 em Castanhal, cuidando do contábil, do fiscal e da folha de empresas que precisam crescer sem sobressalto.", // PROPOSTA
  cta: "Falar com a Etec",
  ctaSecundario: "Ver serviços",
};

/** Todos VERBATIM — números que o próprio site já publica. */
export const fatos = [
  { valor: "1987", rotulo: "Fundada em 11 de maio" },
  { valor: "204", sufixo: "m²", rotulo: "Sede própria" },
  { valor: "20", rotulo: "Colaboradores" },
  { valor: "4", rotulo: "Estagiários em formação" },
];

/** Serviços e itens: VERBATIM, incluindo a ordem das listas. */
export const servicos = [
  {
    n: "01",
    nome: "Assessoria Contábil",
    resumo: "A escrituração completa, em dia com todas as exigências legais.", // PROPOSTA
    itens: [
      "Execução de lançamentos contábeis",
      "Livro Diário e Razão",
      "Balancetes",
      "Escrituração Contábil Fiscal (ECF)",
      "Escrituração Contábil Digital (ECD)",
    ],
  },
  {
    n: "02",
    nome: "Assessoria Fiscal e Tributária",
    resumo: "Do enquadramento à apuração, com o regime certo para o seu caso.", // PROPOSTA
    itens: [
      "Enquadramento no regime tributário adequado",
      "Apuração de impostos e de retidos na fonte",
      "Escrituração de livros fiscais",
      "SPED Fiscal e EFD Contribuições",
      "Parcelamentos de impostos",
    ],
  },
  {
    n: "03",
    nome: "Folha de Pagamento",
    resumo: "Admissão, folha e rescisão conduzidas dentro do prazo.", // PROPOSTA
    itens: [
      "Contrato de experiência",
      "Comunicação de admissão e demissão ao MTE",
      "Folha e recibo de pagamento",
      "FGTS e INSS",
      "Rescisões, avisos e recibos de férias",
    ],
  },
  {
    n: "04",
    nome: "Operações Rurais",
    resumo: "Contabilidade para o produtor rural, com o que a atividade exige.", // PROPOSTA
    itens: ["Registros contábeis", "Livro Caixa", "Contrato de trabalho"],
  },
  {
    n: "05",
    nome: "Declarações",
    resumo: "As obrigações anuais entregues sem correria de última hora.", // PROPOSTA
    itens: [
      "Imposto de Renda Pessoa Jurídica",
      "Imposto de Renda Pessoa Física",
      "Declaração Rural",
      "RAIS",
      "Certidões negativas de débitos",
    ],
  },
  {
    n: "06",
    nome: "Legalização de Empresas",
    resumo: "Da constituição à habilitação para licitar.", // PROPOSTA
    itens: [
      "Contratos sociais, estatutos e alterações",
      "Constituição jurídica e legalização",
      "Habilitação para licitações (SICAF)",
      "Definição do tipo de tributação e de sociedade",
      "Distrato",
    ],
  },
];

export const sobre = {
  eyebrow: "A CASA", // PROPOSTA
  titulo: ["Uma empresa familiar,", "consolidada desde 1987."], // PROPOSTA a partir do texto do cliente
  paragrafos: [
    // VERBATIM, com quebra de parágrafo ajustada
    "A Etec Assessoria Contábil é uma empresa familiar que está consolidada desde 11 de maio de 1987, e teve como fundador o Sr. Daniel Sousa. Após anos de dedicação e comprometimento conseguiu seu próprio espaço físico com 204 m².",
    "Para gerir o grupo, ele conta com a ajuda de suas filhas Danielly Corrêa e Sirlene Almeida, contadoras especialistas em Gestão Tributária, e de sua esposa Lúcia Sousa, Gestora Administrativa com formação em Recursos Humanos.",
  ],
};

/** VERBATIM — missão, visão e valores como publicados. */
export const pilares = [
  {
    rotulo: "Missão",
    texto:
      "Prestação de serviços, com segurança e qualidade, com um novo conceito de contabilidade consultiva, estratégica e parceira do cliente, visando o crescimento das empresas.",
  },
  {
    rotulo: "Visão",
    texto:
      "Ser referência em contabilidade no estado do Pará com prestação de serviços, compromisso e qualidade.",
  },
  {
    rotulo: "Valores",
    texto: "Fé, Determinação, Simplicidade, Honestidade e Parceria.",
  },
];

/**
 * VERBATIM. No site de origem o depoimento aparece truncado no meio de uma
 * frase ("...de seu quadro de […]"). Cortei na última frase completa em vez de
 * inventar o final — vale pedir o texto integral ao cliente.
 */
export const depoimento = {
  texto:
    "Sou cliente da ETEC desde 1987 e sempre a ETEC propôs soluções e resolveu os problemas que foram surgindo ao longo desse tempo de maneira ágil, eficiente, eficaz e com ética.",
  autor: "Mário Filho",
  papel: "Lojas Marilar · cliente desde 1987",
};

export const contato = {
  eyebrow: "CONTATO",
  titulo: ["Abra sua empresa", "com quem já viu de tudo."], // PROPOSTA, reaproveitando "ABRA SUA EMPRESA" do site atual
  apoio:
    "Fale com a Etec pelo WhatsApp, pelo telefone ou venha nos fazer uma visita.", // adaptado do VERBATIM da página de contato
};
