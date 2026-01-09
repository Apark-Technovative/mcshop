import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = ({
  variant = "home", 
  title,
  description,
}) => {
  const navigate = useNavigate();

  
  if (variant === "home") {
    return (
      <section className="bg-[#f4f3fb] min-h-[calc(100vh-64px)] flex items-center">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center w-full">

          <div className="text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
              Your Printing Solution <br />
              at your <span className="text-green-500">Fingertips</span>
            </h1>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg font-medium text-gray-700">
              Fine and Reliable Service
            </p>

            <button
              onClick={() => navigate("/services")}
              className="mt-6 sm:mt-8 bg-blue-600 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-blue-700"
            >
              Get Started
            </button>
          </div>

          <div className="relative flex justify-center md:justify-end mt-6 md:mt-0">
            <img
              src="/images/cad-drawing.jpg"
              alt="CAD Drawing"
              className="rounded-lg shadow-lg w-64 sm:w-96 md:w-[650px] h-64 sm:h-96 md:h-[600px] object-cover transition-transform duration-300 hover:scale-105"
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
  }

  
  return (
    <section className="relative min-h-[60vh] sm:min-h-[65vh] md:min-h-[70vh] flex flex-col items-center justify-center text-center bg-[#f6f5fb] overflow-hidden px-4 sm:px-6">

      <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-5 text-black">
        {title}
      </h1>

      <p className="max-w-xs sm:max-w-md md:max-w-xl text-xs sm:text-sm text-gray-600 leading-relaxed">
        {description}
      </p>

     
      <div className="absolute top-16 sm:top-20 left-[25%] sm:left-[35%] w-0 h-0 
        border-l-[8px] sm:border-l-[12px] border-r-[8px] sm:border-r-[12px] border-b-[16px] sm:border-b-[20px]
        border-l-transparent border-r-transparent border-b-orange-400" />

      <div className="absolute top-20 sm:top-24 right-[25%] sm:right-[35%] w-4 sm:w-5 h-4 sm:h-5 
        border-4 border-green-500 rounded-full" />

      <div className="absolute top-40 sm:top-52 left-[10%] sm:left-[15%] w-3 sm:w-4 h-3 sm:h-4 
        border-2 border-white rotate-45" />

      <div className="absolute bottom-28 sm:bottom-36 left-[15%] sm:left-[20%] 
        w-4 sm:w-5 h-2 sm:h-3 border-l-4 border-b-4 border-green-500 -skew-x-12" />

      <div className="absolute bottom-24 sm:bottom-32 right-[20%] sm:right-[30%] w-2 sm:w-3 h-2 sm:h-3 
        border-2 border-orange-400 rounded-full" />

      <div className="absolute top-36 sm:top-44 right-[10%] sm:right-[15%] w-3 sm:w-4 h-3 sm:h-4 
        border-2 border-white rotate-45" />

    </section>
  );
};

export default Hero;



