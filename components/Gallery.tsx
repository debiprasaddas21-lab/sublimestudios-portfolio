export default function Gallery() {
  const photos = [
    {
      src: "/gallery/photo-01.jpg",
      number: "01",
      title: "Nature in Detail",
      description:
        "Finding extraordinary forms in the smallest details.",
    },
    {
      src: "/gallery/photo-02.jpg",
      number: "02",
      title: "Architecture & Atmosphere",
      description:
        "Structures shaped by light, space and perspective.",
    },
    {
      src: "/gallery/photo-03.jpg",
      number: "03",
      title: "Life on the Land",
      description:
        "A quiet moment between people and the landscape.",
    },
    {
      src: "/gallery/photo-04.jpg",
      number: "04",
      title: "Wildlife",
      description:
        "A glimpse into the beauty of the wild.",
    },
    {
      src: "/gallery/photo-05.jpg",
      number: "05",
      title: "Quiet Encounters",
      description:
        "Small moments that often go unnoticed.",
    },
    {
      src: "/gallery/photo-06.jpg",
      number: "06",
      title: "Light & Solitude",
      description:
        "Finding beauty in ordinary surroundings.",
    },
  ];

  return (
    <section
      id="gallery"
      className="bg-black px-5 py-16 sm:px-6 sm:py-20 md:px-10 lg:px-16 lg:py-24"
    >

      {/* Section Heading */}
      <div className="mx-auto max-w-3xl text-center">

        <p className="text-[10px] font-medium tracking-[0.35em] text-amber-400 sm:text-xs md:text-sm">
          SELECTED WORK
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          Featured Collections
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
          A curated selection of my favourite work from nature,
          wildlife, landscapes and everyday moments.
        </p>

      </div>


      {/* =====================================================
          COLLAGE
      ====================================================== */}

      <div
        className="
          mx-auto
          mt-10
          grid
          max-w-6xl
          grid-cols-2
          grid-rows-3
          gap-2
          sm:gap-3
          md:mt-12
          md:grid-cols-3
          md:grid-rows-2
          md:gap-4
        "
      >

        {photos.map((photo) => (

          <div
            key={photo.src}
            className="
              group
              relative
              aspect-[4/5]
              overflow-hidden
              rounded-xl
              sm:aspect-[4/5]
              md:aspect-auto
              md:min-h-0
              md:h-[31vh]
            "
          >

            {/* Image */}
            <img
              src={photo.src}
              alt={photo.title}
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                transition-transform
                duration-700
                ease-out
                group-hover:scale-105
              "
            />


            {/* Dark Gradient */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/85
                via-black/20
                to-transparent
                opacity-80
                transition-opacity
                duration-500
                group-hover:opacity-100
              "
            />


            {/* Text */}
            <div
              className="
                absolute
                bottom-0
                left-0
                right-0
                p-3
                sm:p-4
                md:p-5
              "
            >

              {/* Number */}
              <p className="mb-1 text-[8px] font-medium tracking-[0.3em] text-amber-400 sm:text-[9px] md:text-[10px]">
                {photo.number}
              </p>


              {/* Title */}
              <h3 className="text-sm font-semibold leading-tight text-white sm:text-base md:text-xl">
                {photo.title}
              </h3>


              {/* Description */}
              <p className="mt-1 hidden text-xs leading-5 text-gray-300 sm:block">
                {photo.description}
              </p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}