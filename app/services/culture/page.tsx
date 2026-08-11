"use client";

import { useEffect, useState } from "react";

const photographs = [
  "/services/culture/culture-01.jpg",
  "/services/culture/culture-02.jpg",
  "/services/culture/culture-03.jpg",
  "/services/culture/culture-04.jpg",
  "/services/culture/culture-05.jpg",
  "/services/culture/culture-06.jpg",
  "/services/culture/culture-07.jpg",
  "/services/culture/culture-08.jpg",
  "/services/culture/culture-09.jpg",
  "/services/culture/culture-10.jpg",
  "/services/culture/culture-11.jpg",
  "/services/culture/culture-12.jpg",
  "/services/culture/culture-13.jpg",
  "/services/culture/culture-14.jpg",
  "/services/culture/culture-15.jpg",
];

export default function CulturePage() {
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

      {/* Page Introduction */}

      <section className="px-5 pt-24 pb-14 sm:px-6 sm:pt-28 md:px-10 lg:px-16">

        <div className="mx-auto max-w-7xl">

          <p className="text-xs font-medium uppercase tracking-[0.4em] text-orange-500">
            SUBLIME STUDIOS
          </p>

          <div className="mt-5 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

            <div className="max-w-4xl">

              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                Culture &amp; Festivals
              </h1>

              <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8 md:text-lg">
                Stories of faith, tradition, celebration and community,
                captured through moments of colour, devotion and human
                connection.
              </p>

            </div>

            <div className="lg:text-right">

              <p className="text-xs uppercase tracking-[0.35em] text-gray-500">
                A Growing Collection
              </p>

              <p className="mt-2 text-sm text-gray-300 sm:text-base">
                Faith, tradition and celebration
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* Photography Collage */}

      <section className="px-5 pb-20 sm:px-6 md:px-10 lg:px-16">

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
                  aria-label={`Open culture photograph ${index + 1}`}
                >

                  {/* Original Image Ratio */}
                  <img
                    src={photo}
                    alt={`Culture and festival photograph ${index + 1}`}
                    className="block h-auto w-full transition duration-700 ease-out group-hover:scale-[1.02]"
                    loading={index < 3 ? "eager" : "lazy"}
                  />

                  {/* Subtle Hover Effect */}
                  <div className="absolute inset-0 bg-black/10 opacity-0 transition duration-500 group-hover:opacity-100" />

                </button>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* Fullscreen Photo Viewer */}

      {selectedIndex !== null && (

        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-8"
          onClick={closeViewer}
        >

          {/* Close */}

          <button
            type="button"
            onClick={closeViewer}
            className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-2xl text-white backdrop-blur-md transition hover:bg-white/20"
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
            className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-2xl text-white backdrop-blur-md transition hover:bg-white/20 sm:left-6"
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
            className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-2xl text-white backdrop-blur-md transition hover:bg-white/20 sm:right-6"
            aria-label="Next photograph"
          >
            ›
          </button>


          {/* Full Original Image */}

          <div
            className="flex max-h-[90vh] max-w-[90vw] items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >

            <img
              src={photographs[selectedIndex]}
              alt={`Culture and festival photograph ${selectedIndex + 1}`}
              className="max-h-[88vh] max-w-[88vw] object-contain"
            />

          </div>


          {/* Counter */}

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full border border-white/20 bg-black/60 px-4 py-2 text-xs tracking-[0.25em] text-white backdrop-blur-md">
            {String(selectedIndex + 1).padStart(2, "0")} / 15
          </div>

        </div>

      )}

    </main>
  );
}