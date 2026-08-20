export const desenhos = {
  documento: `<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z"/><path d="M14 3v5h5"/><path d="M9 13h6M9 17h4"/>`,
  grafico: `<path d="M3 3v18h18"/><path d="m7 15 4-5 3 3 5-7"/>`,
  escudo: `<path d="M12 3 5 6v6c0 4.6 3 7.6 7 8.8 4-1.2 7-4.2 7-8.8V6l-7-3Z"/><path d="m9 12 2 2 4-4"/>`,
  pessoas: `<path d="M16 20v-1.5a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4V20"/><circle cx="9.5" cy="7.5" r="3.5"/><path d="M21 20v-1.5a4 4 0 0 0-3-3.87"/><path d="M15.5 4.13a3.5 3.5 0 0 1 0 6.74"/>`,
  alvo: `<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1"/>`,
  balanca: `<path d="M12 4v16M7 20h10"/><path d="M12 6.5 4.5 9M12 6.5 19.5 9"/><path d="M2 14a2.5 2.5 0 0 0 5 0L4.5 9 2 14Z"/><path d="M17 14a2.5 2.5 0 0 0 5 0L19.5 9 17 14Z"/>`,
  zap: `<path d="M3 21l1.7-5A8.4 8.4 0 1 1 8 19.3L3 21Z"/><path d="M9 9.5c.4 2 2.5 4.1 4.5 4.5l1-1.4 2 .7c.1 1.1-.7 1.9-1.8 2-2.6-.2-6-3.6-6.2-6.2.1-1.1.9-1.9 2-1.8l.7 2L9 9.5Z"/>`,
} as const;

export type NomeIcone = keyof typeof desenhos;
