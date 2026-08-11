"use client";

import ImageLoader from "@/components/ImageLoader";

export default function FinePrintsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* =====================================================
          BACKGROUND IMAGE
      ====================================================== */}

      <div className="absolute inset-0">

        <ImageLoader
          src="/services/fineprints/fineprints-02.jpg"
          alt="Fine Art and Cultural Art"
          className="h-full w-full"
          imageClassName="
            h-full
            w-full
            object-cover
            object-center
          "
        />

        {/* Dark Cinematic Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Subtle Gradient */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-black/75
            via-black/45
            to-black/85
          "
        />

      </div>


      {/* =====================================================
          CONTENT
      ====================================================== */}

      <section
        className="
          relative
          z-10
          flex
          min-h-screen
          items-center
          px-6
          py-32
          md:px-10
          lg:px-16
        "
      >

        <div className="mx-auto w-full max-w-5xl text-center">

          {/* Eyebrow */}

          <p
            className="
              text-xs
              font-medium
              tracking-[0.45em]
              text-orange-400
              md:text-sm
            "
          >
            SUBLIME STUDIOS
          </p>


          {/* Main Heading */}

          <h1
            className="
              mt-6
              text-5xl
              font-bold
              tracking-tight
              text-white
              md:text-7xl
              lg:text-8xl
            "
          >
            Coming Soon
          </h1>


          {/* Decorative Line */}

          <div className="mx-auto mt-8 h-px w-20 bg-orange-500" />


          {/* Main Message */}

          <p
            className="
              mx-auto
              mt-10
              max-w-3xl
              text-base
              leading-8
              text-gray-200
              md:text-lg
              md:leading-9
            "
          >
            Team Sublime is working to bring you a carefully curated
            collection of printed photographs, fine art, Mandala art,
            Pattachitra, and other traditional and contemporary artworks
            from across India, created by skilled human artists and artisans.
          </p>


          {/* Philosophy */}

          <p
            className="
              mx-auto
              mt-6
              max-w-3xl
              text-base
              leading-8
              text-gray-300
              md:text-lg
              md:leading-9
            "
          >
            We believe art carries the story of its creator. Our goal is to
            make authentic, human-made art more accessible while giving
            artists, photographers, painters, and artisans a platform to
            showcase and sell their work.
          </p>


          {/* Artist Invitation */}

          <div
            className="
              mx-auto
              mt-12
              max-w-2xl
              rounded-2xl
              border
              border-white/15
              bg-black/30
              px-7
              py-8
              backdrop-blur-md
              md:px-10
            "
          >

            <p
              className="
                text-xs
                font-medium
                tracking-[0.3em]
                text-orange-400
              "
            >
              ARE YOU AN ARTIST?
            </p>

            <h2
              className="
                mt-4
                text-2xl
                font-semibold
                text-white
                md:text-3xl
              "
            >
              Let us showcase your art
            </h2>

            <p
              className="
                mt-4
                text-sm
                leading-7
                text-gray-300
                md:text-base
              "
            >
              If you are an artist, photographer, painter, or artisan and
              would like to showcase and sell your work through Sublime
              Studios, we would love to hear from you.
            </p>

            <a
              href="mailto:debiprasaddas21@gmail.com?subject=Art%20Submission%20for%20Sublime%20Studios"
              className="
                mt-7
                inline-flex
                items-center
                rounded-full
                bg-orange-600
                px-7
                py-3
                text-sm
                font-semibold
                text-white
                transition
                duration-300
                hover:bg-orange-500
              "
            >
              Contact Sublime Studios
            </a>

          </div>


          {/* Bottom Note */}

          <p
            className="
              mt-10
              text-xs
              tracking-[0.2em]
              text-gray-400
            "
          >
            AUTHENTIC • HUMAN • ORIGINAL
          </p>

        </div>

      </section>

    </main>
  );
}