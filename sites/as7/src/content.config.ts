import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/**
 * O "Informativo" do site atual é um cabeçalho sem nada embaixo. Aqui ele vira
 * um blog de verdade, alimentado por arquivos Markdown — formato que o próprio
 * escritório consegue editar sem mexer em código.
 *
 * `revisao` existe porque isto é conteúdo contábil: nenhum texto vai ao ar sem
 * o contador responsável assinar embaixo. O campo não deixa esquecer disso.
 */
const informativo = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/informativo" }),
  schema: z.object({
    titulo: z.string(),
    resumo: z.string(),
    data: z.coerce.date(),
    categoria: z.enum(["Tributos", "Finanças", "Fiscal", "Societário"]),
    tempoLeitura: z.number(),
    revisao: z.enum(["pendente", "aprovado"]).default("pendente"),
  }),
});

export const collections = { informativo };
