import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MovieContext } from "../context/movieContext";
import MovieList from "../components/MovieList";
import { searchMovies } from "../services/movie";

const SearchResultsPage = () => {
  const { query } = useParams();
  const { movies, setMovies } = useContext(MovieContext);

  useEffect(() => {
    searchMovies(query).then((res) => setMovies(res.results));
  }, [query, setMovies]);

  return (
    <div className="px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-4">Search results for "{query}"</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default SearchResultsPage;
