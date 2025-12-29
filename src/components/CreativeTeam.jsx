import React from "react";

export default function CreativeTeam() {
  return (
    <section className="bg-white min-h-[80vh] py-24 px-6 md:px-16 relative">
      
      
      <div className="absolute top-0 left-0 w-6 h-6 border-2 border-green-500 rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-6 h-6 border-2 border-green-500 rotate-45"></div>
      <div className="absolute top-10 right-20 w-6 h-6 border-2 border-orange-500 rotate-45"></div>
      <div className="absolute bottom-20 left-20 w-6 h-6 border-2 border-purple-500 rotate-45"></div>

      
      <div className="text-center mb-14">
        
        <p className="text-sm text-gray-500 mb-2">Team</p>

        
        <h2 className="text-3xl md:text-4xl font-bold">
          Creative Production Team
        </h2>
      </div>

      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0">
          <img
            src="/images/team1.png"
            alt="Team Member 1"
            className="w-full h-[350px] object-cover block"
          />

          <img
            src="/images/team2.png"
            alt="Team Member 2"
            className="w-full h-[350px] object-cover block"
          />

          <img
            src="/images/team3.png"
            alt="Team Member 3"
            className="w-full h-[350px] object-cover block"
          />

          <img
            src="/images/team4.png"
            alt="Team Member 4"
            className="w-full h-[350px] object-cover block"
          />
        </div>
      </div>
    </section>
  );
}
