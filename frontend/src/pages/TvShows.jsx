import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import SortNavbar from '../components/SortNavbar';
import TvShowsSection from '../components/TvShowsSection'
export default function TvShows() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className='bg-black'>
      <Navbar setSearchTerm={setSearchTerm} />
      <div className="container px-2 h-[90vh]  overflow-y-auto">
        <SortNavbar />
        <TvShowsSection searchTerm={searchTerm} />
      </div>
    </div>
  )
}
