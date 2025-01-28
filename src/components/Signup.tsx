"use client";
import { Button } from "./Button";

const Signup: React.FC = () => {
  return (
    <div className="relative w-full max-w-full bg-[#D9D9D9] p-2 pl-80 pr-80 overflow-hidden shadow-md mx-auto">
<div className="absolute top-0 left-0 h-full w-full pointer-events-none">
  {/* Left-Bottom Diagonal */}
  <div className="absolute left-0 -bottom-14 ml-2 bg-[#CECECE] w-[30px] h-[100px] transform -rotate-45"></div>
  <div className="absolute left-0 -bottom-12 ml-8 bg-[#CECECE] w-[30px] h-[160px] transform -rotate-45"></div>

  {/* Left-Side Image */}
  <img 
    src="/leftimage.png" 
    alt="Left Side" 
    className="absolute left-8  -bottom-0 w-[100px] h-[100px] object-cover"
  />

  {/* Right-Top Diagonal (matching the Left-Bottom corner) */}
  <div className="absolute right-0 top-0">
    <div className="absolute right-0 top-14 mr-2 bg-[#CECECE] w-[30px] h-[100px] transform rotate-45"></div>
    <div className="absolute right-0 -top-4 mr-12 bg-[#CECECE] w-[30px] h-[200px] transform rotate-45"></div>
  </div>

  {/* Right-Side Image */}
  <img 
    src="/rightimage.png" 
    alt="Right Side" 
    className="absolute right-8 -top-0 w-[100px] h-[100px] object-cover"
  />
</div>


      {/* Content */}
      <div className="relative z-10 text-center">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Start your adventure today!
        </h2>
        <Button className="bg-gray-800 text-white px-6 py-2 text-sm rounded-full hover:bg-gray-900">
          Sign Up Now
        </Button>
      </div>
    </div>
  );
};

export default Signup;
