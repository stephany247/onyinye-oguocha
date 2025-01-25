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

  // return (
  //   <nav className="flex items-center justify-between max-w-screen-lg mx-auto mt-8 mb-12 w-full py-4 px-6 bg-custom-gradient3 fixed z-10 rounded-3xl text-semibold-20 uppercase text-white">
  //     <div className="">Onyinye Oguocha </div>
  //     <div className="flex items-center gap-3 md:hidden">
  //       <button className="flex gap-3 place-items-center rounded-3xl px-3 py-2 bg-light-purple">
  //         <Icon
  //           icon="material-symbols:dark-mode-outline"
  //           width="1.5em"
  //           height="1.5em"
  //           style={{ color: "391c3a" }}
  //         />
  //         <Icon
  //           icon="lets-icons:sun-light"
  //           width="1.5em"
  //           height="1.5em"
  //           style={{ color: "391c3a" }}
  //         />
  //       </button>
  //       <button className="md:hidden flex items-center" onClick={toggleMenu}>
  //         <Icon
  //           icon="ci:hamburger-md"
  //           width="2em"
  //           height="2em"
  //           style={{ color: "#391c3a" }}
  //         />
  //       </button>
  //     </div>
  //     <ul className={`${isMenuOpen ? 'flex gap-4  bg-custom-gradient3 rounded-3xl fixed top-24 left-0' : 'hidden'} flex-col md:flex md:flex-row md:space-x-4 z-30 w-full p-4 md:bg-transparent md:p-0 md:space-y-8`}>
  //       <li className="">Home</li>
  //       <li className="">Technologies</li>
  //       <li className="">Portfolio</li>
  //       <li className="">Contact</li>
  //     </ul>
  //     <div className="hidden md:flex gap-3">
  //       <button className="flex gap-3 place-items-center rounded-3xl px-3 py-2 bg-light-purple">
  //         <Icon icon="material-symbols:dark-mode-outline" width="1.5em" height="1.5em" style={{ color: '#391c3a' }} />
  //         <Icon icon="lets-icons:sun-light" width="1.5em" height="1.5em" style={{ color: '#391c3a' }} />
  //       </button>
  //     </div>
  //   </nav>
  // );

  return (
    <div className="relative">
      {/* Blurred backdrop effect */}
      <div
        className={`fixed inset-0 z-10 w-full h-24 backdrop-blur-sm transition-all duration-300 ${
          isMenuOpen ? "bg-opacity-30" : "bg-opacity-0"
        }`}
        // style={{ pointerEvents: isMenuOpen ? "auto" : "none" }}
      >
      <nav
        className={`flex items-center justify-between ${
          isMenuOpen ? "fixed left-0 right-0" : "fixed left-0 right-0"
        } z-10 max-w-screen-lg mx-auto md:mx-auto mt-8 mb-12 w-11/12 px-4 py-3 md:py-4 md:px-6 bg-custom-gradient3 rounded-full text-semibold-20 text-base sm:text-base uppercase text-white backdrop-blur-md`}
      >
        <div className="">Onyinye Oguocha </div>
        <ul
          className={`${
            isMenuOpen
              ? "flex flex-col justify-start items-center p-4 bg-custom-gradient3 rounded-3xl fixed top-16 left-0 right-0 mx-auto md:mx-auto w-12/12"
              : "hidden"
          } md:flex gap-4`}
        >
          <li className="">Home</li>
          <li className="">Technologies</li>
          <li className="">Portfolio</li>
          <li className="">Contact</li>
        </ul>
        <div className="flex items-center gap-3">
          <button className="flex gap-3 items-center justify-center rounded-3xl p-1 md:px-2 md:py-2 bg-light-purple">
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
          <button
            className="md:hidden flex items-center"
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
