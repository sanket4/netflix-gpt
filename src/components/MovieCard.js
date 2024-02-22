import React from "react";
import { POSTER_CDN } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="text-white">
      <img
        className="pr-4 "
        src={POSTER_CDN + posterPath}
        alt="poster-logo"
      ></img>
    </div>
  );
};

export default MovieCard;
