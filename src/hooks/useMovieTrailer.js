import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addMovieTrailer } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = movieId => {
  const dispatch = useDispatch();
  const getMovieTrailer = async () => {
    const movieClips = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    let movieClip = await movieClips.json();

    const movieTrailers = movieClip.results.filter(
      movie => movie.type === "Trailer"
    );
    const movieTrailer = movieTrailers.length
      ? movieTrailers[0]
      : movieClip.results[0];
    dispatch(addMovieTrailer(movieTrailer));
  };
  useEffect(() => {
    getMovieTrailer();
  }, []);
};

export default useMovieTrailer;
