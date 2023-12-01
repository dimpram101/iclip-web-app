import React, { useState } from "react";
import { useEffect } from "react";
import api from "../../api";
import MovieCard from "./components/MovieCard";
import { useCallback } from "react";
import EmptyMovieCard from "./components/EmptyMovieCard";
import { useSearchParams } from "react-router-dom";

const GenreIndex = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(2);
  const [fetchLoading, setFetchLoading] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState(null);

  const fetchMovies = useCallback(() => {
    if (fetchLoading) return;
    setFetchLoading(true);
    api
      .get(`/discover/movie?page=${page}&with_genres=${selectedGenre}`)
      .then((res) => {
        setMovies((prev) => [...prev, ...res.data.results]);
      })
      .catch((err) => console.log(err))
      .finally(() => setFetchLoading(false));
    setPage((prev) => prev + 1);
  }, [page, fetchLoading, selectedGenre]);

  useEffect(() => {
    const getGenreData = () => {
      api
        .get("/genre/movie/list")
        .then((res) => {
          setGenres(res.data.genres);
        })
        .catch((err) => console.log(err));
    };
    getGenreData();
  }, []);

  useEffect(() => {
    const hasGenreQuery = searchParams.has("genre");
    if (genres.length > 0) {
      if (!hasGenreQuery) {
        setSearchParams({ genre: genres[0].name.toLowerCase() });
        setSelectedGenre(genres[0].id);
        return;
      }

      const selectedGenreId = genres.find(
        (genre) => genre.name.toLowerCase() === searchParams.get("genre")
      ).id;
      setSelectedGenre(selectedGenreId);
    }
  }, [genres, searchParams]);

  useEffect(() => {
    const getMovieData = () => {
      api
        .get(`/discover/movie?with_genres=${selectedGenre}`)
        .then((res) => {
          setMovies(res.data.results);
        })
        .catch((err) => console.log(err));
    };
    if (!selectedGenre) return;
    getMovieData();
    setIsLoading(false);
  }, [selectedGenre]);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 30) {
        fetchMovies();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fetchMovies, selectedGenre]);

  const onGenreChange = (e) => {
    setSearchParams({
      genre: genres
        .find((genre) => genre.id === Number(e.target.value))
        .name.toLowerCase(),
    });
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
              Browse All /{" "}
              {genres.find((genre) => genre.id === Number(selectedGenre))?.name}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto my-8 flex gap-4">
        {!selectedGenre ? (
          <select className="border-none outline-none bg-primary py-3 px-4 rounded-md  w-40"></select>
        ) : (
          <select
            className="border-none outline-none bg-primary py-3 px-4 rounded-md  w-40"
            value={selectedGenre}
            onChange={onGenreChange}
          >
            {genres.map((genre) => (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            ))}
          </select>
        )}
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
