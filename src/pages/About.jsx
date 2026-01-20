import React, { useEffect } from "react";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Why from "../components/Why";
import AboutWelcome from "../components/AboutWelcome";
import CreativeTeam from "../components/CreativeTeam";
import History from "../components/History";
import Testimonials from "../components/Testimonials";

const About = () => {

  useEffect(() => {
    document.title = "About Us | mcshop";
  }, []);

  return (
    <>
      <Hero
        variant="page"
        title="About Us"
        description="Mc-Shop is your reliable destination for high-quality digital printing. We specialize in engineering and architectural drawings, business cards, custom mugs, photo prints, and large-format outputs from A4 to A0. With modern equipment and a commitment to detail, we ensure every print is clear, accurate, and professionally finished. At Mc-Shop, we focus on fast service and customer satisfaction, bringing your ideas to life with precision."
      />

      <AboutUs showButton={false} />
      <Why />
      <AboutWelcome />
      <CreativeTeam />
      <History />
      <Testimonials />
    </>
  );
};

export default About;
