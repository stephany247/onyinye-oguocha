import { useState } from "react";
import ContactIcons from "../utils/ContactIcons";
import ContactForm from "../utils/ContactForm";

function Contact() {
  const [selectedButton, setSelectedButton] = useState("E-commerce Website");

  const buttons = [
    "E-commerce Website",
    "Saas Website",
    "Landing Page",
    "Portfolio",
    "Blog Website",
  ];

  return (
    <section className="w-full px-6 bg-light-purple dark:bg-blue-dark text-dark-blue dark:text-white" id="contact-section">
      <div className="max-w-6xl mx-8 lg:mx-auto pt-20 pb-16 items-start">
        <h1 className="capitalize text-h3">
          Let's work <span className="text-purple dark:text-purple2">together</span>
        </h1>
        <div className="grid md:grid-cols-5 md:gap-x-2 gap-y-12 md:gap-y-6">
          <div className="md:col-span-3">
            <p className="text-bold mb-2 mt-24">I'm interested in..</p>
            <div className="self-end max-w-4/5">
              {buttons.map((button) => (
                <a
                  key={button}
                  className={`px-3 py-2 mt-4 mr-4 md:mt-6 md:mr-6 rounded-lg inline-block drop-shadow-md capitalize text-base md:text-regular whitespace-nowrap cursor-pointer transition duration-200 ease-in-out ${
                    selectedButton === button
                      ? "bg-purple text-white border-2 border-purple"
                      : "bg-transparent text-blue-dark hover:text-purple dark:text-white dark:hover:text-purple2 border-2 border-blue-dark hover:border-purple dark:border-purple dark:hover:border-purple2"
                  }`}
                  onClick={() => setSelectedButton(button)}
                >
                  {button}
                </a>
              ))}
            </div>
          </div>
          <ContactForm selectedButton={selectedButton} />
        </div>
      </div>
    </section>
  );
}
export default Contact;
