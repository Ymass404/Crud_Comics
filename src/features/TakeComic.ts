import ComicRepositoryInterface from "@/interfaces/ComicRepositoryInterface";
import { Comic } from "@/models/comicModel";

export default class GetAllComic {
  private comicRepository: ComicRepositoryInterface;
  constructor(comicRepository: ComicRepositoryInterface) {
    this.comicRepository = comicRepository;
  }
  execute(): Promise<Comic[]> {
    return this.comicRepository.allComic();
  }
}
