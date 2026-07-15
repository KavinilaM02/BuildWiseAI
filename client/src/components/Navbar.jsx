import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-[#0B1120]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="text-white text-2xl">
        </div>
        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-xl font-bold text-white shadow-lg shadow-cyan-500/30">
            B
          </div>

          <div>
            <h1 className="text-xl font-bold text-white">
              BuildWise AI
            </h1>

            <p className="text-xs text-gray-400">
              AI Project Mentor
            </p>
          </div>

        </div>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">

          <a
            href="#"
            className="text-gray-300 transition duration-300 hover:text-cyan-400"
          >
            Home
          </a>

          <a
            href="#features"
            className="text-gray-300 transition duration-300 hover:text-cyan-400"
          >
            Features
          </a>

          <a
            href="#roadmap"
            className="text-gray-300 transition duration-300 hover:text-cyan-400"
          >
            Roadmaps
          </a>

          <a
            href="#about"
            className="text-gray-300 transition duration-300 hover:text-cyan-400"
          >
            About
          </a>

        </div>

        {/* Right Side */}
        <div className="hidden items-center gap-4 md:flex">

          
          <Link
      to="/login"
      className="text-gray-300 transition hover:text-white"
       >
      Login
</Link>

          <button
  onClick={() =>
    document
      .getElementById("roadmap")
      ?.scrollIntoView({ behavior: "smooth" })
  }
  className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2 font-semibold text-white transition duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/40"
>
  Get Started
</button>

        </div>

        {/* Mobile Menu Icon */}
        <button className="text-white md:hidden">
          <Menu size={28} />
        </button>

      </div>
    </nav>
  );
};

export default Navbar;