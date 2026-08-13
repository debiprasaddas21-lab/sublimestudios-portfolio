"use client";

import { useState } from "react";

const photos = [
  "/gallery/photo-01.jpg",
  "/gallery/photo-02.jpg",
  "/gallery/photo-03.jpg",
  "/gallery/photo-04.jpg",
  "/gallery/photo-05.jpg",
  "/gallery/photo-06.jpg",
  "/gallery/photo-07.jpg",
  "/gallery/photo-08.jpg",
  "/gallery/photo-09.jpg",
  "/gallery/photo-10.jpg",
  "/gallery/photo-11.jpg",
  "/gallery/photo-12.jpg",
  "/gallery/photo-13.jpg",
  "/gallery/photo-14.jpg",
  "/gallery/photo-15.jpg",
  "/gallery/photo-16.jpg",
  "/gallery/photo-17.jpg",
  "/gallery/photo-18.jpg",
  "/gallery/photo-19.jpg",
  "/gallery/photo-20.jpg",
  "/gallery/photo-21.jpg",
  "/gallery/photo-22.jpg",
  "/gallery/photo-23.jpg",
  "/gallery/photo-24.jpg",
  "/gallery/photo-25.jpg",
];

export default function Gallery() {
  const [currentPage, setCurrentPage] = useState(0);
  const [turning, setTurning] = useState(false);
  const [direction, setDirection] = useState<"next" | "previous">("next");

  const nextPage = () => {
    if (turning || currentPage >= photos.length - 1) return;

    setDirection("next");
    setTurning(true);

    setTimeout(() => {
      setCurrentPage((prev) => prev + 1);
      setTurning(false);
    }, 650);
  };

  const previousPage = () => {
    if (turning || currentPage <= 0) return;

    setDirection("previous");
    setTurning(true);

    setTimeout(() => {
      setCurrentPage((prev) => prev - 1);
      setTurning(false);
    }, 650);
  };

  const currentPhoto = photos[currentPage];

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-black px-6 py-24 text-white md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">

        {/* =====================================================
            SECTION HEADING
        ====================================================== */}

        <div className="mb-14 text-center">

          <p className="text-sm font-medium tracking-[0.45em] text-orange-500">
            COLLECTIONS
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Visual Stories
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 md:text-base">
            A curated collection of photographs from different moments,
            places and perspectives.
          </p>

        </div>


        {/* =====================================================
            DESKTOP BOOK
        ====================================================== */}

        <div className="hidden md:block">

          <div className="relative mx-auto w-full max-w-7xl">

            {/* =================================================
                PREVIOUS BUTTON
            ================================================== */}

            <button
              onClick={previousPage}
              disabled={currentPage === 0 || turning}
              className="
                absolute
                left-0
                top-1/2
                z-40
                flex
                h-14
                w-14
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-white/15
                bg-black/60
                text-2xl
                text-white
                backdrop-blur-sm
                transition-all
                duration-300
                hover:scale-105
                hover:border-orange-500
                hover:bg-black/80
                hover:text-orange-400
                disabled:cursor-not-allowed
                disabled:opacity-20
              "
              aria-label="Previous photograph"
            >
              ←
            </button>


            {/* =================================================
                SINGLE BOOK
            ================================================== */}

            <div className="mx-auto w-[88%]">

              <div className="relative aspect-[16/9]">

                {/* Book shadow */}

                <div
                  className="
                    absolute
                    inset-x-[8%]
                    bottom-[-20px]
                    h-10
                    rounded-full
                    bg-black/80
                    blur-2xl
                  "
                />


                {/* =================================================
                    BOOK CONTAINER
                ================================================== */}

                <div
                  className="
                    relative
                    h-full
                    w-full
                    overflow-hidden
                    rounded-xl
                    bg-zinc-950
                    shadow-2xl
                  "
                >

                  {/* =================================================
                      LEFT PAGE
                  ================================================== */}

                  <div
                    className="
                      absolute
                      inset-y-0
                      left-0
                      w-1/2
                      overflow-hidden
                      border-r
                      border-white/10
                      bg-zinc-950
                    "
                  >

                    {currentPage === 0 ? (

                      /* Opening page */

                      <div
                        className="
                          flex
                          h-full
                          flex-col
                          items-center
                          justify-center
                          px-8
                          text-center
                        "
                      >

                        <div className="relative h-20 w-20">

                          <img
                            src="/logo.png"
                            alt="Sublime Studios"
                            className="
                              absolute
                              inset-0
                              h-full
                              w-full
                              object-contain
                            "
                          />

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
                              opacity-0
                              transition-opacity
                              duration-700
                              hover:opacity-100
                            "
                          />

                        </div>

                        <p
                          className="
                            mt-6
                            text-xs
                            font-semibold
                            tracking-[0.45em]
                            text-white
                          "
                        >
                          SUBLIME STUDIOS
                        </p>

                        <div className="mt-7 h-px w-16 bg-orange-500/60" />

                        <p
                          className="
                            mt-7
                            text-[10px]
                            font-medium
                            tracking-[0.4em]
                            text-orange-400
                          "
                        >
                          VISUAL COLLECTIONS
                        </p>

                        <p
                          className="
                            mt-4
                            max-w-xs
                            text-sm
                            leading-7
                            text-gray-500
                          "
                        >
                          A collection of moments, perspectives and stories
                          captured through the lens.
                        </p>

                      </div>

                    ) : (

                      <img
                        src={photos[currentPage - 1]}
                        alt={`Collection photograph ${currentPage}`}
                        className="
                          absolute
                          inset-0
                          h-full
                          w-full
                          object-contain
                        "
                      />

                    )}

                  </div>


                  {/* =================================================
                      RIGHT PAGE
                  ================================================== */}

                  <div
                    className="
                      absolute
                      inset-y-0
                      right-0
                      w-1/2
                      overflow-hidden
                      bg-zinc-950
                    "
                  >

                    {currentPage === photos.length - 1 ? (

                      /* Closing page */

                      <div
                        className="
                          flex
                          h-full
                          flex-col
                          items-center
                          justify-center
                          px-8
                          text-center
                        "
                      >

                        <div className="relative h-20 w-20">

                          <img
                            src="/logo.png"
                            alt="Sublime Studios"
                            className="
                              absolute
                              inset-0
                              h-full
                              w-full
                              object-contain
                            "
                          />

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
                              opacity-0
                              transition-opacity
                              duration-700
                              hover:opacity-100
                            "
                          />

                        </div>

                        <p
                          className="
                            mt-6
                            text-xs
                            font-semibold
                            tracking-[0.45em]
                            text-white
                          "
                        >
                          SUBLIME STUDIOS
                        </p>

                        <div className="mt-7 h-px w-16 bg-orange-500/60" />

                        <p
                          className="
                            mt-7
                            text-[10px]
                            font-medium
                            tracking-[0.4em]
                            text-orange-400
                          "
                        >
                          END OF COLLECTION
                        </p>

                        <p
                          className="
                            mt-4
                            max-w-xs
                            text-sm
                            leading-7
                            text-gray-500
                          "
                        >
                          Thank you for taking a moment to explore these
                          photographs.
                        </p>

                      </div>

                    ) : (

                      <img
                        src={currentPhoto}
                        alt={`Collection photograph ${currentPage + 1}`}
                        className="
                          absolute
                          inset-0
                          h-full
                          w-full
                          object-contain
                        "
                      />

                    )}

                  </div>


                  {/* =================================================
                      CENTRE BINDING
                  ================================================== */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-y-0
                      left-1/2
                      z-20
                      w-px
                      -translate-x-1/2
                      bg-white/10
                      shadow-[0_0_25px_rgba(0,0,0,0.9)]
                    "
                  />


                  {/* =================================================
                      PAGE NUMBER
                  ================================================== */}

                  <div
                    className="
                      absolute
                      bottom-5
                      right-6
                      z-20
                      text-xs
                      tracking-[0.3em]
                      text-white/50
                    "
                  >
                    {String(currentPage + 1).padStart(2, "0")} /{" "}
                    {String(photos.length).padStart(2, "0")}
                  </div>


                  {/* =================================================
                      PAGE TRANSITION LOADER
                  ================================================== */}

                  {turning && (

                    <div
                      className={`
                        absolute
                        inset-y-0
                        z-30
                        w-1/2
                        overflow-hidden
                        bg-zinc-950
                        ${
                          direction === "next"
                            ? "right-0 origin-left"
                            : "left-0 origin-right"
                        }
                      `}
                    >

                      <div
                        className="
                          flex
                          h-full
                          w-full
                          flex-col
                          items-center
                          justify-center
                          bg-zinc-950
                        "
                      >

                        <div className="relative h-16 w-16">

                          <img
                            src="/logo.png"
                            alt=""
                            className="
                              absolute
                              inset-0
                              h-full
                              w-full
                              object-contain
                              animate-logo-white
                            "
                          />

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

                        <p
                          className="
                            mt-4
                            text-[9px]
                            font-semibold
                            tracking-[0.4em]
                            text-white/70
                          "
                        >
                          SUBLIME STUDIOS
                        </p>

                        <div className="mt-4 flex gap-1.5">

                          <span className="loading-dot" />
                          <span className="loading-dot delay-1" />
                          <span className="loading-dot delay-2" />

                        </div>

                      </div>

                    </div>

                  )}

                </div>

              </div>

            </div>


            {/* =================================================
                NEXT BUTTON
            ================================================== */}

            <button
              onClick={nextPage}
              disabled={currentPage === photos.length - 1 || turning}
              className="
                absolute
                right-0
                top-1/2
                z-40
                flex
                h-14
                w-14
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-white/15
                bg-black/60
                text-2xl
                text-white
                backdrop-blur-sm
                transition-all
                duration-300
                hover:scale-105
                hover:border-orange-500
                hover:bg-black/80
                hover:text-orange-400
                disabled:cursor-not-allowed
                disabled:opacity-20
              "
              aria-label="Next photograph"
            >
              →
            </button>

          </div>

        </div>


        {/* =====================================================
            MOBILE BOOK
        ====================================================== */}

        <div className="md:hidden">

          <div className="relative mx-auto w-full max-w-md">

            <div
              className="
                relative
                aspect-[4/5]
                overflow-hidden
                rounded-xl
                bg-zinc-950
                shadow-2xl
              "
            >

              {currentPage === photos.length - 1 ? (

                <div
                  className="
                    flex
                    h-full
                    flex-col
                    items-center
                    justify-center
                    px-8
                    text-center
                  "
                >

                  <div className="relative h-16 w-16">

                    <img
                      src="/logo.png"
                      alt="Sublime Studios"
                      className="
                        absolute
                        inset-0
                        h-full
                        w-full
                        object-contain
                      "
                    />

                  </div>

                  <p className="mt-5 text-xs font-semibold tracking-[0.4em]">
                    SUBLIME STUDIOS
                  </p>

                  <div className="mt-6 h-px w-12 bg-orange-500/60" />

                  <p
                    className="
                      mt-6
                      text-[9px]
                      tracking-[0.35em]
                      text-orange-400
                    "
                  >
                    END OF COLLECTION
                  </p>

                </div>

              ) : (

                <img
                  src={currentPhoto}
                  alt={`Collection photograph ${currentPage + 1}`}
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-contain
                  "
                />

              )}


              {/* Mobile transition */}

              {turning && (

                <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-zinc-950">

                  <div className="relative h-16 w-16">

                    <img
                      src="/logo.png"
                      alt=""
                      className="
                        absolute
                        inset-0
                        h-full
                        w-full
                        object-contain
                        animate-logo-white
                      "
                    />

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

                  <div className="mt-4 flex gap-1.5">

                    <span className="loading-dot" />
                    <span className="loading-dot delay-1" />
                    <span className="loading-dot delay-2" />

                  </div>

                </div>

              )}


              {/* Mobile page number */}

              <div
                className="
                  absolute
                  bottom-5
                  right-5
                  z-20
                  text-xs
                  tracking-[0.3em]
                  text-white/55
                "
              >
                {String(currentPage + 1).padStart(2, "0")} /{" "}
                {String(photos.length).padStart(2, "0")}
              </div>

            </div>


            {/* Mobile controls */}

            <div className="mt-7 flex items-center justify-center gap-6">

              <button
                onClick={previousPage}
                disabled={currentPage === 0 || turning}
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/15
                  text-white
                  transition
                  hover:border-orange-500
                  hover:text-orange-400
                  disabled:opacity-25
                "
                aria-label="Previous photograph"
              >
                ←
              </button>

              <span
                className="
                  text-[10px]
                  tracking-[0.3em]
                  text-gray-500
                "
              >
                TURN THE PAGE
              </span>

              <button
                onClick={nextPage}
                disabled={currentPage === photos.length - 1 || turning}
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/15
                  text-white
                  transition
                  hover:border-orange-500
                  hover:text-orange-400
                  disabled:opacity-25
                "
                aria-label="Next photograph"
              >
                →
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}