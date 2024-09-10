import React from 'react'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Movies from './pages/Movies'
import Serials from './pages/Serials'

export default function App() {
  return (
    <BrowserRouter>
      <div className="w-full h-[100vh] flex">
            <div className=' w-[12%] md:w-[5%] h-full md:px-0 bg-sidebarbg flex justify-center items-center  ' >
            <Sidebar />
            </div>
          <div className='w-[88%] md:w-[95%] h-full  bg-black'>
         <Routes>
            <Route index element={<Home />} />
            <Route path='movies' element={<Movies />} />
            <Route path='/serials' element={<Serials />} />
         </Routes>
         </div>

    </div>
    </BrowserRouter>
  )
}
