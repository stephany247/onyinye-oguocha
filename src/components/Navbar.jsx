import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import { Icon } from "@iconify/react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      {/* Blurred backdrop effect */}
      <div
        className={`fixed inset-0 z-10 w-full h-20 backdrop-blur-sm transition-all duration-300 ${
          isMenuOpen ? "bg-opacity-30" : "bg-opacity-0"
        }`}
        // style={{ pointerEvents: isMenuOpen ? "auto" : "none" }}
      >
        <nav className="flex items-center justify-between md:justify-center md:gap-6 z-10 max-w-screen-sm mx-auto md:mx-auto mt-6 mb-12 w-10/12 px-4 py-3 bg-custom-gradient3 rounded-full text-semibold-20 text-sm sm:text-base uppercase text-white backdrop-blur-md">
          <button className="flex gap-3 items-center justify-center rounded-3xl p-1 md:px-1 md:py-1 bg-light-purple">
            <Icon
              icon="material-symbols:dark-mode-outline"
              width="1.5em"
              height="1.5em"
              style={{ color: "391c3a" }}
              className="size-4/12"
            />
            <Icon
              icon="lets-icons:sun-light"
              width="1.5em"
              height="1.5em"
              style={{ color: "391c3a" }}
              className="size-4/12"
            />
          </button>
          <ul
            className={`${
              isMenuOpen
                ? "flex flex-col justify-start items-center p-4 bg-custom-gradient3 rounded-3xl fixed top-16 left-0 right-0 mx-auto md:mx-auto w-12/12"
                : "hidden"
            } md:flex gap-4`}
          >
            <li className="">
              <a href="#home" className="text-white">
                Home
              </a>
            </li>
            <li className="">
              <a href="#about-section" className="text-white">
                About
              </a>
            </li>
            <li className="">
              <a href="#portfolio-section" className="text-white">
                Portfolio
              </a>
            </li>
            <li className="">
              <a href="#contact-section" className="text-white">
                Contact
              </a>
            </li>
          </ul>
          <div className="flex md:hidden items-center gap-3">
            <span className="block">Menu</span>
            <button
              className="flex items-center"
              aria-label="Toggle menu"
              onClick={toggleMenu}
            >
              <Icon
                icon={!isMenuOpen ? "ci:hamburger-md" : "hugeicons:cancel-01"}
                width="2em"
                height="2em"
              />
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
