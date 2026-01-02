import React from "react";

export default function AboutHero() {
  return (
    <section className="relative min-h-[60vh] sm:min-h-[65vh] md:min-h-[70vh] flex flex-col items-center justify-center text-center bg-[#f6f5fb] overflow-hidden px-4 sm:px-6">

      <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold mb-4 sm:mb-5 text-black">
        Contact Us
      </h1>

      <p className="max-w-xs sm:max-w-md md:max-w-xl text-xs sm:text-sm md:text-sm text-gray-600 leading-relaxed">
        Lorem ipsum dolor sit amet consectetur. Non commodo mi elit ut convallis. Tempor facilisi pellentesque sem praesent . Diam volutpat interdum quis senectus.accumsan
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
        border-2 sm:border-2 border-orange-400 rounded-full" />

      <div className="absolute top-36 sm:top-44 right-[10%] sm:right-[15%] w-3 sm:w-4 h-3 sm:h-4 
        border-2 border-white rotate-45" />

    </section>
  );
}
