import React from "react";

const Testimonials = () => {
  return (
    <section className="relative bg-white py-16 px-6 md:px-16">
      
      <div className="absolute top-0 left-0 w-6 h-6 border-2 border-green-500 rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-6 h-6 border-2 border-green-500 rotate-45"></div>
      <div className="absolute top-10 right-20 w-6 h-6 border-2 border-orange-500 rotate-45"></div>
      <div className="absolute bottom-20 left-20 w-6 h-6 border-2 border-purple-500 rotate-45"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
       
       
        <div>
          <p className="text-sm text-gray-500 mb-2">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get To Know Our Services Closer Through{" "}
            <span className="text-green-500">Customer Reviews</span>
          </h2>
          <p className="text-gray-600 mb-6">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit.  
           Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  
           Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.  
           Nisi ut aliquip ex ea commodo consequat duis aute irure dolor.  
           In reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.  
           Excepteur sint occaecat cupidatat non proident sunt in culpa.

          </p>
          <p className="font-semibold text-gray-800">
            Sally Wily - <span className="text-gray-500">Customer Rona</span>
          </p>
        </div>

    
      </div>
    </section>
  );
};

export default Testimonials;
