import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../../api";

const GenreSection = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    api.get("/genre/movie/list").then((response) => {
      setGenres(response.data.genres);
    });
  }, []);

  if (genres.length < 1) {
    return <div>Loading...</div>;
  }

  console.log(genres);

  return (
    <div className="space-y-4">
      <h1 className="border-l-4 border-l-secondary pl-2 text-2xl">Genres</h1>
      <div className="grid grid-cols-6 gap-2">
        {genres.map((genre) => (
          <Link
            to={`/browse/genre?genre=${genre.name.toLowerCase()}`}
            key={genre.id}
            className="w-full hover:brightness-90"
          >
            <div className="p-4 bg-primary rounded-lg">
              <p className="text-xl tracking-widest font-bold leading-normal">
                {genre.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GenreSection;
