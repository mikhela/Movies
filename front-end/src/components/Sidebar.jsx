import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faHome, faCableCar } from '@fortawesome/free-solid-svg-icons';

export default function Sidebar() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
<ul className='w-full'>
        <li
          className={`w-full transition-all duration-300 ${hoveredIndex === 0 ? 'bg-red-500 text-white' : ''}`}
          onMouseEnter={() => setHoveredIndex(0)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="w-1/2 flex justify-center items-center flex-wrap mt-8 mx-auto ">
            <a href="#">
              <FontAwesomeIcon icon={faHome}  className={`transition-colors duration-300 text-sm md:text-2xl lg:text-3xl ${hoveredIndex === 0 ? 'text-black' : 'text-red-500'}`} />
            </a>
            <span className={`block transition-colors duration-300 cursor-pointer text-sm lg:text-lg ${hoveredIndex === 0 ? 'text-black' : 'text-white'}`}>Home</span>
          </div>
        </li>
        <li
          className={`w-full transition-all duration-300 ${hoveredIndex === 1 ? 'bg-red-500 text-white' : ''}`}
          onMouseEnter={() => setHoveredIndex(1)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="w-1/2 flex justify-center items-center flex-wrap mt-8 mx-auto">
            <a href="#">
              <FontAwesomeIcon icon={faFilm} className={`transition-colors duration-300 text-sm md:text-2xl lg:text-3xl ${hoveredIndex === 1 ? 'text-black' : 'text-red-500'}`} />
            </a>
            <span className={`block transition-colors duration-300 cursor-pointer text-sm lg:text-lg ${hoveredIndex === 1 ? 'text-black' : 'text-white'}`}>Movies</span>
          </div>
        </li>
        <li
          className={`w-full transition-all duration-300 ${hoveredIndex === 2 ? 'bg-red-500 text-white' : ''}`}
          onMouseEnter={() => setHoveredIndex(2)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="w-1/2 flex justify-center items-center flex-wrap mt-8 mx-auto">
            <a href="#">
              <FontAwesomeIcon icon={faCableCar} className={`transition-colors duration-300 text-sm md:text-2xl lg:text-3xl ${hoveredIndex === 2 ? 'text-black' : 'text-red-500'}`} />
            </a>
            <span className={`block transition-colors duration-300 cursor-pointer text-sm lg:text-lg ${hoveredIndex === 2 ? 'text-black' : 'text-white'}`}>Serials</span>
          </div>
        </li>
      </ul>
    </>
  );
}
