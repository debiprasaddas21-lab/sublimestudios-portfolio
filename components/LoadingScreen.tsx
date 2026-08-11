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

      {/* =====================================================
          CAMERA APERTURE
      ====================================================== */}

      <svg
        className="aperture-svg"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
      >

        {/* Metallic Blade Gradient */}

        <defs>

          <linearGradient
            id="bladeMetal"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#202226" />
            <stop offset="30%" stopColor="#686c73" />
            <stop offset="50%" stopColor="#9a9da3" />
            <stop offset="70%" stopColor="#4a4d53" />
            <stop offset="100%" stopColor="#181a1d" />
          </linearGradient>

          {/* Soft Blade Highlight */}

          <linearGradient
            id="bladeHighlight"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.05" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.03" />
          </linearGradient>

        </defs>


        {/* Aperture Blades */}

        <g className="aperture-blades">

          {blades.map((blade) => {
            const angle = blade * 45;

            return (
              <g
                key={blade}
                style={
                  {
                    "--blade-angle": `${angle}deg`,
                  } as CSSProperties
                }
              >

                {/* Main Blade */}

                <path
                  className="aperture-blade"
                  d="
                    M 500 500
                    C 560 420 680 300 1120 80
                    C 930 300 820 455 500 500
                    Z
                  "
                />

                {/* Blade Highlight */}

                <path
                  className="aperture-blade-highlight"
                  d="
                    M 505 495
                    C 570 415 690 300 1080 105
                    C 850 330 760 430 505 495
                    Z
                  "
                />

              </g>
            );
          })}

        </g>

      </svg>


      {/* =====================================================
          SUBLIME STUDIOS BRANDING
      ====================================================== */}

      <div className="aperture-brand">

        <div className="relative h-16 w-16">

          {/* White Logo */}

          <img
            src="/logo.png"
            alt=""
            className="
              absolute
              inset-0
              h-full
              w-full
              object-contain
            "
          />

          {/* Golden Logo */}

          <img
            src="/logo_golden.png"
            alt=""
            className="
              absolute
              inset-0
              h-full
              w-full
              object-contain
              aperture-golden-logo
            "
          />

        </div>


        {/* Studio Name */}

        <p className="mt-4 text-xs font-semibold tracking-[0.45em] text-white">
          SUBLIME STUDIOS
        </p>

      </div>

    </div>
  );
}