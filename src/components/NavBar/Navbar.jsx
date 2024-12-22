import { useState, useEffect } from "react";
import { FaFacebookF, FaTwitter, FaWhatsapp, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "/img/img1.jpg",
    "/img/img5.jpg",
    "/img/img3.jpg",
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);
    return () => clearInterval(sliderInterval);
  }, [images.length]);

  return (
    <div>
      <section className="relative text-white bg-center bg-cover" style={{ backgroundImage: `url('${images[currentImage]}')`,transition: "background-image 1s ease-in-out",}} >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <footer className="absolute w-full py-4 top-5">
            <div className="flex justify-center mb-2 space-x-8">
              <a href="" className="text-white hover:text-gray-300">
                <FaFacebookF size={24} />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <FaWhatsapp size={24} />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <FaInstagram size={24} />
              </a>
            </div>
            <hr className="w-4/5 px-5 py-8 mx-auto mt-5"/>
          </footer>
          <header className="relative z-10 w-full py-6 text-sm bg-black bg-opacity-0 top-10">
            <nav className="max-w-[85rem] w-full mx-auto px-4 flex items-center justify-center relative">
              <button
                onClick={toggleMenu}
                className="absolute mb-8 text-white left-4 sm:hidden focus:outline-none"
              >
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>

              <div
                className={`${
                  isOpen ? "block" : "hidden"
                } sm:flex sm:items-center sm:space-x-8 text-center lg:space-x-48 mt-8 `}
              >
                <a
                  className="block py-2 text-xl font-normal sm:inline-block sm:py-0"
                  href="#"
                >
                  Home
                </a>
                <a
                  className="block py-2 text-xl font-normal sm:inline-block sm:py-0"
                  href="#"
                >
                  About Us
                </a>
                <a
                  className="block py-2 text-xl font-normal sm:inline-block sm:py-0"
                  href="#"
                >
                  Contact Us
                </a>
                <a
                  className="block py-2 text-xl font-normal sm:inline-block sm:py-0"
                  href="#"
                >
                  Our Services
                </a>
                <a
                  className="block py-2 text-xl font-normal sm:inline-block sm:py-0"
                  href="#"
                >
                  Pages
                </a>
              </div>
            </nav>
          </header>
     
        </div>
      </section>
    </div>
  );
};

export default Navbar;