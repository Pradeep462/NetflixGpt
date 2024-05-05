import { useSelector } from "react-redux";
import MovieList from "./MovieList";

function SecondryContent() {
  const nowPlayingMovies = useSelector(store => store.movies?.nowPLayingMovie);
  const popularMovies = useSelector(store => store.movies?.popularMovies);
  const topRatedMovies = useSelector(store => store.movies?.topRatedMovies);
  const upCommingMovies = useSelector(store => store.movies?.upCommingMovies);

  return (
    <div className="bg-black">
      <div className="-mt-52 relative z-10">
        <MovieList Title={"Now Playing"} movies={nowPlayingMovies} />
        <MovieList Title={"Top Rated"} movies={topRatedMovies} />
        <MovieList Title={"Upcommming"} movies={upCommingMovies} />
        <MovieList Title={"Populaer Movies"} movies={popularMovies} />
      </div>
    </div>
  );
}

export default SecondryContent;
