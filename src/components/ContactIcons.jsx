import {
  faXTwitter,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import IconButton from "./IconButton";

function ContactIcons() {
  const icons = [
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
  ];

  return (
    <div className="flex gap-8 items-center justify-center md:col-span-2 md:col-end-6">
      {icons.map((iconData, index) => (
        <IconButton key={index} href={iconData.href} icon={iconData.icon} className={`p-3 dark:text-white dark:border-white`} />
      ))}
    </div>
  );
}
export default ContactIcons;
