import React from "react";
import { POSTER_CDN } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  console.log(POSTER_CDN + posterPath);
  return (
    <div className="">
      <img
        className="pr-4 "
        src={POSTER_CDN + posterPath}
        alt="poster-logo"
      ></img>
    </div>
  );
};

export default MovieCard;
