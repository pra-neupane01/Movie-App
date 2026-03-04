import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  // Load favourites safely
  useEffect(() => {
    try {
      const storedFavs = localStorage.getItem("favourites");
      if (storedFavs) setFavourites(JSON.parse(storedFavs));
    } catch (err) {
      console.error("Failed to parse favourites from localStorage", err);
      setFavourites([]);
    }
  }, []);

  // Save favourites safely
  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const addToFavourites = (movie) => {
    setFavourites((prev) => {
      if (prev.some((m) => m.id === movie.id)) return prev;
      return [...prev, movie];
    });
  };

  const removeFromFavourites = (movieId) => {
    setFavourites((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  const isFavourite = (movieId) =>
    favourites.some((movie) => movie.id === movieId);

  return (
    <MovieContext.Provider
      value={{ favourites, addToFavourites, removeFromFavourites, isFavourite }}
    >
      {children}
    </MovieContext.Provider>
  );
};
