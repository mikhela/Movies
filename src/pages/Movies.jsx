import React from 'react'
import Navbar from '../components/Navbar'
import HeaderMoviesByGenres from '../components/HeaderMoviesByGenres'
export default function Movies() {
  return (
    <div>
        <Navbar />
        <div className="container">
            <HeaderMoviesByGenres />
        </div>
    </div>
  )
}
