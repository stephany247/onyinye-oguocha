import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function IconButton({ href, icon, size = "2xl", className }) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className={`text-dark-blue rounded-full border-2 border-dark-blue inline-flex items-center justify-center ${className}`}
    >
      <FontAwesomeIcon icon={icon} size={size} />
    </a>
  );
}

export default IconButton;
