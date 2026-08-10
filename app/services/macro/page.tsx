"use client";

import { useEffect, useState } from "react";

const photographs = [
  "/services/macro/macro-01.jpg",
  "/services/macro/macro-02.jpg",
  "/services/macro/macro-03.jpg",
  "/services/macro/macro-04.jpg",
  "/services/macro/macro-05.jpg",
  "/services/macro/macro-06.jpg",
  "/services/macro/macro-07.jpg",
  "/services/macro/macro-08.jpg",
  "/services/macro/macro-09.jpg",
  "/services/macro/macro-10.jpg",
  "/services/macro/macro-11.jpg",
  "/services/macro/macro-12.jpg",
  "/services/macro/macro-13.jpg",
  "/services/macro/macro-14.jpg",
  "/services/macro/macro-15.jpg",
];

export default function MacroPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const closeViewer = () => {
    setSelectedIndex(null);
  };

  const showPrevious = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === 0
        ? photographs.length - 1
        : selectedIndex - 1
    );
  };

  const showNext = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === photographs.length - 1
        ? 0
        : selectedIndex + 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedIndex === null) return;

      if (event.key === "Escape") {
        closeViewer();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex]);

  return (
    <main className="min-h-screen bg-black text-white">

      {/* =====================================================
          PAGE INTRO
      ====================================================== */}

      <section className="px-5 pt-24 pb-14 sm:px-6 sm:pt-28 sm:pb-16 md:px-10 lg:px-16">

        <div className="mx-auto max-w-7xl">

          <p className="text-[10px] font-medium uppercase tracking-[0.4em] text-orange-500 sm:text-xs md:text-sm">
            SUBLIME STUDIOS
          </p>

          <div className="mt-5 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

            <div className="max-w-4xl">

              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                Macro
              </h1>

              <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8 md:text-lg">
                A closer look at the extraordinary details hidden within
                the natural world — textures, patterns, forms and moments
                that often escape the naked eye.
              </p>

            </div>

            <div className="pb-1 lg:text-right">

              <p className="text-[10px] uppercase tracking-[0.35em] text-gray-500 sm:text-xs">
                A Growing Collection
              </p>

              <p className="mt-2 text-sm text-gray-300 sm:text-base">
                Beauty beyond the ordinary
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PHOTOGRAPHY COLLAGE
          ORIGINAL ASPECT RATIOS — NO CROP
      ====================================================== */}

      <section className="px-5 pb-20 sm:px-6 md:px-10 lg:px-16 lg:pb-24">

        <div className="mx-auto max-w-7xl">

          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">

            {photographs.map((photo, index) => (

              <div
                key={photo}
                className="group mb-5 break-inside-avoid"
              >

                <button
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  className="relative block w-full overflow-hidden rounded-2xl bg-zinc-900"
                  aria-label={`Open macro photograph ${index + 1}`}
                >

                  {/* ORIGINAL IMAGE — NO CROP */}
                  <img
                    src={photo}
                    alt={`Macro photograph ${index + 1}`}
                    className="block h-auto w-full transition duration-700 ease-out group-hover:scale-[1.025]"
                    loading={index < 3 ? "eager" : "lazy"}
                  />

                  {/* Subtle hover effect */}
                  <div className="absolute inset-0 bg-black/10 opacity-0 transition duration-500 group-hover:opacity-100" />

                </button>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          FULLSCREEN PHOTO VIEWER
      ====================================================== */}

      {selectedIndex !== null && (

        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-8 md:p-10"
          onClick={closeViewer}
        >

          {/* Close */}
          <button
            type="button"
            onClick={closeViewer}
            className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-2xl text-white backdrop-blur-md transition hover:bg-white/20 sm:right-6 sm:top-6"
            aria-label="Close photograph"
          >
            ×
          </button>


          {/* Previous */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-2xl text-white backdrop-blur-md transition hover:bg-white/20 sm:left-6 sm:h-12 sm:w-12"
            aria-label="Previous photograph"
          >
            ‹
          </button>


          {/* Next */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-2xl text-white backdrop-blur-md transition hover:bg-white/20 sm:right-6 sm:h-12 sm:w-12"
            aria-label="Next photograph"
          >
            ›
          </button>


          {/* FULL ORIGINAL IMAGE */}
          <div
            className="relative flex max-h-[90vh] max-w-[90vw] items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >

            <img
              src={photographs[selectedIndex]}
              alt={`Macro photograph ${selectedIndex + 1}`}
              className="max-h-[88vh] max-w-[88vw] object-contain"
            />

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-white/20 bg-black/60 px-4 py-2 text-[10px] tracking-[0.25em] text-white backdrop-blur-md sm:text-xs">
              {String(selectedIndex + 1).padStart(2, "0")} /{" "}
              {String(photographs.length).padStart(2, "0")}
            </div>

          </div>

        </div>

      )}

    </main>
  );
}