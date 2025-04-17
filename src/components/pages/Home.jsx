import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Import Link

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          "https://www.episodate.com/api/most-popular?page=1"
        );
        setMovies(response.data.tv_shows);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-red-600 mb-8 text-center">
          Most Popular Shows
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {movies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <Link to={`/movie/${movie.id}`} className="block">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <img
                    src={movie.image_thumbnail_path || "https://via.placeholder.com/400"}
                    alt={movie.name}
                    className="w-full h-56 object-cover rounded-lg"
                  />
                  <h2 className="text-xl font-semibold mt-4">{movie.name}</h2>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
