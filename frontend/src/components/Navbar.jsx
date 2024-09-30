import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default function Navbar({ setSearchTerm }) {
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
  };

  return (
    <div className='container flex justify-between items-center h-[10vh] relative z-50'>
      <form className="w-[200px] lg:w-[300px]" onSubmit={handleSubmit}>
        <div className="flex">
          <div className="relative w-full">
            <input
              type="search"
              id="location-search"
              className="block p-2.5 w-full z-20 text-xs lg:text-sm rounded-3xl text-white bg-sidebarbg focus:text-white"
              placeholder="Search" // Changed placeholder
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="absolute top-1/2 -translate-y-1/2 end-0 h-[90%] p-2.5 text-xs lg:text-sm font-medium text-black rounded-full bg-red-700"
            >
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </button>
          </div>
        </div>
      </form>
      <div className="authorization">
        <FontAwesomeIcon
          icon={faUser}
          className='text-white cursor-pointer text-2xl lg:text-lg md:border-2 md:border-white p-2 rounded-full'
        />
      </div>
    </div>
  );
}
