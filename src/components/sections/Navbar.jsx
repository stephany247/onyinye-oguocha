import { RiMoonLine } from "react-icons/ri";
import { WiDaySunny } from "react-icons/wi";
import { Icon } from "@iconify/react";

const navItems = [
  { href: "#about-section", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#portfolio-section", label: "Portfolio" },
  { href: "#contact-section", label: "Contact" },
];

function Navbar({ darkMode, toggleDarkMode, isMenuOpen, setIsMenuOpen }) {

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative z-50">
      {/* Blurred backdrop effect */}
      <div
        className={`fixed inset-0 z-10 w-full h-20 backdrop-blur-sm transition-all duration-300 ${
          isMenuOpen ? "bg-opacity-30" : "bg-opacity-0"
        }`}
      >
        <nav className="relative flex items-center justify-between md:justify-center md:gap-16 z-10 max-w-screen-sm mx-auto md:mx-auto mt-6 w-10/12 px-4 py-3 bg-gradient-to-r from-purple from-60% to-dark-blue to-100% rounded-full text-semibold text-sm sm:text-base uppercase text-white backdrop-blur-md">
          <button
            className="flex gap-3 items-center justify-center rounded-3xl p-1 md:px-1 md:py-1 bg-light-purple cursor-pointer"
            onClick={toggleDarkMode}
          >
            {darkMode ? (
              <RiMoonLine
                style={{ color: "391c3a" }}
                size={"1.5em"}
                className="transition-transform hover:animate-rotate-12"
              />
            ) : (
              <WiDaySunny
                size={"1.5em"}
                style={{ color: "391c3a" }}
                className="transition-transform hover:animate-scale-sun"
              />
            )}
          </button>
          <ul
            className={`${
              isMenuOpen
                ? "flex flex-col justify-start items-center gap-y-4 p-4 bg-gradient-to-r from-purple from-60% to-dark-blue to-100% rounded-3xl fixed top-20 left-0 right-0 mx-auto md:mx-auto w-10/12 transition duration-400 ease-in-out"
                : "hidden"
            } md:flex gap-4`}
          >
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex md:hidden items-center gap-3">
            <span className="block">Menu</span>
            <button
              className="flex items-center cursor-pointer"
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
