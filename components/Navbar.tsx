"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [goldenLogo, setGoldenLogo] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const logoInterval = setInterval(() => {
      setGoldenLogo((prev) => !prev);
    }, 4000);

    return () => clearInterval(logoInterval);
  }, []);

  const handleNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
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
  };

  return (
    <>
      {/* Cinematic Transition Overlay */}
      <div
        className={`fixed inset-0 z-[100] pointer-events-none backdrop-blur-[2px] bg-black/10 transition-all duration-300 ${
          isTransitioning ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Navbar */}
      <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-sm">

        <div className="flex h-[72px] items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* Logo */}
          <a
            href="#home"
            onClick={(event) => handleNavigation(event, "#home")}
            className="relative flex items-center gap-2 sm:gap-3"
          >

            {/* White Logo */}
            <img
              src="/logo.png"
              alt="Sublime Studios Logo"
              className={`h-9 w-9 sm:h-10 sm:w-10 object-contain transition-opacity duration-700 ${
                goldenLogo ? "opacity-0" : "opacity-100"
              }`}
            />

            {/* Golden Logo */}
            <img
              src="/logo_golden.png"
              alt=""
              aria-hidden="true"
              className={`absolute left-0 h-9 w-9 sm:h-10 sm:w-10 object-contain transition-opacity duration-700 ${
                goldenLogo ? "opacity-100" : "opacity-0"
              }`}
            />

            {/* Studio Name */}
            <span className="text-sm sm:text-lg font-semibold tracking-[0.18em] sm:tracking-[0.3em] text-white whitespace-nowrap">
              SUBLIME STUDIOS
            </span>

          </a>


          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-10">

            <a
              href="#home"
              onClick={(event) => handleNavigation(event, "#home")}
              className="text-gray-300 hover:text-orange-500 transition duration-300"
            >
              Home
            </a>

            <a
              href="#gallery"
              onClick={(event) => handleNavigation(event, "#gallery")}
              className="text-gray-300 hover:text-orange-500 transition duration-300"
            >
              Portfolio
            </a>

            <a
              href="#about"
              onClick={(event) => handleNavigation(event, "#about")}
              className="text-gray-300 hover:text-orange-500 transition duration-300"
            >
              About
            </a>

            <a
              href="#services"
              onClick={(event) => handleNavigation(event, "#services")}
              className="text-gray-300 hover:text-orange-500 transition duration-300"
            >
              Services
            </a>

            <a
              href="#contact"
              onClick={(event) => handleNavigation(event, "#contact")}
              className="text-gray-300 hover:text-orange-500 transition duration-300"
            >
              Contact
            </a>

          </nav>


          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition hover:border-orange-500 hover:text-orange-500"
          >
            <span className="text-xl">
              {menuOpen ? "×" : "☰"}
            </span>
          </button>

        </div>


        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden border-t border-white/10 bg-black/95 backdrop-blur-md transition-all duration-300 ${
            menuOpen
              ? "max-h-[400px] opacity-100"
              : "max-h-0 opacity-0 border-t-transparent"
          }`}
        >

          <nav className="flex flex-col px-6 py-4">

            <a
              href="#home"
              onClick={(event) => handleNavigation(event, "#home")}
              className="border-b border-white/5 py-4 text-gray-300 transition hover:text-orange-500"
            >
              Home
            </a>

            <a
              href="#gallery"
              onClick={(event) => handleNavigation(event, "#gallery")}
              className="border-b border-white/5 py-4 text-gray-300 transition hover:text-orange-500"
            >
              Portfolio
            </a>

            <a
              href="#about"
              onClick={(event) => handleNavigation(event, "#about")}
              className="border-b border-white/5 py-4 text-gray-300 transition hover:text-orange-500"
            >
              About
            </a>

            <a
              href="#services"
              onClick={(event) => handleNavigation(event, "#services")}
              className="border-b border-white/5 py-4 text-gray-300 transition hover:text-orange-500"
            >
              Services
            </a>

            <a
              href="#contact"
              onClick={(event) => handleNavigation(event, "#contact")}
              className="py-4 text-gray-300 transition hover:text-orange-500"
            >
              Contact
            </a>

          </nav>

        </div>

      </header>
    </>
  );
}