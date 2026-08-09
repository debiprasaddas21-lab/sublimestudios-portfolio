"use client";

import { useEffect, useState } from "react";

const heroImages = [
  "/hero/photo-01.jpg",
  "/hero/photo-02.jpg",
  "/hero/photo-03.jpg",
  "/hero/photo-04.jpg",
  "/hero/photo-05.jpg",
  "/hero/photo-06.jpg",
  "/hero/photo-07.jpg",
  "/hero/photo-08.jpg",
  "/hero/photo-09.jpg",
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center justify-center"
    >
      {/* Background Slideshow */}
      <div className="absolute inset-0">

        {heroImages.map((image, index) => (
          <img
            key={image}
            src={image}
            alt=""
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-[2000ms] ease-in-out ${
              index === currentImage
                ? "opacity-100 scale-105"
                : "opacity-0 scale-100"
            }`}
          />
        ))}

        {/* Lighter Cinematic Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Cinematic Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/45" />

      </div>


      {/* Hero Content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-6 py-20 sm:py-24 md:py-28 text-center">

        {/* Eyebrow */}
        <p className="mb-4 sm:mb-5 text-[10px] sm:text-xs md:text-sm tracking-[0.3em] sm:tracking-[0.4em] text-amber-400 font-medium">
          WELCOME TO SUBLIME STUDIOS
        </p>


        {/* Main Heading */}
        <h1 className="mx-auto max-w-5xl text-3xl sm:text-4xl md:text-6xl font-bold leading-tight tracking-tight text-white">
          Capturing Earth's Extraordinary Stories
        </h1>


        {/* Subtitle */}
        <p className="mx-auto mt-4 sm:mt-5 max-w-2xl text-base sm:text-lg md:text-xl leading-7 sm:leading-8 text-gray-100">
          A Creative initiative by a Geologist • Photographer • Explorer
        </p>


        {/* Description */}
        <p className="mx-auto mt-4 sm:mt-5 max-w-xl text-sm sm:text-base leading-6 sm:leading-7 text-gray-200">
          Capturing Earth's stories through scientific exploration and
          photography from microscopic mineral textures to breathtaking
          landscapes.
        </p>


        {/* Buttons */}
        <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row justify-center items-center gap-3">

          <a
            href="#gallery"
            className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 px-5 py-2.5 rounded-md text-sm font-semibold text-white transition duration-300"
          >
            Explore Portfolio
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto border border-white px-5 py-2.5 rounded-md text-sm text-white hover:bg-white hover:text-black transition duration-300"
          >
            Contact Me
          </a>

        </div>

      </div>
    </section>
  );
}