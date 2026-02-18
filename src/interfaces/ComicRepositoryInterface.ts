import { Comic } from "@/models/comicModel";

export default interface ComicRepositoryInterface {
  allComic(): Promise<Comic[]>;
  idComic(id: number): Promise<Comic | null>;
  addComic(car: Omit<Comic, "id">): Promise<Comic>;
  updateComic(id: number, car: Partial<Omit<Comic, "id">>): Promise<Comic>;
  deleteComic(id: number): Promise<void>;
}
