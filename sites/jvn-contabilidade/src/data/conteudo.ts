/** Conteúdo adaptado das páginas públicas de https://www.jvncontabilidade.com/. */
export const empresa = {
  nome: "JVN",
  nomeCompleto: "JVN Contabilidade",
  fundacao: 1986,
  fundador: "João Vicente Neto",
  cidade: "Uberlândia",
  uf: "MG",
  endereco: "Rua República do Piratini, 137",
  cep: "38402-028",
  email: "jvncontabilidade@hotmail.com.br",
  telefones: ["(34) 3213-8080", "(34) 3213-3138"],
  whatsapp: "5534996912662",
  whatsappExibicao: "(34) 99691-2662",
  horario: "Segunda a sexta, das 07:42 às 11:00 e das 12:00 às 17:30",
};
export const linkWhatsapp = (assunto: string) =>
  `https://wa.me/${empresa.whatsapp}?text=${encodeURIComponent(`Olá! Vim pelo site e quero falar sobre ${assunto}.`)}`;
export const hero = {
  eyebrow: "CONTABILIDADE · UBERLÂNDIA, MG",
  titulo: ["Sua contabilidade,", "com experiência."],
  apoio: "Desde 1986, a JVN acompanha empresas e pessoas físicas com serviços contábeis, fiscais e trabalhistas em Uberlândia.",
  cta: "Falar com a JVN",
  ctaSecundario: "Ver serviços",
};
export const fatos = [
  { valor: "1986", rotulo: "Ano de fundação" },
  { valor: "MG", rotulo: "Em Uberlândia" },
  { valor: "PF e PJ", rotulo: "Atendimento contábil" },
];
export const servicos = [
  { n: "01", icone: "alvo", nome: "Abertura e Encerramento", resumo: "Acompanhamento dos registros e cadastros da sua empresa.", itens: ["Requerimentos empresariais e contratos sociais", "Alterações e arquivamentos na Junta Comercial, OAB e cartórios", "Inscrição, alteração e baixa de CNPJ e inscrição estadual", "Cadastro municipal em Uberlândia", "Alvará e cadastro para emissão de nota fiscal de serviço"] },
  { n: "02", icone: "grafico", nome: "Escrituração Contábil", resumo: "Organização dos registros para acompanhar a contabilidade do negócio.", itens: ["Escrituração contábil", "Elaboração de relatórios contábeis", "Relações de faturamento"] },
  { n: "03", icone: "balanca", nome: "Escrituração Fiscal", resumo: "Apoio na rotina de documentos e obrigações fiscais.", itens: ["Escrituração, conferência e lançamento de notas fiscais", "Orientação e acompanhamento da emissão de notas fiscais", "Emissão de livros fiscais", "Elaboração de obrigações acessórias"] },
  { n: "04", icone: "pessoas", nome: "Rotinas Trabalhistas", resumo: "Acompanhamento das rotinas de pessoal da admissão ao desligamento.", itens: ["Admissão e demissão de empregados", "Folha de pagamento e pró-labore", "Guias de recolhimento da folha", "Obrigações acessórias referentes à folha de pagamento", "Orientações trabalhistas"] },
  { n: "05", icone: "documento", nome: "Imposto de Renda", resumo: "Atendimento para a preparação da declaração de Imposto de Renda.", itens: ["Declaração de Imposto de Renda", "Atendimento a pessoas físicas"] },
  { n: "06", icone: "escudo", nome: "Carnê-Leão e Livro-Caixa", resumo: "Apoio na organização dos registros e das obrigações da pessoa física.", itens: ["Carnê-Leão", "Livro-caixa"] },
];
export const sobre = {
  eyebrow: "QUEM SOMOS",
  titulo: ["Uma história que", "começou em 1986."],
  paragrafos: [
    "A JVN Contabilidade foi fundada em 1986 e atua em Uberlândia com serviços contábeis para empresas e pessoas físicas. Sua trajetória é orientada pela qualidade, eficiência e agilidade no atendimento.",
    "O escritório busca atualização profissional e tecnológica para acompanhar a legislação e as necessidades de seus clientes.",
    "João Vicente Neto — sócio fundador. CRC-MG nº 038.233/O-0.",
    "Dalva Maria de Souza Ferreira — sócia, in memoriam.",
  ],
};
export const pilares = [
  { rotulo: "Missão", texto: "Prestar serviços contábeis com qualidade, eficiência e confiança, atendendo às necessidades dos clientes e buscando segurança, excelência e atualização contínua." },
  { rotulo: "Visão", texto: "Ser uma organização contábil reconhecida pela ética e pela excelência dos serviços." },
  { rotulo: "Valores", texto: "Honestidade, idoneidade, ética, compromisso, clareza e agilidade." },
];
export const contato = {
  eyebrow: "CONTATO",
  titulo: ["Como podemos", "ajudar você?"],
  apoio: "Fale com a JVN sobre a abertura da sua empresa, as rotinas do seu negócio ou o atendimento para pessoa física.",
};
