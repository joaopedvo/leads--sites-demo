/**
 * Todo o texto do site mora aqui.
 *
 * Origem: extraído de as7.com.br em 19/08/2026.
 *   VERBATIM  — copiado do site do cliente, sem alteração.
 *   PROPOSTA  — escrito por mim para o redesign; precisa do aval deles.
 *
 * Regra de tamanho adotada aqui: título de seção até 5 palavras, apoio até 20.
 * O texto longo do cliente não foi jogado fora — foi movido para onde texto
 * longo funciona (a seção "Sobre" e as publicações), em vez de virar manchete.
 */

export const empresa = {
  nome: "AS7",
  nomeCompleto: "AS7 Assessoria Contábil e Fiscal Ltda",
  cnpj: "10.647.965/0001-24",
  fundacao: 2009,
  cidade: "Campinas",
  uf: "SP",

  endereco: "Av. Angelo Simões, 555 – Sala 2",
  bairro: "Ponte Preta",
  cep: "13.041-455",

  whatsapp: "5519991352170",
  whatsappExibicao: "(19) 99135-2170",
  telefone: "551932557621",
  telefoneExibicao: "(19) 3255-7621",

  email: "as7@as7.com.br",
  instagram: "https://www.instagram.com/as7assessoriasp",
  instagramUsuario: "@as7assessoriasp",
};

export const mensagemWhatsapp = "Olá! Vim pelo site e gostaria de falar com a AS7.";

export function linkWhatsapp(mensagem: string = mensagemWhatsapp): string {
  return `https://api.whatsapp.com/send?phone=${empresa.whatsapp}&text=${encodeURIComponent(mensagem)}`;
}

export const seo = {
  titulo: "AS7 Assessoria Contábil e Fiscal — Contabilidade em Campinas/SP",
  descricao:
    "Escritório de contabilidade em Campinas desde 2009. Terceirização fiscal e contábil, recuperação de créditos tributários e soluções em finanças para empresas.",
};

/** PROPOSTA — o H1 atual do cliente é "Escritório de Contabilidade em Campinas / SP". */
export const hero = {
  rotulo: `Assessoria contábil · ${empresa.cidade}/${empresa.uf}`,
  titulo: "Contabilidade para decidir com segurança",
  /*
   * O mesmo título, em pedaços, para o segundo entrar em itálico.
   * Alternar romano/itálico é o recurso de ênfase da tipografia editorial —
   * a versão em `titulo` acima continua servindo para SEO e leitor de tela.
   */
  tituloPartes: [
    { texto: "Contabilidade para decidir" },
    { texto: "com segurança", italico: true },
  ],
  subtitulo:
    "A AS7 cuida da rotina contábil e fiscal, recupera créditos e transforma números em decisões melhores.",
  ctaPrimario: "Solicitar diagnóstico",
  ctaSecundario: "Conhecer serviços",
};

/** Provas curtas, todas ancoradas em algo que o cliente afirma no site atual. */
export const provas = [
  { icone: "relogio", valor: 2009, sufixo: "", rotulo: "Fundada em" },
  { icone: "pessoas", valor: 20, sufixo: "+", rotulo: "Anos de experiência" },
  { icone: "escudo", valor: 21, sufixo: "", rotulo: "Serviços" },
];

export const servicosHead = {
  rotulo: "Serviços",
  titulo: "Três frentes",
  apoio: "A rotina obrigatória, o dinheiro parado e o que a contabilidade comum não cobre.",
};

/**
 * VERBATIM — os 21 serviços em 3 grupos, do /servicos/ do site atual.
 * `resumo` é PROPOSTA: uma linha curta para dar hierarquia à lista.
 */
