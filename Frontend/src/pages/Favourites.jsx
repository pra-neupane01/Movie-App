import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";
import "../css/Favourites.css";

function Favourites() {
  const { favourites } = useMovieContext();

  if (!favourites || favourites.length === 0) {
    return (
      <div className="favourites-empty">
        <h2>No Favourite Movies yet.</h2>
        <p>Start adding movies to your favourites and they will appear here.</p>
      </div>
    );
  }

  return (
    <div className="favourites">
      <h2>Your Favourites</h2>
      <div className="movies-grid">
        {favourites.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Favourites;
