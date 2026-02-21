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
    <div className="container">
      {comics.map((comic) => (
        <div key={comic.id}>
          <h2>{comic.title}</h2>
          <h3>{comic.author}</h3>
          <img src={comic.imgUrl} alt="picture" />
        </div>
      ))}
    </div>
  );
}
