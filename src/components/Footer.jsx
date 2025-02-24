import {
  faXTwitter,
  faGithub,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import IconButton from "./IconButton";

function Footer() {
  const icons = [
    {
      href: "https://wa.me/+2347030267087",
      icon: faWhatsapp,
    },
    {
      href: "https://x.com/stephanyoguocha",
      icon: faXTwitter,
    },
    {
      href: "https://github.com/stephany247",
      icon: faGithub,
    },
    {
      href: "https://www.linkedin.com/in/onyinye-oguocha/",
      icon: faLinkedinIn,
    },
    {
      href: "mailto:stephanieoguocha@gmail.com",
      icon: faEnvelope,
    },
  ];

  return (
    <footer className="w-full bg-dark-blue text-light-blue flex flex-col gap-4 sm:gap-8 items-center justify-center px-8 py-8 md:p-16">
      <p className="text-sm md:text-regular text-center">
        Designed and developed by Onyinye Oguocha
      </p>
      <div className="flex gap-4 items-center justify-center">
        {icons.map((iconData, index) => (
          <IconButton
            key={index}
            href={iconData.href}
            icon={iconData.icon}
            size="xl"
            className={`bg-light-blue p-2`}
          />
        ))}
      </div>
    </footer>
  );
}
export default Footer;
