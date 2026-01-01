import React, { useEffect, useState } from "react";
import axiosInstance from "../utils/axios";

const ProductDetails = ({ serviceId }) => {
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const res = await axiosInstance.get("/api/getAllServices");
        const foundService = res.data?.data?.find(
          (item) => item._id === serviceId
        );
        setService(foundService);
      } catch (error) {
        console.error("Error fetching service", error);
      } finally {
        setLoading(false);
      }
    };

    if (serviceId) fetchService();
  }, [serviceId]);

  if (loading) {
    return <section className="py-20 text-center">Loading...</section>;
  }

  if (!service) {
    return <section className="py-20 text-center">Service not found</section>;
  }

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">

       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">

          
<div className="overflow-hidden rounded-md shadow-xl">
  <img
    src={`${import.meta.env.VITE_API_BASE_URL}/uploads/${service.images?.[0]}`}
    alt={service.title}
    className="w-full max-h-[420px] object-contain transition-transform duration-300 hover:scale-105"
  />
</div>

         
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-semibold mb-4">
              {service.title}
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              {service.description}
            </p>

            
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors cursor-pointer">
              Purchase
            </button>
          </div>

        </div>

        
        <div className="flex justify-center mt-8">
          <div className="text-center">
            <h3 className="text-sm font-semibold mb-2">
              Available Hours*
            </h3>

            <div className="text-sm text-gray-700 flex justify-center gap-2">
              <span>Sunday - Friday |</span>
              <span>08:00 am - 06:00 pm</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProductDetails;
