export default function Navbar() {
  return (
    <header>
      <div className="flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="flex items-center"
        >
          <img
            src="/logo.png"
            alt="Sublime Studios"
            className="h-14 w-auto object-contain"
          />
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