import React from "react";

const Testimonials = () => {
  return (
    <section className="relative bg-white min-h-[80vh] py-16 sm:py-20 md:py-24 px-6 md:px-16 overflow-hidden">

      <div className="absolute top-2 left-2 sm:top-0 sm:left-0 w-3 sm:w-6 h-3 sm:h-6 border-2 border-green-500 rounded-full opacity-60 sm:opacity-100"></div>

      <div className="absolute bottom-2 right-2 sm:bottom-0 sm:right-0 w-3 sm:w-6 h-3 sm:h-6 border-2 border-green-500 rotate-45 opacity-60 sm:opacity-100"></div>

      <div className="absolute top-6 sm:top-10 right-10 sm:right-20 w-3 sm:w-6 h-3 sm:h-6 border-2 border-orange-500 rotate-45 opacity-50 sm:opacity-100"></div>

      <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-3 sm:w-6 h-3 sm:h-6 border-2 border-purple-500 rotate-45 opacity-50 sm:opacity-100"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        <div className="md:col-span-1 text-center md:text-left">
          <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
            Testimonials
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold mb-6 sm:mb-8 leading-snug sm:leading-tight text-gray-900">
            Get To Know Our Services Closer Through{" "}
            <span className="text-green-500">Customer Reviews</span>
          </h2>
        </div>

        <div className="md:col-span-1 flex items-center justify-center">

          <div className="w-full relative aspect-[4/3] sm:aspect-auto">
            <iframe
              src="https://widgets.sociablekit.com/google-reviews/iframe/25636544"
              width="100%"
              height="360"
              className="absolute inset-0 sm:static sm:h-[420px] md:h-[500px]"
              style={{
                border: "none",
                borderRadius: "12px",
                boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
                maxWidth: "500px"
              }}
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;
