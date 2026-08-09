"use client";

import { useEffect, useState } from "react";

const photos = Array.from(
  { length: 15 },
  (_, index) =>
    `/services/landscape/landscape-${String(index + 1).padStart(2, "0")}.jpg`
);

export default function LandscapePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const openImage = (image: string, index: number) => {
    setSelectedImage(image);
    setSelectedIndex(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const showPrevious = () => {
    const previousIndex =
      selectedIndex === 0 ? photos.length - 1 : selectedIndex - 1;

    setSelectedIndex(previousIndex);
    setSelectedImage(photos[previousIndex]);
  };

  const showNext = () => {
    const nextIndex =
      selectedIndex === photos.length - 1 ? 0 : selectedIndex + 1;

    setSelectedIndex(nextIndex);
    setSelectedImage(photos[nextIndex]);
  };

  // Close lightbox with Escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!selectedImage) return;

      if (event.key === "Escape") {
        closeImage();
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
  }, [selectedImage, selectedIndex]);

  // Prevent background scrolling while lightbox is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <section className="px-6 pt-32 pb-16 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-sm font-medium tracking-[0.45em] text-orange-500">
            LANDSCAPE PHOTOGRAPHY
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
            Where Earth
            <br />
            Meets Light
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-400 md:text-xl">
            A collection of landscapes shaped by light, atmosphere, distance,
            and the quiet character of the places we pass through.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-4 pb-24 md:px-8 lg:px-12">
        <div className="mx-auto max-w-[1600px] columns-1 gap-5 md:columns-2 lg:columns-3">
          {photos.map((photo, index) => (
            <button
              key={photo}
              onClick={() => openImage(photo, index)}
              className="group mb-5 block w-full overflow-hidden rounded-2xl text-left focus:outline-none"
              aria-label={`Open landscape photograph ${index + 1}`}
            >
              <img
                src={photo}
                alt={`Landscape photograph ${index + 1}`}
                className="block h-auto w-full transition duration-700 ease-out group-hover:scale-[1.025]"
              />
            </button>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 px-4 py-6"
          onClick={closeImage}
        >
          {/* Close button */}
          <button
            onClick={closeImage}
            className="absolute right-5 top-5 z-[110] flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/50 text-2xl text-white transition hover:border-orange-500 hover:text-orange-500"
            aria-label="Close image"
          >
            ×
          </button>

          {/* Previous */}
          <button
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            className="absolute left-4 top-1/2 z-[110] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 text-2xl text-white transition hover:border-orange-500 hover:text-orange-500 md:left-8"
            aria-label="Previous photograph"
          >
            ‹
          </button>

          {/* Image */}
          <div
            className="relative flex max-h-[90vh] max-w-[90vw] items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt={`Landscape photograph ${selectedIndex + 1}`}
              className="max-h-[90vh] max-w-[90vw] object-contain"
            />

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/70 px-4 py-2 text-sm tracking-widest text-white">
              {String(selectedIndex + 1).padStart(2, "0")} /{" "}
              {String(photos.length).padStart(2, "0")}
            </div>
          </div>

          {/* Next */}
          <button
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            className="absolute right-4 top-1/2 z-[110] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 text-2xl text-white transition hover:border-orange-500 hover:text-orange-500 md:right-8"
            aria-label="Next photograph"
          >
            ›
          </button>
        </div>
      )}
    </main>
  );
}