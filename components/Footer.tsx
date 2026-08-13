export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">

      {/* =====================================================
          BRAND / INTRO
      ====================================================== */}

      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-16">

        <div className="text-center">

          {/* Logo */}

          <div className="flex justify-center">

            <img
              src="/logo_golden.png"
              alt="Sublime Studios"
              className="h-16 w-16 object-contain"
            />

          </div>


          {/* Brand */}

          <h2
            className="
              mt-5
              text-sm
              font-semibold
              tracking-[0.5em]
              text-white
            "
          >
            SUBLIME STUDIOS
          </h2>


          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-500">
            Photography shaped by curiosity, exploration and a deep
            appreciation for the world around us.
          </p>

        </div>


        {/* =====================================================
            CRAFTED WITH
        ====================================================== */}

        <div className="mt-16">

          <p
            className="
              text-center
              text-[10px]
              font-medium
              tracking-[0.45em]
              text-orange-500
            "
          >
            CRAFTED WITH
          </p>


          <div className="mx-auto mt-8 h-px max-w-5xl bg-white/10" />


          {/* =================================================
              BRAND GROUPS
          ================================================== */}

          <div
            className="
              mt-10
              grid
              gap-10
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >

            {/* =================================================
                VISUALS
            ================================================== */}

            <div className="text-center">

              <h3
                className="
                  text-[10px]
                  font-medium
                  tracking-[0.35em]
                  text-gray-500
                "
              >
                VISUALS
              </h3>

              <div
                className="
                  mt-6
                  flex
                  flex-wrap
                  items-center
                  justify-center
                  gap-x-6
                  gap-y-4
                "
              >

                <span className="text-sm font-semibold text-gray-300">
                  Sony
                </span>

                <span className="text-sm font-semibold text-gray-300">
                  Redmi
                </span>

                <span className="text-sm font-semibold text-gray-300">
                  OnePlus
                </span>

                <span className="text-sm font-semibold text-gray-300">
                  DJI
                </span>

              </div>

            </div>


            {/* =================================================
                SOUND
            ================================================== */}

            <div className="text-center">

              <h3
                className="
                  text-[10px]
                  font-medium
                  tracking-[0.35em]
                  text-gray-500
                "
              >
                SOUND
              </h3>

              <div
                className="
                  mt-6
                  flex
                  flex-wrap
                  items-center
                  justify-center
                  gap-x-6
                  gap-y-4
                "
              >

                <span className="text-sm font-semibold text-gray-300">
                  Hollyland
                </span>

                <span className="text-sm font-semibold text-gray-300">
                  Digitek
                </span>

              </div>

            </div>


            {/* =================================================
                EDITING
            ================================================== */}

            <div className="text-center">

              <h3
                className="
                  text-[10px]
                  font-medium
                  tracking-[0.35em]
                  text-gray-500
                "
              >
                EDITING
              </h3>

              <div
                className="
                  mt-6
                  flex
                  flex-wrap
                  items-center
                  justify-center
                  gap-x-5
                  gap-y-4
                "
              >

                <span className="text-sm font-semibold text-gray-300">
                  Photoshop
                </span>

                <span className="text-sm font-semibold text-gray-300">
                  Lightroom
                </span>

                <span className="text-sm font-semibold text-gray-300">
                  Premiere Pro
                </span>

                <span className="text-sm font-semibold text-gray-300">
                  DaVinci Resolve
                </span>

                <span className="text-sm font-semibold text-gray-300">
                  YouCut
                </span>

              </div>

            </div>


            {/* =================================================
                TECHNOLOGY
            ================================================== */}

            <div className="text-center">

              <h3
                className="
                  text-[10px]
                  font-medium
                  tracking-[0.35em]
                  text-gray-500
                "
              >
                TECHNOLOGY
              </h3>

              <div
                className="
                  mt-6
                  flex
                  flex-wrap
                  items-center
                  justify-center
                  gap-x-5
                  gap-y-4
                "
              >

                <span className="text-sm font-semibold text-gray-300">
                  ChatGPT
                </span>

                <span className="text-sm font-semibold text-gray-300">
                  React
                </span>

                <span className="text-sm font-semibold text-gray-300">
                  Next.js
                </span>

                <span className="text-sm font-semibold text-gray-300">
                  Vercel
                </span>

                <span className="text-sm font-semibold text-gray-300">
                  GitHub
                </span>

              </div>

            </div>

          </div>

        </div>


        {/* =====================================================
            COPYRIGHT
        ====================================================== */}

        <div className="mt-16 border-t border-white/10 pt-8 text-center">

          <p className="text-xs text-gray-500">
            © 2026 Sublime Studios. All Rights Reserved.
          </p>

          <p className="mx-auto mt-3 max-w-3xl text-[10px] leading-6 text-gray-600">
            All photographs, visual works, written content and original
            creative materials presented on this website are the property
            of Sublime Studios unless otherwise stated. Unauthorized
            reproduction, distribution, modification or commercial use
            is prohibited without prior written permission.
          </p>

        </div>

      </div>

    </footer>
  );
}