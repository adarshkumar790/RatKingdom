import DownloadApp from "@/components/DonloadApp";
import FAQ from "@/components/FAQ";
import News from "@/components/Image&News";
import Navbar from "@/components/Navbar";
import Signup from "@/components/Signup";
import TopData from "@/components/Top";
import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <>
    <Navbar/>
    <div className="bg-white min-h-screen flex flex-col items-center">
    
      <main className="flex flex-col md:flex-row items-center justify-between px-6 py-10 pt-4">
        {/* Left Section */}
        <div className="text-center md:text-left max-w-xl md:ml-20">
          <h1 className="font-[Kantumruy] text-black text-[40px] md:text-[54px] font-extrabold leading-[46px] md:leading-[60px] text-left">
            Join the all-in-one <br /> <span className="text-[#5B5858]"> Crypto app </span> by <br /> Rats Kingdom!
          </h1>
          <div className="md:mt-16 mt-12 flex justify-center md:justify-start">
            <input
              type="text"
              placeholder="Email / Phone number"
              className="px-4 py-2 border border-gray-300 rounded-l-full bg-[#E9E9E9] focus:outline-none focus:ring-2 focus:ring-blue-400 w-2/3"
            />
            <button
              className="bg-[#5B5858] text-xs text-white -ml-4 px-6 py-2 rounded-full hover:bg-gray-700 font-bold"
            >
              Sign Up
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className=" md:mt-0 md:w-[500px] h-[500px] w-[400px]  ml-32 flex items-center justify-center">
        <TopData/>
        </div>
        
      </main>
      <div>
          <News/>
        </div>
        <div>
          <DownloadApp/>
        </div>
        <div>
          <FAQ/>
        </div>
        <div className="mb-8">
          <Signup/>
        </div>
     </div>
     </>
  );
};

export default HomePage;
