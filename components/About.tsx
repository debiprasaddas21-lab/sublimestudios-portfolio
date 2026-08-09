"use client";

import { useEffect, useState } from "react";

const aboutImages = [
  "/about/photo-01.jpg",
  "/about/photo-02.jpg",
  "/about/photo-03.jpg",
  "/about/photo-04.jpg",
];

export default function About() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % aboutImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen bg-[#101010] px-6 py-16 md:px-12 lg:px-20"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

        {/* =====================================================
            LEFT — DYNAMIC PHOTOGRAPH SLIDESHOW
        ====================================================== */}

        <div className="relative h-[520px] overflow-hidden rounded-3xl bg-[#181818] md:h-[620px]">

          {aboutImages.map((image, index) => (
            <div
              key={image}
              className={`absolute inset-0 transition-opacity duration-[1800ms] ease-in-out ${
                index === currentImage
                  ? "opacity-100"
                  : "opacity-0"
              }`}
            >

              {/* Blurred background */}
              <img
                src={image}
                alt=""
                className="absolute inset-0 h-full w-full scale-110 object-cover blur-2xl opacity-30"
              />

              {/* Full photograph */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={image}
                  alt="Sublime Studios photography"
                  className="h-full w-full object-contain"
                />
              </div>

            </div>
          ))}

          {/* Subtle cinematic overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10" />

          {/* Slideshow indicators */}
          <div className="absolute bottom-6 left-6 z-10 flex items-center gap-2">
            {aboutImages.map((_, index) => (
              <span
                key={index}
                className={`h-1 rounded-full transition-all duration-500 ${
                  index === currentImage
                    ? "w-8 bg-amber-400"
                    : "w-3 bg-white/40"
                }`}
              />
            ))}
          </div>

        </div>


        {/* =====================================================
            RIGHT — ABOUT CONTENT
        ====================================================== */}

        <div className="max-w-2xl">

          {/* Eyebrow */}
          <p className="mb-6 text-xs font-medium tracking-[0.4em] text-amber-400">
            ABOUT ME
          </p>

          {/* Heading */}
          <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl">
            Capturing Nature Through
            <br />
            Science & Art
          </h2>

          {/* Description */}
          <p className="mt-8 text-lg leading-9 text-gray-300">
            I'm a photographer and geologist passionate about documenting
            landscapes, wildlife, and the intricate beauty of minerals.
            Through Sublime Studios, I combine scientific observation with
            creative storytelling to create images that inspire curiosity.
          </p>

          {/* Photography Categories */}
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">

            <div className="flex items-center gap-3">
              <span className="text-xl text-orange-500">✓</span>
              <span className="text-white">
                Wildlife Photography
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xl text-orange-500">✓</span>
              <span className="text-white">
                Macro Photography
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xl text-orange-500">✓</span>
              <span className="text-white">
                Landscape Photography
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xl text-orange-500">✓</span>
              <span className="text-white">
                Geological Photography
              </span>
            </div>

          </div>

          {/* Download Portfolio */}
          <div className="mt-10">

            <a
              href="#"
              className="inline-flex items-center rounded-full bg-orange-600 px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-orange-700"
            >
              Download Portfolio
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}