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
    return <section className="py-32 text-center">Loading...</section>;
  }

  if (!service) {
    return <section className="py-32 text-center">Service not found</section>;
  }

  return (
    <section className="bg-white py-32"> 
      <div className="max-w-7xl mx-auto px-6">

        <div className="w-full mb-12"> 
          <img
            src={`${import.meta.env.VITE_API_BASE_URL}/uploads/${service.images?.[0]}`}
            alt={service.title}
            className="w-full h-[420px] md:h-[500px] lg:h-[550px] object-cover rounded-md"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12"> 
          
          <div className="md:col-span-2">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              {service.title}
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-2xl">
              {service.description}
            </p>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-sm font-semibold mb-4">
              Available Hours*
            </h4>

            <div className="flex items-center justify-between text-sm text-gray-700 border-b pb-2">
              <span>Sunday - Friday</span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-black rounded-full"></span>
                08:00 am - 06:00 pm
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
