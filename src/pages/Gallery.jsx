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
          (g.images || []).map((img) => ({
            src: `${import.meta.env.VITE_API_BASE_URL}/uploads/${typeof img === "string" ? img : img.file
              }`,
            title:
              typeof img === "string"
                ? g.title
                : img.title || g.title,
          }))
        );

        setImages(allImages);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  if (loading) return <p className="text-center py-20">Loading gallery...</p>;
  if (error || images.length < 8)
    return (
      <p className="text-center py-20 text-red-500">
        Failed to load gallery
      </p>
    );

  const ImageBox = ({ image }) => (
    <div className="relative w-full h-full overflow-hidden rounded-lg group">
      <img
        src={image.src}
        alt={image.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-end justify-center">
        <div className="p-4">
          <h3 className="text-white text-lg font-semibold text-center">
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

      <section className="px-6 md:px-20 py-12 md:py-16 bg-gray-100 overflow-hidden">
        <p className="text-center text-sm text-gray-600 mb-2">Gallery</p>

        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold leading-snug sm:leading-tight mb-4 sm:mb-6">
          Spectacular Works From Our <br />
          Digital Print Services
        </h2>


        <div className="w-full flex justify-center overflow-x-auto">
          <div
            className="
        grid
        grid-cols-[3fr_2.6fr_2fr]
        gap-4
        grid-rows-[auto_auto_auto]
        max-w-[1500px]
        origin-top
        scale-[0.7]
        sm:scale-[0.85]
        md:scale-100
      "
          >

            <div className="col-start-1 row-start-1 row-span-3 flex flex-col gap-4">
              <div className="h-[520px] md:h-[863px]">
                <ImageBox image={images[0]} />
              </div>
              <div className="h-[220px] md:h-[348px]">
                <ImageBox image={images[6]} />
              </div>
            </div>

            <div className="col-start-2 row-start-1 row-span-3 flex flex-col gap-4">
              <div className="h-[210px] md:h-[380px]">
                <ImageBox image={images[1]} />
              </div>
              <div className="h-[210px] md:h-[370px]">
                <ImageBox image={images[3]} />
              </div>
              <div className="h-[305px] md:h-[442px]">
                <ImageBox image={images[5]} />
              </div>
            </div>

            <div className="col-start-3 row-start-1">
              <div className="h-[320px] md:h-[513px]">
                <ImageBox image={images[2]} />
              </div>
            </div>

            <div className="col-start-3 row-start-2">
              <div className="h-[220px] md:h-[361px]">
                <ImageBox image={images[4]} />
              </div>
            </div>

            <div className="col-start-3 row-start-3">
              <div className="h-[180px] md:h-[302px]">
                <ImageBox image={images[7]} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
    </>
  );
};

export default Gallery;
