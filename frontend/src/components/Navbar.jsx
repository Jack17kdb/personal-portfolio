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
  ];

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3 text-white">
        <Link
          to="/hero"
          className="text-2xl font-bold tracking-tight bg-gradient-to-r from-blue-400 via-cyan-400 to-green-300 bg-clip-text text-transparent hover:opacity-90 transition-opacity"
        >
          Jace<span className="text-blue-500">.stack</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="relative text-sm font-medium text-gray-300 hover:text-white transition duration-300 group"
            >
              {link.name}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        <div className="md:hidden">
          {isOpen ? (
            <FiX
              size={22}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer hover:text-blue-400 transition"
            />
          ) : (
            <FiMenu
              size={22}
              onClick={() => setIsOpen(true)}
              className="cursor-pointer hover:text-blue-400 transition"
            />
          )}
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-lg border-t border-white/10">
          <ul className="flex flex-col items-center py-4 space-y-3 text-gray-300">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium hover:text-blue-400 transition-colors"
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
