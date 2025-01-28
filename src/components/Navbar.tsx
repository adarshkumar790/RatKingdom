import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <header className="w-full flex justify-between items-center py-4 px-4 bg-white ">
      {/* Logo and Navigation */}
      <div className="flex items-center space-x-8 pl-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/rat.png" alt="Rats Kingdom Logo" className="w-7 h-7 mr-1 -mt-4" />
          <div className="flex flex-col items-start">
            <span className="text-[#5B5858] font-sans text-[24px] font-bold leading-[41.15px] text-left">RATS</span>
            <span className="text-[#5B5858] font-sans text-[18px] font-bold leading-[25px] -ml-8 -mt-2">KINGDOM</span> 
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="flex space-x-6 text-gray-700">
          <a href="#" className="font-sans text-[16px] text-[#000000] font-bold leading-[41.15px]">BUY CRYPTO</a>
          <a href="#" className="font-sans text-[16px] text-[#000000] font-bold leading-[41.15px]">MARKET</a>
          <a href="#" className="font-sans text-[16px] text-[#000000] font-bold leading-[41.15px]">TRADE</a>
          <a href="#" className="font-sans text-[16px] text-[#000000] font-bold leading-[41.15px]">FEATURES</a>
          <a href="#" className="font-sans text-[16px] text-[#000000] font-bold leading-[41.15px]">COMMUNITY</a>
          <div className="flex-grow flex justify-center relative">
            <input
              type="text"
              placeholder="Search"
              className="border bg-[#E9E9E9] px-4 py-1 pl-10 rounded-full text-gray-700 focus:outline-none"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM21 21l-4.35-4.35"
              />
            </svg>
          </div>
        </nav>
      </div>
      
      {/* Search and Buttons */}
      <div className="flex items-center space-x-4 mr-4">
        <button className="text-[#000000] font-inter text-[18px] font-bold leading-[21.78px] text-left decoration-none">Login</button>
        <button className="text-[#000000] font-inter text-[18px] font-bold leading-[21.78px] text-left decoration-none">Sign Up</button>
        <div className="px-1 py-1 border rounded-full bg-gray-700">
          <Image src="/download.png" width={20} height={20} alt="download"/>
        </div>
      </div>
    </header>
  )
}

export default Navbar
