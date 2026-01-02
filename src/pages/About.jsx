import React from "react";
import AboutHero from "../components/AboutHero";
import AboutUs from "../components/AboutUs";
import Why from "../components/Why";
import AboutWelcome from "../components/AboutWelcome";
import CreativeTeam from "../components/CreativeTeam";
import History from "../components/History";
import Testimonials from "../components/Testimonials";

const About = () => {
  return (
    <>
      <AboutHero />
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
