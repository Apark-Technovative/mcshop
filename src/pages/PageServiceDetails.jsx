import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ServiceDetailHero from "../components/ServiceDetailHero";
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
      <ServiceDetailHero />
      <ProductDetails serviceId={id} />
      <ServiceProvided />
      <Testimonials />
    </>
  );
};

export default PageServiceDetails;
