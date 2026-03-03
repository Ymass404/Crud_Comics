"use client";
import { API } from "@/app/api/api";
import { Comic } from "@/models/comicModel";
import { useEffect, useState } from "react";

export default function ComicList() {
  const [comics, setComics] = useState<Comic[]>([]);

  const RefreshComicList = () => {
    API.comicRequest
      .allComic()
      .then((response) => {
        setComics(response || []);
      })
      .catch((error) => {
        console.error("Erreur de chargement", error);
      });
  };

  const onRefreshComicList = () => {
    RefreshComicList();
  };

  useEffect(() => {
    onRefreshComicList();
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 px-6 py-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-end mb-10">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Comic Collection
            </h1>
            <p className="mt-2 text-sm text-zinc-400">
              {comics.length} comic{comics.length > 1 ? "s" : ""}
            </p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {comics.map((comic) => (
            <div
              key={comic.id}
              className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 transition hover:bg-zinc-900"
            >
              <div className="h-64 overflow-hidden bg-zinc-900">
                <img
                  src={comic.imgUrl || ""}
                  alt={comic.title || "Couverture du comic"}
                  className="w-full h-full object-cover transition duration-300 group-hover:scale-[1.02]"
                />
              </div>

              <div className="p-5">
                <h2 className="text-base font-semibold truncate text-zinc-100">
                  {comic.title}
                </h2>
                <h3 className="text-sm text-zinc-400 mt-1 truncate">
                  {comic.author}
                </h3>

                <button className="mt-4 w-full rounded-xl border border-zinc-800 bg-transparent py-2.5 text-sm font-semibold text-zinc-100 transition hover:bg-zinc-800">
                  Voir le détail
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
