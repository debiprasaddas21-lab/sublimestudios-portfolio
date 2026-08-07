export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold text-white tracking-widest"
        >
          SUBLIME STUDIOS
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