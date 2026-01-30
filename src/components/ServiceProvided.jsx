import React, { useState, useEffect, useRef } from "react";
import axios from "../utils/axios";

const ServiceProvided = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const containerRef = useRef(null);
  const scrollRef = useRef(0);

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
    if (services.length === 0) return;

    const scrollSpeed = 1;
    const intervalTime = 20;

    const interval = setInterval(() => {
      if (containerRef.current) {
        scrollRef.current += scrollSpeed;
        if (scrollRef.current >= containerRef.current.scrollWidth / 2) {
          scrollRef.current = 0;
        }
        containerRef.current.scrollLeft = scrollRef.current;
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [services]);

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

  const scrollingServices = [...services, ...services];

  return (
    <section className="bg-[#f0f4f8] py-8">
      <div className="max-w-6xl mx-auto px-0">

        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-gray-900">
          Our Services
        </h2>

        <div
          ref={containerRef}
          className="flex gap-6 overflow-hidden w-full py-4"
        >
          {scrollingServices.map((service, index) => (
            <div
              key={service._id || index}
              className="flex-shrink-0 w-36 sm:w-44 md:w-48"
            >
              <img
                src={`${import.meta.env.VITE_API_BASE_URL}/uploads/${service.images?.[0]}`}
                alt={service.title}
                className="w-full h-36 sm:h-44 md:h-48 object-cover rounded-md"
              />
              <p className="mt-2 text-center text-gray-900 font-medium text-sm sm:text-base">
                {service.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceProvided;
