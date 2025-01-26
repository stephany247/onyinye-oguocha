function InputField({ type, name, placeholder, value, onChange, error }) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full h-12 bg-light-blue text-neutral-0 bg-opacity-100 hover:bg-opacity-65 transition duration-150 ease-in-out rounded-lg p-3 focus:outline focus:outline-inset focus:outline-neutral-200 focus:ring-2 ring-neutral-600 ring-inset ${
          error ? "border-2 border-red-400" : ""
        }`}
      />
      {error && <span className="text-red-400">{error}</span>}
    </div>
  );
}

export default InputField;
