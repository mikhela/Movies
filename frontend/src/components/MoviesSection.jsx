import React, { useContext } from 'react';
import { MovieContext } from '../Context/MovieContext';
import MovieCard from './card/MovieCard';

export default function MoviesSection({ searchTerm }) {
  const { movies, loading, error, fetchMoreMovies } = useContext(MovieContext);

  if (loading && movies.length === 0) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error.message}</h1>;
  console.log(movies);
  
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleLoadMore = () => {
    fetchMoreMovies();
  };

  return (
    <div className="section w-100 h-[60vh] lg:h-[78vh] mt-4 overflow-y-auto">
      <div className="w-100 flex flex-wrap gap-8 justify-between">
        {filteredMovies.map((movie, index) => (
          <MovieCard key={`${movie.id}-${index}`} movie={movie} />
        ))}
      </div>
      <div
        className="load-more text-xl text-orange-600 border-[1px] border-orange-600 bg-black rounded-xl w-40 text-center py-1 mt-12 cursor-pointer hover:bg-orange-600 hover:text-black transition-all duration-200"
        onClick={handleLoadMore}
      >
        Load more
      </div>
    </div>
  );
}
