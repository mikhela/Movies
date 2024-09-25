import React, { useContext } from 'react';
import { MovieContext } from '../Context/MovieContext';
import MovieCard from './card/MovieCard';

export default function MoviesSection() {
  const { movies, loading, error } = useContext(MovieContext);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error.message}</h1>;

  return (
    <div className="section w-100 h-[60vh] lg:h-[80vh] mt-4 overflow-y-auto ">
      <div className="w-100 flex flex-wrap gap-8 justify-between">
      {movies.map((movie, index) => (
        <MovieCard key={`${movie.id}-${index}`} movie={movie} />
      ))}
      </div>
    </div>
  );
}
