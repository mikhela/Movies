import React, { useState } from 'react'
import Dropdown from './Dropdown'
export default function SortNavbar() {
    const [hover, isHover] = useState(false)
  return (
    <div className='flex justify-between mt-4'>
            {/* Genre  */}
            <Dropdown />
            {/* Year  */}
            <Dropdown />
            {/* IMDb  */}
            <Dropdown />
            {/* Popularity  */}
            <Dropdown />
            
            <button onMouseEnter={() => isHover(true)} onMouseLeave={() => isHover(false)} className={`btn  text-xl px-3 w-32 text-center cursor-pointer rounded-md ${hover ? "border-2 border-white text-white bg-black" : "bg-red-700 border-2 border-red-700"} transition-all duration-1000`}>Search</button>
    </div>
  )
}
