import React from "react";
import { FaCrown, FaClock, FaUsers } from "react-icons/fa";

export default function Why() {
  return (
    <section className="bg-white pt-16 pb-28">

      <div className="max-w-7xl mx-auto px-6 text-center">


        <p className="text-sm text-gray-500 mb-4">Why?</p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-20">
          Fine, Affordable And High-Quality <br />
          Prints Why Not?
        </h2>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">


          <span className="hidden md:block absolute left-1/3 top-0 h-full w-px bg-gray-300"></span>
          <span className="hidden md:block absolute left-2/3 top-0 h-full w-px bg-gray-300"></span>


          <div className="flex flex-col items-center px-6">
            <FaCrown className="text-5xl text-gray-900 mb-6" />
            <h3 className="font-semibold text-lg mb-4">Modern Technology</h3>
            <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
              We use modern digital printing machines to ensure sharp colors,
              clean finishes and consistent quality for every print job.
            </p>
          </div>


          <div className="flex flex-col items-center px-6">
            <FaClock className="text-5xl text-gray-900 mb-6" />
            <h3 className="font-semibold text-lg mb-4">
              Speed And Accuracy
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
              Fast turnaround without compromising precision. Your orders are
              printed exactly as designed and delivered on time.
            </p>
          </div>


          <div className="flex flex-col items-center px-6">
            <FaUsers className="text-5xl text-gray-900 mb-6" />
            <h3 className="font-semibold text-lg mb-4">
              Professional Team
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
              Our experienced team handles every project with attention to
              detail ensuring customer satisfaction from start to finish.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
