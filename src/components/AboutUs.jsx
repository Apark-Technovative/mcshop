import React from "react";
import { useNavigate } from "react-router-dom";

export default function AboutUs({ showButton = true }) {
  const navigate = useNavigate();

  return (
    <section className="relative bg-white overflow-hidden min-h-[85vh]">

      <span className="absolute top-10 left-10 w-10 h-10 border-2 border-green-500 rounded-full"></span>
      <span className="absolute top-1/2 right-1/2 w-6 h-6 border-2 border-green-500 rotate-45"></span>
      <span className="absolute top-12 right-20 w-6 h-6 border-2 border-indigo-500 rounded-full"></span>
      <span className="absolute bottom-16 right-24 w-8 h-8 border-2 border-indigo-500 rotate-45"></span>

      <div className="max-w-7xl mx-auto px-6 py-28 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center h-full">

        <div className="flex justify-center">
          <img
            src="/images/printer.png"
            alt="Large format printer"
            className="w-full max-w-xl object-contain"
          />
        </div>

        <div className="lg:pl-12 flex flex-col justify-start">
          <p className="text-sm text-gray-500 mb-4">About Us</p>

          <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-6">
            Experience The Power Of Digital Printing
          </h1>

          <p className="text-gray-600 text-sm leading-relaxed mb-8">
            We specialize in architectural and structural drawing printing along
            with large-format prints for a variety of technical needs. In addition
            to technical printing, we offer high-quality custom products including
            mugs, business cards, and 3D house photos. Our goal is to provide
            reliable service with excellent quality, ensuring your printing
            projects are handled with care and precision.
          </p>


          {showButton && (
            <button
              onClick={() => navigate("/about")}
              className="bg-blue-600 text-white px-6 py-3 rounded-md text-sm font-medium 
              hover:bg-blue-700 transition cursor-pointer w-fit"
            >
              See Detail
            </button>
          )}
        </div>

      </div>

      <div className="w-full h-0.5 bg-gray-300 mt-10"></div>
    </section>
  );
}
