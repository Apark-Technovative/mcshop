import React from "react";

const historyData = [
  {
    year: "2065 B.S.",
    title: "Started With Home Digital Printing",
    image: "/images/history1.jpg",
  },
  {
    year: "2075 B.S.",
    title: "Become A Professional Digital Printing",
    image: "/images/history2.jpg",
  },
  {
    year: "2082 B.S.",
    title: "Become A Big Industry Digital Printing",
    image: "/images/history3.jpg",
  },
];

const History = () => {
  return (
    <section className="bg-white min-h-[80vh] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="text-sm text-gray-500 mb-2">History</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            From Startup Till Now
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {historyData.map((item, index) => (
            <div key={index}>
              <img
                src={item.image}
                alt={item.year}
                className="mx-auto w-64 h-64 object-cover rounded-md shadow-md"
              />

              <h3 className="text-xl font-semibold mt-6">
                {item.year}
              </h3>

              <p className="text-gray-600 mt-2 max-w-xs mx-auto leading-relaxed">
                {item.title}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default History;
