import Header from "./Header";
import useNowPLayingMovies from "../hooks/useNoePLayingMovies";
import VedioTitle from "./VedioTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";
import SecondryContent from "./SecondryContent";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcommingMovies from "../hooks/useUpcommingMovies";
import GptSearchPage from "./GptSearchPage";

const Browse = () => {
  useNowPLayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcommingMovies();

  const shwoGpt = useSelector(store => store.gpt?.showGptSearch);

  const movies = useSelector(store => store.movies?.nowPLayingMovie);
  if (!movies) return;
  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      <Header />
      {shwoGpt ? (
        <GptSearchPage />
      ) : (
        <>
          {" "}
          <VedioTitle original_title={original_title} overview={overview} />
          <VideoBackground movieId={id} />
          <SecondryContent />
        </>
      )}
    </div>
  );
};

export default Browse;
