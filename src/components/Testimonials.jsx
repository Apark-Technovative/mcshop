import React from "react";

const Testimonials = () => {
  return (
    <section className="relative bg-white min-h-[80vh] py-24 px-6 md:px-16 overflow-hidden">


      <div className="absolute top-0 left-0 w-6 h-6 border-2 border-green-500 rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-6 h-6 border-2 border-green-500 rotate-45"></div>
      <div className="absolute top-10 right-20 w-6 h-6 border-2 border-orange-500 rotate-45"></div>
      <div className="absolute bottom-20 left-20 w-6 h-6 border-2 border-purple-500 rotate-45"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        <div className="md:col-span-1">
          <p className="text-sm text-gray-500 mb-2">Testimonials</p>

          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Get To Know Our Services Closer Through{" "}
            <span className="text-green-500">Customer Reviews</span>
          </h2>

        </div>

        <div className="md:col-span-1 flex items-center justify-center">
          <iframe
            src="https://widgets.sociablekit.com/google-reviews/iframe/25636544"
            width="100%"
            height="500"
            style={{
              border: "none",
              borderRadius: "12px",
              boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
              maxWidth: "500px"
            }}
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
