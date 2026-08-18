"use client";

export default function About() {
  return (
    <section
      id="about"
      className="bg-black px-5 py-16 text-white sm:px-6 sm:py-20 md:px-10 lg:px-16 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:gap-16 lg:grid-cols-2 lg:gap-20">

        {/* =====================================================
            LEFT — ABOUT CONTENT
        ====================================================== */}

        <div className="order-2 lg:order-1">

          <p className="mb-5 text-[10px] font-medium tracking-[0.35em] text-amber-400 sm:text-xs sm:tracking-[0.4em]">
            ABOUT ME
          </p>

          <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Capturing Nature Through
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Science & Art
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-300 sm:text-lg sm:leading-9">
            I'm a photographer and geologist with a passion for documenting
            landscapes, wildlife, culture, and the intricate beauty of the
            natural world. Through Sublime Studios, I combine scientific
            observation with creative storytelling to create images that
            invite curiosity and connection.
          </p>

          {/* Photography Categories */}

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">

            <div className="flex items-center gap-3">
              <span className="text-orange-500">✓</span>
              <span>Wildlife Photography</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-orange-500">✓</span>
              <span>Macro Photography</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-orange-500">✓</span>
              <span>Landscape Photography</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-orange-500">✓</span>
              <span>Geological Photography</span>
            </div>

          </div>

          {/* Portfolio Buttons */}

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">

            <a
              href="/about/portfolio.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                px-6
                py-3
                text-sm
                font-semibold
                text-white
                transition
                duration-300
                hover:border-orange-500
                hover:text-orange-400
              "
            >
              View Portfolio
            </a>

            <a
              href="/about/portfolio.pdf"
              download
              className="
                inline-flex
                items-center
                justify-center
                rounded-full
                bg-orange-600
                px-6
                py-3
                text-sm
                font-semibold
                text-white
                transition
                duration-300
                hover:bg-orange-700
              "
            >
              Download Portfolio
            </a>

          </div>

        </div>

        {/* =====================================================
            RIGHT — FEATURE PHOTOGRAPH
        ====================================================== */}

        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">

          <div
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-white/10
            "
          >

            <img
              src="/about/photo-05.jpeg"
              alt="Sublime Studios photographer"
              className="
                h-auto
                w-auto
                max-h-[560px]
                max-w-full
                object-contain
                transition-transform
                duration-700
                ease-out
                group-hover:scale-[1.02]
              "
            />

            {/* Cinematic Overlay */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-t
                from-black/15
                via-transparent
                to-transparent
              "
            />

            {/* Golden Hover Border */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                rounded-3xl
                border
                border-transparent
                transition
                duration-500
                group-hover:border-orange-500/40
              "
            />

          </div>

        </div>

      </div>
    </section>
  );
}