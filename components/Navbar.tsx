"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  const [showNavbar, setShowNavbar] = useState(isHomePage);

  useEffect(() => {
    if (isHomePage) {
      setShowNavbar(true);
      return;
    }

    setShowNavbar(false);
  }, [isHomePage]);


  /*
  ============================================================
  DESKTOP TOP EDGE DETECTION
  ============================================================
  */

  useEffect(() => {
    if (isHomePage) return;

    const handleMouseMove = (event: MouseEvent) => {
      const topTrigger = 55;

      if (event.clientY <= topTrigger) {
        setShowNavbar(true);
      } else if (event.clientY > 110) {
        setShowNavbar(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isHomePage]);


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

      if (touch.clientY <= 80) {
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

  const navigation = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/#about",
    },
    {
      name: "Collections",
      href: "/#gallery",
    },
    {
      name: "Services",
      href: "/#services",
    },
    {
      name: "Contact",
      href: "/#contact",
    },
  ];


  return (
    <>
      {/* ======================================================
          TOP EDGE TRIGGER
      ======================================================= */}

      {!isHomePage && (
        <div
          className="
            fixed
            left-0
            top-0
            z-[9998]
            h-12
            w-full
          "
          onMouseEnter={() => setShowNavbar(true)}
        />
      )}


      {/* ======================================================
          NAVBAR
      ======================================================= */}

      <header
        className={`
          fixed
          left-0
          top-0
          z-[9999]
          w-full
          transition-transform
          duration-500
          ease-[cubic-bezier(0.22,0.8,0.2,1)]
          ${
            isHomePage || showNavbar
              ? "translate-y-0"
              : "-translate-y-full"
          }
        `}
        onMouseLeave={() => {
          if (!isHomePage) {
            setShowNavbar(false);
          }
        }}
      >

        <nav
          className="
            mx-auto
            flex
            h-20
            items-center
            justify-between
            border-b
            border-white/10
            bg-black/70
            px-6
            backdrop-blur-xl
            md:px-10
            lg:px-16
          "
        >

          {/* ==================================================
              LOGO
          =================================================== */}

          <Link
            href="/"
            className="
              group
              flex
              items-center
              gap-3
            "
          >

            <div className="relative h-10 w-10">

              <img
                src="/logo.png"
                alt="Sublime Studios"
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-contain
                  transition-opacity
                  duration-300
                  group-hover:opacity-0
                "
              />

              <img
                src="/logo_golden.png"
                alt=""
                aria-hidden="true"
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-contain
                  opacity-0
                  transition-opacity
                  duration-300
                  group-hover:opacity-100
                "
              />

            </div>


            <div className="hidden sm:block">

              <p
                className="
                  text-sm
                  font-semibold
                  tracking-[0.35em]
                  text-white
                "
              >
                SUBLIME
              </p>

              <p
                className="
                  text-[9px]
                  tracking-[0.45em]
                  text-gray-500
                "
              >
                STUDIOS
              </p>

            </div>

          </Link>


          {/* ==================================================
              DESKTOP NAVIGATION
          =================================================== */}

          <div className="hidden items-center gap-8 md:flex">

            {navigation.map((item) => {

              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : item.href.startsWith("/#")
                    ? pathname === "/"
                    : pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    relative
                    text-[11px]
                    font-medium
                    tracking-[0.22em]
                    transition-colors
                    duration-300
                    ${
                      isActive
                        ? "text-orange-400"
                        : "text-gray-300 hover:text-orange-400"
                    }
                  `}
                >

                  {item.name}

                  <span
                    className={`
                      absolute
                      -bottom-2
                      left-0
                      h-px
                      bg-orange-500
                      transition-all
                      duration-300
                      ${
                        isActive
                          ? "w-full"
                          : "w-0"
                      }
                    `}
                  />

                </Link>
              );
            })}

          </div>


          {/* ==================================================
              MOBILE MENU
          =================================================== */}

          <div className="flex items-center md:hidden">

            <Link
              href="/"
              className="
                text-[10px]
                font-medium
                tracking-[0.3em]
                text-gray-300
                transition-colors
                hover:text-orange-400
              "
            >
              HOME
            </Link>

          </div>

        </nav>

      </header>
    </>
  );
}