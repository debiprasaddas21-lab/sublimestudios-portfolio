export default function Gallery() {
  const photos = [
    {
      src: "/gallery/photo-01.jpg",
      number: "01",
      title: "Nature in Detail",
      description: "Finding extraordinary forms in the smallest details.",
    },
    {
      src: "/gallery/photo-02.jpg",
      number: "02",
      title: "Architecture & Atmosphere",
      description: "Structures shaped by light, space and perspective.",
    },
    {
      src: "/gallery/photo-03.jpg",
      number: "03",
      title: "Life on the Land",
      description: "A quiet moment between people and the landscape.",
    },
    {
      src: "/gallery/photo-04.jpg",
      number: "04",
      title: "Wildlife",
      description: "A glimpse into the beauty of the wild.",
    },
    {
      src: "/gallery/photo-05.jpg",
      number: "05",
      title: "Quiet Encounters",
      description: "Small moments that often go unnoticed.",
    },
    {
      src: "/gallery/photo-06.jpg",
      number: "06",
      title: "Light & Solitude",
      description: "Finding beauty in ordinary surroundings.",
    },
  ];

  return (
    <section
      id="gallery"
      className="min-h-screen bg-[#111111] px-5 py-12 md:px-8 md:py-14"
    >
      {/* Section Heading */}
      <div className="mx-auto mb-8 max-w-6xl text-center md:mb-10">
        <p className="mb-2 text-[10px] font-medium tracking-[0.4em] text-amber-400 md:text-xs">
          SELECTED WORK
        </p>

        <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
          Featured Collections
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-400 md:text-base">
          A curated selection of my favourite work from nature,
          wildlife, landscapes and everyday moments.
        </p>
      </div>

      {/* Collage */}
      <div className="mx-auto grid h-[62vh] max-w-6xl grid-cols-3 grid-rows-2 gap-3 md:gap-4">
        {photos.map((photo) => (
          <div
            key={photo.src}
            className="group relative min-h-0 overflow-hidden rounded-xl"
          >
            {/* Image */}
            <img
              src={photo.src}
              alt={photo.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Dark gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Text */}
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
              <p className="mb-1 text-[9px] font-medium tracking-[0.3em] text-amber-400 md:text-[10px]">
                {photo.number}
              </p>

              <h3 className="text-base font-semibold text-white md:text-xl">
                {photo.title}
              </h3>

              <p className="mt-1 hidden text-xs leading-5 text-gray-300 md:block">
                {photo.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}