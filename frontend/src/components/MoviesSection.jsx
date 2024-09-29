import React, { useContext, useState, useEffect } from 'react';
import { MovieContext } from '../Context/MovieContext';
import axios from 'axios';
import MovieCard from './card/MovieCard';

export default function MoviesSection({ searchTerm }) {
  const { movies, loading, error, fetchMoreMovies } = useContext(MovieContext); // Default movie loading
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchError, setSearchError] = useState(null);

  useEffect(() => {
    if (searchTerm) {
      // When there is a search term, fetch movies from the entire API
      setSearchLoading(true);
      axios
        .get(`https://api.themoviedb.org/3/search/movie?api_key=cd6592beb58e675d2cb6fdf038c87822&query=${searchTerm}`)
        .then((response) => {
          setFilteredMovies(response.data.results); // Set movies fetched from API
          setSearchLoading(false);
        })
        .catch((error) => {
          setSearchError(error);
          setSearchLoading(false);
        });
    } else {
      // If no search term, use the movies from context (default)
      setFilteredMovies(movies);
    }
  }, [searchTerm, movies]);

  const handleLoadMore = () => {
    fetchMoreMovies(); // Load more movies from the context
  };

  if (loading || searchLoading) return <h1>Loading movies...</h1>;
  if (error || searchError) return <h1>Error fetching movies: {(error || searchError).message}</h1>;

  return (
    <div className="noscrollbar w-100 h-[60vh] lg:h-[78vh] mt-4 overflow-y-auto">
      <div className="w-100 flex flex-wrap gap-8 justify-between">
        {filteredMovies.length ? (
          filteredMovies.map((movie, index) => (
            <MovieCard key={`${movie.id}-${index}`} movie={movie} />
          ))
        ) : (
          <p>No movies found for "{searchTerm}"</p>
        )}
      </div>
      {!searchTerm && ( // Show "Load More" only when no search is performed
        <div
          className="load-more text-xl text-orange-600 border-[1px] border-orange-600 bg-black rounded-xl w-40 text-center py-1 mt-12 cursor-pointer hover:bg-orange-600 hover:text-black transition-all duration-200"
          onClick={handleLoadMore}
        >
          Load more
        </div>
      )}
    </div>
  );
}
