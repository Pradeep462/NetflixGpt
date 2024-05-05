import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptSearchSuggestion = () => {
  const { moviesName, tmdbMoviesResult } = useSelector(store => store.gpt);
  if (!moviesName) return null;
  return (
    <div className="bg-black text-white bg-opacity-80">
      {tmdbMoviesResult.map((movieName, index) => (
        <MovieList
          key={moviesName[index] + index}
          Title={moviesName[index]}
          movies={movieName.results}
        />
      ))}
    </div>
  );
};

export default GptSearchSuggestion;
