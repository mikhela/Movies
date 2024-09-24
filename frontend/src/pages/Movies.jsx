import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import SortNavbar from '../components/SortNavbar';
import MoviesSection from '../components/MoviesSection';

export default function Movies() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className='bg-black'>
      <Navbar setSearchTerm={setSearchTerm} />
      <div className="container px-2">
        <SortNavbar />
        <MoviesSection searchTerm={searchTerm} />
      </div>
    </div>
  );
}
