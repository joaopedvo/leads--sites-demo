/**
 * Set de ícones do site — traçado, 24x24, sem cor própria (`currentColor`).
 * Desenhados aqui: biblioteca externa seria uma requisição de rede e um flash
 * sem ícone para desenhar alguns traços.
 */

export const desenhos = {
  // --- serviços ---
  documento: `<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z"/><path d="M14 3v5h5"/><path d="M9 13h6M9 17h4"/>`,
  grafico: `<path d="M3 3v18h18"/><path d="m7 15 4-5 3 3 5-7"/>`,
  escudo: `<path d="M12 3 5 6v6c0 4.6 3 7.6 7 8.8 4-1.2 7-4.2 7-8.8V6l-7-3Z"/><path d="m9 12 2 2 4-4"/>`,

  // --- diferenciais e provas ---
  relogio: `<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>`,
  pessoas: `<path d="M16 20v-1.5a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4V20"/><circle cx="9.5" cy="7.5" r="3.5"/><path d="M21 20v-1.5a4 4 0 0 0-3-3.87"/><path d="M15.5 4.13a3.5 3.5 0 0 1 0 6.74"/>`,
  alvo: `<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1"/>`,
  balanca: `<path d="M12 4v16M7 20h10"/><path d="M12 6.5 4.5 9M12 6.5 19.5 9"/><path d="M2 14a2.5 2.5 0 0 0 5 0L4.5 9 2 14Z"/><path d="M17 14a2.5 2.5 0 0 0 5 0L19.5 9 17 14Z"/>`,

  // --- contato ---
  telefone: `<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 1.9.6 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.1a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.8.6a2 2 0 0 1 1.7 2Z"/>`,
  zap: `<path d="M3 21l1.7-5A8.4 8.4 0 1 1 8 19.3L3 21Z"/><path d="M9 9.5c.4 2 2.5 4.1 4.5 4.5l1-1.4 2 .7c.1 1.1-.7 1.9-1.8 2-2.6-.2-6-3.6-6.2-6.2.1-1.1.9-1.9 2-1.8l.7 2L9 9.5Z"/>`,
  email: `<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 6.5 8.5 6 8.5-6"/>`,
  pino: `<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>`,
  instagram: `<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1"/>`,

  // --- editorial ---
  seta: `<path d="M5 12h14M13 6l6 6-6 6"/>`,
  setaCanto: `<path d="M7 17 17 7M9 7h8v8"/>`,
  check: `<path d="m20 6-11 11-5-5"/>`,
} as const;

export type NomeIcone = keyof typeof desenhos;
