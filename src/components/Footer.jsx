import {
  faXTwitter,
  faGithub,
  faLinkedinIn,
  faInstagram,
  faFacebook,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
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
      href: "www.linkedin.com/in/onyinye-oguocha",
      icon: faLinkedinIn,
    },
    {
      href: "https://www.instagram.com/stephanyoguocha?igsh=eG14MGhqaDBoNHh5&utm_source=qr",
      icon: faInstagram,
    },
  ];

  return (
    <footer className="w-full bg-dark-blue text-light-blue flex flex-col gap-8 items-center justify-center px-8 py-8 md:p-16">
      <p className="text-regular md:text-semibold-20 text-center">
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
