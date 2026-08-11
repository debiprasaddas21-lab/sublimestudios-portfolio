"use client";

import ImageLoader from "@/components/ImageLoader";

const photos = [
  "/services/commercial/commercial-01.jpg",
  "/services/commercial/commercial-02.jpg",
  "/services/commercial/commercial-03.jpg",
  "/services/commercial/commercial-04.jpg",
  "/services/commercial/commercial-05.jpg",
  "/services/commercial/commercial-06.jpg",
  "/services/commercial/commercial-07.jpg",
  "/services/commercial/commercial-08.jpg",
  "/services/commercial/commercial-09.jpg",
  "/services/commercial/commercial-10.jpg",
  "/services/commercial/commercial-11.jpg",
  "/services/commercial/commercial-12.jpg",
  "/services/commercial/commercial-13.jpg",
  "/services/commercial/commercial-14.jpg",
  "/services/commercial/commercial-15.jpg",
];

export default function CommercialPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* =====================================================
          PAGE HEADER
      ====================================================== */}

      <section className="px-6 pb-16 pt-36 md:px-10 lg:px-16">

        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-medium tracking-[0.4em] text-orange-500">
            SUBLIME STUDIOS
          </p>

          <div className="mt-5 flex flex-col justify-between gap-8 md:flex-row md:items-end">

            <div>

              <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
                Commercial
                <br />
                Photography
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
                Professional photography created for brands, businesses,
                tourism, products, campaigns, and visual storytelling.
              </p>

            </div>

            <p className="text-xs font-medium tracking-[0.35em] text-gray-500">
              COMMERCIAL COLLECTION
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          PHOTOGRAPHY GRID
      ====================================================== */}

      <section className="px-6 pb-24 md:px-10 lg:px-16">

        <div className="mx-auto max-w-7xl">

          <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">

            {photos.map((photo, index) => (

              <div
                key={photo}
                className="group mb-6 break-inside-avoid overflow-hidden rounded-2xl border border-white/10 bg-zinc-950"
              >

                <ImageLoader
                  src={photo}
                  alt={`Commercial Photography ${index + 1}`}
                  className="w-full"
                  imageClassName="
                    block
                    h-auto
                    w-full
                    object-contain
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-[1.02]
                  "
                />

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          BOTTOM STATEMENT
      ====================================================== */}

      <section className="border-t border-white/10 px-6 py-20 md:px-10 lg:px-16">

        <div className="mx-auto max-w-4xl text-center">

          <p className="text-xs font-medium tracking-[0.4em] text-orange-500">
            COMMERCIAL WORK
          </p>

          <h2 className="mt-5 text-3xl font-semibold md:text-4xl">
            Visuals that represent your brand
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 md:text-base">
            From individual photoshoots to larger campaigns, every image is
            created with attention to composition, detail, atmosphere,
            and visual identity.
          </p>

        </div>

      </section>

    </main>
  );
}