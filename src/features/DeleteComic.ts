import ComicRepositoryInterface from "@/interfaces/ComicRepositoryInterface";

export default class DeleteComic {
  private comicRepository: ComicRepositoryInterface;
  constructor(comicRepository: ComicRepositoryInterface) {
    this.comicRepository = comicRepository;
  }
  async execute(id: number): Promise<void> {
    return await this.comicRepository.deleteComic(id);
  }
}
