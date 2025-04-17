import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MovieDetailPage = () => {
  const { id } = useParams(); // Get movie id from URL params
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://www.episodate.com/api/show-details?id=${id}`
        );
        
        if (response.data.tvShow) {
          setMovie(response.data.tvShow);
        } else {
          setError("Movie not found!");
        }
      } catch (error) {
        setError("Failed to load movie details.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  if (!movie) return <div>Movie not found!</div>;

  const startDate = movie.start_date || "N/A";
  const country = movie.country || "N/A";
  const network = movie.network || "N/A";
  const status = movie.status || "N/A";
  const imagePath = movie.image_path || "https://via.placeholder.com/400"; // Fallback image

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-red-600 mb-4">{movie.name}</h1>

          <img
            src={imagePath}
            alt={movie.name}
            className="w-full h-96 object-cover mt-6 rounded-lg"
          />

          <div className="mt-6 text-gray-700 dark:text-gray-300 space-y-2">
            <p><strong>ID:</strong> {movie.id}</p>
            <p><strong>Start Date:</strong> {startDate}</p>
            <p><strong>Country:</strong> {country}</p>
            <p><strong>Network:</strong> {network}</p>
            <p><strong>Status:</strong> {status}</p>
          </div>

          {/* Watch Button */}
          <button
            onClick={() => window.open(`https://www.netflix.com/search?q=${movie.name}`, "_blank")}
            className="mt-6 py-2 px-4 bg-red-600 text-white rounded-lg"
          >
            Watch Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default MovieDetailPage;
