"use client";
import { Button } from "./Button";

const Signup: React.FC = () => {
  return (
    <div className="relative w-full max-w-full bg-[#D9D9D9] p-4  md:p-8 overflow-hidden shadow-md mx-auto">
      <div className="absolute top-0 left-0 h-full w-full pointer-events-none">
        {/* Left-Bottom Diagonal */}
        <div className="absolute left-0 -bottom-14 ml-2 bg-[#CECECE] w-[30px] h-[100px] transform -rotate-45 md:w-[30px] md:h-[100px]"></div>
        <div className="absolute left-0 -bottom-12 ml-8 bg-[#CECECE] w-[30px] h-[160px] transform -rotate-45 md:w-[30px] md:h-[160px]"></div>

        {/* Left-Side Image */}
        <img 
          src="/leftimage.png" 
          alt="Left Side" 
          className="absolute left-8 -bottom-0 w-[80px] h-[80px] object-cover md:w-[100px] md:h-[100px]"
        />

        {/* Right-Top Diagonal (matching the Left-Bottom corner) */}
        <div className="absolute right-0 top-0">
          <div className="absolute right-0 top-14 mr-2 bg-[#CECECE] w-[30px] h-[100px] transform rotate-45 md:w-[30px] md:h-[100px]"></div>
          <div className="absolute right-0 -top-4 mr-12 bg-[#CECECE] w-[30px] h-[200px] transform rotate-45 md:w-[30px] md:h-[200px]"></div>
        </div>

        {/* Right-Side Image */}
        <img 
          src="/rightimage.png" 
          alt="Right Side" 
          className="absolute md:right-8 right-10 md:-top-0 top-6 w-[80px] h-[80px] object-cover md:w-[100px] md:h-[100px]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center pl-10 pr-16">
        <h2 className="text-m font-semibold text-gray-700 mb-4 ml-6 md:text-3xl">
          Start your adventure today!
        </h2>
        <Button className="bg-gray-800 text-white px-3 py-2 md:text-sm text-xs  rounded-full hover:bg-gray-900 md:px-8 md:py-3 md:text-base">
          Sign Up Now
        </Button>
      </div>
    </div>
  );
};

export default Signup;
