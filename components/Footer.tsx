import {
  SiSony,
  SiDji,
  SiReact,
  SiNextdotjs,
  SiVercel,
  SiGithub,
} from "react-icons/si";

type BrandProps = {
  name: string;
  icon?: React.ReactNode;
};

function Brand({ name, icon }: BrandProps) {
  return (
    <div
      className="
        group
        flex
        min-w-[70px]
        flex-col
        items-center
        justify-center
        gap-2
      "
    >
      {icon ? (
        <div
          className="
            text-3xl
            text-gray-500
            transition-all
            duration-300
            group-hover:scale-110
            group-hover:text-orange-500
          "
        >
          {icon}
        </div>
      ) : (
        <div
          className="
            flex
            h-8
            items-center
            text-sm
            font-semibold
            tracking-tight
            text-gray-500
            transition-all
            duration-300
            group-hover:text-orange-500
          "
        >
          {name}
        </div>
      )}

      <span
        className="
          text-[9px]
          font-medium
          tracking-[0.15em]
          text-gray-600
          transition-colors
          duration-300
          group-hover:text-gray-400
        "
      >
        {name}
      </span>
    </div>
  );
}


export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">

      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-16">


        {/* =====================================================
            BRAND
        ====================================================== */}

        <div className="text-center">

          <div className="flex justify-center">
            <img
              src="/logo_golden.png"
              alt="Sublime Studios"
              className="h-14 w-14 object-contain"
            />
          </div>

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

          <p
            className="
              mx-auto
              mt-5
              max-w-xl
              text-sm
              leading-7
              text-gray-500
            "
          >
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
              tracking-[0.5em]
              text-orange-500
            "
          >
            CRAFTED WITH
          </p>


          <div className="mx-auto mt-8 h-px max-w-5xl bg-white/10" />


          {/* =================================================
              FOUR CATEGORIES
          ================================================== */}

          <div
            className="
              mt-12
              grid
              grid-cols-2
              gap-12
              md:grid-cols-4
              md:gap-8
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
                  tracking-[0.4em]
                  text-gray-500
                "
              >
                VISUALS
              </h3>

              <div
                className="
                  mt-8
                  flex
                  flex-wrap
                  items-start
                  justify-center
                  gap-6
                "
              >

                <Brand
                  name="Sony"
                  icon={<SiSony />}
                />

                <Brand name="Redmi" />

                <Brand name="OnePlus" />

                <Brand
                  name="DJI"
                  icon={<SiDji />}
                />

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
                  tracking-[0.4em]
                  text-gray-500
                "
              >
                SOUND
              </h3>

              <div
                className="
                  mt-8
                  flex
                  flex-wrap
                  items-start
                  justify-center
                  gap-6
                "
              >

                <Brand name="Hollyland" />

                <Brand name="Digitek" />

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
                  tracking-[0.4em]
                  text-gray-500
                "
              >
                EDITING
              </h3>

              <div
                className="
                  mt-8
                  flex
                  flex-wrap
                  items-start
                  justify-center
                  gap-6
                "
              >

                <Brand name="Photoshop" />

                <Brand name="Lightroom" />

                <Brand name="Premiere Pro" />

                <Brand name="DaVinci Resolve" />

                <Brand name="YouCut" />

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
                  tracking-[0.4em]
                  text-gray-500
                "
              >
                TECHNOLOGY
              </h3>

              <div
                className="
                  mt-8
                  flex
                  flex-wrap
                  items-start
                  justify-center
                  gap-6
                "
              >

                <Brand name="ChatGPT" />

                <Brand
                  name="React"
                  icon={<SiReact />}
                />

                <Brand
                  name="Next.js"
                  icon={<SiNextdotjs />}
                />

                <Brand
                  name="Vercel"
                  icon={<SiVercel />}
                />

                <Brand
                  name="GitHub"
                  icon={<SiGithub />}
                />

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

          <p
            className="
              mx-auto
              mt-3
              max-w-3xl
              text-[10px]
              leading-6
              text-gray-600
            "
          >
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