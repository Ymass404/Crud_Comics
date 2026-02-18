import ComicRepositoryInterface from "@/interfaces/ComicRepositoryInterface";
import { db } from "@/database/index"; //  instance de connexion à Postgres
import { Comic } from "@/models/comicModel";
import { comics } from "../schemas/comic.schema";
import { eq } from "drizzle-orm";

export default class ComicRepos implements ComicRepositoryInterface {
  async allComic(): Promise<Comic[]> {
    const comic = await db.select().from(comics);
    return comic;
  }
  async idComic(id: number): Promise<Comic | null> {
    const result = await db.select().from(comics).where(eq(comics.id, id));
    return result[0] ?? null;
  }
  async addComic(comic: Omit<Comic, "id">): Promise<Comic> {
    const result = await db.insert(comics).values(comic).returning();
    if (result.length === 0) {
      throw new Error("Pas de retour dans la base de donnée");
    }
    return result[0];
  }
  async updateComic(
    id: number,
    comic: Partial<Omit<Comic, "id">>,
  ): Promise<Comic> {
    const [updatedComic] = await db
      .update(comics)
      .set(comic)
      .where(eq(comics.id, id))
      .returning();

    if (!updatedComic) throw new Error("Comic non trouvé");
    return updatedComic;
  }
  async deleteComic(id: number): Promise<void> {
    await db.delete(comics).where(eq(comics.id, id));
  }
}
