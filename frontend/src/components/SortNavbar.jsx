import React, { useState } from 'react';
import Dropdown from './Dropdown';

export default function SortNavbar() {
  const [hover, setHover] = useState(false);

  // Sample dropdown options
  const genres = ['Romance', 'Comedy', 'Action', 'Drama', 'Horror'];
  const years = ['2023', '2022', '2021', '2020', '2019'];
  const imdbRatings = ['0-3', '3-6', '6-9', '9-10'];
  const popularity = ['Most Popular', 'Least Popular'];

  return (
    <div className="w-full mt-4 sm:flex sm:gap-8">
      {/* Grid by default, block layout on small screens and up */}
      <div className="grid grid-cols-2 gap-8 w-full sm:flex items-center md:gap-20">
        
        {/* Genre */}
        <Dropdown label="Genre" items={genres} />
        
        {/* Year */}
        <Dropdown label="Year" items={years} />

        {/* IMDb */}
        <Dropdown label="IMDb" items={imdbRatings} />

        {/* Popularity */}
        <Dropdown label="Popularity" items={popularity} />
      </div>

      {/* Full-width button below the grid */}
      <button
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={`btn mt-4 sm:mt-0 text-xl px-3 py-1 w-full sm:w-[200px] text-center cursor-pointer rounded-md ${hover ? "border-2 border-white text-white bg-black" : "bg-red-700 border-2 border-red-700"} transition-all duration-1000`}
      >
        Search
      </button>
    </div>
  );
}
