import React from "react";

const teamMembers = [
  {
    img: "/images/team1.png",
    name: "Rajesh Dongol",
    role: "Proprietor"
  },
  {
    img: "/images/team2.png",
    name: "Janaki Khadka",
    role: "Manager"
  },
  {
    img: "/images/team3.png",
    name: "Amit Maharjan",
    role: "Technical Support"
  },
  {
    img: "/images/team4.png",
    name: "Ashim Dongol",
    role: "IT Support"
  },
];

export default function CreativeTeam() {
  return (
    <section className="bg-white min-h-[80vh] py-24 px-6 md:px-16 relative">

      <div className="text-center mb-14">
        <p className="text-sm text-gray-500 mb-2">Team</p>
        <h2 className="text-3xl md:text-4xl font-bold">
          Creative Production Team
        </h2>
      </div>

      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 justify-items-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="relative group overflow-hidden">

              <img
                src={member.img}
                alt={member.name}
                className="w-64 sm:w-full h-[350px] object-cover"
              />

              <div
                className="
                  absolute inset-0
                  bg-black/60
                  flex flex-col items-center justify-end
                  text-center
                  pb-10
                  translate-y-full
                  group-hover:translate-y-0
                  transition-transform duration-1000 ease-out
                "
              >
                <h3 className="text-white text-2xl font-bold">
                  {member.name}
                </h3>
                <p className="text-gray-300 text-sm mt-1">
                  {member.role}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
