const services = [
  {
    icon: "🏔",
    title: "Landscape Photography",
    description:
      "Capturing majestic landscapes with cinematic composition and natural light.",
  },
  {
    icon: "🦅",
    title: "Wildlife Photography",
    description:
      "Documenting wildlife with patience, ethics, and storytelling.",
  },
  {
    icon: "🔬",
    title: "Macro Photography",
    description:
      "Revealing the hidden beauty of minerals, insects, and microscopic textures.",
  },
  {
    icon: "🧭",
    title: "Expedition Documentation",
    description:
      "Visual storytelling from geological surveys, expeditions, and remote locations.",
  },
  {
    icon: "📸",
    title: "Commercial Photography",
    description:
      "Professional imagery for brands, tourism, and promotional campaigns.",
  },
  {
    icon: "🖼️",
    title: "Fine Art Prints",
    description:
      "Museum-quality prints available for homes, offices, and collectors.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <p className="uppercase tracking-[5px] text-orange-500 text-sm">
            Services
          </p>

          <h2 className="text-5xl font-bold mt-4">
            What I Offer
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6">
            Photography services crafted for individuals, brands,
            publications, researchers, and explorers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 hover:border-orange-500 hover:-translate-y-2 transition duration-300"
            >
              <div className="text-5xl">
                {service.icon}
              </div>

              <h3 className="text-2xl font-semibold mt-6">
                {service.title}
              </h3>

              <p className="text-gray-400 mt-4 leading-7">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}