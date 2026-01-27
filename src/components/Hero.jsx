import React from "react";
import { Link } from "react-router-dom";

const Hero = ({ variant = "home", title, description }) => {
  if (variant === "home") {
    return (
      <section className="relative min-h-[90vh] flex items-center bg-[#f4f3fb]">

        <div className="absolute inset-0 md:hidden bg-[url('/images/cad-drawing.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 md:hidden bg-black/40" />

        <div className="relative max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          <div className="text-center md:text-left text-white md:text-gray-900">
            <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Your Printing Solution <br />
              at your{" "}
              <span className="text-green-400 md:text-green-500">
                Fingertips
              </span>
            </h1>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl font-medium text-gray-200 md:text-gray-700">
              Fine and Reliable Service
            </p>

            <Link
              to="/services"
              className="inline-block mt-6 sm:mt-8 bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>
          </div>

          <div className="hidden md:flex relative justify-end">
            <img
              src="/images/cad-drawing.jpg"
              alt="CAD Drawing"
              className="rounded-lg shadow-lg w-96 lg:w-[30rem] h-96 lg:h-[34rem] object-cover transition-transform duration-300 hover:scale-105"
            />

            <div className="absolute bottom-10 -left-5 w-8 h-8 border-2 border-orange-400 rounded-full" />

            <div className="absolute top-16 -right-5 w-0 h-0 
              border-l-14 border-l-transparent
              border-b-24 border-b-green-500
              border-r-14 border-r-transparent"
            />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-[45vh] sm:min-h-[48vh] md:min-h-[50vh] py-8 flex flex-col items-center justify-center text-center bg-[#f6f5fb] overflow-hidden px-4 sm:px-6">

      <h1 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3 text-black">
        {title}
      </h1>

      <p className="max-w-xs sm:max-w-md md:max-w-lg text-xs sm:text-sm text-gray-600 leading-relaxed">
        {description}
      </p>

      <div
        className="absolute top-14 sm:top-20 left-[12%] sm:left-[35%]
        w-0 h-0
        border-l-6 sm:border-l-8 border-l-transparent
        border-r-6 sm:border-r-8 border-r-transparent
        border-b-12 sm:border-b-20 border-b-orange-400
        opacity-60 sm:opacity-100"
      />

      <div
        className="absolute top-20 sm:top-24 right-[12%] sm:right-[35%]
        w-3 h-3 sm:w-5 sm:h-5
        border-2 sm:border-4 border-green-500
        rounded-full
        opacity-60 sm:opacity-100"
      />

      <div
        className="absolute top-36 sm:top-52 left-[6%] sm:left-[15%]
        w-3 h-3 sm:w-4 sm:h-4
        border-2 border-white
        rotate-45
        opacity-40 sm:opacity-100"
      />

      <div
        className="absolute bottom-24 sm:bottom-36 left-[10%] sm:left-[20%]
        w-4 h-2 sm:w-5 sm:h-3
        border-l-2 sm:border-l-4
        border-b-2 sm:border-b-4
        border-green-500
        -skew-x-12
        opacity-60 sm:opacity-100"
      />

      <div
        className="absolute bottom-20 sm:bottom-32 right-[14%] sm:right-[30%]
        w-2 h-2 sm:w-3 sm:h-3
        border-2 border-orange-400
        rounded-full
        opacity-50 sm:opacity-100"
      />

      <div
        className="hidden sm:block absolute top-40 right-[15%]
        w-4 h-4 border-2 border-white rotate-45"
      />
    </section>
  );
};

export default Hero;
