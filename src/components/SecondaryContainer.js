import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies?.nowPlayingMovies && (
      <div className="bg-black">
        <div className="relative pl-16 -mt-64 z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
          <MovieList title={"New Upcoming"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Hollywood"} movies={movies.nowPlayingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
