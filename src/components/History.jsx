import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

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
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevItem = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? historyData.length - 1 : prev - 1
    );
  };

  const nextItem = () => {
    setCurrentIndex((prev) =>
      prev === historyData.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="bg-white min-h-[80vh] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="text-sm text-gray-500 mb-2">History</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            From Startup Till Now
          </h2>
        </div>

        <div className="hidden md:grid grid-cols-3 gap-10 text-center">
          {historyData.map((item, index) => (
            <div key={index}>
              <div className="w-64 h-64 mx-auto overflow-hidden rounded-md shadow-md">
                <img
                  src={item.image}
                  alt={item.year}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold mt-6">{item.year}</h3>
              <p className="text-gray-600 mt-2 max-w-xs mx-auto leading-relaxed">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        <div className="md:hidden relative flex items-center justify-center">

          <button
            onClick={prevItem}
            className="absolute left-0 z-10 text-gray-700 bg-white/80 p-2 rounded-full shadow-md hover:bg-white"
          >
            <FiChevronLeft size={24} />
          </button>

          <div className="flex flex-col items-center">
            <div className="w-64 h-64 overflow-hidden rounded-md shadow-md">
              <img
                src={historyData[currentIndex].image}
                alt={historyData[currentIndex].year}
                className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-semibold mt-6">
              {historyData[currentIndex].year}
            </h3>
            <p className="text-gray-600 mt-2 max-w-xs text-center leading-relaxed">
              {historyData[currentIndex].title}
            </p>
          </div>

          <button
            onClick={nextItem}
            className="absolute right-0 z-10 text-gray-700 bg-white/80 p-2 rounded-full shadow-md hover:bg-white"
          >
            <FiChevronRight size={24} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default History;
