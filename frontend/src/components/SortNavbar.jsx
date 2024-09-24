import React, { useState } from 'react';
import Dropdown from './Dropdown';

export default function SortNavbar() {
  const [hover, setHover] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedRating, setSelectedRating] = useState('');
  const [selectedPopularity, setSelectedPopularity] = useState('');

  const genres = ['Romance', 'Comedy', 'Action', 'Drama', 'Horror'];
  const years = ['2023', '2022', '2021', '2020', '2019'];
  const imdbRatings = ['0-3', '3-6', '6-9', '9-10'];
  const popularity = ['Most Popular', 'Least Popular'];

  const handleSearch = () => {
    // Here you would typically call a function to fetch movies based on selected values
    console.log('Searching for movies with:', {
      genre: selectedGenre,
      year: selectedYear,
      imdb: selectedRating,
      popularity: selectedPopularity,
    });
    // Call your search function or update your state in the context to trigger the search
  };

  return (
    <div className="w-full mt-4 lg:flex sm:gap-8">
      <div className="grid grid-cols-2 gap-8 w-full lg:flex items-center md:gap-12">
        {/* Genre */}
        <Dropdown 
          label="Genre" 
          items={genres} 
          onSelect={setSelectedGenre} 
        />
        {/* Year */}
        <div className="flex justify-end lg:block">
          <Dropdown 
            label="Year" 
            items={years} 
            onSelect={setSelectedYear} 
          />
        </div>
        {/* IMDb */}
        <Dropdown 
          label="IMDb" 
          items={imdbRatings} 
          onSelect={setSelectedRating} 
        />
        {/* Popularity */}
        <div className="flex justify-end lg:block">
          <Dropdown 
            label="Popularity" 
            items={popularity} 
            onSelect={setSelectedPopularity} 
          />
        </div>
      </div>

      <button
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={handleSearch}
        className={`btn mt-4 lg:mt-0 text-xl px-3 py-1 w-full lg:w-[200px] text-center cursor-pointer rounded-md ${hover ? "border-2 border-white text-white bg-black" : "bg-red-700 border-2 border-red-700"} transition-all duration-1000`}
      >
        Search
      </button>
    </div>
  );
}
