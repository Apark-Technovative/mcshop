import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Hero from "../components/Hero";
import ProductDetails from "../components/ProductDetails";
import ServiceProvided from "../components/ServiceProvided";
import Testimonials from "../components/Testimonials";

const PageServiceDetails = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  return (
    <>
      <Hero
        variant="page"
        title="Services Detail"
        description="At Mc-Shop, we offer a wide range of high-quality digital printing services designed to meet personal, commercial, and professional needs. Our services include engineering and architectural printing, large-format prints (A4 to A0), business card design and printing, custom mug printing, photo and poster printing, and personalized gift items. We focus on accuracy, clarity, and fast delivery to ensure every project meets your expectations."
      />

      <ProductDetails serviceId={id} />
      <ServiceProvided />
      <Testimonials />
    </>
  );
};

export default PageServiceDetails;
