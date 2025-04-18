import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const MovieDetailPage = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://www.episodate.com/api/show-details?q=${id}`
        );
        console.log(response.data);
        setMovieDetails(response.data.tvShow);
      } catch (error) {
        console.error("Failed to fetch movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        {movieDetails ? (
          <div className="movie-detail-card bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
            <img
              src={movieDetails.image_thumbnail_path || "https://via.placeholder.com/400"}
              alt={movieDetails.name}
              className="w-full h-80 object-cover rounded-xl mb-6"
            />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {movieDetails.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {movieDetails.description || "No description available"}
            </p>

            <div className="text-left text-gray-600 dark:text-gray-400 space-y-1">
              <p><strong>Start Date:</strong> {movieDetails.start_date || "N/A"}</p>
              <p><strong>Country:</strong> {movieDetails.country || "N/A"}</p>
              <p><strong>Network:</strong> {movieDetails.network || "N/A"}</p>
              <p><strong>Status:</strong> {movieDetails.status || "N/A"}</p>
            </div>

            <div className="mt-8">
              <a
                href={movieDetails.url || "#"}
                className="bg-red-600 text-white py-2 px-6 rounded-lg hover:bg-red-700 transition duration-200"
              >
                Watch Now
              </a>
            </div>
          </div>
        ) : (
          <p className="text-gray-500">Loading movie details...</p>
        )}
      </div>
    </section>
  );
};

export default MovieDetailPage;
