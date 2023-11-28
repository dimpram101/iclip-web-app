import React, { useEffect, useState, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../api";
import { useLocation } from "react-router-dom";
import MovieHeader from "./components/MovieHeader";
import RateReviewSection from "./components/RateReviewSection";
import Divider from "../../components/Divider";
import CastSection from "./components/CastSection";

const MovieDetailIndex = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  // useLayoutEffect(() => {
  //   document.documentElement.scrollTo(0, 0);
  // }, [location.pathname]);

  useEffect(() => {
    api
      .get(`/movie/${id}`, {
        params: {
          append_to_response: "reviews,credits",
        },
      })
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  if (!movie || loading) {
    return <div className="h-[603px] w-full fixed"></div>;
  }

  return (
    <div className="pb-12">
      <MovieHeader movie={movie} />

      <div className="max-w-screen-2xl mx-auto">
        <Divider className="my-20 opacity-25" />
        <RateReviewSection reviews={movie.reviews.results} />
        <Divider className="my-20 opacity-25" />
        <CastSection casts={movie.credits.cast} />
      </div>
    </div>
  );
};

export default MovieDetailIndex;
