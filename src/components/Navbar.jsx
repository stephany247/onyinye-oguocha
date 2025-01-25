import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import { Icon } from "@iconify/react";


function Navbar() {
  return (
    <nav className="flex items-center justify-between max-w-screen-lg mx-auto mt-8 mb-12 w-full py-4 px-6 bg-custom-gradient3 rounded-3xl text-semibold-20 uppercase text-white">
      <div className="">Onyinye Oguocha </div>
      <ul className="flex space-x-4">
        {/* <li className="text-black capitalize">Oguocha Onyinye</li> */}
        <li className="">Home</li>
        <li>Technologies</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <button className="flex gap-3 place-items-center rounded-3xl px-3 py-2 bg-light-purple">
        {/* <FontAwesomeIcon icon={faMoon} style={{ color: "#391c3a" }} />{" "} */}
        {/* <FontAwesomeIcon icon={faSun} style={{ color: "#391c3a" }} /> */}
        <Icon icon="material-symbols:dark-mode-outline" width="1.5em" height="1.5em"  style={{color: '391c3a'}} />
        <Icon icon="lets-icons:sun-light" width="1.5em" height="1.5em"  style={{color: '391c3a'}} />
      </button>
    </nav>
  );
}

export default Navbar;
