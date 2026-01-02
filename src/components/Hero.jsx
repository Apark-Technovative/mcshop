import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#f4f3fb] min-h-[calc(100vh-64px)] flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center w-full">

        
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-snug sm:leading-tight md:leading-tight">
            Your Printing Solution <br />
            at your <span className="text-green-500">Fingertips</span>
          </h1>

          <p className="mt-4 sm:mt-6 text-base sm:text-lg font-medium text-gray-700">
            Fine and Reliable Service
          </p>

          <button
            onClick={() => navigate("/services")}
            className="mt-6 sm:mt-8 bg-blue-600 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-blue-700 cursor-pointer"
          >
            Get Started
          </button>
        </div>

        <div className="relative flex justify-center md:justify-end mt-6 md:mt-0">
          <img
            src="/images/cad-drawing.jpg"
            alt="CAD Drawing"
            className="rounded-lg shadow-lg w-64 sm:w-96 md:w-[650px] h-64 sm:h-96 md:h-[600px] max-w-full object-cover transition-transform duration-300 hover:scale-105"
          />

          <div className="hidden md:block absolute bottom-10 left-[-20px] w-8 h-8 border-2 border-orange-400 rounded-full"></div>

          <div
            className="hidden md:block absolute top-16 right-[-20px] w-0 h-0 
            border-l-[14px] border-l-transparent
            border-b-[24px] border-b-green-500
            border-r-[14px] border-r-transparent"
          ></div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
