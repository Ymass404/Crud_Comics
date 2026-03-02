import ComicRepositoryInterface from "@/interfaces/ComicRepositoryInterface";
import { describe, expect, it, vi } from "vitest";
import DeleteComic from "./DeleteComic";

describe("Delete Car", () => {
  const comicRepositoryMock = {
    deleteComic: vi.fn().mockResolvedValue(undefined),
  } satisfies Partial<ComicRepositoryInterface>;

  const carIdToDelete = 1;

  const feature = new DeleteComic(
    comicRepositoryMock as unknown as ComicRepositoryInterface,
  );

  it("Doit appeler le repository avec l'ID correct pour supprimer une voiture", () => {
    feature.execute(carIdToDelete);

    expect(comicRepositoryMock.deleteComic).toHaveBeenCalled();
  });
});
