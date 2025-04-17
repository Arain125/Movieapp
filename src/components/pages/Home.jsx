import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card";

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
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
