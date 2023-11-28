import React from "react";
import { posterImageURL } from "../../../api";

const CastSection = ({ casts }) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-secondary text-2xl">Casts & Crews</h1>
      <div className="grid grid-cols-5 gap-8">
        {casts.map((cast) => (
          <div className="flex flex-col h-fit items-center">
            <img
              src={
                cast.profile_path
                  ? posterImageURL + cast.profile_path
                  : "/no-image.png"
              }
              className="w-full h-[400px] object-cover rounded-xl mb-2"
            />
            <p className="text-center text-lg font-semibold">{cast.name}</p>
            <p className="text-center text-lg">as {cast.character}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CastSection;
