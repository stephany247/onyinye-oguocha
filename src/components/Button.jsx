function Button({ text, gradientClass, textColorClass, customPadding }) {
  return (
    <div
      className={`p-[3px] rounded-2xl w-fit inline-block drop-shadow-md ${gradientClass}`}
    >
      <button
        className={`${textColorClass} uppercase text-bold-20 ${
          customPadding ? customPadding : "py-2 px-4 md:py-3 md:px-5"
        } rounded-2xl`}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
