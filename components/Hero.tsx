export default function Hero() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center px-6">
        <p className="text-orange-500 uppercase tracking-[0.3em] mb-4">
          WELCOME TO SUBLIME STUDIOS
        </p>

        <h1 className="text-5xl md:text-7xl font-bold">
         Capturing Earth's Extraordinary Stories
        </h1>

        <p className="mt-6 text-xl text-gray-300">
          A Creative initiative by a Geologist • Photographer • Explorer
        </p>

        <p className="mt-6 max-w-2xl mx-auto text-gray-400 leading-8">
          Capturing Earth's stories through scientific exploration and
          photography from microscopic mineral textures to breathtaking
          landscapes.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="bg-orange-600 hover:bg-orange-700 px-6 py-3 rounded-lg font-semibold transition">
            Explore Portfolio
          </button>

          <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
}