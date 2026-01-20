import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import axiosInstance from "../utils/axios";

const Gallery = () => {
    useEffect(() => {
      document.title = "Gallery | mcshop";
    }, []);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await axiosInstance.get("/api/getAllGalleries");

        console.log("Gallery API response:", res.data);

        const galleries = res.data?.data || [];

        const allImages = galleries.flatMap(item =>
          (item.images || []).map(
            img => `${import.meta.env.VITE_API_BASE_URL}/public/uploads/${img}`
          )
        );

        setImages(allImages);
      } catch (err) {
        console.error("Failed to fetch gallery:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  return (
    <>
      <Hero
        variant="page"
        title="Gallery"
        description="Explore our gallery to see the quality and variety of work we produce. From engineering drawings and architectural layouts to creative photo prints, business cards, and custom gift items, our gallery showcases real samples of our printing capabilities. Each project represents our commitment to precision, clarity, and customer satisfaction."
      />

      <section className="px-6 md:px-20 py-16 bg-gray-100">
        <p className="text-center text-sm text-gray-600 mb-2">Gallery</p>
        <h2 className="text-center text-2xl md:text-3xl font-semibold mb-14">
          Spectacular Works From Our <br />
          Digital Print Services
        </h2>

        {loading ? (
          <p className="text-center text-gray-600">Loading gallery...</p>
        ) : error ? (
          <p className="text-center text-red-500">Failed to load gallery.</p>
        ) : images.length < 7 ? (
          <p className="text-center text-red-500">
            Not enough images to display gallery.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          
            <div className="md:col-span-5 row-span-2">
              <img
                src={images[0]}
                alt="Gallery"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

         
            <div className="md:col-span-4 flex flex-col gap-4">
              <img
                src={images[1]}
                alt="Gallery"
                className="w-full h-1/3 object-cover rounded-lg"
              />
              <img
                src={images[2]}
                alt="Gallery"
                className="w-full h-1/3 object-cover rounded-lg"
              />
              <img
                src={images[5]}
                alt="Gallery"
                className="w-full h-1/3 object-cover rounded-lg"
              />
            </div>

            
            <div className="md:col-span-3 flex flex-col gap-4">
              <img
                src={images[3]}
                alt="Gallery"
                className="w-full h-1/3 object-cover rounded-lg"
              />
              <img
                src={images[4]}
                alt="Gallery"
                className="w-full h-1/3 object-cover rounded-lg"
              />
              <img
                src={images[6]}
                alt="Gallery"
                className="w-full h-1/3 object-cover rounded-lg"
              />
            </div>
          </div>
        )}
      </section>

      <Testimonials />
    </>
  );
};

export default Gallery;
