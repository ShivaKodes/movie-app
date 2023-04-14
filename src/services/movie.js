import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

export const getPopularMovies = async (page) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const searchMovies = async (query, page) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}`
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
