import React, { useRef, useEffect } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  const listRef = useRef(null);

  const scrollLeft = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    // Scroll to the start of the list when the component mounts
    if (listRef.current) {
      listRef.current.scrollTo(0, 0);
    }
  }, []);

  if (!movies) return null;
  if (movies.length === 0)
    return (
      <div className="px-6 ">
        <h1 className="text-3xl  py-4 text-white">
          Oops No results found for "{title}"
        </h1>
        <h1 className="text-3xl  py-4 text-white">
          Try for something else
        </h1>
      </div>
    );
  return (
    <div className="px-6 ">
      <h1 className="text-3xl  py-4 text-white">{title}</h1>
      <div className="relative">
        <div
          className="absolute top-[100px] left-0 z-10 w-16 h-16 flex items-center justify-center bg-black bg-opacity-40 text-white hover:opacity-60 cursor-pointer"
          onClick={scrollLeft}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </div>
        <div
          className="absolute top-[100px] right-0 z-10 w-16 h-16 flex items-center justify-center bg-black bg-opacity-40 text-white hover:opacity-60 cursor-pointer"
          onClick={scrollRight}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
        <div
          className="flex flex-row overflow-x-auto"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          ref={listRef}
        >
          {movies.map((movie) => (
            <div key={movie.id} className="flex-none w-48 h-auto mb-4">
              <MovieCard posterPath={movie.poster_path} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
