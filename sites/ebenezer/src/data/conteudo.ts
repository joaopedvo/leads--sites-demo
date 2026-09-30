// Fictional US business content for this website demonstration.
const base = import.meta.env.BASE_URL.replace(/\/$/, "");
export const empresa = {
  "nome": "Evergreen",
  "nomeCompleto": "Evergreen Pest & Drain",
  "slogan": "Pest control and drain cleaning in Austin, Texas",
  "cidade": "Austin",
  "uf": "TX",
  "whatsapp": "15125550101",
  "whatsappExibicao": "(512) 555-0101",
  "telefone": "15125550102",
  "telefoneExibicao": "(512) 555-0102",
  "email": "hello@evergreen-demo.example",
  "endereco": "120 Example Lane, Austin, TX 78701",
  "instagram": "",
  "licenca": "",
  "horario": "Mon–Fri, 8:00 AM–6:00 PM"
};
export const seo = {
  "titulo": "Evergreen Pest & Drain — Austin, TX | Website Demo",
  "descricao": "A fictional Austin home services company. Explore this pest control and drain cleaning website concept."
};
export const hero = {
  "eyebrow": "Local care. Lasting peace of mind.",
  "titulo": "A pest-free home. Drains that flow.",
  "subtitulo": "From unwanted pests to stubborn clogs, Evergreen helps Austin homeowners and businesses get back to normal with clear advice and dependable care.",
  "ctaPrimario": "Request an estimate",
  "ctaSecundario": "Explore services",
  "selos": [
    "A plan for your property",
    "Clear, upfront estimates",
    "Homes and businesses"
  ],
  "nota": "Serving Austin, Round Rock, Cedar Park and nearby communities"
};
export const ticker = [
  "Cockroaches",
  "Ants",
  "Rodents",
  "Termites",
  "Spiders",
  "Clogged sinks",
  "Building drains",
  "Sewer lines",
  "Water tanks",
  "Grease traps",
  "Septic systems"
];
export const problema = {
  "eyebrow": "Small problems grow",
  "titulo": "Pests in the kitchen. A drain that will not clear.",
  "texto": "Unwanted pests and backed-up drains interrupt everyday life. Getting the problem assessed early helps you understand what needs attention.",
  "destaque": "We start with a careful inspection and a straightforward plan."
};
export const servicosHead = {
  "eyebrow": "Our services",
  "titulo": "Practical help for your property"
};
export const servicos = [
  {
    "titulo": "Pest control",
    "icone": "praga",
    "cta": "pest control",
    "resumo": "Targeted plans for cockroaches, ants, rodents, termites and other unwanted pests.",
    "itens": [
      "Residential properties",
      "Multi-unit buildings",
      "Commercial spaces"
    ]
  },
  {
    "titulo": "Drain cleaning",
    "icone": "cano",
    "cta": "drain cleaning",
    "resumo": "Help with slow sinks, blocked toilets, floor drains and backed-up sewer lines.",
    "itens": [
      "Sinks, toilets and drains",
      "Building drain lines",
      "Sewer and stormwater lines"
    ]
  },
  {
    "titulo": "Water tank cleaning",
    "icone": "gota",
    "cta": "water tank cleaning",
    "resumo": "Scheduled cleaning for water storage tanks, with a service plan tailored to the system.",
    "itens": [
      "Tank inspection",
      "Cleaning and maintenance"
    ]
  },
  {
    "titulo": "Grease traps & septic",
    "icone": "tanque",
    "cta": "grease trap and septic service",
    "resumo": "Routine cleaning and maintenance for grease traps and septic systems.",
    "itens": [
      "Grease traps",
      "Septic tanks",
      "Preventive maintenance"
    ]
  }
];
export const diferenciais = {
  "eyebrow": "The Evergreen approach",
  "titulo": "Good service starts with clarity",
  "itens": [
    {
      "titulo": "Property-specific plans",
      "icone": "relogio",
      "texto": "We assess the space before recommending a service."
    },
    {
      "titulo": "Thoughtful treatments",
      "icone": "folha",
      "texto": "We explain preparation, treatment and aftercare."
    },
    {
      "titulo": "Careful workmanship",
      "icone": "capacete",
      "texto": "A clear process from the first visit to the final check."
    },
    {
      "titulo": "Easy scheduling",
      "icone": "cronometro",
      "texto": "Straightforward communication and convenient appointment options."
    },
    {
      "titulo": "Residential & commercial",
      "icone": "predio",
      "texto": "Practical solutions for homes, shared buildings and workplaces."
    }
  ]
};
export const processo = {
  "eyebrow": "How it works",
  "titulo": "A simple path to peace of mind",
  "etapas": [
    {
      "passo": "01",
      "titulo": "Tell us what is happening",
      "texto": "Describe the pest or plumbing issue you have noticed."
    },
    {
      "passo": "02",
      "titulo": "Review your options",
      "texto": "We assess the problem and explain the proposed work and estimate."
    },
    {
      "passo": "03",
      "titulo": "Let us take care of it",
      "texto": "Our team completes the agreed service and walks you through next steps."
    }
  ]
};
export const cobertura = {
  "eyebrow": "Our service area",
  "titulo": "Austin and the surrounding communities",
  "texto": "Not sure whether your neighborhood is covered? Ask about service in your area.",
  "cidades": [
    "Austin",
    "Round Rock",
    "Cedar Park",
    "Greater Austin"
  ]
};
export const depoimentos = [];
export const faq = [];
export const ctaFinal = {
  "titulo": "Let us get your property back on track",
  "texto": "Tell us what is happening. We will help you understand your options and the next step.",
  "botaoWhatsapp": "Request an estimate",
  "botaoTelefone": "Call us"
};
export const navegacao = [
  {
    "rotulo": "Services",
    "href": "#servicos"
  },
  {
    "rotulo": "Why Evergreen",
    "href": "#diferenciais"
  },
  {
    "rotulo": "Our process",
    "href": "#processo"
  },
  {
    "rotulo": "Service area",
    "href": "#cobertura"
  }
];
export const mensagemWhatsapp = "Hello! I would like an estimate.";
export function linkWhatsapp(mensagem: string = mensagemWhatsapp): string { return `mailto:${empresa.email}?subject=${encodeURIComponent(mensagem)}`; }
export const logo = { cor: `${base}/img/demo-logo.svg`, branco: `${base}/img/demo-logo-white.svg`, alt: empresa.nomeCompleto, largura: 519, altura: 76 };
export const imagens = { hero: { src: `${base}/img/hero.svg`, alt: "" }, problema: { src: `${base}/img/servicos.svg`, alt: "" } };
