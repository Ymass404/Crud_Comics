import ComicRepositoryInterface from "@/interfaces/ComicRepositoryInterface";
import { Comic } from "@/models/comicModel";

export default class GetAllComic {
  private comicRepository: ComicRepositoryInterface;
  constructor(comicRepository: ComicRepositoryInterface) {
    this.comicRepository = comicRepository;
  }

  async execute(id: number): Promise<Comic | null> {
    const comic = await this.comicRepository.idComic(id);
    if (!comic) {
      throw new Error("Comic introuvable");
    }
    return comic;
  }
}
