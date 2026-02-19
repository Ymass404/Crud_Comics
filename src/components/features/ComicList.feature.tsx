"use client";
import { API } from "@/app/api/api";
import { Comic, comicModel } from "@/models/comicModel";
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
    <div>
      {
        (comics.map(comicModel) = (
          <div key={comicModel.id}>
            <h1>{title}</h1>
          </div>
        ))
      }
    </div>
  );
}
