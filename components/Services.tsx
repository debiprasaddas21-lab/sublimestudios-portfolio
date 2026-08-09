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
      "Documenting wildlife with patience, ethics, and storytelling.",
    link: "#",
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
    <section id="services" className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center">
          <p className="text-orange-500 tracking-[0.4em] text-sm font-medium">
            SERVICES
          </p>

          <h2 className="text-5xl font-bold mt-4">
            What I Offer
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6">
            Photography services crafted for individuals, brands,
            publications, researchers, and explorers.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {services.map((service) => (

            <Link
              key={service.title}
              href={service.link}
              className="group block"
            >

              <div
                className="
                  h-full
                  bg-zinc-900
                  rounded-2xl
                  p-8
                  border
                  border-zinc-800
                  cursor-pointer
                  hover:border-orange-500
                  hover:-translate-y-2
                  transition
                  duration-300
                "
              >

                {/* Icon */}
                <div className="text-5xl transition duration-300 group-hover:scale-110 origin-left">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold mt-6">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mt-4 leading-7">
                  {service.description}
                </p>

                {/* Explore indicator */}
                <div
                  className="
                    mt-6
                    text-orange-500
                    text-sm
                    font-medium
                    opacity-0
                    translate-y-2
                    group-hover:opacity-100
                    group-hover:translate-y-0
                    transition
                    duration-300
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