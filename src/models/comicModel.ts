import z from "zod";

export const comicModel = z.object({
  id: z.number().min(1),
  title: z.string("Le Titre peut contenir que des caractères"),
  author: z.string("L'auteur peut contenir que des caractères"),
  imgUrl: z.string().url().optional(),
});

export type Comic = z.infer<typeof comicModel>;
