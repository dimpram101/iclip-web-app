import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import api, { posterImageURL } from "../../../api";
import { Link } from "react-router-dom";

const PopulerSection = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    api.get("/movie/popular").then((response) => {
      setPopular(response.data.results);
    });
  }, []);

  if (popular.length < 1) {
    return <div>Loading...</div>;
  }

  console.log(popular);

  return (
    <div className="space-y-4">
      <h1 className="border-l-4 border-l-secondary pl-2 text-2xl">
        Popular
      </h1>
      <div className="scroll overflow-x-auto whitespace-nowrap">
        {popular.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id} className="inline-block mr-4 h-full w-64 relative hover:brightness-90">
            <img src={posterImageURL+movie.poster_path} alt={movie.title} className="w-full object-cover h-full" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopulerSection;
