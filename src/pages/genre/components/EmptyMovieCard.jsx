import React from "react";
import { Link } from "react-router-dom";

const EmptyMovieCard = () => {
  return (
    <div className="block h-[487px]">
      <div className="w-full h-[406px] bg-primary rounded-lg object-cover"/>
      <p className="py-2 px-1"></p>
    </div>
  );
};

export default EmptyMovieCard;
