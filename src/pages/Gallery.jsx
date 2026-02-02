import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import axiosInstance from "../utils/axios";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    document.title = "Gallery | mcshop";
  }, []);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await axiosInstance.get("/api/getAllGalleries");
        const galleries = res.data?.data || [];

        const allImages = galleries.flatMap((g) =>
          (g.images || []).map((img) => {
            let src = "";
            let title = g.title || "Untitled";

            if (typeof img === "string") {
              src = `${import.meta.env.VITE_API_BASE_URL}/uploads/${img}`;
            } else if (img.file) {
              src = `${import.meta.env.VITE_API_BASE_URL}/uploads/${img.file}`;
              title = img.title || title;
            } else if (img.url) {
              src = img.url;
              title = img.title || title;
            }

            return { src, title };
          })
        );

        setImages(allImages);
      } catch (err) {
        console.error("Gallery fetch error:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  const ImageBox = ({ image, index }) => (
    <div
      className="relative mb-3 break-inside-avoid overflow-hidden rounded-lg group opacity-0"
      style={{
        animation: `fadeIn 0.6s ease forwards`,
        animationDelay: `${index * 0.05}s`,
      }}
    >
      <img
        src={image.src}
        alt={image.title}
        className="w-full object-cover rounded-lg"
        loading="lazy"
      />

      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
        <h3 className="text-white text-lg font-semibold text-center px-2">
          {image.title}
        </h3>
      </div>
    </div>
  );

  const SkeletonBox = () => (
    <div className="mb-3 break-inside-avoid rounded-lg bg-gray-300 animate-pulse h-[220px]" />
  );

  return (
    <>
      <Hero
        variant="page"
        title="Gallery"
        description="Explore our gallery to see the quality and variety of work we produce. From engineering drawings and architectural layouts to creative photo prints, business cards, and custom gift items, our gallery showcases real samples of our printing capabilities. Each project represents our commitment to precision, clarity, and customer satisfaction."
      />

      <section className="px-6 md:px-20 py-12 md:py-16 bg-gray-100">
        <p className="text-center text-sm text-gray-600 mb-2">Gallery</p>
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
          Spectacular Works From Our <br /> Digital Print Services
        </h2>

        {error && (
          <p className="text-center text-red-500 py-10">
            Failed to load gallery
          </p>
        )}

        <div className="max-w-[1500px] mx-auto columns-2 lg:columns-3 gap-4">
          {loading
            ? Array.from({ length: 9 }).map((_, i) => (
                <SkeletonBox key={i} />
              ))
            : images.map((img, index) => (
                <ImageBox key={index} image={img} index={index} />
              ))}
        </div>
      </section>

      <Testimonials />

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
};

export default Gallery;
