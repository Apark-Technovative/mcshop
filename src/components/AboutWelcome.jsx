import React from "react";

const AboutWelcome = () => {
  return (
    <section className="relative bg-white min-h-[80vh] py-24 px-6 md:px-16">
      
      
      <span className="absolute -top-6 left-40 w-4 h-4 border-2 border-green-500 rotate-45"></span>
      <span className="absolute top-32 -left-6 w-5 h-5 border-2 border-orange-400 rounded-full"></span>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
       
        <div className="md:col-span-1">
          <p className="text-sm text-gray-500 mb-2">Welcome</p>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Welcome To <span className="text-green-500">Mc-Shop</span>, <br />
            For Fine And Reliable <br />
            Digital Printing Service.
          </h1>

          <p className="text-gray-600 mb-6 leading-relaxed">
          I warmly welcome you to our digital printing family. Our mission has always been to provide fine, reliable, and high-quality printing services that truly meet your needs. Whether it’s engineering drawings, architectural prints, business cards, personalized gifts, or creative 3D house photos, we are committed to delivering precision, clarity, and satisfaction in every project.
         <br></br>At Mc-Shop, we believe in blending modern printing technology with dedicated customer service. Your ideas matter to us, and we work closely with you to turn them into beautifully printed reality. Thank you for trusting us — we look forward to serving you with excellence.
          </p>

          <p className="font-semibold text-gray-800">
            Rajesh Dongol - <span className="text-gray-500">Proprietor</span>
          </p>
        </div>

        
        <div className="md:col-span-1"></div>
      </div>
    </section>
  );
};

export default AboutWelcome;
