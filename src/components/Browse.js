import React, { useEffect } from "react";
import Header from "./Header";
import { APIT_OPTIONS, NOW_PLAYING_MOVIES } from "../utils/constants";

const Browse = () => {
  const getNowPlayingMovies = async () => {
    const data = await fetch(NOW_PLAYING_MOVIES, APIT_OPTIONS);
    const json = await data.json();
    console.log(json);
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
