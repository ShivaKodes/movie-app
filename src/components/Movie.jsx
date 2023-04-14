import React from "react";

const Movie = ({ movie }) => {
  // console.log(movie);
  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
      <img
        className="w-full h-48 object-cover"
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="px-4 py-2">
        <h2 className="text-lg font-bold">{movie.title}</h2>
        <p className="text-gray-600">{movie.description}</p>
      </div>
    </div>
  );
};

export default Movie;
