import React from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <div className="w-full h-[100vh] flex">
          <div className='w-[12%] lg:w-[5%] h-full lg:px-0 bg-black flex justify-center items-center'>
          <Sidebar />
          </div>
          <div className='w-[88%] lg:w-[95%]'>
            <Navbar />
          </div>
    </div>
  )
}
