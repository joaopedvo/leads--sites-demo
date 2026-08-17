/**
 * Desenhos dos ícones — traçado, 24x24, sem cor própria (`currentColor`).
 *
 * Ficam num `.ts` e não dentro do `.astro` para o tipo poder ser importado
 * pelos componentes e pelos dados sem depender de export de componente.
 *
 * Nenhuma fonte de ícone externa: seriam uma requisição de rede e um flash de
 * texto sem ícone só para desenhar quinze traços.
 */

export const desenhos = {
  // barata/inseto — controle de pragas
  // as antenas saem do topo do corpo; soltas no ar viravam dois riscos perdidos
  praga: `<path d="M9.4 6.3 6.5 3M14.6 6.3 17.5 3"/><rect x="8" y="6" width="8" height="14" rx="4"/><path d="M8 10.5H4M8 15H4M16 10.5h4M16 15h4"/>`,
  // cano com curva e fluxo descendo — desentupimento
  cano: `<path d="M3 7h6a5 5 0 0 1 5 5v4"/><path d="M2 5h3v4H2z"/><path d="M11 15.5l3 3.5 3-3.5"/>`,
  // gota — limpeza de caixa d'água
  gota: `<path d="M12 3c0 0 6 6.4 6 10.4a6 6 0 0 1-12 0C6 9.4 12 3 12 3Z"/><path d="M9.5 13.5a2.5 2.5 0 0 0 2.5 2.5"/>`,
  // reservatório cilíndrico — caixa de gordura e fossa
  tanque: `<ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6"/><path d="M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3"/>`,
  // relógio — anos de mercado
  relogio: `<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>`,
  // folha — produto antialérgico
  folha: `<path d="M4.5 19.5C4.5 10 12 4 20 4c0 8-5.5 14.5-13 15.5Z"/><path d="M4.5 19.5c3.5-3.5 6.5-5.5 10-7.5"/>`,
  // capacete — equipe treinada
  // a crista precisa encostar na cúpula: solta lá em cima virava um ponto órfão
  capacete: `<path d="M2.5 19h19"/><path d="M5 19v-4a7 7 0 0 1 14 0v4"/><path d="M9.5 8.7V6a1.5 1.5 0 0 1 1.5-1.5h2A1.5 1.5 0 0 1 14.5 6v2.7"/>`,
  // cronômetro — atendimento rápido
  // o botão de cima liga na caixa por uma haste, senão flutua solto
  cronometro: `<circle cx="12" cy="14" r="7.5"/><path d="M12 10.5v3.5l2.5 1.5"/><path d="M9.5 2.5h5M12 2.5v4"/><path d="m18.8 7.2 1.4-1.4"/>`,
  // prédio — casa, condomínio e empresa
  predio: `<path d="M3 21h18"/><path d="M5.5 21V7.5L12 3.5l6.5 4V21"/><path d="M10 21v-4.5h4V21"/><path d="M9.5 10.5h.01M14.5 10.5h.01"/>`,
  escudo: `<path d="M12 2.5 4.5 6v6c0 5 3.2 8.2 7.5 9.5 4.3-1.3 7.5-4.5 7.5-9.5V6L12 2.5Z"/><path d="m8.8 12 2.2 2.2 4.2-4.4"/>`,
  pin: `<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>`,
  telefone: `<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 1.9.6 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.1a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.8.6a2 2 0 0 1 1.7 2Z"/>`,
  check: `<path d="m20 6-11 11-5-5"/>`,
  seta: `<path d="M5 12h14M13 6l6 6-6 6"/>`,
} as const;

export type NomeIcone = keyof typeof desenhos;
