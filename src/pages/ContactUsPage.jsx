import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import axiosInstance from "../utils/axios";
import { FiPhone, FiMail } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";

const ContactUsPage = () => {
   useEffect(() => {
    document.title = "Contact Us | mcshop";
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  useEffect(() => {
  if (success) {
    const timer = setTimeout(() => {
      setSuccess("");
    }, 3000); 

    return () => clearTimeout(timer);
  }
}, [success]);


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
      submit: "",
    });
  };

  const validate = () => {
    const nameRegex = /^[A-Za-z\s]{2,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(\+977)?9\d{9}$/;

    const newErrors = {};

    if (!formData.name)
      newErrors.name = "Name is required";
    else if (!nameRegex.test(formData.name))
      newErrors.name = "Name should contain only letters";

    if (!formData.email)
      newErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email))
      newErrors.email = "Email is not valid";

    if (!formData.phone)
      newErrors.phone = "Phone is required";
    else if (!phoneRegex.test(formData.phone))
      newErrors.phone = "Phone must be a valid Nepali number";

    if (!formData.message)
      newErrors.message = "Message is required";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      setLoading(true);
      setSuccess("");

      await axiosInstance.post("/api/contact", formData);

      setSuccess("Your message has been sent successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      setErrors({});
    } catch (error) {
      setErrors({
        submit: "Failed to send message. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "mt-2 w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500";

  return (
    <>
      
      
      <Hero
        variant="page"
        title="Contact Us"
        description="Lorem ipsum dolor sit amet consectetur. Non commodo mi elit ut convallis.
        Tempor facilisi pellentesque sem praesent."
      />

      
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          
          <div>
            <h2 className="text-3xl font-semibold mb-8">
              Let’s Get In Touch
            </h2>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {success && (
                <p className="text-green-600 text-sm font-medium">
                  {success}
                </p>
              )}

              {errors.submit && (
                <p className="text-red-500 text-sm">
                  {errors.submit}
                </p>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium">
                    Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className={`${inputClass} ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium">
                    Email<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="youremail@domain.com"
                    className={`${inputClass} ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium">
                    Phone<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+977 98XXXXXXXX"
                    className={`${inputClass} ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Your subject"
                    className={`${inputClass} border-gray-300`}
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">
                  Message<span className="text-red-500">*</span>
                </label>
                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  className={`${inputClass} ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`bg-blue-600 text-white px-6 py-2 rounded-md transition
                ${
                  loading
                    ? "opacity-60 cursor-not-allowed"
                    : "hover:bg-blue-700"
                }`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          
          <div className="bg-gray-100 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-center mb-4">
              Need More Help?
            </h2>

            <p className="text-sm text-gray-600 mb-6 text-center">
              Lorem ipsum dolor sit amet consectetur. Non commodo mi elit ut
              convallis. Tempor facilisis pellentesque sem praesent tortor.
            </p>

            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <FiPhone />
                <span>+977-9851082739</span>
              </div>

              <div className="flex items-center gap-3">
                <FiMail />
                <span>mcshopnepal@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <MdLocationOn />
                <span>Dyabu Marg, Galkopakhā, Kathmandu</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <section className="w-full bg-white py-12">
        <div className="flex justify-center mb-6">
          <h1 className="text-3xl font-bold text-center">Map</h1>
        </div>

        <div className="max-w-[1400px] mx-auto px-6">
          <iframe
            className="w-full h-[500px] border-0"
            src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=My%20Computer%20Shop%20(Naksha%20Printing%20&%20Photocopy%20Shop)%20Color%20&%20B/W+(My%20Computer%20Shop)&t=&z=15&ie=UTF8&iwloc=B&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="My Computer Shop Location"
          ></iframe>
        </div>
      </section>

      
      <Testimonials />
    </>
  );
};

export default ContactUsPage;
