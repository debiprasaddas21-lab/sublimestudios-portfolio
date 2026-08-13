"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  const [goldenLogo, setGoldenLogo] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(isHomePage);

  /*
  ============================================================
  LOGO WHITE / GOLDEN ANIMATION
  ============================================================
  */

  useEffect(() => {
    const logoInterval = setInterval(() => {
      setGoldenLogo((prev) => !prev);
    }, 4000);

    return () => clearInterval(logoInterval);
  }, []);


  /*
  ============================================================
  PAGE CHANGE
  ============================================================
  */

  useEffect(() => {
    if (isHomePage) {
      setShowNavbar(true);
      setMenuOpen(false);
    } else {
      setShowNavbar(false);
      setMenuOpen(false);
    }
  }, [isHomePage]);


  /*
  ============================================================
  HIDDEN NAVBAR DETECTION
  ============================================================
  
  On internal pages:
  
  Move cursor near the top
        ↓
  Navbar appears
  
  Move cursor away
        ↓
  Navbar hides
  ============================================================
  */

  useEffect(() => {
    if (isHomePage) return;

    const handleMouseMove = (event: MouseEvent) => {
      const mouseY = event.clientY;

      /*
      Top trigger zone
      */

      if (mouseY <= 45) {
        setShowNavbar(true);
        return;
      }

      /*
      Give the user enough room to move
      from the trigger area into the navbar.
      */

      if (mouseY > 95 && !menuOpen) {
        setShowNavbar(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isHomePage, menuOpen]);


  /*
  ============================================================
  MOBILE TOP EDGE DETECTION
  ============================================================
  */

  useEffect(() => {
    if (isHomePage) return;

    const handleTouchStart = (event: TouchEvent) => {
      const touch = event.touches[0];

      if (!touch) return;

      if (touch.clientY <= 70) {
        setShowNavbar(true);
      }
    };

    window.addEventListener("touchstart", handleTouchStart);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
    };
  }, [isHomePage]);


  /*
  ============================================================
  NAVIGATION
  ============================================================
  */

  const handleNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    /*
    ------------------------------------------------------------
    HOMEPAGE
    ------------------------------------------------------------
    */

    if (isHomePage) {
      event.preventDefault();

      const target = document.querySelector(targetId);

      if (!target) return;

      setMenuOpen(false);
      setIsTransitioning(true);

      setTimeout(() => {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        setTimeout(() => {
          setIsTransitioning(false);
        }, 350);
      }, 100);

      return;
    }

    /*
    ------------------------------------------------------------
    INTERNAL PAGES
    ------------------------------------------------------------
    
    Let the browser navigate normally to the homepage section.
    ------------------------------------------------------------
    */

    setMenuOpen(false);
    setIsTransitioning(true);
  };


  /*
  ============================================================
  LINKS
  ============================================================
  */

  const homeLink = isHomePage ? "#home" : "/#home";
  const galleryLink = isHomePage ? "#gallery" : "/#gallery";
  const aboutLink = isHomePage ? "#about" : "/#about";
  const servicesLink = isHomePage ? "#services" : "/#services";
  const contactLink = isHomePage ? "#contact" : "/#contact";


  return (
    <>
      {/* ======================================================
          CINEMATIC TRANSITION OVERLAY
      ======================================================= */}

      <div
        className={`
          fixed
          inset-0
          z-[100]
          pointer-events-none
          backdrop-blur-[2px]
          bg-black/10
          transition-all
          duration-300
          ${
            isTransitioning
              ? "opacity-100"
              : "opacity-0"
          }
        `}
      />


      {/* ======================================================
          TOP EDGE TRIGGER
          
          Only exists on internal pages.
      ======================================================= */}

      {!isHomePage && !showNavbar && (
        <div
          className="
            fixed
            left-0
            top-0
            z-[49]
            h-10
            w-full
          "
          aria-hidden="true"
        />
      )}


      {/* ======================================================
          NAVBAR
      ======================================================= */}

      <header
        className={`
          fixed
          top-0
          left-0
          z-50
          w-full
          border-b
          border-white/10
          bg-black/80
          backdrop-blur-sm
          transition-transform
          duration-500
          ease-[cubic-bezier(0.22,0.8,0.2,1)]
          ${
            showNavbar || isHomePage
              ? "translate-y-0"
              : "-translate-y-full"
          }
        `}
      >

        <div className="flex h-[72px] items-center justify-between px-4 sm:px-6 lg:px-8">


          {/* ==================================================
              LOGO
          =================================================== */}

          <a
            href={homeLink}
            onClick={(event) =>
              handleNavigation(event, "#home")
            }
            className="
              relative
              flex
              items-center
              gap-2
              sm:gap-3
            "
          >

            {/* White Logo */}

            <img
              src="/logo.png"
              alt="Sublime Studios Logo"
              className={`
                h-9
                w-9
                object-contain
                transition-opacity
                duration-700
                sm:h-10
                sm:w-10
                ${
                  goldenLogo
                    ? "opacity-0"
                    : "opacity-100"
                }
              `}
            />


            {/* Golden Logo */}

            <img
              src="/logo_golden.png"
              alt=""
              aria-hidden="true"
              className={`
                absolute
                left-0
                h-9
                w-9
                object-contain
                transition-opacity
                duration-700
                sm:h-10
                sm:w-10
                ${
                  goldenLogo
                    ? "opacity-100"
                    : "opacity-0"
                }
              `}
            />


            {/* Studio Name */}

            <span
              className="
                whitespace-nowrap
                text-sm
                font-semibold
                tracking-[0.18em]
                text-white
                sm:text-lg
                sm:tracking-[0.3em]
              "
            >
              SUBLIME STUDIOS
            </span>

          </a>


          {/* ==================================================
              DESKTOP NAVIGATION
          =================================================== */}

          <nav className="hidden items-center gap-7 md:flex lg:gap-10">

            <a
              href={homeLink}
              onClick={(event) =>
                handleNavigation(event, "#home")
              }
              className="
                text-gray-300
                transition
                duration-300
                hover:text-orange-500
              "
            >
              Home
            </a>


            <a
              href={galleryLink}
              onClick={(event) =>
                handleNavigation(event, "#gallery")
              }
              className="
                text-gray-300
                transition
                duration-300
                hover:text-orange-500
              "
            >
              Collections
            </a>


            <a
              href={aboutLink}
              onClick={(event) =>
                handleNavigation(event, "#about")
              }
              className="
                text-gray-300
                transition
                duration-300
                hover:text-orange-500
              "
            >
              About
            </a>


            <a
              href={servicesLink}
              onClick={(event) =>
                handleNavigation(event, "#services")
              }
              className="
                text-gray-300
                transition
                duration-300
                hover:text-orange-500
              "
            >
              Services
            </a>


            <a
              href={contactLink}
              onClick={(event) =>
                handleNavigation(event, "#contact")
              }
              className="
                text-gray-300
                transition
                duration-300
                hover:text-orange-500
              "
            >
              Contact
            </a>

          </nav>


          {/* ==================================================
              MOBILE MENU BUTTON
          =================================================== */}

          <button
            type="button"
            onClick={() => {
              setMenuOpen((prev) => !prev);
              setShowNavbar(true);
            }}
            aria-label={
              menuOpen
                ? "Close menu"
                : "Open menu"
            }
            aria-expanded={menuOpen}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              text-white
              transition
              hover:border-orange-500
              hover:text-orange-500
              md:hidden
            "
          >
            <span className="text-xl">
              {menuOpen ? "×" : "☰"}
            </span>
          </button>

        </div>


        {/* ==================================================
            MOBILE NAVIGATION
        =================================================== */}

        <div
          className={`
            overflow-hidden
            border-t
            border-white/10
            bg-black/95
            backdrop-blur-md
            transition-all
            duration-300
            md:hidden
            ${
              menuOpen
                ? "max-h-[400px] opacity-100"
                : "max-h-0 border-t-transparent opacity-0"
            }
          `}
        >

          <nav className="flex flex-col px-6 py-4">


            <a
              href={homeLink}
              onClick={(event) =>
                handleNavigation(event, "#home")
              }
              className="
                border-b
                border-white/5
                py-4
                text-gray-300
                transition
                hover:text-orange-500
              "
            >
              Home
            </a>


            <a
              href={galleryLink}
              onClick={(event) =>
                handleNavigation(event, "#gallery")
              }
              className="
                border-b
                border-white/5
                py-4
                text-gray-300
                transition
                hover:text-orange-500
              "
            >
              Collections
            </a>


            <a
              href={aboutLink}
              onClick={(event) =>
                handleNavigation(event, "#about")
              }
              className="
                border-b
                border-white/5
                py-4
                text-gray-300
                transition
                hover:text-orange-500
              "
            >
              About
            </a>


            <a
              href={servicesLink}
              onClick={(event) =>
                handleNavigation(event, "#services")
              }
              className="
                border-b
                border-white/5
                py-4
                text-gray-300
                transition
                hover:text-orange-500
              "
            >
              Services
            </a>


            <a
              href={contactLink}
              onClick={(event) =>
                handleNavigation(event, "#contact")
              }
              className="
                py-4
                text-gray-300
                transition
                hover:text-orange-500
              "
            >
              Contact
            </a>

          </nav>

        </div>

      </header>
    </>
  );
}