import Link from "next/link";

const services = [
  {
    category: "LANDSCAPES & NATURE",
    title: "Landscape Photography",
    description:
      "Capturing majestic landscapes with cinematic composition and natural light.",
    image: "/services/landscape/landscape-07.jpg",
    link: "/services/landscape",
  },
  {
    category: "WILDLIFE & CONSERVATION",
    title: "Wildlife Photography",
    description:
      "Documenting wildlife with patience, ethics, and storytelling.",
    image: "/services/wildlife/wildlife-02.jpg",
    link: "/services/wildlife",
  },
  {
    category: "DETAILS & DISCOVERY",
    title: "Macro Photography",
    description:
      "Revealing the hidden beauty of minerals, insects, and microscopic textures.",
    image: "/services/macro/macro-13.webp",
    link: "/services/macro",
  },
  {
    category: "TRADITIONS & DEVOTION",
    title: "Culture & Festivals",
    description:
      "Capturing traditions, celebrations, rituals, and the spiritual moments that bring communities together.",
    image: "/services/culture/culture-06.jpg",
    link: "/services/culture",
  },
  {
    category: "BRANDS & BUSINESS",
    title: "Commercial Photography",
    description:
      "Professional imagery for brands, tourism, and promotional campaigns.",
    image: "/services/commercial/commercial-01.jpg",
    link: "#",
  },
  {
    category: "ART & HERITAGE",
    title: "Fine Art Prints",
    description:
      "Museum-quality prints available for homes, offices, and collectors.",
    image: "/services/fineprints/fineprints-01.jpg",
    link: "#",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-black px-6 py-24 text-white md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="text-center">

          <p className="text-sm font-medium tracking-[0.4em] text-orange-500">
            SERVICES
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            What I Offer
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            Photography services crafted for individuals, brands,
            publications, researchers, and explorers.
          </p>

        </div>


        {/* Services Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => (

            <Link
              key={service.title}
              href={service.link}
              className="
                group
                relative
                block
                h-[390px]
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-zinc-900
              "
            >

              {/* Background Image */}
              <img
                src={service.image}
                alt={service.title}
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


              {/* Cinematic Gradient */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-b
                  from-black/65
                  via-black/20
                  to-black/75
                  transition
                  duration-500
                  group-hover:from-black/70
                  group-hover:to-black/80
                "
              />


              {/* Content */}
              <div
                className="
                  absolute
                  inset-x-0
                  top-0
                  z-10
                  p-7
                  md:p-8
                "
              >

                {/* Unique Category Label */}
                <p
                  className="
                    text-xs
                    font-medium
                    tracking-[0.28em]
                    text-orange-400
                  "
                >
                  {service.category}
                </p>


                {/* Title */}
                <h3
                  className="
                    mt-4
                    max-w-lg
                    text-2xl
                    font-semibold
                    leading-tight
                    text-white
                    md:text-3xl
                  "
                >
                  {service.title}
                </h3>


                {/* Description */}
                <p
                  className="
                    mt-4
                    max-w-md
                    text-sm
                    leading-6
                    text-gray-200
                    md:text-base
                  "
                >
                  {service.description}
                </p>


                {/* Explore Collection */}
                <div
                  className="
                    mt-6
                    inline-flex
                    items-center
                    text-sm
                    font-medium
                    text-orange-400
                    opacity-0
                    translate-y-2
                    transition-all
                    duration-300
                    group-hover:translate-y-0
                    group-hover:opacity-100
                  "
                >
                  <span>
                    Explore Collection
                  </span>

                  <span
                    className="
                      ml-2
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  >
                    →
                  </span>
                </div>

              </div>


              {/* Subtle Hover Border */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  rounded-2xl
                  border
                  border-transparent
                  transition
                  duration-500
                  group-hover:border-orange-500/70
                "
              />

            </Link>

          ))}

        </div>

      </div>
    </section>
  );
}