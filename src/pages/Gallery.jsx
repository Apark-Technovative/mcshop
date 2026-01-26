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
        const galleries = res.data?.data || [];

        const allImages = galleries.flatMap((g) =>
          (g.images || []).map((img) => {
            if (typeof img === "string") {
              return {
                src: `${import.meta.env.VITE_API_BASE_URL}/uploads/${img}`,
                title: "Gallery Image",
              };
            }

            return {
              src: `${import.meta.env.VITE_API_BASE_URL}/uploads/${img.file}`,
              title: img.title || "Gallery Image",
            };
          })
        );

        setImages(allImages);
      } catch (err) {
        console.error("Gallery fetch failed:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  if (loading) {
    return <p className="text-center py-20">Loading gallery...</p>;
  }

  if (error || images.length < 7) {
    return (
      <p className="text-center py-20 text-red-500">
        Failed to load gallery
      </p>
    );
  }

  const ImageBox = ({ image }) => (
    <div className="relative w-full h-full overflow-hidden rounded-lg group">
      <img
        src={image.src}
        alt={image.title}
        className="w-full h-full object-cover"
        loading="lazy"
      />

      <div
        className="
          absolute inset-0
          bg-black/60
          translate-y-full
          opacity-0
          group-hover:translate-y-0
          group-hover:opacity-100
          transition-all
          duration-700
          ease-in-out
          flex items-end
        "
      >
        <div className="p-4">
          <h3 className="text-white text-lg font-semibold">
            {image.title}
          </h3>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Hero
        variant="page"
        title="Gallery"
        description="Explore our gallery to see the quality and variety of work we produce. From engineering drawings and architectural layouts to creative photo prints, business cards, and custom gift items, our gallery showcases real samples of our printing capabilities. Each project represents our commitment to precision, clarity, and customer satisfaction."
      />

      <section className="px-6 md:px-20 py-16 bg-gray-100">
        <p className="text-center text-sm text-gray-600 mb-2">
          Gallery
        </p>

        <h2 className="text-center text-2xl md:text-3xl font-semibold mb-14">
          Spectacular Works From Our <br />
          Digital Print Services
        </h2>

        <div
          className="
            grid
            gap-4
            max-w-7xl
            mx-auto
            grid-cols-1
            md:grid-cols-[592fr_518fr_394fr]
            grid-rows-[373fr_361fr_440fr]
          "
        >

          <div className="row-span-3">
            <ImageBox image={images[0]} />
          </div>

          <ImageBox image={images[1]} />
          <ImageBox image={images[3]} />

          <ImageBox image={images[2]} />
          <ImageBox image={images[4]} />

          <ImageBox image={images[5]} />
          <ImageBox image={images[6]} />
        </div>
      </section>

      <Testimonials />
    </>
  );
};

export default Gallery;
