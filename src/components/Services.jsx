import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  const fetchServices = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(
        "https://api.mycomputershop.com.np/api/getAllServices"
      );
      setServices(res.data.data || []);
    } catch (err) {
      setError("Error fetching services");
    } finally {
      setLoading(false);
    }
  };

  
  useEffect(() => {
    fetchServices();
  }, []);

  if (loading)
    return (
      <section className="py-20 text-center text-gray-600">
        Loading services...
      </section>
    );

  if (error)
    return (
      <section className="py-20 text-center text-red-600">{error}</section>
    );

  return (
    <section className="bg-[#f4f3fb] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <p className="text-sm font-semibold text-gray-600 mb-2">Services</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Specialized Printing Services
            </h2>
          </div>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 cursor-pointer">
            Learn More
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-12">
          {services.slice(0, 4).map((service, index) => {
            const isOdd = index % 2 === 0;
            return (
              <div
                key={index}
                className="flex flex-col items-center relative text-center"
              >
                {isOdd ? (
                  <>
                    <img
                      src={`https://api.mycomputershop.com.np/uploads/${service.images?.[0]}`}
                      alt={service.title}
                      className="w-60 h-60 object-cover rounded-md shadow-md"
                    />
                    <FaArrowUp />
                    <span className="mt-2 text-lg font-medium">{service.title}</span>
                  </>
                ) : (
                  <>
                    <span className="mb-2 text-lg font-medium">{service.title}</span>
                    <FaArrowDown />
                    <img
                      src={`https://api.mycomputershop.com.np/uploads/${service.images?.[0]}`}
                      alt={service.title}
                      className="w-60 h-60 object-cover rounded-md shadow-md"
                    />
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
