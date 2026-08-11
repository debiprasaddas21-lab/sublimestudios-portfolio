import Link from "next/link";

const services = [
  {
    title: "Landscape Photography",
    description:
      "Capturing majestic landscapes with cinematic composition and natural light.",
    image: "/services/landscape/landscape-07.jpg",
    link: "/services/landscape",
  },
  {
    title: "Wildlife Photography",
    description:
      "Documenting wildlife with patience, ethics, and storytelling.",
    image: "/services/wildlife/wildlife-02.jpg",
    link: "/services/wildlife",
  },
  {
    title: "Macro Photography",
    description:
      "Revealing the hidden beauty of minerals, insects, and microscopic textures.",
    image: "/services/macro/macro-13.webp",
    link: "/services/macro",
  },
  {
    title: "Culture & Festivals",
    description:
      "Capturing traditions, celebrations, rituals, and the spiritual moments that bring communities together.",
    image: "/services/culture/culture-06.jpg",
    link: "/services/culture",
  },
  {
    title: "Commercial Photography",
    description:
      "Professional imagery for brands, tourism, and promotional campaigns.",
    image: "/services/commercial/commercial-01.jpg",
    link: "#",
  },
  {
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


        {/* Photography Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => (

            <Link
              key={service.title}
              href={service.link}
              className="group relative block h-[390px] overflow-hidden rounded-2xl border border-white/10 bg-zinc-900"
            >

              {/* Background Photograph */}
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


              {/* Cinematic Overlay */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black
                  via-black/45
                  to-black/5
                  transition-all
                  duration-500
                  group-hover:via-black/55
                "
              />


              {/* Subtle Overall Darkening */}
              <div
                className="
                  absolute
                  inset-0
                  bg-black/10
                  transition
                  duration-500
                  group-hover:bg-black/20
                "
              />


              {/* Content */}
              <div
                className="
                  absolute
                  inset-x-0
                  bottom-0
                  z-10
                  p-7
                  md:p-8
                "
              >

                {/* Category */}
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-orange-400">
                  Photography
                </p>


                {/* Title */}
                <h3 className="text-2xl font-semibold leading-tight text-white md:text-3xl">
                  {service.title}
                </h3>


                {/* Description */}
                <p
                  className="
                    mt-3
                    max-w-md
                    text-sm
                    leading-6
                    text-gray-200
                    md:text-base
                  "
                >
                  {service.description}
                </p>


                {/* Explore Button */}
                <div
                  className="
                    mt-5
                    inline-flex
                    translate-y-2
                    items-center
                    text-sm
                    font-medium
                    text-orange-400
                    opacity-0
                    transition-all
                    duration-300
                    group-hover:translate-y-0
                    group-hover:opacity-100
                  "
                >
                  Explore Collection
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>

              </div>


              {/* Hover Border */}
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