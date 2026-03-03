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
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex items-center justify-center px-6 py-12">
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full max-w-md space-y-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8"
      >
        <h1 className="text-2xl font-semibold tracking-tight">
          Ajouter un comic
        </h1>

        <div className="flex flex-col gap-2">
          <label className="text-sm text-zinc-400">Titre</label>
          <input
            type="string"
            placeholder="Titre"
            {...form.register("title")}
            className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2.5 text-sm text-zinc-100 outline-none focus:border-white"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm text-zinc-400">Auteur</label>
          <input
            type="string"
            placeholder="Auteur"
            {...form.register("author")}
            className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2.5 text-sm text-zinc-100 outline-none focus:border-white"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm text-zinc-400">Image</label>
          <input
            type="url"
            placeholder="https://..."
            {...form.register("imgUrl")}
            className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2.5 text-sm text-zinc-100 outline-none focus:border-white"
          />
        </div>

        <button
          type="submit"
          className="w-full md:w-32 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200 active:scale-[0.98]"
        >
          Ajouter
        </button>
      </form>
    </div>
  );
}
