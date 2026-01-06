import React from "react";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Why from "../components/Why";
import AboutWelcome from "../components/AboutWelcome";
import CreativeTeam from "../components/CreativeTeam";
import History from "../components/History";
import Testimonials from "../components/Testimonials";

const About = () => {
  return (
    <>
      <Hero
        variant="page"
        title="About Us"
        description="We offer a range of high-quality printing services for business and individuals,
        from business card to large format prints (A4-A0) according to your needs."
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
