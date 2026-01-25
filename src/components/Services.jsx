import React, { useState, useEffect } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "../utils/axios";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchServices = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await axios.get("/api/getAllServices");
      setServices(res.data?.data || []);
    } catch (err) {
      setError("Error fetching services");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  if (loading) {
    return (
      <section className="py-20 text-center text-gray-600">
        Loading services...
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 text-center text-red-600">
        {error}
      </section>
    );
  }

  return (
    <section className="bg-[#f4f3fb] py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row items-center justify-between mb-16">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <p className="text-sm font-semibold text-gray-600 mb-2">
              Services
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Specialized Printing Services
            </h2>
          </div>

          <Link
            to="/services"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg 
            hover:bg-blue-700 cursor-pointer transition-transform 
            transform hover:scale-105"
          >
            Learn More
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-8 md:gap-x-12 md:gap-y-12">
          {services.slice(0, 4).map((service, index) => {
            const isTopImage = index % 2 === 0;

            return (
              <div
                key={service._id || index}
                className={`flex flex-col items-center text-center 
                  ${index % 2 !== 0 ? "mt-24 md:mt-[180px]" : ""} 
                  w-44 sm:w-52 md:w-60`}
              >
                {isTopImage ? (
                  <>
                    <img
                      src={`${import.meta.env.VITE_API_BASE_URL}/uploads/${service.images?.[0]}`}
                      alt={service.title}
                      className="w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 object-cover rounded-md shadow-md transition-transform duration-300 hover:scale-105"
                    />
                    <FaArrowUp className="my-2 text-gray-500" />
                    <span className="text-lg font-medium">
                      {service.title}
                    </span>
                  </>
                ) : (
                  <>
                    <span className="text-lg font-medium mb-2">
                      {service.title}
                    </span>
                    <FaArrowDown className="my-2 text-gray-500" />
                    <img
                      src={`${import.meta.env.VITE_API_BASE_URL}/uploads/${service.images?.[0]}`}
                      alt={service.title}
                      className="w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 mt-0 object-cover rounded-md shadow-md transition-transform duration-300 hover:scale-105"
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
