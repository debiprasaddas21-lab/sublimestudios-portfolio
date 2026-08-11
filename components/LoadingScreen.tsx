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

      <div className="aperture-stage">

        <svg
          className="aperture-svg"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="xMidYMid meet"
        >

          <defs>

            {/* Main graphite metal */}

            <linearGradient
              id="bladeMetal"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#17191c" />
              <stop offset="25%" stopColor="#35383e" />
              <stop offset="48%" stopColor="#686d74" />
              <stop offset="62%" stopColor="#44484f" />
              <stop offset="82%" stopColor="#24272b" />
              <stop offset="100%" stopColor="#111214" />
            </linearGradient>

            {/* Subtle metallic reflection */}

            <linearGradient
              id="bladeHighlight"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
              <stop offset="45%" stopColor="#ffffff" stopOpacity="0.28" />
              <stop offset="55%" stopColor="#ffffff" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>

            {/* Soft shadow */}

            <filter
              id="bladeShadow"
              x="-30%"
              y="-30%"
              width="160%"
              height="160%"
            >
              <feDropShadow
                dx="0"
                dy="5"
                stdDeviation="7"
                floodColor="#000000"
                floodOpacity="0.65"
              />
            </filter>

          </defs>


          {/* =================================================
              8 CAMERA SHUTTER BLADES
          ================================================== */}

          <g className="aperture-blades">

            {blades.map((blade) => {

              const angle = blade * 45;

              return (
                <g
                  key={blade}
                  className="aperture-blade-group"
                  style={
                    {
                      "--blade-angle": `${angle}deg`,
                    } as CSSProperties
                  }
                >

                  {/* Main Blade */}

                  <path
                    className="aperture-blade"
                    filter="url(#bladeShadow)"
                    d="
                      M 500 500

                      C 525 455 565 400 625 345

                      C 720 255 840 155 1040 35

                      C 920 220 825 380 735 500

                      C 650 515 570 515 500 500

                      Z
                    "
                  />

                  {/* Metallic reflection */}

                  <path
                    className="aperture-blade-highlight"
                    d="
                      M 520 495

                      C 570 410 650 330 750 250

                      C 825 190 900 125 1005 60

                      C 890 190 800 330 715 470

                      C 640 500 575 505 520 495

                      Z
                    "
                  />

                </g>
              );
            })}

          </g>

        </svg>

      </div>


      {/* =====================================================
          CENTRAL BRANDING
      ====================================================== */}

      <div className="aperture-brand">

        <div className="relative h-20 w-20">

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
              aperture-white-logo
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

        <p className="mt-4 text-xs font-semibold tracking-[0.45em] text-white">
          SUBLIME STUDIOS
        </p>

      </div>

    </div>
  );
}