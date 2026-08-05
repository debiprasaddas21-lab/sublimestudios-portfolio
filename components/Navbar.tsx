export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        <a href="/" className="text-2xl font-bold text-white tracking-widest">
          SUBLIME STUDIOS
        </a>

        <nav className="flex gap-10">

          <a
            href="/"
            className="text-gray-300 hover:text-orange-500 transition duration-300"
          >
            Home
          </a>

          <a
            href="#portfolio"
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
