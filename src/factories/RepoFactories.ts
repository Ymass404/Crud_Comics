import ComicRepos from "@/database/repository/comicRepos";
import ComicRepositoryInterface from "@/interfaces/ComicRepositoryInterface";

export default class RepoFactories {
  static comicRepository(): ComicRepositoryInterface {
    return new ComicRepos();
  }
}
