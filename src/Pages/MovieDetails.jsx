import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
// import Header from "../components/Header";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const api_key = import.meta.env.VITE_API_KEY;
  useEffect(() => {
    const fetchMovie = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`
      );
      setMovie(response.data);
    };

    fetchMovie();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  console.log(movie);
  return (
    <>
      {/* <Header /> */}
      <div className="container mx-auto my-8">
        <h2 className="text-2xl font-bold mb-4">{movie.title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <img
            className="w-full h-96 object-cover"
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.title}
          />
          <div>
            <p className="text-gray-600">{movie.overview}</p>
            <p className="text-gray-600 mt-4">{`Release Date: ${movie.release_date}`}</p>
            <p className="text-gray-600 mt-4">{`Average Rating: ${movie.vote_average}`}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
