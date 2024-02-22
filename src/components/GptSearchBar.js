import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import openai from "../utils/openai";
import React, { useRef, useState } from "react";
import { addSearchResults } from "../utils/searchSlice";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieInTMDB = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/multi?query=" +
        searchText.current.value +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(
      addSearchResults({
        searchQuery: searchText.current.value,
        results: json.results,
      })
    );
  };

  const handleGptSearchClick = async () => {
    // const query =
    //   "Act as a movie recommendation system and suggest some movie names for the query :" +
    //   searchText.current.value +
    //   "only give me name of 5 movies, comma separated like the example. Example: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya ";
    // const searchResults = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: query }],
    //   model: "gpt-3.5-turbo",
    // });
    // console.log(searchResults.choices);
    if (!searchText.current.value) return null;
    searchMovieInTMDB();
  };

  return (
    <div className=" pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-transparent grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          ref={searchText}
          className=" rounded-md p-4 m-4 border bg-gray-800 opacity-70 text-white font-semibold col-span-9"
          placeholder="What would you like to watch today..?"
        />
        <button
          className="font-bold m-4 border text-white bg-red-800 rounded-md opacity-70 col-span-3"
          onClick={handleGptSearchClick}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
