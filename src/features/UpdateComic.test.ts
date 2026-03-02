import { describe, expect, it, vi } from "vitest";
import UpdateComic, { ComicToUpdateDTO } from "./UpdateComic";
import ComicRepositoryInterface from "@/interfaces/ComicRepositoryInterface";

describe("Modification d'un comic", () => {
  const comicRepositoryMock = {
    updateComic: vi.fn().mockResolvedValue(true),
  } satisfies Partial<ComicRepositoryInterface>;
  const id = 1;
  const updatedComic: ComicToUpdateDTO = {
    title: "Avengers (Updated)",
  };

  const feature = new UpdateComic(
    comicRepositoryMock as unknown as ComicRepositoryInterface,
  );
  it("Doit modifier un comic dans la base de donnée", async () => {
    await feature.execute(id, updatedComic);
    expect(comicRepositoryMock.updateComic).toHaveBeenCalled();
  });
});
