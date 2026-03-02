import ComicRepositoryInterface from "@/interfaces/ComicRepositoryInterface";
import { describe, expect, it, vi } from "vitest";
import CreateComic, { ComicToCreateDTO } from "./CreateComic";

describe("Creation d'un comic", () => {
  const comicRepositoryMock = {
    addComic: vi.fn().mockReturnValue(true),
  } satisfies Partial<ComicRepositoryInterface>;
  const newComic: ComicToCreateDTO = {
    title: "Avenger",
    author: "Marvel",
    imgUrl:
      "https://m.media-amazon.com/images/I/919Lj0uGzmL._AC_UF894,1000_QL80_.jpg",
  };

  const feature = new CreateComic(
    comicRepositoryMock as unknown as ComicRepositoryInterface,
  );

  it("Doit crée un comic dans la base de donnée", () => {
    feature.execute(newComic);
    expect(comicRepositoryMock.addComic).toHaveBeenCalled();
  });
});
