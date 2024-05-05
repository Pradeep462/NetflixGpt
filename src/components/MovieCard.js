import { Movie_Poster_Path } from "../utils/constant";

function MovieCard({ movieImage }) {
  if (!movieImage) return;
  return (
    <div className="w-40 mx-2">
      <img src={Movie_Poster_Path + movieImage} />
    </div>
  );
}

export default MovieCard;
