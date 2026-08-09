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
      className="bg-black px-5 py-16 sm:px-6 sm:py-20 md:px-10 lg:px-16 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:gap-16 lg:grid-cols-2 lg:gap-20">

        {/* =====================================================
            LEFT — DYNAMIC PHOTOGRAPH
        ====================================================== */}

        <div className="flex w-full items-center justify-center">

          {/* Slideshow */}
          <div className="relative w-full max-w-[620px] overflow-hidden rounded-3xl">

            {aboutImages.map((image, index) => (
              <img
                key={image}
                src={image}
                alt="Sublime Studios photography"
                className={`block w-full max-h-[620px] sm:max-h-[680px] rounded-3xl object-contain transition-opacity duration-[1800ms] ease-in-out ${
                  index === currentImage
                    ? "opacity-100"
                    : "pointer-events-none absolute inset-0 opacity-0"
                }`}
              />
            ))}

            {/* Slideshow Indicators */}
            <div className="absolute bottom-4 sm:bottom-5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">

              {aboutImages.map((_, index) => (
                <span
                  key={index}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    index === currentImage
                      ? "w-7 sm:w-8 bg-amber-400"
                      : "w-2.5 sm:w-3 bg-white/50"
                  }`}
                />
              ))}

            </div>

          </div>
        </div>


        {/* =====================================================
            RIGHT — ABOUT CONTENT
        ====================================================== */}

        <div className="w-full max-w-2xl">

          {/* Eyebrow */}
          <p className="mb-5 sm:mb-6 text-[10px] sm:text-xs font-medium tracking-[0.3em] sm:tracking-[0.4em] text-amber-400">
            ABOUT ME
          </p>


          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.15] tracking-tight text-white">
            Capturing Nature Through
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Science &amp; Art
          </h2>


          {/* Description */}
          <p className="mt-6 sm:mt-8 text-base sm:text-lg leading-7 sm:leading-9 text-gray-300">
            I'm a photographer and geologist passionate about documenting
            landscapes, wildlife, and the intricate beauty of minerals.
            Through Sublime Studios, I combine scientific observation with
            creative storytelling to create images that inspire curiosity.
          </p>


          {/* Photography Categories */}
          <div className="mt-7 sm:mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">

            <div className="flex items-center gap-3">
              <span className="text-lg sm:text-xl text-orange-500">
                ✓
              </span>

              <span className="text-sm sm:text-base text-white">
                Wildlife Photography
              </span>
            </div>


            <div className="flex items-center gap-3">
              <span className="text-lg sm:text-xl text-orange-500">
                ✓
              </span>

              <span className="text-sm sm:text-base text-white">
                Macro Photography
              </span>
            </div>


            <div className="flex items-center gap-3">
              <span className="text-lg sm:text-xl text-orange-500">
                ✓
              </span>

              <span className="text-sm sm:text-base text-white">
                Landscape Photography
              </span>
            </div>


            <div className="flex items-center gap-3">
              <span className="text-lg sm:text-xl text-orange-500">
                ✓
              </span>

              <span className="text-sm sm:text-base text-white">
                Geological Photography
              </span>
            </div>

          </div>


          {/* Download Portfolio */}
          <div className="mt-8 sm:mt-10">

            <a
              href="#"
              className="inline-flex items-center rounded-full bg-orange-600 px-6 sm:px-7 py-3 sm:py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-orange-700"
            >
              Download Portfolio
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}