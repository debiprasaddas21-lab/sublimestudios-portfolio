"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";

const blades = Array.from({ length: 8 }, (_, index) => index);

export default function LoadingScreen() {
  const [pageLoaded, setPageLoaded] = useState(false);
  const [minimumTimePassed, setMinimumTimePassed] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  useEffect(() => {
    const minimumTimer = setTimeout(() => {
      setMinimumTimePassed(true);
    }, 900);

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
      {/* Camera Aperture */}

      <svg
        className="aperture-svg"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
      >
        <g className="aperture-blades">
          {blades.map((blade) => {
            const angle = blade * 45;

            return (
              <path
                key={blade}
                className="aperture-blade"
                style={
                  {
                    "--blade-angle": `${angle}deg`,
                  } as CSSProperties
                }
                d="
                  M 500 500
                  C 570 390 720 250 1180 40
                  C 980 250 850 440 500 500
                  Z
                "
              />
            );
          })}
        </g>
      </svg>

      {/* Sublime Studios Branding */}

      <div className="aperture-brand">
        <div className="relative h-16 w-16">

          <img
            src="/logo.png"
            alt=""
            className="absolute inset-0 h-full w-full object-contain"
          />

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