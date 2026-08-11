"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [minimumTimePassed, setMinimumTimePassed] = useState(false);

  useEffect(() => {
    // Keep the cinematic intro visible for at least a short moment
    const minimumTimer = setTimeout(() => {
      setMinimumTimePassed(true);
    }, 1000);

    const handleLoad = () => {
      setIsLoading(false);
    };

    // If the page has already loaded
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      clearTimeout(minimumTimer);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  const shouldHide = !isLoading && minimumTimePassed;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-opacity duration-700 ${
        shouldHide
          ? "pointer-events-none opacity-0"
          : "pointer-events-auto opacity-100"
      }`}
    >
      <div className="flex flex-col items-center">

        {/* Logo */}
        <div className="relative h-24 w-24">

          {/* White Logo */}
          <img
            src="/logo.png"
            alt="Sublime Studios"
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


        {/* Studio Name */}
        <p
          className="
            mt-5
            text-sm
            font-semibold
            tracking-[0.45em]
            text-white
          "
        >
          SUBLIME STUDIOS
        </p>


        {/* Three Loading Dots */}
        <div className="mt-6 flex items-center gap-2">

          <span className="loading-dot" />
          <span className="loading-dot delay-1" />
          <span className="loading-dot delay-2" />

        </div>

      </div>
    </div>
  );
}