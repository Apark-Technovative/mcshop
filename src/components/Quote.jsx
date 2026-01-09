import React, { useState, useEffect } from "react";
import axiosInstance from "../utils/axios";
import { FiX } from "react-icons/fi";

const Quote = ({ isOpen, onClose }) => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [servicesLoading, setServicesLoading] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceId: "",
    quantity: "",
    message: "",
  });

  const [file, setFile] = useState(null);

  useEffect(() => {
    if (!isOpen) return;

    const fetchServices = async () => {
      try {
        setServicesLoading(true);
        const res = await axiosInstance.get("/api/getAllServices");
        setServices(res.data?.data || []);
      } catch (error) {
        console.error("Failed to fetch services");
      } finally {
        setServicesLoading(false);
      }
    };

    fetchServices();
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.serviceId) {
      alert("Please select a service");
      return;
    }

    setLoading(true);

    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      data.append("serviceId", formData.serviceId);
      data.append("quantity", formData.quantity);
      data.append("message", formData.message);

      if (file) {
        data.append("file", file);
      }

      await axiosInstance.post("/api/createQuote", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Quote request submitted successfully");
      onClose();

      
      setFormData({
        name: "",
        email: "",
        phone: "",
        serviceId: "",
        quantity: "",
        message: "",
      });
      setFile(null);
    } catch (error) {
      console.error("Backend error:", error.response?.data);
      alert(
        error.response?.data?.message ||
          "Server error. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-white w-full max-w-4xl rounded-lg p-6 relative">

       
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-red-600 text-2xl"
        >
          <FiX />
        </button>

        <h2 className="text-2xl font-semibold mb-6">Request A Quote</h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              required
              onChange={handleChange}
              className="border p-3 rounded"
              placeholder="Enter your name"
            />
          </div>

          
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              required
              onChange={handleChange}
              className="border p-3 rounded"
              placeholder="Enter your email"
            />
          </div>

          
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              required
              onChange={handleChange}
              className="border p-3 rounded"
              placeholder="Enter your phone number"
            />
          </div>

          
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">
              Service Type <span className="text-red-500">*</span>
            </label>
            <select
              name="serviceId"
              value={formData.serviceId}
              required
              onChange={handleChange}
              className="border p-3 rounded"
              disabled={servicesLoading}
            >
              <option value="">
                {servicesLoading ? "Loading services..." : "Select your service"}
              </option>
              {services.map((service) => (
                <option key={service._id} value={service._id}>
                  {service.title}
                </option>
              ))}
            </select>
          </div>

          
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Quantity</label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="border p-3 rounded"
              placeholder="Enter quantity"
            />
          </div>

          
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Upload Design</label>
            <input
              type="file"
              accept=".pdf,.jpg,.png"
              onChange={(e) => setFile(e.target.files[0])}
              className="border p-3 rounded"
            />
          </div>

          
          <div className="flex flex-col gap-1 md:col-span-2">
            <label className="text-sm font-medium">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="border p-3 rounded"
              placeholder="Enter message"
            />
          </div>

          
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 md:col-span-2 w-fit"
          >
            {loading ? "Submitting..." : "Get A Quote"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Quote;
