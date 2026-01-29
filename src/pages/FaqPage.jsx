import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import axiosInstance from "../utils/axios";

const FaqPage = () => {
  const [faqs, setFaqs] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    fetchFaqs();
  }, []);

  const fetchFaqs = async () => {
    try {
      const res = await axiosInstance.get("/api/getFaqs");
      setFaqs(res.data.data || res.data);
    } catch (error) {
      console.error("FAQ API error:", error.response?.data || error.message);
    }
  };

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Hero
        variant="page"
        title="FAQ"
        description="At Mc-Shop, we aim to make printing simple and hassle-free. We offer a wide range of services including engineering and architectural prints, business cards, large-format printing, custom mug printing, and photo output. Most projects are completed the same day, while larger or bulk orders may require extra time depending on volume. Customers can send their files digitally through email or messaging apps, and we accept common formats such as PDF, JPG, PNG, and CAD files. If you need help preparing your design, we also assist with layout, formatting, and basic adjustments to ensure your prints come out perfectly. Our goal is to provide fast, reliable service and support."
      />

      <section className="max-w-6xl mx-auto px-4 md:px-6 py-14 md:py-20">
        <h2 className="text-center text-2xl md:text-3xl font-semibold mb-12 md:mb-16">
          Frequently Asked Question
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-6 md:gap-y-10">

          <div className="space-y-4 md:space-y-8">
            {faqs.slice(0, 4).map((item, index) => (
              <div
                key={item._id || index}
                className="bg-white md:bg-transparent rounded-lg md:rounded-none shadow-sm md:shadow-none p-4 md:p-0"
              >
                <button
                  onClick={() => toggle(index)}
                  className="flex justify-between items-center w-full text-left text-base md:text-lg font-medium gap-4"
                >
                  <span>{item.question}</span>

                  {openIndex === index ? (
                    <FiChevronUp className="text-xl shrink-0" />
                  ) : (
                    <FiChevronDown className="text-xl shrink-0" />
                  )}
                </button>

                {openIndex === index && (
                  <p className="mt-3 md:mt-4 text-sm text-gray-600 leading-relaxed md:max-w-md">
                    {item.answer}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="space-y-4 md:space-y-8">
            {faqs.slice(4, 8).map((item, index) => {
              const actualIndex = index + 4;

              return (
                <div
                  key={item._id || actualIndex}
                  className="bg-white md:bg-transparent rounded-lg md:rounded-none shadow-sm md:shadow-none p-4 md:p-0"
                >
                  <button
                    onClick={() => toggle(actualIndex)}
                    className="flex justify-between items-center w-full text-left text-base md:text-lg font-medium gap-4"
                  >
                    <span>{item.question}</span>

                    {openIndex === actualIndex ? (
                      <FiChevronUp className="text-xl shrink-0" />
                    ) : (
                      <FiChevronDown className="text-xl shrink-0" />
                    )}
                  </button>

                  {openIndex === actualIndex && (
                    <p className="mt-3 md:mt-4 text-sm text-gray-600 leading-relaxed md:max-w-md">
                      {item.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      <Testimonials />
    </>
  );
};

export default FaqPage;
