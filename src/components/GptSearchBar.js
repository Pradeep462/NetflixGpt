import { useRef } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_OPTIONS, openAIKey } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTmdbMoviesResults } from "../utils/gptSlice";

function GptSearchBar() {
  const searchRef = useRef();
  const dispatch = useDispatch();

  const genAI = new GoogleGenerativeAI(openAIKey);

  const searchMovieData = async movieName => {
    movieName = movieName.trim();
    const searchMovieResult = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movieName +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const movieRespone = await searchMovieResult.json();
    return movieRespone;
  };

  const handleSechClick = async () => {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt =
      "Act as qa movie recommendation system and suggest some movies for the query : " +
      searchRef.current.value +
      ". only give me name of 5 movies , comma sepeated like the example result given ahead . Example result : Don , Gadar , Hera Pheri , Koi Mil Gay";
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const tmdbRespoce = response.text().split(",");
    const tmdbPromisses = tmdbRespoce.map(movieName =>
      searchMovieData(movieName)
    );
    const tmdbResults = await Promise.all(tmdbPromisses);
    dispatch(
      addTmdbMoviesResults({
        moviesName: tmdbRespoce,
        tmdbMoviesResult: tmdbResults,
      })
    );
  };

  return (
    <div className="flex justify-center pt-[10%] mb-8">
      <form
        className=" w-7/12 bg-black p-4 rounded-md"
        onSubmit={e => e.preventDefault()}
      >
        <input
          ref={searchRef}
          type="text"
          className=" py-2 px-6 w-[75%] rounded-md"
          placeholder="What would you like to watch today?"
        />
        <button
          className="bg-red-600 w-[22%] rounded-md ml-[2%] py-2 px-6 text-white"
          onClick={() => handleSechClick()}
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default GptSearchBar;
