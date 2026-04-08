import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/home" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
    { name: "Ask Me", path: "/ask" },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black/50 backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 sm:px-6 py-1 sm:py-4 text-white">
        <Link
          to="/home"
          className="text-xl sm:text-2xl font-bold tracking-tight bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent hover:opacity-90 transition-opacity animate-gradient"
        >
          Jace<span className="text-blue-500">.stack</span>
        </Link>

        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="relative text-sm font-medium text-gray-300 hover:text-white transition duration-300 group"
            >
              {link.name}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        <div className="md:hidden">
          {isOpen ? (
            <FiX
              size={24}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer hover:text-blue-400 transition"
            />
          ) : (
            <FiMenu
              size={24}
              onClick={() => setIsOpen(true)}
              className="cursor-pointer hover:text-blue-400 transition"
            />
          )}
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/10 shadow-xl">
          <ul className="flex flex-col items-center py-4 space-y-3 text-gray-300">
            {navLinks.map((link) => (
              <li key={link.name} className="w-full text-center">
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block text-sm font-medium hover:text-blue-400 hover:bg-white/5 py-2 px-4 rounded-lg transition-all duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
