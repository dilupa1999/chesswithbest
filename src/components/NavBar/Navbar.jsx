import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-white bg-primary">
      <div className="container flex items-center justify-between px-4 py-5 mx-auto">
        {/* Logo */}
        <div className="text-xl font-bold">
          <a href="/">Logo</a>
        </div>

        {/* Hamburger Menu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block lg:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* Navbar Links */}
        <div
          className={`lg:flex lg:items-center lg:justify-center align-middle lg:space-x-6 lg:flex-row lg:static absolute top-[72px] left-0 w-full bg-blue-600 lg:w-auto lg:bg-transparent transition-all duration-300 ease-in-out ${
            isOpen ? "flex flex-col items-center" : "hidden"
          }`}
        >
          <a
            href="#home"
            className="block py-2 mt-2 text-center lg:py-0 lg:mt-0 hover:text-gray-200"
          >
            Home
          </a>
          <a
            href="#about-us"
            className="block py-2 mt-2 text-center lg:py-0 lg:mt-0 hover:text-gray-200"
          >
            About Us
          </a>
          <a
            href="#contact"
            className="block py-2 mt-2 text-center lg:py-0 lg:mt-0 hover:text-gray-200"
          >
            Contact Us
          </a>
          <a
            href="#courses"
            className="block py-2 mt-2 text-center lg:py-0 lg:mt-0 hover:text-gray-200"
          >
            Our Courses
          </a>
          <a
            href="#privacy"
            className="block py-2 mt-2 text-center lg:py-0 lg:mt-0 hover:text-gray-200"
          >
            Privacy & Policy
          </a>
          <a
            href="#teacher"
            className="block py-2 mt-2 text-center lg:py-0 lg:mt-0 hover:text-gray-200"
          >
            About Teacher
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
