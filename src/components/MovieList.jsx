import React from "react";
import Movie from "./Movie";
import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {movies.map((movie) => (
        <Link to={`/movie/${movie.id}`} key={movie.id}>
          <Movie movie={movie} />
        </Link>
      ))}
    </div>
  );
};

export default MovieList;
