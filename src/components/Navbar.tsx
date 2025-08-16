import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center text-lg font-bold">
            MyWebsite
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <a href="#" className="hover:text-gray-300">
              Home
            </a>
            <a href="#" className="hover:text-gray-300">
              About
            </a>
            <a href="#" className="hover:text-gray-300">
              Services
            </a>
            <a href="#" className="hover:text-gray-300">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-200 hover:text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-700 px-2 pt-2 pb-3 space-y-1">
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-600"
          >
            Home
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-600"
          >
            About
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-600"
          >
            Services
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-600"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
