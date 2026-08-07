export default function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-[#121212] py-24 px-6 text-white"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold text-center">
          Featured Collections
        </h2>

        <p className="text-center text-gray-400 mt-5 max-w-2xl mx-auto">
          A curated selection of my favourite work from microscopic mineral
          textures to expansive landscapes.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-16">

          <div className="h-96 rounded-2xl bg-zinc-800 hover:scale-[1.02] transition duration-300"></div>

          <div className="space-y-6">

            <div className="h-44 rounded-2xl bg-zinc-800 hover:scale-[1.02] transition duration-300"></div>

            <div className="h-44 rounded-2xl bg-zinc-800 hover:scale-[1.02] transition duration-300"></div>

          </div>

          <div className="space-y-6">

            <div className="h-44 rounded-2xl bg-zinc-800 hover:scale-[1.02] transition duration-300"></div>

            <div className="h-44 rounded-2xl bg-zinc-800 hover:scale-[1.02] transition duration-300"></div>

          </div>

        </div>

      </div>
    </section>
  );
}