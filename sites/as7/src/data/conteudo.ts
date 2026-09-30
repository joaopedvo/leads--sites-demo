// Fictional US business content for a website demonstration.
export const empresa = {
  "nome": "Alder",
  "nomeCompleto": "Alder Accounting & Advisory",
  "cnpj": "",
  "fundacao": 2012,
  "cidade": "Denver",
  "uf": "CO",
  "endereco": "240 Example Avenue, Suite 200",
  "bairro": "Downtown",
  "cep": "80202",
  "whatsapp": "13035550111",
  "whatsappExibicao": "(303) 555-0111",
  "telefone": "13035550112",
  "telefoneExibicao": "(303) 555-0112",
  "email": "hello@alder-demo.example",
  "instagram": "",
  "instagramUsuario": ""
};
export const seo = {
  "titulo": "Alder Accounting & Advisory — Denver, CO | Website Demo",
  "descricao": "A fictional Denver accounting firm. Explore bookkeeping, business advisory and financial reporting in this website concept."
};
export const hero = {
  "rotulo": "Accounting & advisory · Denver, CO",
  "titulo": "Clear books. Confident decisions.",
  "tituloPartes": [
    {
      "texto": "Clear books."
    },
    {
      "texto": "Confident decisions.",
      "italico": true
    }
  ],
  "subtitulo": "Alder brings your bookkeeping, reporting and planning together so you can focus on running your business.",
  "ctaPrimario": "Start a conversation",
  "ctaSecundario": "Explore our services"
};
export const provas = [
  {
    "icone": "relogio",
    "valor": 2012,
    "sufixo": "",
    "rotulo": "Concept founding year"
  },
  {
    "icone": "pessoas",
    "valor": 3,
    "sufixo": "",
    "rotulo": "Areas of focus"
  },
  {
    "icone": "escudo",
    "valor": 21,
    "sufixo": "",
    "rotulo": "Business services"
  }
];
export const servicosHead = {
  "rotulo": "Services",
  "titulo": "Three ways we help",
  "apoio": "Organized books, a clearer financial picture and practical support for what comes next."
};
export const gruposServicos = [
  {
    "titulo": "Accounting & Reporting",
    "icone": "documento",
    "resumo": "The everyday details, handled with care.",
    "itens": [
      "Outsourced bookkeeping",
      "Monthly accounting support",
      "Business setup coordination",
      "Financial record reviews",
      "Fixed asset tracking"
    ]
  },
  {
    "titulo": "Financial Advisory",
    "icone": "grafico",
    "resumo": "Turn your numbers into a clearer plan.",
    "itens": [
      "Accounts receivable tracking",
      "Cash flow forecasting",
      "Budget planning",
      "Lender-ready reporting",
      "Business performance reviews"
    ]
  },
  {
    "titulo": "Business Support",
    "icone": "escudo",
    "resumo": "Support as your business grows.",
    "itens": [
      "Tax document organization",
      "Business record maintenance",
      "Payroll coordination",
      "Sales reporting",
      "Vendor record management",
      "Inventory reporting",
      "Expense categorization",
      "Transaction preparation",
      "Ownership change support",
      "Accounting system setup",
      "Management dashboards"
    ]
  }
];
export const sobre = {
  "rotulo": "About Alder",
  "titulo": "Clarity for every next step",
  "paragrafos": [
    "Alder is a fictional independent accounting and advisory firm based in Denver. This concept imagines a close working partnership with small business owners.",
    "The approach is simple: keep records organized, explain the numbers and make room for better conversations about the future."
  ],
  "atributos": [
    {
      "icone": "alvo",
      "titulo": "Personal attention",
      "texto": "Support shaped around the way your business works."
    },
    {
      "icone": "pessoas",
      "titulo": "A collaborative approach",
      "texto": "A familiar point of contact and clear communication."
    },
    {
      "icone": "balanca",
      "titulo": "A complete picture",
      "texto": "Connect everyday bookkeeping with longer-term plans."
    }
  ],
  "missao": {
    "rotulo": "Our purpose",
    "frase": "Make the numbers easier to understand.",
    "texto": "Give business owners the clarity and organization to make informed decisions.",
    "fecho": "Clear communication. Shared goals."
  }
};
export const informativoHead = {
  "rotulo": "Insights",
  "titulo": "Fresh perspective for business",
  "texto": "Sample articles about organized records, everyday operations and clearer reporting.",
  "verTodos": "View all articles"
};
export const contato = {
  "rotulo": "Contact",
  "titulo": "Let us talk about your business",
  "texto": "Tell us what you are working on and where you could use support.",
  "campos": {
    "nome": "Name",
    "fone": "Phone",
    "email": "Email",
    "mensagem": "Message",
    "enviar": "Send message"
  }
};
export const navegacao = [
  {
    "rotulo": "Services",
    "href": "#servicos"
  },
  {
    "rotulo": "About",
    "href": "#sobre"
  },
  {
    "rotulo": "Insights",
    "href": "#informativo"
  },
  {
    "rotulo": "Contact",
    "href": "#contato"
  }
];
export const mensagemWhatsapp = "Hello! I would like to discuss my business.";
export function linkWhatsapp(mensagem: string = mensagemWhatsapp): string { return `mailto:${empresa.email}?subject=${encodeURIComponent(mensagem)}`; }
export const canais = [
 { icone: "telefone", rotulo: "Phone", valor: empresa.telefoneExibicao, href: `tel:+${empresa.telefone}` },
 { icone: "email", rotulo: "Email", valor: empresa.email, href: `mailto:${empresa.email}` }
];