import React, { useState, useEffect } from "react";
import axios from "../utils/axios";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ServiceProvided = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [startIndex, setStartIndex] = useState(0); 
  const [visibleCount, setVisibleCount] = useState(5); 

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

  
  useEffect(() => {
    const getVisibleCount = () => {
      if (window.innerWidth < 640) return 2; 
      if (window.innerWidth < 1024) return 3; 
      return 5; 
    };

    setVisibleCount(getVisibleCount());

    const handleResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (loading)
    return <section className="py-20 text-center text-gray-600">Loading services...</section>;
  if (error)
    return <section className="py-20 text-center text-red-600">{error}</section>;

  const visibleServices = services.slice(startIndex, startIndex + visibleCount);

  const handlePrev = () => setStartIndex((prev) => Math.max(prev - 1, 0));
  const handleNext = () =>
    setStartIndex((prev) => Math.min(prev + 1, services.length - visibleCount));

  return (
    <section className="bg-[#f0f4f8] py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-gray-900">
          Our Services
        </h2>

        <div className="relative flex items-center justify-center">
         
          {startIndex > 0 && (
            <button
              onClick={handlePrev}
              className="absolute left-0 bg-white hover:bg-gray-200 shadow-md rounded-full w-10 h-10 flex items-center justify-center text-gray-700 text-lg cursor-pointer transition z-10"
            >
              <FaChevronLeft />
            </button>
          )}

          <div className="flex gap-6 overflow-hidden justify-center w-full">
            {visibleServices.map((service, index) => (
              <div key={service._id || index} className="flex flex-col items-center">
                <img
                  src={`${import.meta.env.VITE_API_BASE_URL}/uploads/${service.images?.[0]}`}
                  alt={service.title}
                  className="w-36 h-36 sm:w-44 sm:h-44 md:w-44 md:h-44 object-cover rounded-md"
                />
                <p className="mt-2 text-gray-900 font-medium text-sm">{service.title}</p>
              </div>
            ))}
          </div>

          {startIndex + visibleCount < services.length && (
            <button
              onClick={handleNext}
              className="absolute right-0 bg-white hover:bg-gray-200 shadow-md rounded-full w-10 h-10 flex items-center justify-center text-gray-700 text-lg cursor-pointer transition z-10"
            >
              <FaChevronRight />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceProvided;
