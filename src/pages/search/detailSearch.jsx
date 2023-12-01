import React, { useState, useRef } from "react";
import { useEffect } from "react";
import api from "../../api";
import { useCallback } from "react";
import EmptyMovieCard from "../genre/components/EmptyMovieCard";
import MovieCard from "../genre/components/MovieCard";
import { useSearchParams } from "react-router-dom";

const DetailSearch = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(searchParams.get("page") || 1);

  const onPageChange = (e) => {
    e.preventDefault();
    const query = searchParams.get("query");
    const page = e.target[0].value;

    if (page > data.total_pages || page < 1) {
      return;
    }

    setSearchParams({ query, page });
  };

  const onPageButtonClick = (type) => {
    const query = searchParams.get("query");
    const page = searchParams.get("page") || 1;

    if (type === "prev") {
      if (page <= 1) {
        return;
      }
      setSearchParams({ query, page: parseInt(page) - 1 });
    } else {
      if (page >= data.total_pages) {
        return;
      }
      setSearchParams({ query, page: parseInt(page) + 1 });
    }
  };

  useEffect(() => {
    setIsLoading(true);
    setPage(searchParams.get("page") || 1);
    setData(null);
    api
      .get("/search/movie", {
        params: {
          query: searchParams.get("query"),
          page: searchParams.get("page") || 1,
        },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [searchParams]);

  return (
    <>
      <div className="h-[350px] relative">
        <img src="/genres/banner.png" className="w-full h-full object-cover" />
        <div className="w-full h-full bg-[#096FFD] bg-opacity-50 absolute top-0 left-0">
          <div className="max-w-screen-2xl mx-auto flex flex-col h-full justify-end pb-10">
            <p className="text-5xl font-semibold tracking-wider">
              Search: {searchParams.get("query")}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto h-20 my-4 flex items-center justify-end">
        {data ? (
          <div className="flex flex-row justify-center items-center text-xl gap-4">
            <button
              className="bg-secondary px-4 py-2 rounded-lg"
              onClick={() => onPageButtonClick("prev")}
            >
              {"<"}
            </button>
            <div className="flex flex-row items-center border border-white border-opacity-40 rounded-lg pr-4">
              <form onSubmit={onPageChange}>
                <input
                  type="number"
                  placeholder={page}
                  className="bg-transparent rounded-lg w-12 px-2 py-2 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
                <button type="submit" className="hidden"></button>
              </form>
              <p>
                of {data.total_pages} {data.total_pages > 1 ? "pages" : "page"}
              </p>
            </div>
            <button
              className="bg-secondary px-4 py-2 rounded-lg"
              onClick={() => onPageButtonClick("next")}
            >
              {">"}
            </button>
          </div>
        ) : null}
      </div>

      <div className="max-w-screen-2xl mx-auto grid grid-cols-5 gap-4">
        {isLoading ? (
          <>
            {[1, 2, 3, 4, 5].map((item) => (
              <EmptyMovieCard key={item} />
            ))}
          </>
        ) : data.results.length > 0 ? (
          data.results.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))
        ) : (
          <div className="col-span-5 mx-auto h-[] flex flex-col justify-center">
            <p className="text-2xl text-white">No results found</p>
          </div>
        )}
      </div>
    </>
  );
};

export default DetailSearch;
