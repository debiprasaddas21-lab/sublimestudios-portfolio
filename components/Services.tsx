import Link from "next/link";

const services = [
  {
    icon: "🏔",
    title: "Landscape Photography",
    description:
      "Capturing majestic landscapes with cinematic composition and natural light.",
    link: "/services/landscape",
  },
  {
    icon: "🦅",
    title: "Wildlife Photography",
    description:
      "Documenting wildlife with patience, ethics, and storytelling",
    link: "/services/wildlife",
  },
  {
    icon: "🔬",
    title: "Macro Photography",
    description:
      "Revealing the hidden beauty of minerals, insects, and microscopic textures.",
    link: "#",
  },
  {
    icon: "🧭",
    title: "Expedition Documentation",
    description:
      "Visual storytelling from geological surveys, expeditions, and remote locations.",
    link: "#",
  },
  {
    icon: "📸",
    title: "Commercial Photography",
    description:
      "Professional imagery for brands, tourism, and promotional campaigns.",
    link: "#",
  },
  {
    icon: "🖼️",
    title: "Fine Art Prints",
    description:
      "Museum-quality prints available for homes, offices, and collectors.",
    link: "#",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-black px-5 py-16 text-white sm:px-6 sm:py-20 md:px-10 lg:px-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* =====================================================
            SECTION HEADING
        ====================================================== */}

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-[10px] font-medium tracking-[0.35em] text-orange-500 sm:text-xs md:text-sm md:tracking-[0.4em]">
            SERVICES
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:mt-4 md:text-5xl">
            What I Offer
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-400 sm:mt-6 sm:text-base sm:leading-7">
            Photography services crafted for individuals, brands,
            publications, researchers, and explorers.
          </p>

        </div>


        {/* =====================================================
            SERVICES GRID
        ====================================================== */}

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:mt-16 lg:grid-cols-3 lg:gap-8">

          {services.map((service) => (

            <Link
              key={service.title}
              href={service.link}
              className="group block h-full"
            >

              <div
                className="
                  flex
                  h-full
                  flex-col
                  rounded-2xl
                  border
                  border-zinc-800
                  bg-zinc-900
                  p-6
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:border-orange-500
                  sm:p-7
                  lg:p-8
                "
              >

                {/* Icon */}
                <div
                  className="
                    origin-left
                    text-4xl
                    transition
                    duration-300
                    group-hover:scale-110
                    sm:text-5xl
                  "
                >
                  {service.icon}
                </div>


                {/* Title */}
                <h3 className="mt-5 text-xl font-semibold leading-snug sm:mt-6 sm:text-2xl">
                  {service.title}
                </h3>


                {/* Description */}
                <p className="mt-3 text-sm leading-6 text-gray-400 sm:mt-4 sm:text-base sm:leading-7">
                  {service.description}
                </p>


                {/* Explore Indicator */}
                <div
                  className="
                    mt-auto
                    pt-5
                    text-sm
                    font-medium
                    text-orange-500
                    transition
                    duration-300
                    sm:pt-6
                    sm:opacity-0
                    sm:translate-y-2
                    sm:group-hover:translate-y-0
                    sm:group-hover:opacity-100
                  "
                >
                  Explore Collection →
                </div>

              </div>

            </Link>

          ))}

        </div>

      </div>
    </section>
  );
}