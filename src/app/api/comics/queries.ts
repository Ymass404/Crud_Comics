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
};
