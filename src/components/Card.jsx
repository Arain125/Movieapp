import React from "react";
import { Link } from "react-router-dom";

const Card = ({ movie }) => {
  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`} className="block">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
          <img
            src={movie.image_thumbnail_path || "https://via.placeholder.com/400"}
            alt={movie.name}
            className="w-full h-56 object-cover rounded-lg"
          />
          <h2 className="text-xl font-semibold mt-4 text-gray-900 dark:text-white">{movie.name}</h2>
        </div>
      </Link>
    </div>
  );
};

export default Card;
