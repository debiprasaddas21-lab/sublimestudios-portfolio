export default function About() {
  const specialties = [
    "Wildlife Photography",
    "Macro Photography",
    "Landscape Photography",
    "Geological Photography",
  ];

  return (
    <section id="about" className="bg-[#111111] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Image Placeholder */}
        <div className="w-full h-[500px] rounded-3xl bg-zinc-800 flex items-center justify-center">
          <span className="text-gray-500 text-lg">
            Portrait Placeholder
          </span>
        </div>

        {/* Content */}
        <div>

          <p className="uppercase tracking-[4px] text-orange-500 text-sm">
            About Me
          </p>

          <h2 className="text-5xl font-bold mt-4 leading-tight">
            Capturing Nature Through Science & Art
          </h2>

          <p className="text-gray-400 mt-8 leading-8">
            I'm a photographer and geologist passionate about documenting
            landscapes, wildlife, and the intricate beauty of minerals.
            Through Sublime Studios, I combine scientific observation with
            creative storytelling to create images that inspire curiosity.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-10">
            {specialties.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="text-orange-500">✔</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <button className="mt-10 bg-orange-600 hover:bg-orange-700 transition px-8 py-3 rounded-full font-medium">
            Download Portfolio
          </button>

        </div>
      </div>
    </section>
  );
}