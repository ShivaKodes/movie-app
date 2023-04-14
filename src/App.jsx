import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getPopularMovies, searchMovies } from "./services/movie";
import { MovieContextProvider } from "./context/movieContext";
import Header from "./components/Header";
import Home from "./Pages/HomePage";
import MovieDetails from "./Pages/MovieDetails";
import SearchResults from "./Pages/SearchResults";

function App() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      const data = await getPopularMovies(currentPage);
      setPopularMovies((prevMovies) => [...prevMovies, ...data.results]);
    };
    fetchPopularMovies();
  }, [currentPage]);

  const handleSearch = async (query) => {
    if (query) {
      const data = await searchMovies(query, currentPage);
      setSearchResults(data.results);
    } else {
      setSearchResults([]);
    }
  };

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <MovieContextProvider>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                {/* <Header onSearch={handleSearch} /> */}
                <Home
                  movies={popularMovies}
                  onLoadMore={handleLoadMore}
                  currentPage={currentPage}
                  onSearch={handleSearch}
                />
              </>
            }
          ></Route>
          <Route
            path="/search"
            element={<SearchResults movies={searchResults} />}
          />

          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </div>
    </MovieContextProvider>
  );
}

export default App;
