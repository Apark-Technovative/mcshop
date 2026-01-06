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
        title="Service Detail"
        description="Lorem ipsum dolor sit amet consectetur. Non commodo mi elit ut convallis.
        Tempor facilisi pellentesque sem praesent tortor venenatis."
      />

      <ProductDetails serviceId={id} />
      <ServiceProvided />
      <Testimonials />
    </>
  );
};

export default PageServiceDetails;
