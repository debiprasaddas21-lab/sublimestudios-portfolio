"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [goldenLogo, setGoldenLogo] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGoldenLogo((prev) => !prev);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-sm">
      
      <div className="flex items-center justify-between px-4 py-2">

        {/* Logo */}
        <a
          href="#home"
          className="relative flex items-center gap-3"
        >

          {/* White Logo */}
          <img
            src="/logo.png"
            alt="Sublime Studios Logo"
            className={`h-10 w-10 object-contain transition-opacity duration-700 ${
              goldenLogo ? "opacity-0" : "opacity-100"
            }`}
          />

          {/* Golden Logo */}
          <img
            src="/logo_golden.png"
            alt=""
            aria-hidden="true"
            className={`absolute left-0 h-10 w-10 object-contain transition-opacity duration-700 ${
              goldenLogo ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Studio Name */}
          <span className="text-lg font-semibold tracking-[0.3em] text-white">
            SUBLIME STUDIOS
          </span>

        </a>

        {/* Navigation */}
        <nav className="flex gap-10">

          <a
            href="#home"
            className="text-gray-300 hover:text-orange-500 transition duration-300"
          >
            Home
          </a>

          <a
            href="#gallery"
            className="text-gray-300 hover:text-orange-500 transition duration-300"
          >
            Portfolio
          </a>

          <a
            href="#about"
            className="text-gray-300 hover:text-orange-500 transition duration-300"
          >
            About
          </a>

          <a
            href="#services"
            className="text-gray-300 hover:text-orange-500 transition duration-300"
          >
            Services
          </a>

          <a
            href="#contact"
            className="text-gray-300 hover:text-orange-500 transition duration-300"
          >
            Contact
          </a>

        </nav>

      </div>

    </header>
  );
}