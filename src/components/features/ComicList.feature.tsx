"use client";
import { API } from "@/app/api/api";
import { Comic } from "@/models/comicModel";
import { useEffect, useState } from "react";

export default function ComicFeature() {
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
    <div className="min-h-screen  text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold">Comic Collection</h1>

          <button
            onClick={RefreshComicList}
            className="bg-indigo-600 hover:bg-indigo-500 transition px-5 py-2 rounded-xl font-semibold shadow-lg hover:scale-105 active:scale-95"
          >
            Ajouter
          </button>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {comics.map((comic) => (
            <div
              key={comic.id}
              className="bg-slate-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={comic.imgUrl || ""}
                  alt={comic.title || "Couverture du comic"}
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-5">
                <h2 className="text-lg font-bold truncate">{comic.title}</h2>
                <h3 className="text-sm text-slate-400 mt-1">{comic.author}</h3>

                <button className="mt-4 w-full bg-indigo-600 hover:bg-indigo-500 py-2 rounded-lg text-sm font-semibold transition">
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
