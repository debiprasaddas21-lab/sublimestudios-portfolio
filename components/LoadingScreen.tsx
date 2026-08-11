"use client";

import { useEffect, useState } from "react";

const blades = Array.from({ length: 8 }, (_, index) => index);

export default function LoadingScreen() {
  const [pageLoaded, setPageLoaded] = useState(false);
  const [minimumTimePassed, setMinimumTimePassed] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  useEffect(() => {
    const minimumTimer = setTimeout(() => {
      setMinimumTimePassed(true);
    }, 700);

    const handlePageLoaded = () => {
      setPageLoaded(true);
    };

    if (document.readyState === "complete") {
      handlePageLoaded();
    } else {
      window.addEventListener("load", handlePageLoaded);
    }

    return () => {
      clearTimeout(minimumTimer);
      window.removeEventListener("load", handlePageLoaded);
    };
  }, []);

  useEffect(() => {
    if (pageLoaded && minimumTimePassed) {
      setIsOpening(true);
    }
  }, [pageLoaded, minimumTimePassed]);

  return (
    <div
      className={`aperture-loader ${
        isOpening ? "aperture-loader-opening" : ""
      }`}
      aria-hidden="true"
    >
      {/* =====================================================
          CAMERA APERTURE
      ====================================================== */}

      <div className="aperture-stage">
        <div className="aperture-core">

          {blades.map((blade) => (
            <div
              key={blade}
              className="aperture-blade"
              style={
                {
                  "--blade-angle": `${blade * 45}deg`,
                } as React.CSSProperties
              }
            >
              <div className="aperture-blade-surface" />
            </div>
          ))}

        </div>
      </div>


      {/* =====================================================
          SUBLIME STUDIOS BRANDING
      ====================================================== */}

      <div className="aperture-brand">

        <div className="relative h-20 w-20">

          {/* White Logo */}

          <img
            src="/logo.png"
            alt=""
            className="absolute inset-0 h-full w-full object-contain aperture-white-logo"
          />

          {/* Golden Logo */}

          <img
            src="/logo_golden.png"
            alt=""
            className="absolute inset-0 h-full w-full object-contain aperture-golden-logo"
          />

        </div>

        <p className="mt-4 text-xs font-semibold tracking-[0.45em] text-white">
          SUBLIME STUDIOS
        </p>

      </div>
    </div>
  );
}