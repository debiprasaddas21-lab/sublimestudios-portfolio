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
      className="relative min-h-[calc(100vh-64px)] overflow-hidden bg-black flex items-center justify-center"
    >
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
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

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/65" />

        {/* Soft cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/55 to-black/80" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 text-center">

        {/* Eyebrow */}
        <p className="mb-6 text-sm md:text-base tracking-[0.4em] text-orange-500 font-medium">
          WELCOME TO SUBLIME STUDIOS
        </p>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-white">
          Capturing Earth's Extraordinary Stories
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-xl text-gray-200">
          A Creative initiative by a Geologist • Photographer • Explorer
        </p>

        {/* Description */}
        <p className="mt-6 max-w-2xl mx-auto text-gray-300 leading-8">
          Capturing Earth's stories through scientific exploration and
          photography from microscopic mineral textures to breathtaking
          landscapes.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex justify-center gap-4">

          <a
            href="#gallery"
            className="bg-orange-600 hover:bg-orange-700 px-6 py-3 rounded-lg font-semibold text-white transition"
          >
            Explore Portfolio
          </a>

          <a
            href="#contact"
            className="border border-white px-6 py-3 rounded-lg text-white hover:bg-white hover:text-black transition"
          >
            Contact Me
          </a>

        </div>
      </div>
    </section>
  );
}