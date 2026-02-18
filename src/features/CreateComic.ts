import ComicRepositoryInterface from "@/interfaces/ComicRepositoryInterface";
import { comicModel, type Comic } from "@/models/comicModel";
import z from "zod";

export const comicCreateDTOmodel = comicModel.omit({ id: true });
export type ComicToCreateDTO = z.infer<typeof comicCreateDTOmodel>;

export default class CreateComic {
  private comicRepository: ComicRepositoryInterface;
  constructor(comicRepository: ComicRepositoryInterface) {
    this.comicRepository = comicRepository;
  }

  execute(comicToCreate: ComicToCreateDTO): Promise<Comic> {
    const parsed = comicCreateDTOmodel.parse(comicToCreate);
    const newComic: Omit<Comic, "id"> = {
      ...parsed,
    };
    return this.comicRepository.addComic(newComic);
  }
}
