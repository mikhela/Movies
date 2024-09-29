import React, { useState } from 'react';
import Dropdown from './Dropdown';
import useDataFetch from './useDataFetch';

export default function SortNavbar() {
  // Movie genres 
  const { data: movieGenres, loading: loadingGenres, error: errorGenres } = useDataFetch(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=cd6592beb58e675d2cb6fdf038c87822"
  );

  const [hover, setHover] = useState(false);
  
  // Handling loading and error states
  if (loadingGenres) return <h1>Loading genres...</h1>;
  if (errorGenres) return <h1>Error fetching genres: {errorGenres.message}</h1>;

  // Map movieGenres to an array of genre names
  const genres = movieGenres ? movieGenres.genres.map(genre => genre.name) : [];

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, index) => currentYear - index);
  
  const imdbRatings = ['0-3', '3-6', '6-9', '9-10'];
  const popularity = ['Popular', 'Unpopular'];

  return (
    <div className="w-full mt-4 lg:flex sm:gap-8">
      <div className="grid grid-cols-2 gap-8 w-full lg:flex items-center md:gap-12">
        
        {/* Genre Dropdown */}
        <Dropdown label="Genre" items={genres} />
        
        {/* Year Dropdown */}
        <div className="flex justify-end lg:block">
          <Dropdown label="Year" items={years} />
        </div>
        
        {/* IMDb Rating Dropdown */}
        <Dropdown label="IMDb" items={imdbRatings} />
        
        {/* Popularity Dropdown */}
        <div className="flex justify-end lg:block">
          <Dropdown label="Popularity" items={popularity} />
        </div>
      </div>

      <button
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={`btn mt-4 lg:mt-0 text-xl px-3 py-1 w-full lg:w-[200px] text-center cursor-pointer rounded-md ${hover ? "border-2 border-white text-white bg-black" : "bg-red-700 border-2 border-red-700"} transition-all duration-1000`}
      >
        Search
      </button>
    </div>
  );
}
