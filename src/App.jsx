import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Chat from "./components/Chat";
import ChatButton from "./components/ChatButton";

import Home from "./pages/Home";
import About from "./pages/About";
import ServicesPage from "./pages/ServicesPage";
import Gallery from "./pages/Gallery";
import PageServiceDetails from "./pages/PageServiceDetails";
import ContactUsPage from "./pages/ContactUsPage";
import FaqPage from "./pages/FaqPage";

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <>
      <Navbar />

      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services/:id" element={<PageServiceDetails />} />
        <Route path="/contact" element={<ContactUsPage />} />
      </Routes>

      <Footer />


      <Chat isOpen={isChatOpen} onClose={toggleChat} />
      <ChatButton onClick={toggleChat} />
    </>
  );
}

export default App;
