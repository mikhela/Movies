import React from 'react'
import Navbar from '../components/Navbar'
import SortNavbar from '../components/SortNavbar'
export default function Movies() {
  return (
    <div>
        <Navbar />
        <div className="container px-2 ">
            <SortNavbar />
        </div>
    </div>
  )
}
