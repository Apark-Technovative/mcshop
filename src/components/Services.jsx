import React from "react";

const Services = () => {
  return (
    <section className="bg-[#f4f3fb] py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between mb-16">
          <div>
            <p className="text-sm font-semibold text-gray-600 mb-2">
              Services
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Specialized Printing Services
            </h2>
          </div>

          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
            Learn More
          </button>
        </div>

       
        <div className="grid grid-cols-4 gap-12 text-center mb-10">
          <img
            src="/images/digital-print.jpg"
            alt="Digital Print"
            className="w-[250px] h-[250px] mx-auto object-cover rounded-md shadow-md"
          />

          <img
            src="/images/cad-drawing.jpg"
            alt="CAD Print"
            className="w-[250px] h-[250px] mx-auto object-cover rounded-md shadow-md"
          />

          <img
            src="/images/mug-print.jpg"
            alt="Mug Print"
            className="w-[250px] h-[250px] mx-auto object-cover rounded-md shadow-md"
          />

          <img
            src="/images/black-binding.jpg"
            alt="Black Binding"
            className="w-[250px] h-[250px] mx-auto object-cover rounded-md shadow-md"
          />
        </div>

        
        <div className="grid grid-cols-4 gap-12 text-center">
          <div>
            <span className="block text-2xl mb-2">↑</span>
            <p className="text-xl font-medium">Digital Print</p>
          </div>

          <div>
            <span className="block text-2xl mb-2">↑</span>
            <p className="text-xl font-medium">Cad Print</p>
          </div>

          <div>
            <span className="block text-2xl mb-2">↑</span>
            <p className="text-xl font-medium">Mug Print</p>
          </div>

          <div>
            <span className="block text-2xl mb-2">↑</span>
            <p className="text-xl font-medium">Black Binding</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
