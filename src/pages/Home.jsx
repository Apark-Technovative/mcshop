import React from "react";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Why from "../components/Why";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutUs showButton={true} /> 
      <Why />
      <Services />
      <Testimonials />
    </>
  );
};

export default Home;
