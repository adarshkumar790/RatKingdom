"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full flex justify-between items-center py-4 px-4 bg-white">
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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-gray-700">
          <a href="#" className="font-sans text-[16px] text-[#000000] font-bold">BUY CRYPTO</a>
          <a href="#" className="font-sans text-[16px] text-[#000000] font-bold">MARKET</a>
          <a href="#" className="font-sans text-[16px] text-[#000000] font-bold">TRADE</a>
          <a href="#" className="font-sans text-[16px] text-[#000000] font-bold">FEATURES</a>
          <a href="#" className="font-sans text-[16px] text-[#000000] font-bold">COMMUNITY</a>
          <div className="relative">
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM21 21l-4.35-4.35" />
            </svg>
          </div>
        </nav>
      </div>

      {/* Buttons */}
      <div className="hidden md:flex items-center space-x-4 mr-4">
        <button className="text-[#000000] font-inter text-[18px] font-bold">Login</button>
        <button className="text-[#000000] font-inter text-[18px] font-bold">Sign Up</button>
        <div className="px-1 py-1 border rounded-full bg-gray-700">
          <Image src="/download.png" width={20} height={20} alt="download" />
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex items-center">
      <div className="flex items-center space-x-3 mr-4">
  <button className="text-black font-bold">Login</button>
  <button className="text-black font-bold">Sign Up</button>
  <div className="px-1 py-1 border rounded-full bg-gray-700">
    <Image src="/download.png" width={20} height={20} alt="download" />
  </div>
</div>

        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-8 h-8 text-gray-600" /> : <Menu className="w-8 h-8 text-gray-600" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md md:hidden flex flex-col items-center py-4 space-y-4">
          <a href="#" className="text-[#000000] font-bold">BUY CRYPTO</a>
          <a href="#" className="text-[#000000] font-bold">MARKET</a>
          <a href="#" className="text-[#000000] font-bold">TRADE</a>
          <a href="#" className="text-[#000000] font-bold">FEATURES</a>
          <a href="#" className="text-[#000000] font-bold">COMMUNITY</a>
         
          <div className="relative">
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM21 21l-4.35-4.35" />
            </svg>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
