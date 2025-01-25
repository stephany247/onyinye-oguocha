import {
  faXTwitter,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import IconButton from "./IconButton";

function ContactIcons() {
  const icons = [
    {
      href: "mailto:stephanieoguocha@gmail.com",
      icon: faXTwitter,
    },
    {
      href: "https://github.com/stephany247",
      icon: faGithub,
    },
    {
      href: "https://www.linkedin.com/in/stephany247",
      icon: faLinkedinIn,
    },
  ];

  return (
    <div className="flex gap-8 items-center justify-center md:col-span-2 md:col-end-6">
      {icons.map((iconData, index) => (
        <IconButton key={index} href={iconData.href} icon={iconData.icon} className={`p-4`} />
      ))}
    </div>
  );
}
export default ContactIcons;
