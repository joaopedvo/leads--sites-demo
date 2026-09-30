// All company details are fictional and used for this website concept.
export const empresa = {
  "nome": "Westbrook",
  "nomeCompleto": "Westbrook Accounting",
  "fundacao": 1998,
  "fundador": "James Westbrook",
  "cidade": "Charlotte",
  "uf": "NC",
  "endereco": "360 Example Street, Suite 100",
  "cep": "28202",
  "email": "hello@westbrook-demo.example",
  "telefones": [
    "(704) 555-0121",
    "(704) 555-0122"
  ],
  "whatsapp": "17045550123",
  "whatsappExibicao": "(704) 555-0123",
  "horario": "Monday–Friday, 9:00 AM–5:00 PM"
};
export const hero = {
  "eyebrow": "ACCOUNTING · CHARLOTTE, NC",
  "titulo": [
    "Your numbers,",
    "in good hands."
  ],
  "apoio": "Practical accounting support for small businesses, independent professionals and individuals in Charlotte.",
  "cta": "Talk to Westbrook",
  "ctaSecundario": "Explore services"
};
export const fatos = [
  {
    "valor": "1998",
    "rotulo": "Concept founding year"
  },
  {
    "valor": "NC",
    "rotulo": "Based in Charlotte"
  },
  {
    "valor": "You",
    "rotulo": "At the center of our work"
  }
];
export const servicos = [
  {
    "n": "01",
    "icone": "alvo",
    "nome": "Business Setup",
    "resumo": "Get organized from the start.",
    "itens": [
      "Business setup coordination",
      "Registration document organization",
      "Accounting workflow setup",
      "Recordkeeping systems",
      "A clear handoff to ongoing support"
    ]
  },
  {
    "n": "02",
    "icone": "grafico",
    "nome": "Bookkeeping",
    "resumo": "A clear view of the everyday numbers.",
    "itens": [
      "Transaction categorization",
      "Bank reconciliations",
      "Monthly financial reports"
    ]
  },
  {
    "n": "03",
    "icone": "balanca",
    "nome": "Tax Preparation Support",
    "resumo": "Keep your records ready for tax season.",
    "itens": [
      "Document collection and review",
      "Income and expense summaries",
      "Coordination with your tax professional",
      "Year-end organization"
    ]
  },
  {
    "n": "04",
    "icone": "pessoas",
    "nome": "Payroll Support",
    "resumo": "Stay organized as your team grows.",
    "itens": [
      "Employee record organization",
      "Payroll processing coordination",
      "Payroll report reviews",
      "New hire and departure checklists",
      "Help with routine payroll questions"
    ]
  },
  {
    "n": "05",
    "icone": "documento",
    "nome": "Individual Support",
    "resumo": "Bring your personal financial records together.",
    "itens": [
      "Personal document organization",
      "Income summaries",
      "Preparation checklists"
    ]
  },
  {
    "n": "06",
    "icone": "escudo",
    "nome": "Self-Employed Services",
    "resumo": "Practical support for independent work.",
    "itens": [
      "Freelancer bookkeeping",
      "Business expense tracking",
      "Regular reporting"
    ]
  }
];
export const sobre = {
  "eyebrow": "ABOUT US",
  "titulo": [
    "Good relationships.",
    "Clearer numbers."
  ],
  "paragrafos": [
    "Westbrook Accounting is a fictional Charlotte firm created for this website demonstration. Its story begins with a simple idea: accounting should feel approachable.",
    "This concept brings together personal attention, organized processes and clear reporting for businesses and individuals.",
    "James Westbrook — fictional founding partner."
  ]
};
export const pilares = [
  {
    "rotulo": "Our mission",
    "texto": "Make accounting clear, approachable and useful in everyday decisions."
  },
  {
    "rotulo": "Our vision",
    "texto": "A lasting partnership built on understanding and open communication."
  },
  {
    "rotulo": "Our values",
    "texto": "Honesty, clarity, care, responsiveness and respect."
  }
];
export const contato = {
  "eyebrow": "CONTACT",
  "titulo": [
    "How can we",
    "help you?"
  ],
  "apoio": "Tell us about your business, your bookkeeping or the records you would like to organize."
};
export const linkWhatsapp = (assunto: string) => `mailto:${empresa.email}?subject=${encodeURIComponent(`Hello! I would like to discuss ${assunto}.`)}`;