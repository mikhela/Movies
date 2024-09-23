import React from 'react'
import Navbar from '../components/Navbar'
import SortNavbar from '../components/SortNavbar'
import MoviesSection from '../components/MoviesSection'
export default function Movies() {
 
  
  return (
    <div className='bg-black'>
        <Navbar />
        <div className="container px-2 ">
            <SortNavbar />
            <div className="">
            <MoviesSection />
            </div>
        </div>
    </div>
  )
}
