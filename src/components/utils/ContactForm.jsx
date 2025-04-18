import { useEffect, useState } from "react";
import Modal from "./Modal";
import ContactIcons from "./ContactIcons";

function InputField({ type, name, id, placeholder, value, onChange, error }) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label htmlFor={id} className="capitalize ml-2 font-semibold">{name}</label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full h-5/6 bg-light-blue text-neutral-0 dark:text-neutral-900 bg-opacity-100 hover:bg-light-blue/80 transition duration-150 ease-in-out rounded-lg p-3 focus:outline focus:outline-inset focus:outline-neutral-200 focus:ring-2 ring-neutral-600 ring-inset ${
          error ? "border-2 border-red-400" : ""
        }`}
      />
      {error && <span className="text-red-400">{error}</span>}
    </div>
  );
}

function ContactForm({ selectedButton }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      message: `Subject: ${selectedButton}\n`,
    }));
  }, [selectedButton]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Immediate email validation
    if (name === "email") {
      if (!/\S+@\S+\.\S+/.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "Email is invalid",
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "",
        }));
      }
    } else if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "", // Clear the error for the specific field
      }));
    }

    setIsSubmitted(false); // Reset the success message when user starts typing
  };

  const handleInput = () => {
    setIsSubmitted(false); // Reset the success message when user uses autocomplete
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formData.message) tempErrors.message = "Message is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Handle form submission (e.g., send data to server)
      setIsSubmitted(true);
      // Reset form inputs
      setFormData({
        name: "",
        email: "",
        message: `Subject: ${selectedButton}. \n`,
      });
      // Clear errors
      setErrors({});

      // Construct the WhatsApp message
      const whatsappMessage = `Hello, my name is ${formData.name}. You can contact me at ${formData.email}. I am interested in ${selectedButton}.\n Here is my message:\n\n ${formData.message}.`;

      // WhatsApp API URL
      const whatsappURL = `https://wa.me/+2347030267087?text=${encodeURIComponent(
        whatsappMessage
      )}`;

      // Redirect to WhatsApp
      window.open(whatsappURL, "_blank");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="md:col-span-2 flex flex-col gap-4 w-full h-full"
    >
      <InputField
        type="text"
        name="name"
        id="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        onInput={handleInput}
        error={errors.name}
      />
      <InputField
        type="text"
        name="email"
        id="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        onInput={handleInput}
        error={errors.email}
      />
      <div className="flex flex-col gap-1 w-full">
        <label htmlFor="message" className="ml-2 font-semibold">Message</label>
        <textarea
          name="message"
          placeholder="Your Message"
          id="message"
          value={formData.message}
          onChange={handleChange}
          onInput={handleInput}
          rows="3"
          className={`w-full h-full bg-light-blue text-neutral-0 dark:text-neutral-900 bg-opacity-100 hover:hover:bg-light-blue/85 transition duration-150 ease-in-out rounded-lg p-3 focus:outline focus:outline-inset focus:outline-neutral-200 focus:ring-2 ring-neutral-600 ring-inset ${
            errors.message ? "border-2 border-red-400" : ""
          }`}
        />
        {errors.message && (
          <span className="text-red-400">{errors.message}</span>
        )}
      </div>
      <button
        type="submit"
        className="bg-dark-blue dark:bg-purple text-white uppercase text-semibold py-3 px-20 mt-4 rounded-lg drop-shadow-md cursor-pointer hover:bg-dark-blue/90 hover:dark:bg-purple/90 transition duration-200 ease-in-out"
      >
        Submit
      </button>
      <ContactIcons />
      <Modal isOpen={isSubmitted} onClose={() => setIsSubmitted(false)}>
        <p>Form submitted successfully!</p>
      </Modal>
    </form>
  );
}

export default ContactForm;
