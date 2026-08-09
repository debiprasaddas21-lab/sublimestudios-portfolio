export default function Gallery() {
  const photos = [
    {
      src: "/gallery/photo-01.jpg",
      title: "Architecture & Atmosphere",
      description: "Structures shaped by light, space and perspective.",
    },
    {
      src: "/gallery/photo-02.jpg",
      title: "Human & Landscape",
      description: "Stories of people living alongside the land.",
    },
    {
      src: "/gallery/photo-03.jpg",
      title: "Wildlife",
      description: "Quiet moments from the natural world.",
    },
    {
      src: "/gallery/photo-04.jpg",
      title: "Wildlife Stories",
      description: "A glimpse into the beauty of the wild.",
    },
    {
      src: "/gallery/photo-05.jpg",
      title: "Quiet Encounters",
      description: "Small moments that often go unnoticed.",
    },
    {
      src: "/gallery/photo-06.jpg",
      title: "Light & Solitude",
      description: "Finding beauty in ordinary surroundings.",
    },
  ];

  return (
    <section
      id="gallery"
      className="bg-[#111111] px-6 py-24 md:px-10 lg:px-16"
    >
      {/* Section Heading */}
      <div className="mx-auto mb-16 max-w-4xl text-center">
        <p className="mb-4 text-xs font-medium tracking-[0.4em] text-amber-400">
          SELECTED WORK
        </p>

        <h2 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
          Featured Collections
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 md:text-lg">
          A curated selection of my favourite work from wildlife and
          landscapes to quiet moments and architectural perspectives.
        </p>
      </div>

      {/* Gallery */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        
        {/* Photo 01 — Large Feature */}
        <div className="group relative overflow-hidden rounded-2xl md:row-span-2 lg:col-span-2">
          <img
            src={photos[0].src}
            alt={photos[0].title}
            className="h-full min-h-[420px] w-full object-cover transition duration-700 ease-out group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-70 transition duration-500 group-hover:opacity-100" />

          <div className="absolute bottom-0 left-0 p-7 md:p-9">
            <p className="mb-2 text-xs font-medium tracking-[0.3em] text-amber-400">
              01
            </p>

            <h3 className="text-2xl font-semibold text-white md:text-3xl">
              {photos[0].title}
            </h3>

            <p className="mt-2 max-w-md text-sm text-gray-300">
              {photos[0].description}
            </p>
          </div>
        </div>

        {/* Photo 02 */}
        <div className="group relative overflow-hidden rounded-2xl">
          <img
            src={photos[1].src}
            alt={photos[1].title}
            className="h-[420px] w-full object-cover transition duration-700 ease-out group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70 transition duration-500 group-hover:opacity-100" />

          <div className="absolute bottom-0 left-0 p-6">
            <p className="mb-2 text-xs tracking-[0.3em] text-amber-400">
              02
            </p>

            <h3 className="text-xl font-semibold text-white">
              {photos[1].title}
            </h3>

            <p className="mt-1 text-sm text-gray-300">
              {photos[1].description}
            </p>
          </div>
        </div>

        {/* Photo 03 */}
        <div className="group relative overflow-hidden rounded-2xl">
          <img
            src={photos[2].src}
            alt={photos[2].title}
            className="h-[420px] w-full object-cover transition duration-700 ease-out group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70 transition duration-500 group-hover:opacity-100" />

          <div className="absolute bottom-0 left-0 p-6">
            <p className="mb-2 text-xs tracking-[0.3em] text-amber-400">
              03
            </p>

            <h3 className="text-xl font-semibold text-white">
              {photos[2].title}
            </h3>

            <p className="mt-1 text-sm text-gray-300">
              {photos[2].description}
            </p>
          </div>
        </div>

        {/* Photo 04 */}
        <div className="group relative overflow-hidden rounded-2xl">
          <img
            src={photos[3].src}
            alt={photos[3].title}
            className="h-[420px] w-full object-cover transition duration-700 ease-out group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70 transition duration-500 group-hover:opacity-100" />

          <div className="absolute bottom-0 left-0 p-6">
            <p className="mb-2 text-xs tracking-[0.3em] text-amber-400">
              04
            </p>

            <h3 className="text-xl font-semibold text-white">
              {photos[3].title}
            </h3>

            <p className="mt-1 text-sm text-gray-300">
              {photos[3].description}
            </p>
          </div>
        </div>

        {/* Photo 05 */}
        <div className="group relative overflow-hidden rounded-2xl">
          <img
            src={photos[4].src}
            alt={photos[4].title}
            className="h-[420px] w-full object-cover transition duration-700 ease-out group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70 transition duration-500 group-hover:opacity-100" />

          <div className="absolute bottom-0 left-0 p-6">
            <p className="mb-2 text-xs tracking-[0.3em] text-amber-400">
              05
            </p>

            <h3 className="text-xl font-semibold text-white">
              {photos[4].title}
            </h3>

            <p className="mt-1 text-sm text-gray-300">
              {photos[4].description}
            </p>
          </div>
        </div>

        {/* Photo 06 */}
        <div className="group relative overflow-hidden rounded-2xl">
          <img
            src={photos[5].src}
            alt={photos[5].title}
            className="h-[420px] w-full object-cover transition duration-700 ease-out group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70 transition duration-500 group-hover:opacity-100" />

          <div className="absolute bottom-0 left-0 p-6">
            <p className="mb-2 text-xs tracking-[0.3em] text-amber-400">
              06
            </p>

            <h3 className="text-xl font-semibold text-white">
              {photos[5].title}
            </h3>

            <p className="mt-1 text-sm text-gray-300">
              {photos[5].description}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}