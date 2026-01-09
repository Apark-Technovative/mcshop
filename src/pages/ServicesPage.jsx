import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axios";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";

const ServicesPage = () => {

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const servicesPerPage = 3;
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  const fetchServices = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await axiosInstance.get("/api/getAllServices");
      setServices(res.data?.data || []);
    } catch (err) {
      console.error(err);
      setError("Error fetching services");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const indexOfLastService = currentPage * servicesPerPage;
  const indexOfFirstService = indexOfLastService - servicesPerPage;
  const currentServices = services.slice(indexOfFirstService, indexOfLastService);

  const totalPages = Math.ceil(services.length / servicesPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  

  return (
    <>
    
      <Hero
        variant="page"
        title="Services"
        description="Lorem ipsum dolor sit amet consectetur. Non commodo mi elit ut convallis.
        Tempor facilisi pellentesque sem praesent tortor venenatis."
      />

      
      {loading ? (
        <section className="py-20 text-center text-gray-600">
          Loading services...
        </section>
      ) : error ? (
        <section className="py-20 text-center text-red-600">{error}</section>
      ) : !services.length ? (
        <section className="py-20 text-center text-gray-700">
          No services available.
        </section>
      ) : (
        <section ref={sectionRef} className="bg-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-center mb-12">
              <p className="text-sm text-gray-500 mb-2">Services</p>
              <span className="text-4xl md:text-5xl font-bold">
                Quick Custom Prints & Binding
              </span>
            </h2>

            <div className="flex flex-col gap-16">
              {currentServices.map((service, index) => (
                <div
                  key={service._id}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 !== 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <img
                    src={`${import.meta.env.VITE_API_BASE_URL}/uploads/${service.images?.[0]}`}
                    alt={service.title}
                    className="w-full md:w-1/2 h-80 md:h-[28rem] object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
                  />

                  <div className="md:w-1/2 flex flex-col">
                    <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <button
                      onClick={() => navigate(`/services/${service._id}`)}
                      className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer"
                    >
                      See Detail
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-12 space-x-3">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => handlePageChange(i + 1)}
                  className={`px-4 py-2 rounded-lg transition cursor-pointer ${
                    currentPage === i + 1
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}
      
      
      <Testimonials />
    </>
  );
};

export default ServicesPage;
