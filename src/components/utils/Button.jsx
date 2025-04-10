function Button({ text, gradientClass, textColorClass, customPadding, onClick }) {
  return (
    <div
      className={`p-[3px] rounded-2xl w-fit inline-block drop-shadow-md cursor-pointer hover:opacity-90 active:opacity-80 transition duration-200 ${gradientClass}`}
    >
      <button
        className={`uppercase text-sm text-semibold md:text-semibold text-nowrap rounded-2xl cursor-pointer transition duration-200 ${textColorClass} ${
          customPadding ? customPadding : "py-2 px-4 md:py-2 md:px-4"
        }`}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
