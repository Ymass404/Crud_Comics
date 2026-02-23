import { ComicToCreateDTO } from "@/features/CreateComic";
import { ComicToUpdateDTO } from "@/features/UpdateComic";
import { Comic } from "@/models/comicModel";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000/api",
  timeout: 5000,
  headers: { "Content-Type": "application/json" },
});

export const comicRequest = {
  allComic: async (): Promise<Comic[]> => {
    const response = await instance.get("/comics");
    return response.data;
  },
  comicById: async (id: string): Promise<Comic | null> => {
    const response = await instance.get(`/comics/${id}`);
    return response.data;
  },
  addComic: async (
    comicToCreate: ComicToCreateDTO,
  ): Promise<Comic | undefined> => {
    const response = await instance.post("/comics", comicToCreate);
    return response.data;
  },

  deleteComic: async (id: string): Promise<void> => {
    await instance.delete(`/comics/${id}`);
  },

  updatedComic: async (
    id: string,
    comicToUpdate: ComicToUpdateDTO,
  ): Promise<Comic> => {
    const response = await instance.patch(`/comics/${id}`, comicToUpdate);
    return response.data;
  },
};
