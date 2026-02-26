"use client";
import { API } from "@/app/api/api";
import { comicCreateDTOmodel, ComicToCreateDTO } from "@/features/CreateComic";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function AddComic() {
  const form = useForm<ComicToCreateDTO>({
    resolver: zodResolver(comicCreateDTOmodel),
    defaultValues: {
      title: "",
      author: "",
      imgUrl: "",
    },
  });

  async function onSubmit(values: ComicToCreateDTO) {
    try {
      await API.comicRequest.addComic(values);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div>
          <label>
            Titre:
            <input
              type="string"
              placeholder="Titre"
              {...form.register("title")}
            />
          </label>
        </div>
        <div>
          <label>
            Auteur:
            <input
              type="string"
              placeholder="auteur"
              {...form.register("author")}
            />
          </label>
        </div>
        <div>
          <label>
            Image:
            <input
              type="url"
              placeholder="https://..."
              {...form.register("imgUrl")}
            />
          </label>
        </div>
        <button
          type="submit"
          className="w-full md:w-32 transition-all hover:scale-105"
        >
          Ajouter
        </button>
      </form>
    </div>
  );
}
