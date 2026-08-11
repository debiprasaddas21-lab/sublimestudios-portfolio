"use client";

import { useState } from "react";

interface ImageLoaderProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
}

export default function ImageLoader({
  src,
  alt,
  className = "",
  imageClassName = "",
}: ImageLoaderProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>

      {/* Loading Screen */}
      <div
        className={`absolute inset-0 z-20 flex items-center justify-center bg-black transition-opacity duration-500 ${
          isLoaded
            ? "pointer-events-none opacity-0"
            : "opacity-100"
        }`}
      >

        <div className="flex flex-col items-center">

          {/* Logo */}
          <div className="relative h-12 w-12">

            {/* White Logo */}
            <img
              src="/logo.png"
              alt=""
              aria-hidden="true"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-contain
                animate-logo-white
              "
            />

            {/* Golden Logo */}
            <img
              src="/logo_golden.png"
              alt=""
              aria-hidden="true"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-contain
                animate-logo-golden
              "
            />

          </div>

          {/* Loading Dots */}
          <div className="mt-3 flex items-center gap-1.5">

            <span className="loading-dot" />

            <span className="loading-dot delay-1" />

            <span className="loading-dot delay-2" />

          </div>

        </div>

      </div>


      {/* Photograph */}
      <img
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        className={`h-full w-full transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } ${imageClassName}`}
      />

    </div>
  );
}