function IconButton({ href, icon, size = "1.5em", className }) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className={`text-dark-blue rounded-full border-2 border-dark-blue inline-flex items-center justify-center transition duration-200 ease-in-out ${className}`}
    >
      <span style={{ fontSize: size }}>{icon}</span>
    </a>
  ); 
}

export default IconButton;
