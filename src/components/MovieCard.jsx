import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`}>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
          <img
            src={movie.image_thumbnail_path}
            alt={movie.name}
            className="w-full h-60 object-cover rounded-lg"
          />
          <h3 className="text-white mt-2 text-xl font-bold">{movie.name}</h3>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
