import React from 'react';
import Navbar from '../components/Navbar';
import SortNavbar from '../components/SortNavbar';
import MoviesSection from '../components/MoviesSection';

export default function Movies({ searchTerm, setSearchTerm }) {
  
  return (
    <div className='bg-black'>
      <Navbar setSearchTerm={setSearchTerm} />
      <div className="container px-2 h-[90vh] overflow-y-auto">
        <SortNavbar />
        <MoviesSection searchTerm={searchTerm} />
      </div>
    </div>
  );
}
