import {
  SiReact,
  SiNextdotjs,
  SiVercel,
  SiGithub,
} from "react-icons/si";

type BrandProps = {
  name: string;
  image?: string;
  icon?: React.ReactNode;
};

function Brand({ name, image, icon }: BrandProps) {
  return (
    <div
      className="
        group
        flex
        min-w-[76px]
        flex-col
        items-center
        justify-center
        gap-2
      "
    >
      {/* Logo */}

      <div
        className="
          flex
          h-10
          w-20
          items-center
          justify-center
        "
      >
        {image ? (
          <img
            src={image}
            alt={name}
            className="
              max-h-9
              max-w-[72px]
              w-auto
              object-contain
              opacity-55
              grayscale
              transition-all
              duration-300
              group-hover:scale-110
              group-hover:opacity-100
              group-hover:grayscale-0
            "
          />
        ) : (
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
        )}
      </div>

      {/* Brand name */}

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
            SUBLIME STUDIOS
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
              BRAND CATEGORIES
          ================================================== */}

          <div
            className="
              mt-12
              grid
              grid-cols-2
              gap-x-6
              gap-y-14
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
                  gap-5
                "
              >

                <Brand
                  name="Sony"
                  image="/brands/sony.png"
                />

                <Brand
                  name="Redmi"
                  image="/brands/redmi.png"
                />

                <Brand
                  name="OnePlus"
                  image="/brands/oneplus.png"
                />

                <Brand
                  name="DJI"
                  image="/brands/dji.png"
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
                  gap-5
                "
              >

                <Brand
                  name="Hollyland"
                  image="/brands/hollyland.png"
                />

                <Brand
                  name="Digitek"
                  image="/brands/digitek.png"
                />

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
                  gap-5
                "
              >

                <Brand
                  name="Photoshop"
                  image="/brands/photoshop.png"
                />

                <Brand
                  name="Lightroom"
                  image="/brands/lightroom.png"
                />

                <Brand
                  name="Premiere Pro"
                  image="/brands/premiere-pro.png"
                />

                <Brand
                  name="DaVinci Resolve"
                  image="/brands/davinci.png"
                />

                <Brand
                  name="YouCut"
                  image="/brands/youcut.png"
                />

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
                  gap-5
                "
              >

                <Brand
                  name="ChatGPT"
                  image="/brands/chatgpt.png"
                />

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