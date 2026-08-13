"use client";

import { useState } from "react";

const photos = [
  {
    src: "/gallery/photo-01.jpg",
    category: "LANDSCAPES",
  },
  {
    src: "/gallery/photo-02.jpg",
    category: "WILDLIFE",
  },
  {
    src: "/gallery/photo-03.jpg",
    category: "EARTH & GEOLOGY",
  },
  {
    src: "/gallery/photo-04.jpg",
    category: "CULTURE",
  },
  {
    src: "/gallery/photo-05.jpg",
    category: "DETAILS",
  },
  {
    src: "/gallery/photo-06.jpg",
    category: "MOMENTS",
  },
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
  const nextPhoto = photos[currentPage + 1];
  const previousPhoto = photos[currentPage - 1];

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-black px-6 py-24 text-white md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">

        {/* =====================================================
            SECTION INTRO
        ====================================================== */}

        <div className="mb-14 text-center">

          <p className="text-sm font-medium tracking-[0.45em] text-orange-500">
            COLLECTIONS
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Visual Stories
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 md:text-base">
            A curated journey through landscapes, wildlife, geology,
            culture and the quiet moments that shape how we see the world.
          </p>

        </div>


        {/* =====================================================
            DESKTOP BOOK
        ====================================================== */}

        <div className="hidden md:block">

          <div className="relative mx-auto aspect-[16/9] max-w-6xl perspective-[1800px]">

            {/* Book Shadow */}

            <div className="absolute inset-x-[8%] bottom-[-20px] h-10 rounded-full bg-black/80 blur-2xl" />


            {/* Book */}

            <div className="relative h-full w-full overflow-hidden rounded-xl bg-zinc-950 shadow-2xl">

              {/* Left Page */}

              <div className="absolute inset-y-0 left-0 w-1/2 overflow-hidden border-r border-white/10 bg-zinc-900">

                {previousPhoto && (
                  <img
                    src={previousPhoto.src}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover opacity-30"
                  />
                )}

                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20" />

              </div>


              {/* Right Page */}

              <div className="absolute inset-y-0 right-0 w-1/2 overflow-hidden bg-zinc-900">

                <img
                  src={currentPhoto.src}
                  alt={currentPhoto.category}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />

              </div>


              {/* =================================================
                  PAGE TURNING SHEET
              ================================================== */}

              {turning && (
                <div
                  className={`page-turn absolute inset-y-0 z-30 w-1/2 overflow-hidden ${
                    direction === "next"
                      ? "right-0 origin-left"
                      : "left-0 origin-right"
                  }`}
                >

                  <img
                    src={
                      direction === "next"
                        ? currentPhoto.src
                        : previousPhoto?.src || currentPhoto.src
                    }
                    alt=""
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-black/10" />

                </div>
              )}


              {/* Centre Binding */}

              <div className="pointer-events-none absolute inset-y-0 left-1/2 z-20 w-px -translate-x-1/2 bg-white/15 shadow-[0_0_20px_rgba(0,0,0,0.8)]" />


              {/* =================================================
                  CURRENT PHOTO INFORMATION
              ================================================== */}

              <div className="absolute bottom-6 left-6 z-20">

                <p className="text-[10px] font-medium tracking-[0.35em] text-orange-400">
                  {currentPhoto.category}
                </p>

              </div>


              {/* Page Counter */}

              <div className="absolute bottom-6 right-6 z-20 text-xs tracking-[0.25em] text-white/70">
                {String(currentPage + 1).padStart(2, "0")} /{" "}
                {String(photos.length).padStart(2, "0")}
              </div>

            </div>

          </div>


          {/* =====================================================
              DESKTOP CONTROLS
          ====================================================== */}

          <div className="mt-8 flex items-center justify-center gap-5">

            <button
              onClick={previousPage}
              disabled={currentPage === 0 || turning}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-orange-500 hover:text-orange-400 disabled:cursor-not-allowed disabled:opacity-25"
              aria-label="Previous photograph"
            >
              ←
            </button>

            <span className="text-xs tracking-[0.35em] text-gray-500">
              TURN THE PAGE
            </span>

            <button
              onClick={nextPage}
              disabled={currentPage === photos.length - 1 || turning}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-orange-500 hover:text-orange-400 disabled:cursor-not-allowed disabled:opacity-25"
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

          <div className="relative mx-auto w-full max-w-md perspective-[1200px]">

            <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-zinc-900 shadow-2xl">

              {/* Current Photograph */}

              <img
                src={currentPhoto.src}
                alt={currentPhoto.category}
                className="absolute inset-0 h-full w-full object-cover"
              />


              {/* Cinematic Overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />


              {/* Mobile Page Turn */}

              {turning && (
                <div
                  className={`page-turn-mobile absolute inset-y-0 z-30 w-full overflow-hidden ${
                    direction === "next"
                      ? "origin-left"
                      : "origin-right"
                  }`}
                >

                  <img
                    src={
                      direction === "next"
                        ? currentPhoto.src
                        : previousPhoto?.src || currentPhoto.src
                    }
                    alt=""
                    className="h-full w-full object-cover"
                  />

                </div>
              )}


              {/* Category */}

              <div className="absolute bottom-6 left-6 z-20">

                <p className="text-[10px] font-medium tracking-[0.35em] text-orange-400">
                  {currentPhoto.category}
                </p>

              </div>


              {/* Counter */}

              <div className="absolute bottom-6 right-6 z-20 text-xs tracking-[0.25em] text-white/70">
                {String(currentPage + 1).padStart(2, "0")} /{" "}
                {String(photos.length).padStart(2, "0")}
              </div>

            </div>

          </div>


          {/* Mobile Controls */}

          <div className="mt-7 flex items-center justify-center gap-6">

            <button
              onClick={previousPage}
              disabled={currentPage === 0 || turning}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-orange-500 hover:text-orange-400 disabled:opacity-25"
              aria-label="Previous photograph"
            >
              ←
            </button>

            <span className="text-[10px] tracking-[0.3em] text-gray-500">
              SWIPE / TURN
            </span>

            <button
              onClick={nextPage}
              disabled={currentPage === photos.length - 1 || turning}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-orange-500 hover:text-orange-400 disabled:opacity-25"
              aria-label="Next photograph"
            >
              →
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}