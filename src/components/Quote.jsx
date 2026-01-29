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
      Object.keys(formData).forEach((key) => data.append(key, formData[key]));
      if (file) data.append("file", file);

      await axiosInstance.post("/api/createQuote", data, {
        headers: { "Content-Type": "multipart/form-data" },
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-2 sm:p-4 overflow-auto">
      <div className="bg-white w-full max-w-md sm:max-w-2xl md:max-w-4xl rounded-lg shadow-lg relative flex flex-col"
           style={{ maxHeight: "90vh" }}>

        <div className="flex justify-between items-center p-4 border-b sticky top-0 bg-white z-10">
          <h2 className="text-2xl md:text-3xl font-semibold">Request A Quote</h2>
          <button
            onClick={onClose}
            className="text-red-600 text-2xl cursor-pointer"
          >
            <FiX />
          </button>
        </div>

        <div className="p-4 sm:p-6 md:p-10 overflow-y-auto">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6"
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
                className="border p-2 sm:p-3 rounded w-full"
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
                className="border p-2 sm:p-3 rounded w-full"
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
                className="border p-2 sm:p-3 rounded w-full"
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
                className="border p-2 sm:p-3 rounded w-full"
                disabled={servicesLoading}
              >
                <option value="">
                  {servicesLoading
                    ? "Loading services..."
                    : "Select your service"}
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
                className="border p-2 sm:p-3 rounded w-full"
                placeholder="Enter quantity"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium">Upload Design</label>
              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png,.tif,.tiff,.bmp,.webp"
                onChange={(e) => setFile(e.target.files[0])}
                className="border p-2 sm:p-3 rounded w-full"
              />
            </div>

            <div className="flex flex-col gap-1 md:col-span-2">
              <label className="text-sm font-medium">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="border p-2 sm:p-3 rounded w-full"
                placeholder="Enter message"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 text-white px-6 py-2 sm:py-3 rounded hover:bg-blue-700 cursor-pointer md:col-span-2 w-full sm:w-auto"
            >
              {loading ? "Submitting..." : "Get A Quote"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Quote;