export const gruposServicos = [
  {
    titulo: "Contabilidade e Tributos",
    icone: "documento",
    resumo: "A obrigação em dia e o passado revisado.",
    itens: [
      "Terceirização de Área Fiscal",
      "Terceirização da Contabilidade",
      "Paralegais – Abertura e encerramentos de CNPJ",
      "Diagnóstico Tributário e levantamento e recuperação de Créditos Tributários Estaduais e Federais",
      "Controle de Ativo Imobilizado, Inventário, Reavaliação e Teste de Impairment",
    ],
  },
  {
    titulo: "Soluções em Finanças",
    icone: "grafico",
    resumo: "O que vem depois do balanço fechar.",
    itens: [
      "Gerenciamento de Inadimplência",
      "Implantação de Fluxo de Caixa",
      "Gestão de Riscos Financeiros",
      "Intermediação com instituição de crédito, para levantar recursos",
      "Diagnóstico Econômico e Financeiro",
    ],
  },
  {
    titulo: "Soluções Diferenciadas",
    icone: "escudo",
    resumo: "Os temas que aparecem na fiscalização.",
    itens: [
      "Inteligência Tributária e Compliance Fiscal",
      "Legislação Societária",
      "Folha de Pagamento e Encargos",
      "Crédito Acumulado de ICMS-SP",
      "Obrigações Ambientais – IBAMA, CETESB, Corpo de Bombeiros, Produtos Controlados (Polícia Civil, Federal e Exército)",
      "Classificação fiscal de mercadorias e serviços",
      "FCI – Ficha de Conteúdo Importado",
      "Fusões, Cisões e Incorporações",
      "Reorganização societária",
      "Revisão de Classificação Fiscal (NCM)",
      "Análise e adequação entre NCMs e códigos CEST",
    ],
  },
];

export const sobre = {
  rotulo: "Sobre nós",
  /** PROPOSTA — declaração curta, no lugar do parágrafo inteiro como manchete. */
  titulo: "Experiência, competência e talento",
  /** VERBATIM — o texto do cliente, agora em corpo de leitura e não em título. */
  paragrafos: [
    "Criada em 2009, por profissionais com mais de 20 anos de experiência nas áreas contábil, tributária, financeira e administrativa, ampla vivência em Empresas Nacionais e Multinacionais dos mais variados segmentos de mercado, a AS7 nasceu com o propósito de oferecer atendimento personalizado, flexível e objetivo.",
    "A AS7 é uma Empresa inovadora, com diferenciais competitivos no mercado e formada por gente altamente qualificada.",
  ],
  /** PROPOSTA — os três atributos que a copy do cliente já afirma, destacados. */
  atributos: [
    {
      icone: "alvo",
      titulo: "Atendimento personalizado",
      texto: "Flexível e objetivo — o propósito com que a AS7 nasceu.",
    },
    {
      icone: "pessoas",
      titulo: "Sócios com estrada",
      texto: "Mais de 20 anos em empresas nacionais e multinacionais.",
    },
    {
      icone: "balanca",
      titulo: "Contábil e financeiro",
      texto: "Da obrigação acessória ao diagnóstico econômico.",
    },
  ],
  missao: {
    rotulo: "Missão",
    /** VERBATIM */
    frase: "Somos plenamente comprometidos com os objetivos do parceiro.",
    texto:
      "Prestar serviços de qualidade, que permitam alavancar o crescimento profissional e financeiro do parceiro.",
    fecho: "Comprometimento individual a um esforço conjunto.",
  },
};

/** PROPOSTA — a seção "Informativo" do site atual é um cabeçalho vazio. */
export const informativoHead = {
  rotulo: "Informativo",
  titulo: "O que muda, explicado",
  texto: "Tributos, obrigações e gestão financeira. Escrito para quem toca a empresa.",
  verTodos: "Ver todas",
};

export const contato = {
  rotulo: "Contato",
  titulo: "Fale com o escritório",
  texto: "Conte o porte e o regime tributário. Retornamos com um diagnóstico.",
  campos: {
    nome: "Nome",
    fone: "Fone",
    email: "E-mail",
    mensagem: "Mensagem",
    enviar: "Enviar",
  },
};

/** Canais, com ícone, para o bloco de contato e o rodapé. */
export const canais = [
  { icone: "telefone", rotulo: "Telefone", valor: empresa.telefoneExibicao, href: `tel:+${empresa.telefone}` },
  { icone: "zap", rotulo: "WhatsApp", valor: empresa.whatsappExibicao, href: linkWhatsapp(), externo: true },
  { icone: "email", rotulo: "E-mail", valor: empresa.email, href: `mailto:${empresa.email}` },
  { icone: "instagram", rotulo: "Instagram", valor: empresa.instagramUsuario, href: empresa.instagram, externo: true },
];

export const navegacao = [
  { rotulo: "Serviços", href: "#servicos" },
  { rotulo: "Sobre", href: "#sobre" },
  { rotulo: "Informativo", href: "#informativo" },
  { rotulo: "Contato", href: "#contato" },
];
