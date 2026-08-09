"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";

const photos = Array.from({ length: 15 }, (_, index) => {
  const number = String(index + 1).padStart(2, "0");

  return {
    src: `/services/landscape/landscape-${number}.jpg`,
    title: `Landscape ${number}`,
  };
});

export default function LandscapePage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const closeViewer = () => {
    setSelectedIndex(null);
  };

  const showPrevious = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === 0 ? photos.length - 1 : selectedIndex - 1
    );
  };

  const showNext = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === photos.length - 1 ? 0 : selectedIndex + 1
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
      <Navbar />

      {/* PAGE HEADER */}
      <section className="px-6 pt-32 pb-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm tracking-[0.45em] text-orange-500 uppercase">
            Sublime Studios
          </p>

          <div className="mt-5 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
                Landscape
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-400">
                Landscapes shaped by light, atmosphere, geography and
                perspective. A collection of places captured as they were
                experienced.
              </p>
            </div>

            <div className="text-sm tracking-[0.25em] text-gray-500 uppercase">
              15 Photographs
            </div>
          </div>
        </div>
      </section>

      {/* COLLAGE */}
      <section className="px-4 pb-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
            {photos.map((photo, index) => (
              <button
                key={photo.src}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className="group mb-5 block w-full overflow-hidden rounded-2xl bg-zinc-900 text-left"
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="block h-auto w-full transition duration-700 ease-out group-hover:scale-[1.025]"
                  loading={index < 3 ? "eager" : "lazy"}
                />

                {/* HOVER OVERLAY */}
                <div className="pointer-events-none absolute" />

                <div className="relative -mt-16 bg-gradient-to-t from-black/80 via-black/30 to-transparent px-5 pb-5 pt-12 opacity-0 transition duration-300 group-hover:opacity-100">
                  <span className="text-xs tracking-[0.3em] text-orange-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="mt-1 text-sm font-medium text-white">
                    {photo.title}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FULLSCREEN PHOTO VIEWER */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10"
          onClick={closeViewer}
        >
          {/* CLOSE BUTTON */}
          <button
            type="button"
            onClick={closeViewer}
            className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-2xl text-white backdrop-blur-md transition hover:bg-white/20"
            aria-label="Close"
          >
            ×
          </button>

          {/* PREVIOUS */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            className="absolute left-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-2xl text-white backdrop-blur-md transition hover:bg-white/20 md:left-8"
            aria-label="Previous photograph"
          >
            ‹
          </button>

          {/* NEXT */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            className="absolute right-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-2xl text-white backdrop-blur-md transition hover:bg-white/20 md:right-8"
            aria-label="Next photograph"
          >
            ›
          </button>

          {/* IMAGE */}
          <div
            className="relative flex max-h-[90vh] max-w-[90vw] items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={photos[selectedIndex].src}
              alt={photos[selectedIndex].title}
              className="max-h-[88vh] max-w-[88vw] object-contain"
            />

            {/* IMAGE COUNTER */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-white/20 bg-black/60 px-4 py-2 text-xs tracking-[0.25em] text-white backdrop-blur-md">
              {String(selectedIndex + 1).padStart(2, "0")} /{" "}
              {String(photos.length).padStart(2, "0")}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}