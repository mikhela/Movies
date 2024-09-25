import React, { createContext, useState, useEffect } from 'react';
import useFetch from '../components/useFetch';

export const MovieContext = createContext(null);

const MovieContextProvider = (props) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1); // Track the current page for pagination
  const { data: fetchedMovies, loading, error } = useFetch(`https://api.themoviedb.org/3/discover/movie?api_key=cd6592beb58e675d2cb6fdf038c87822&page=${page}`);

  useEffect(() => {
    if (fetchedMovies) {
      setMovies((prevMovies) => [...prevMovies, ...fetchedMovies]); // Append new movies to the existing list
    }
  }, [fetchedMovies]);

  const fetchMoreMovies = (nextPage) => {
    setPage(nextPage); // Update the page to fetch more movies
  };

  const contextValue = { movies, loading, error, fetchMoreMovies };

  return (
    <MovieContext.Provider value={contextValue}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
