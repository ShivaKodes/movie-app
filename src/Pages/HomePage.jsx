import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieList from "../components/MovieList";
import Header from "../components/Header";

const Home = ({ onSearch, movies: initialMovies }) => {
  const [movies, setMovies] = useState(initialMovies);

  const api_key = import.meta.env.VITE_API_KEY;

  const handleSearch = async (query) => {
    if (query) {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}`
      );
      setMovies(response.data.results);
    } else {
      setMovies(initialMovies);
    }
  };

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`
      );
      setMovies(response.data.results);
    };

    fetchMovies();
  }, []);

  return (
    <>
      <Header onSearch={handleSearch} />
      <div className="container mx-auto my-8">
        <h2 className="text-2xl font-bold mb-4">Popular Movies</h2>
        {movies?<MovieList movies={movies} />:<div>Loading...</div>}
      </div>
    </>
  );
};

export default Home;
