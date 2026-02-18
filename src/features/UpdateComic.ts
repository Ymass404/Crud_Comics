import ComicRepositoryInterface from "@/interfaces/ComicRepositoryInterface";
import { comicModel, type Comic } from "@/models/comicModel";
import z from "zod";

export const comicUpdateDTOmodel = comicModel.omit({ id: true }).partial();
export type ComicToUpdateDTO = z.infer<typeof comicUpdateDTOmodel>;

export default class GetAllComic {
  private comicRepository: ComicRepositoryInterface;
  constructor(comicRepository: ComicRepositoryInterface) {
    this.comicRepository = comicRepository;
  }
  execute(id: number, comicUpdate: ComicToUpdateDTO): Promise<Comic> {
    const existComic = this.comicRepository.idComic(id);
    if (!existComic) {
      throw new Error("Comic Introuvable");
    }
    return this.comicRepository.updateComic(id, comicUpdate);
  }
}
