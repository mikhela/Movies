import React from 'react';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Movies from './pages/Movies';
import TvShows from './pages/TvShows';
import MovieContextProvider from './Context/MovieContext';
import TvShowContextProvider from './Context/TvShowContext';
import Movie from './pages/details/Movie';  // Movie details component
import TvShow from './pages/details/TvShow';  // TV show details component

export default function App() {
  return (
    <BrowserRouter>
      <MovieContextProvider>
        <TvShowContextProvider>
          <div className="w-full h-[100vh] flex">
            <div className='w-[12%] md:w-[5%] h-full md:px-0 bg-sidebarbg flex justify-center items-center'>
              <Sidebar />
            </div>
            <div className='w-[88%] md:w-[95%] bg-black h-auto overflow-y-hidden'>
              <Routes>
                <Route index element={<Home />} />
                <Route path='movies' element={<Movies />} />
                <Route path='/movies/:id' element={<Movie />} /> {/* Movie details route */}
                <Route path='/tvshows' element={<TvShows />} />
                <Route path='/tvshows/:id' element={<TvShow />} /> {/* TV show details route */}
              </Routes>
            </div>
          </div>
        </TvShowContextProvider>
      </MovieContextProvider>
    </BrowserRouter>
  );
}
