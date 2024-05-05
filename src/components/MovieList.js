import MovieCard from "./MovieCard";

function MovieList({ Title, movies }) {
  return (
    movies && (
      <div className="px-6">
        <h1 className="mx-2 text-3xl py-2 text-white">{Title}</h1>
        <div className="flex  overflow-x-scroll no-scrollbar">
          <div className="flex">
            {movies.map(movie => (
              <MovieCard key={movie.id} movieImage={movie.poster_path} />
            ))}
          </div>
        </div>
      </div>
    )
  );
}

export default MovieList;
