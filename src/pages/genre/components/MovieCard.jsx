import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`} className="block h-[487px] transition-opacity ease-in-out hover:opacity-80">
      <img className="w-full h-[406px] bg-primary rounded-lg object-cover" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
      <p className="py-2 px-1">{movie.title}</p>
    </Link>
  );
};

export default MovieCard;
