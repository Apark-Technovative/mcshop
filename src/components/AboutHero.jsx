import React from "react"
export default function AboutHero() {
  return (
    <section className="relative min-h-[70vh] flex flex-col items-center justify-center text-center bg-[#f6f5fb] overflow-hidden">

      <h1 className="text-4xl font-bold mb-5 text-black">
        About Us
      </h1>

      <p className="max-w-xl text-sm text-gray-600 leading-relaxed">
        We offer a range of high-quality printing services for business and individuals,
        from business card to large format prints (A4-A0) according to your needs.
      </p>

      
      <div className="absolute top-20 left-[35%] w-0 h-0 
        border-l-[12px] border-r-[12px] border-b-[20px]
        border-l-transparent border-r-transparent border-b-orange-400" />

      <div className="absolute top-24 right-[35%] w-5 h-5 
        border-4 border-green-500 rounded-full" />

      <div className="absolute top-52 left-[15%] w-4 h-4 
        border-2 border-white rotate-45" />

      <div className="absolute bottom-36 left-[20%] 
        w-5 h-3 border-l-4 border-b-4 border-green-500 -skew-x-12" />

      <div className="absolute bottom-32 right-[30%] w-3 h-3 
        border-2 border-orange-400 rounded-full" />

      <div className="absolute top-44 right-[15%] w-4 h-4 
        border-2 border-white rotate-45" />
    </section>
  );
}
