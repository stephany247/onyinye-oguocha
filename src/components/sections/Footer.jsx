import {
  faXTwitter,
  faGithub,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FaGithub, FaLinkedinIn, FaWhatsapp  } from "react-icons/fa"; // Import icons from react-icons
import { FaXTwitter, FaRegEnvelope } from "react-icons/fa6";
import IconButton from "../utils/IconButton";

function Footer() {
  const icons = [
    {
      href: "https://wa.me/+2347030267087",
      icon: <FaWhatsapp />,
    },
    {
      href: "https://x.com/stephanyoguocha",
      icon: <FaXTwitter />,
    },
    {
      href: "https://github.com/stephany247",
      icon: <FaGithub />,
    },
    {
      href: "https://www.linkedin.com/in/onyinye-oguocha/",
      icon: <FaLinkedinIn />,
    },
    {
      href: "mailto:stephanieoguocha@gmail.com",
      icon: <FaRegEnvelope />,
    },
  ];

  return (
    <footer className="w-full bg-dark-blue text-light-blue flex flex-col gap-4 sm:gap-6 items-center justify-center px-8 py-4 md:p-10">
      <p className="text-sm md:text-regular text-center">
        Designed and developed by <a href="https://onyinye-oguocha.vercel.app/" className="underline">Onyinye Oguocha</a>
      </p>
      <div className="flex gap-4 items-center justify-center">
        {icons.map((iconData, index) => (
          <IconButton
            key={index}
            href={iconData.href}
            icon={iconData.icon}
            size="1.5rem"
            className={`bg-light-blue p-2`}
          />
        ))}
      </div>
    </footer>
  );
}
export default Footer;
