import React from "react";
import moment from "moment";
import { minutesToHour } from "../../../utils/minutesToHour";
import { originalImageURL, posterImageURL } from "../../../api";

const MovieHeader = ({ movie }) => {
  return (
    <>
      <div className="h-[553px] w-full relative -z-10">
        <img
          src={originalImageURL + "/" + movie.backdrop_path}
          alt=""
          className="w-full h-full object-cover brightness-75"
        />
      </div>

      <div className="max-w-screen-xl -mt-[400px] mx-auto gap-4 z-50">
        <div className="w-1/4 h-[500px]">
          <img
            src={posterImageURL + "/" + movie.poster_path}
            alt=""
            className="w-full h-full object-cover rounded-xl shadow-xl"
          />
        </div>

        <div className="mt-8 flex flex-row">
          <div className="w-3/4">
            <h1 className="text-5xl text-secondary font-bold w-[85%]">
              {movie.title}{" "}
              {movie.release_date &&
                `(${moment(movie.release_date).format("YYYY")})`}
            </h1>
            <h1 className="my-3 text-xl italic font-bold">"{movie.tagline}"</h1>
            <h1 className="my-3 text-sm italic">
              {minutesToHour(movie.runtime)}
            </h1>
            <p className="my-3 w-3/4">{movie.overview}</p>

            <div className="flex mt-8 gap-8">
              <div className="flex flex-col items-center">
                <p className="text-xl font-bold">{movie.vote_average}</p>
                <p className="text-sm">Rating</p>
              </div>

              <div className="flex flex-col items-center">
                <p className="text-xl font-bold">{movie.vote_count}</p>
                <p className="text-sm">Votes</p>
              </div>

              <div className="flex flex-col items-center">
                <p className="text-xl font-bold">{movie.popularity}</p>
                <p className="text-sm">Popularity</p>
              </div>
            </div>
            <div className="flex mt-3 text-xs">
              <p className="whitespace-pre-wrap">Created by </p>
              {movie.production_companies.map((company, index) => (
                <p
                  className="whitespace-pre-wrap font-bold text-gray-300"
                  key={company.name}
                >
                  {company.name}
                  {index + 1 !== movie.production_companies.length && ", "}
                </p>
              ))}
            </div>
          </div>
          <div className="flex-1 flex flex-col items-end text-gray-300">
            <p className="text-xl px-3">Genres</p>
            <div className="flex flex-wrap justify-end">
              {movie.genres.map((genre) => (
                <div
                  key={genre.id}
                  className="text-white px-3 mx-2 my-1 bg-primary rounded-lg py-1"
                >
                  {genre.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieHeader;
