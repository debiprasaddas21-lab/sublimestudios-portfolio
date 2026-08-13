"use client";

import { useEffect, useState } from "react";

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "previous">("next");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const totalPhotos = photos.length;

  const goNext = () => {
    if (isTransitioning || currentIndex >= totalPhotos - 1) return;

    setDirection("next");
    setIsTransitioning(true);
    setImageLoaded(false);

    setTimeout(() => {
      setCurrentIndex((prev) => prev + 1);
      setIsTransitioning(false);
    }, 650);
  };

  const goPrevious = () => {
    if (isTransitioning || currentIndex <= 0) return;

    setDirection("previous");
    setIsTransitioning(true);
    setImageLoaded(false);

    setTimeout(() => {
      setCurrentIndex((prev) => prev - 1);
      setIsTransitioning(false);
    }, 650);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        goNext();
      }

      if (event.key === "ArrowLeft") {
        goPrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });


  /*
  ============================================================
  GET PHOTO INDEX
  ============================================================
  */

  const getPhotoIndex = (offset: number) => {
    const index = currentIndex + offset;

    if (index < 0 || index >= totalPhotos) {
      return null;
    }

    return index;
  };


  /*
  ============================================================
  CARD POSITION
  ============================================================
  */

  const getCardStyle = (offset: number) => {
    const baseTransition =
      "transform 650ms cubic-bezier(0.22, 0.61, 0.36, 1), opacity 500ms ease, filter 500ms ease";

    if (offset === 0) {
      return {
        transform: "translateX(0%) scale(1)",
        opacity: 1,
        filter: "blur(0px)",
        zIndex: 30,
        transition: baseTransition,
      };
    }

    if (offset === -1) {
      return {
        transform: "translateX(-72%) scale(0.88)",
        opacity: 0.65,
        filter: "blur(3px)",
        zIndex: 20,
        transition: baseTransition,
      };
    }

    if (offset === -2) {
      return {
        transform: "translateX(-118%) scale(0.76)",
        opacity: 0.32,
        filter: "blur(7px)",
        zIndex: 10,
        transition: baseTransition,
      };
    }

    if (offset === 1) {
      return {
        transform: "translateX(72%) scale(0.88)",
        opacity: 0.65,
        filter: "blur(3px)",
        zIndex: 20,
        transition: baseTransition,
      };
    }

    if (offset === 2) {
      return {
        transform: "translateX(118%) scale(0.76)",
        opacity: 0.32,
        filter: "blur(7px)",
        zIndex: 10,
        transition: baseTransition,
      };
    }

    return {
      transform: "translateX(0%) scale(0.6)",
      opacity: 0,
      filter: "blur(10px)",
      zIndex: 0,
      transition: baseTransition,
    };
  };


  const visibleOffsets = [-2, -1, 0, 1, 2];


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
            DESKTOP VIEWER
        ====================================================== */}

        <div className="hidden md:block">

          <div className="relative mx-auto h-[620px] w-full max-w-7xl">


            {/* =================================================
                PREVIOUS BUTTON
            ================================================== */}

            <button
              onClick={goPrevious}
              disabled={currentIndex === 0 || isTransitioning}
              aria-label="Previous photograph"
              className="
                absolute
                left-2
                top-1/2
                z-50
                flex
                h-14
                w-14
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-white/15
                bg-black/50
                text-2xl
                text-white
                backdrop-blur-md
                transition-all
                duration-300
                hover:scale-110
                hover:border-orange-500
                hover:text-orange-400
                disabled:cursor-not-allowed
                disabled:opacity-20
              "
            >
              ←
            </button>


            {/* =================================================
                PHOTO STAGE
            ================================================== */}

            <div
              className="
                absolute
                inset-0
                flex
                items-center
                justify-center
                overflow-hidden
              "
            >

              {/* Ambient glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-1/2
                  h-[65%]
                  w-[45%]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-orange-500/5
                  blur-[100px]
                "
              />


              {/* =================================================
                  PHOTO STACK
              ================================================== */}

              <div
                className="
                  relative
                  flex
                  h-[580px]
                  w-[72%]
                  items-center
                  justify-center
                "
              >

                {visibleOffsets.map((offset) => {

                  const photoIndex = getPhotoIndex(offset);

                  if (photoIndex === null) return null;

                  const isMain = offset === 0;

                  return (
                    <div
                      key={`${photoIndex}-${offset}`}
                      className="
                        absolute
                        left-1/2
                        top-1/2
                        h-[92%]
                        w-[72%]
                        -translate-x-1/2
                        -translate-y-1/2
                        overflow-hidden
                        rounded-xl
                        bg-zinc-950
                        shadow-2xl
                      "
                      style={getCardStyle(offset)}
                    >

                      <img
                        src={photos[photoIndex]}
                        alt={`Collection photograph ${photoIndex + 1}`}
                        draggable={false}
                        onLoad={() => {
                          if (isMain) {
                            setImageLoaded(true);
                          }
                        }}
                        className="
                          h-full
                          w-full
                          select-none
                          object-contain
                        "
                      />


                      {/* Dark layer on side photographs */}

                      {!isMain && (
                        <div
                          className="
                            pointer-events-none
                            absolute
                            inset-0
                            bg-black/30
                          "
                        />
                      )}


                      {/* Main image loading screen */}

                      {isMain && !imageLoaded && (
                        <div
                          className="
                            absolute
                            inset-0
                            z-20
                            flex
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
                      )}

                    </div>
                  );
                })}

              </div>

            </div>


            {/* =================================================
                NEXT BUTTON
            ================================================== */}

            <button
              onClick={goNext}
              disabled={
                currentIndex === totalPhotos - 1 ||
                isTransitioning
              }
              aria-label="Next photograph"
              className="
                absolute
                right-2
                top-1/2
                z-50
                flex
                h-14
                w-14
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-white/15
                bg-black/50
                text-2xl
                text-white
                backdrop-blur-md
                transition-all
                duration-300
                hover:scale-110
                hover:border-orange-500
                hover:text-orange-400
                disabled:cursor-not-allowed
                disabled:opacity-20
              "
            >
              →
            </button>


            {/* =================================================
                COUNTER
            ================================================== */}

            <div
              className="
                absolute
                bottom-4
                left-1/2
                z-50
                -translate-x-1/2
                text-xs
                tracking-[0.35em]
                text-white/50
              "
            >
              {String(currentIndex + 1).padStart(2, "0")}
              {" / "}
              {String(totalPhotos).padStart(2, "0")}
            </div>

          </div>

        </div>


        {/* =====================================================
            MOBILE VIEWER
        ====================================================== */}

        <div className="md:hidden">

          <div className="relative h-[500px] w-full overflow-hidden">


            {/* Mobile stack */}

            <div
              className="
                absolute
                inset-0
                flex
                items-center
                justify-center
              "
            >

              {visibleOffsets.map((offset) => {

                const photoIndex = getPhotoIndex(offset);

                if (photoIndex === null) return null;

                const isMain = offset === 0;

                return (
                  <div
                    key={`${photoIndex}-${offset}`}
                    className="
                      absolute
                      left-1/2
                      top-1/2
                      h-[82%]
                      w-[78%]
                      -translate-x-1/2
                      -translate-y-1/2
                      overflow-hidden
                      rounded-xl
                      bg-zinc-950
                      shadow-2xl
                    "
                    style={{
                      ...getCardStyle(offset),
                      ...(offset !== 0
                        ? {
                            transform:
                              offset < 0
                                ? "translateX(-92%) scale(0.82)"
                                : "translateX(92%) scale(0.82)",
                          }
                        : {}),
                    }}
                  >

                    <img
                      src={photos[photoIndex]}
                      alt={`Collection photograph ${photoIndex + 1}`}
                      draggable={false}
                      onLoad={() => {
                        if (isMain) {
                          setImageLoaded(true);
                        }
                      }}
                      className="
                        h-full
                        w-full
                        select-none
                        object-contain
                      "
                    />


                    {!isMain && (
                      <div
                        className="
                          pointer-events-none
                          absolute
                          inset-0
                          bg-black/35
                        "
                      />
                    )}


                    {isMain && !imageLoaded && (
                      <div
                        className="
                          absolute
                          inset-0
                          z-20
                          flex
                          flex-col
                          items-center
                          justify-center
                          bg-zinc-950
                        "
                      >

                        <div className="relative h-14 w-14">

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

                  </div>
                );

              })}

            </div>


            {/* =================================================
                MOBILE PREVIOUS
            ================================================== */}

            <button
              onClick={goPrevious}
              disabled={currentIndex === 0 || isTransitioning}
              aria-label="Previous photograph"
              className="
                absolute
                left-2
                top-1/2
                z-50
                flex
                h-11
                w-11
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                bg-black/50
                text-xl
                text-white
                backdrop-blur-md
                disabled:opacity-20
              "
            >
              ←
            </button>


            {/* =================================================
                MOBILE NEXT
            ================================================== */}

            <button
              onClick={goNext}
              disabled={
                currentIndex === totalPhotos - 1 ||
                isTransitioning
              }
              aria-label="Next photograph"
              className="
                absolute
                right-2
                top-1/2
                z-50
                flex
                h-11
                w-11
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                bg-black/50
                text-xl
                text-white
                backdrop-blur-md
                disabled:opacity-20
              "
            >
              →
            </button>


            {/* Mobile counter */}

            <div
              className="
                absolute
                bottom-3
                left-1/2
                z-50
                -translate-x-1/2
                text-[10px]
                tracking-[0.35em]
                text-white/50
              "
            >
              {String(currentIndex + 1).padStart(2, "0")}
              {" / "}
              {String(totalPhotos).padStart(2, "0")}
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}