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
  const previousPhoto = photos[currentPage - 1];

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
            DESKTOP
        ====================================================== */}

        <div className="hidden md:block">

          <div className="relative mx-auto aspect-[16/9] max-w-6xl perspective-[1800px]">

            {/* Book Shadow */}

            <div className="absolute inset-x-[8%] bottom-[-20px] h-10 rounded-full bg-black/80 blur-2xl" />


            {/* Book */}

            <div className="relative h-full w-full overflow-hidden rounded-xl bg-zinc-950 shadow-2xl">

              {/* Left Page */}

              <div className="absolute inset-y-0 left-0 w-1/2 overflow-hidden bg-zinc-950">

                {previousPhoto && (
                  <img
                    src={previousPhoto}
                    alt=""
                    className="absolute inset-0 h-full w-full object-contain"
                  />
                )}

              </div>


              {/* Right Page */}

              <div className="absolute inset-y-0 right-0 w-1/2 overflow-hidden bg-zinc-950">

                <img
                  src={currentPhoto}
                  alt={`Collection photograph ${currentPage + 1}`}
                  className="h-full w-full object-contain"
                />

              </div>


              {/* =================================================
                  PAGE TURN
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
                        ? currentPhoto
                        : previousPhoto || currentPhoto
                    }
                    alt=""
                    className="h-full w-full object-contain"
                  />

                </div>
              )}


              {/* Centre Binding */}

              <div className="pointer-events-none absolute inset-y-0 left-1/2 z-20 w-px -translate-x-1/2 bg-white/10 shadow-[0_0_25px_rgba(0,0,0,0.9)]" />


              {/* Page Number */}

              <div className="absolute bottom-5 right-6 z-20 text-xs tracking-[0.3em] text-white/50">
                {String(currentPage + 1).padStart(2, "0")} /{" "}
                {String(photos.length).padStart(2, "0")}
              </div>

            </div>

          </div>


          {/* Desktop Controls */}

          <div className="mt-8 flex items-center justify-center gap-5">

            <button
              onClick={previousPage}
              disabled={currentPage === 0 || turning}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-orange-500 hover:text-orange-400 disabled:cursor-not-allowed disabled:opacity-25"
              aria-label="Previous photograph"
            >
              ←
            </button>

            <span className="text-[10px] tracking-[0.35em] text-gray-500">
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
            MOBILE
        ====================================================== */}

        <div className="md:hidden">

          <div className="relative mx-auto w-full max-w-md perspective-[1200px]">

            <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-zinc-950 shadow-2xl">

              {/* Current Photograph */}

              <img
                src={currentPhoto}
                alt={`Collection photograph ${currentPage + 1}`}
                className="absolute inset-0 h-full w-full object-contain"
              />


              {/* Page Turn */}

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
                        ? currentPhoto
                        : previousPhoto || currentPhoto
                    }
                    alt=""
                    className="h-full w-full object-contain"
                  />

                </div>
              )}


              {/* Page Number */}

              <div className="absolute bottom-5 right-5 z-20 text-xs tracking-[0.3em] text-white/55">
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