import React from 'react';
import about from '../assets/about.png';
import { ArrowRight, SquarePlay } from 'lucide-react';

const About = () => {
  return (
    <div className="relative w-full h-screen px-6">
      <img
        src={about}
        alt="About Us"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-white/60 z-10" />

      <div className=" relative z-20 flex flex-col items-center justify-center h-full lg:max-w-[800px] sm:max-w-[1000px] mx-auto px-4 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black">
          Innovating the Future with Advanced Technology Solutions
        </h1>

        <p className="mt-4 text-base sm:text-lg md:text-lg text-gray-700">
          BitorioTech empowers businesses with cutting-edge AI, cloud, and From Concept to Launch: Your Blockchain Projects Journey Starts Here
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <button className="flex items-center justify-center gap-2 bg-[#0093E5] hover:bg-[#007fc4] text-white px-5 py-2 rounded-md text-sm font-medium shadow">
            Request a Demo <ArrowRight size={16} />
          </button>

          <button className="flex items-center justify-center gap-2 bg-[#0093E5] hover:bg-[#007fc4] text-white px-5 py-2 rounded-md text-sm font-medium shadow">
            <SquarePlay size={16} /> Watch Intro Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
