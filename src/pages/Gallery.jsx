import React from "react";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";

const Gallery = () => {
  return (
    <>
      <Hero
        variant="page"
        title="Gallery"
        description="Lorem ipsum dolor sit amet consectetur. Non commodo mi elit ut convallis.
        Tempor facilisi pellentesque sem praesent tortor venenatis."
      />

      <Testimonials />
    </>
  );
};

export default Gallery;
