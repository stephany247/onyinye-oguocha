import { FaGithub, FaLinkedinIn } from "react-icons/fa"; // Import icons from react-icons
import { FaXTwitter } from "react-icons/fa6";

import IconButton from "./IconButton";

function ContactIcons() {
  const icons = [
    {
      href: "https://x.com/stephanyoguocha",
      icon: <FaXTwitter />, // Use react-icons component
    },
    {
      href: "https://github.com/stephany247",
      icon: <FaGithub />, // Use react-icons component
    },
    {
      href: "https://www.linkedin.com/in/onyinye-oguocha/",
      icon: <FaLinkedinIn />, // Use react-icons component
    },
  ];

  return (
    <div className="flex gap-8 items-center justify-center md:col-span-2 md:col-end-6">
      {icons.map((iconData, index) => (
        <IconButton
          key={index}
          href={iconData.href}
          icon={iconData.icon}
          size="1.8rem"
          className="p-3 dark:text-white dark:border-white hover:scale-105"
        />
      ))}
    </div>
  );
}

export default ContactIcons;
