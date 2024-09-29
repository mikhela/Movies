import React from 'react';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Movies from './pages/Movies';
import Serials from './pages/Serials';
import MovieContextProvider from './Context/MovieContext';
import Movie from './pages/moviesDetails/Movie'
export default function App() {
  return (
    <BrowserRouter>
      <MovieContextProvider> 
        <div className="w-full h-[100vh] flex">
          <div className='w-[12%] md:w-[5%] h-full md:px-0 bg-sidebarbg flex justify-center items-center'>
            <Sidebar />
          </div>
          <div className='w-[88%] md:w-[95%] bg-black h-auto overflow-y-hidden'>
            <Routes>
              <Route index element={<Home />} />
              <Route path='movies' element={<Movies />} />
              <Route path='/movies/:id' element={<Movie />} />
              <Route path='/serials' element={<Serials />} />
            </Routes>
          </div>
        </div>
      </MovieContextProvider>
    </BrowserRouter>
  );
}
