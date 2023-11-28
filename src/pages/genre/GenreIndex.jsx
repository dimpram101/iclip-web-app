import React, { useState, useRef } from "react";
import { useEffect } from "react";
import api from "../../api";
import MovieCard from "./components/MovieCard";
import { useCallback } from "react";
import EmptyMovieCard from "./components/EmptyMovieCard";

const selectBox = {
  popular: "Popular",
  now_playing: "Now Playing",
  top_rated: "Top Rated",
  upcoming: "Upcoming",
};

const GenreIndex = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(2);
  const [fetchLoading, setFetchLoading] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState("popular");

  const fetchMovies = useCallback(() => {
    if (fetchLoading) return;
    setFetchLoading(true);
    api
      .get(`/movie/${selectedGenre}?page=${page}`)
      .then((res) => {
        setMovies((prev) => [...prev, ...res.data.results]);
      })
      .catch((err) => console.log(err))
      .finally(() => setFetchLoading(false));
    setPage((prev) => prev + 1);
  }, [page, fetchLoading, selectedGenre]);

  useEffect(() => {
    const getData = () => {
      api
        .get(`/movie/${selectedGenre}`)
        .then((res) => {
          setMovies(res.data.results);
        })
        .catch((err) => console.log(err));
    };
    getData();
    setIsLoading(false);
  }, [selectedGenre]);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight) {
        fetchMovies();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fetchMovies, selectedGenre]);

  const onGenreChange = (e) => {
    setSelectedGenre(e.target.value);
    setMovies([]);
    setIsLoading(true);
    setPage(2);
  };

  return (
    <>
      <div className="h-[350px] relative">
        <img src="/genres/banner.png" className="w-full h-full object-cover" />
        <div className="w-full h-full bg-[#096FFD] bg-opacity-50 absolute top-0 left-0">
          <div className="max-w-screen-2xl mx-auto flex flex-col h-full justify-end pb-10">
            <p className="text-5xl font-semibold tracking-wider">
              Browse All / {selectBox[selectedGenre]}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto my-8 flex gap-4">
        <select
          className="border-none outline-none bg-primary py-3 px-4 rounded-md  w-40"
          value={selectedGenre}
          onChange={onGenreChange}
        >
          <option value="popular">Most Popular</option>
          <option value="now_playing">Now Playing</option>
          <option value="top_rated">Top Rated</option>
          <option value="upcoming">Upcoming</option>
        </select>
      </div>

      <div className="max-w-screen-2xl mx-auto grid grid-cols-5 gap-4">
        {isLoading ? (
          [1, 2, 3, 4, 5].map((item) => <EmptyMovieCard key={item} />)
        ) : (
          <>
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
            {fetchLoading &&
              [1, 2, 3, 4, 5].map((item) => <EmptyMovieCard key={item} />)}
          </>
        )}
      </div>
    </>
  );
};

export default GenreIndex;
