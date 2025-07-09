import React, { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

const MovieCard = ({ movie }) => {
  const { addFavorite, removeFavorite, isFavorite } = useContext(FavoritesContext);

  return (
    <div className="border rounded shadow-md p-4 flex flex-col items-center">
      <img src={movie.Poster} alt={movie.Title} className="w-40 h-60 object-cover" />
      <h2 className="text-lg font-bold mt-2">{movie.Title}</h2>
      <p className="text-sm">{movie.Year}</p>
      <button
        onClick={() =>
          isFavorite(movie.imdbID)
            ? removeFavorite(movie.imdbID)
            : addFavorite(movie)
        }
        className="mt-2 text-sm bg-green-500 text-white px-2 py-1 rounded"
      >
        {isFavorite(movie.imdbID) ? "Remove Favorite" : "Add to Favorites"}
      </button>
    </div>
  );
};

export default MovieCard;
