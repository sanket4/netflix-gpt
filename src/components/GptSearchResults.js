import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptSearchResults = () => {
  const results = useSelector((store) => store.gpt);
  if (!results.searchResult) {
    return null;
  } else {
    return (
      <div className="p-4 m-10  bg-black opacity-90">
        <MovieList title={results.searchQuery} movies={results.searchResult} />
      </div>
    );
  }
};

export default GptSearchResults;
