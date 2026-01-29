import React from "react";
import { Link } from "react-router-dom";

export default function AboutUs({ showButton = true }) {
  return (
    <section className="relative bg-white overflow-hidden min-h-[85vh]">

      <span className="absolute top-6 sm:top-10 left-6 sm:left-10 w-6 sm:w-10 h-6 sm:h-10 border-2 border-green-500 rounded-full opacity-60 sm:opacity-100"></span>

      <span className="hidden sm:block absolute top-1/2 right-1/2 w-6 h-6 border-2 border-green-500 rotate-45"></span>

      <span className="absolute top-8 sm:top-12 right-10 sm:right-20 w-4 sm:w-6 h-4 sm:h-6 border-2 border-indigo-500 rounded-full opacity-60 sm:opacity-100"></span>

      <span className="absolute bottom-12 sm:bottom-16 right-12 sm:right-24 w-5 sm:w-8 h-5 sm:h-8 border-2 border-indigo-500 rotate-45 opacity-60 sm:opacity-100"></span>

      <div className="max-w-7xl mx-auto px-6 py-20 sm:py-24 lg:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center h-full">

        <div className="flex justify-center">
          <img
            src="/images/printer.png"
            alt="Large format printer"
            className="w-full max-w-xs sm:max-w-md lg:max-w-xl object-contain"
          />
        </div>

        <div className="lg:pl-12 flex flex-col justify-start text-center lg:text-left">
          <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
            About Us
          </p>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-snug sm:leading-tight mb-4 sm:mb-6">
            Experience The Power Of Digital Printing
          </h1>

          <p className="text-gray-600 text-sm leading-relaxed mb-6 sm:mb-8">
            We specialize in architectural and structural drawing printing along
            with large-format prints for a variety of technical needs. In addition
            to technical printing, we offer high-quality custom products including
            mugs, business cards, and 3D house photos. Our goal is to provide
            reliable service with excellent quality, ensuring your printing
            projects are handled with care and precision.
          </p>

          {showButton && (
            <Link
              to="/about"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md text-sm font-medium 
              hover:bg-blue-700 transition cursor-pointer w-fit mx-auto lg:mx-0"
            >
              See Detail
            </Link>
          )}
        </div>

      </div>

      <div className="w-full h-0.5 bg-gray-300 mt-10"></div>
    </section>
  );
}
