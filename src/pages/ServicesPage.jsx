import React from "react";
import Hero from "../components/Hero";
import DigitalServices from "../components/DigitalServices";
import Testimonials from "../components/Testimonials";

const ServicesPage = () => {
  return (
    <>
      <Hero
        variant="page"
        title="Services"
        description="Lorem ipsum dolor sit amet consectetur. Non commodo mi elit ut convallis.
        Tempor facilisi pellentesque sem praesent tortor venenatis."
      />

      <DigitalServices />
      <Testimonials />
    </>
  );
};

export default ServicesPage;
