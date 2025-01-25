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
      href: "https://www.facebook.com/yourprofile",
      icon: faWhatsapp,
    },
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
    {
      href: "https://www.instagram.com/yourprofile",
      icon: faInstagram,
    },
  ];

  return (
    <footer className="w-full bg-dark-blue text-light-blue flex flex-col gap-8 items-center justify-center px-8 py-8 md:p-16">
      {/* <p>© 2021</p> */}
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
