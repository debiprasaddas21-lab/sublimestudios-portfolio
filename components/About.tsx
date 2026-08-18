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

        <div className="w-full max-w-2xl">

          {/* Eyebrow */}
          <p className="mb-5 text-[10px] font-medium tracking-[0.3em] text-amber-400 sm:mb-6 sm:text-xs sm:tracking-[0.4em]">
            ABOUT ME
          </p>


          {/* Heading */}
          <h2 className="text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl md:text-5xl">
            Capturing Nature Through
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Science &amp; Art
          </h2>


          {/* Description */}
          <p className="mt-6 text-base leading-7 text-gray-300 sm:mt-8 sm:text-lg sm:leading-9">
            I'm a photographer and geologist with a passion for documenting
            landscapes, wildlife, culture, and the intricate beauty of the
            natural world. Through Sublime Studios, I combine scientific
            observation with creative storytelling to create images that
            invite curiosity and connection.
          </p>


          {/* Photography Categories */}
          <div className="mt-7 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-5">

            {/* Wildlife */}
            <div className="flex items-center gap-3">
              <span className="text-lg text-orange-500 sm:text-xl">
                ✓
              </span>

              <span className="text-sm text-white sm:text-base">
                Wildlife Photography
              </span>
            </div>


            {/* Macro */}
            <div className="flex items-center gap-3">
              <span className="text-lg text-orange-500 sm:text-xl">
                ✓
              </span>

              <span className="text-sm text-white sm:text-base">
                Macro Photography
              </span>
            </div>


            {/* Landscape */}
            <div className="flex items-center gap-3">
              <span className="text-lg text-orange-500 sm:text-xl">
                ✓
              </span>

              <span className="text-sm text-white sm:text-base">
                Landscape Photography
              </span>
            </div>


            {/* Geological */}
            <div className="flex items-center gap-3">
              <span className="text-lg text-orange-500 sm:text-xl">
                ✓
              </span>

              <span className="text-sm text-white sm:text-base">
                Geological Photography
              </span>
            </div>

          </div>


          {/* Portfolio Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center">

            {/* View Portfolio */}
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


            {/* Download Portfolio */}
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

        <div className="flex w-full items-center justify-center lg:justify-end">

          <div
            className="
              group
              relative
              w-full
              max-w-[620px]
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-zinc-950
            "
          >

            {/* Photograph */}
            <img
              src="/about/photo-05.png"
              alt="Sublime Studios photographer"
              className="
                block
                h-auto
                max-h-[720px]
                w-full
                object-cover
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
                from-black/30
                via-transparent
                to-transparent
              "
            />


            {/* Subtle Golden Edge */}
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