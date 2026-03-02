import { useState } from "react";
import MovieCard from "../components/MovieCard";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const movies = [
    {
      id: 1,
      title: "Inception",
      release_date: "2010-07-16",
    },
    {
      id: 2,
      title: "The Matrix",
      release_date: "1999-03-31",
    },
    {
      id: 3,
      title: "Interstellar",
      release_date: "2014-11-07",
    },
    {
      id: 4,
      title: "The Dark Knight",
      release_date: "2008-07-18",
    },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
    setSearchQuery("...");
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movies-grid"></div>
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
}

export default Home;
