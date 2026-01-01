import React from "react";
import { FaLayerGroup, FaStamp, FaBook, FaPrint } from "react-icons/fa";

const ServiceProvided = () => {
  const services = [
    { icon: <FaLayerGroup size={60} />, name: "Document Photocopy" },
    { icon: <FaStamp size={60} />, name: "Making Stamps & Seals" },
    { icon: <FaBook size={60} />, name: "Document Binding" },
    { icon: <FaPrint size={60} />, name: "Document Lamination" },
  ];

  return (
    <section className="bg-[#f0f4f8] py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-20 text-gray-900">
          Our Services
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center h-60 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <div className="text-green-500 mb-4">{service.icon}</div>
              <p className="text-base font-semibold text-gray-900">{service.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceProvided;
