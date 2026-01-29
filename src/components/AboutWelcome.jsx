import React from "react";

const AboutWelcome = () => {
  return (
    <section className="relative bg-white min-h-[80vh] py-16 sm:py-20 md:py-24 px-6 md:px-16 overflow-hidden">

      <span className="hidden sm:block absolute -top-6 left-40 w-4 h-4 border-2 border-green-500 rotate-45"></span>
      <span className="absolute top-20 sm:top-32 -left-3 sm:-left-6 w-3 sm:w-5 h-3 sm:h-5 border-2 border-orange-400 rounded-full opacity-60 sm:opacity-100"></span>
      <span className="absolute top-14 sm:top-20 right-6 sm:right-10 w-4 sm:w-6 h-4 sm:h-6 border-2 border-indigo-500 rotate-12 opacity-60 sm:opacity-100"></span>
      <span className="absolute bottom-20 sm:bottom-24 right-10 sm:right-20 w-5 sm:w-8 h-5 sm:h-8 border-2 border-green-400 rounded-full opacity-60 sm:opacity-100"></span>
      <span className="hidden sm:block absolute bottom-10 left-1/3 w-5 h-5 border-2 border-purple-500 rotate-45"></span>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-6 items-start">

        <div className="md:col-span-1 flex flex-col justify-start space-y-4 text-justify">

          <p className="text-xs sm:text-sm text-gray-500 text-center md:text-left">
            Welcome
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug sm:leading-tight text-center md:text-left">
            Welcome To <span className="text-green-500">Mc-Shop</span>,{" "}
            <span className="block sm:inline">
              For Fine And Reliable Digital Printing Service.
            </span>
          </h1>

          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            I warmly welcome you to our digital printing family. Our mission has always been to provide fine, reliable, and high-quality printing services that truly meet your needs. Whether it’s engineering drawings, architectural prints, business cards, personalized gifts, or creative 3D house photos, we are committed to delivering precision, clarity, and satisfaction in every project.
          </p>

          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            At Mc-Shop, we believe in blending modern printing technology with dedicated customer service. Your ideas matter to us, and we work closely with you to turn them into beautifully printed reality. Thank you for trusting us — we look forward to serving you with excellence.
          </p>

          <p className="font-semibold text-gray-800 text-sm sm:text-base">
            Rajesh Dongol - <span className="text-gray-500">Proprietor</span>
          </p>
        </div>

        <div className="md:col-span-1 flex justify-center md:justify-end relative mt-6 md:mt-0">
          <img
            src="/images/team1.png"
            alt="Team"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-lg shadow-lg"
          />

          <span className="hidden sm:block absolute -top-6 -right-6 w-4 h-4 border-2 border-orange-400 rotate-45"></span>
          <span className="absolute bottom-6 sm:bottom-10 -left-3 sm:-left-5 w-3 h-3 border-2 border-indigo-500 rounded-full opacity-60 sm:opacity-100"></span>
        </div>
      </div>
    </section>
  );
};

export default AboutWelcome;
