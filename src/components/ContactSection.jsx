import { useState } from "react";
import ContactIcons from "./ContactIcons";
import ContactForm from "./ContactForm";
// import ContactIcons from "./ContactIcons";

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
    <section className="w-full bg-light-purple dark:bg-blue-dark text-dark-blue dark:text-white" id="contact-section">
      <div className="max-w-screen-lg mx-8 lg:mx-auto pt-20 pb-36 items-start">
        <h1 className="capitalize text-h3">
          Let's work <span className="text-purple dark:text-purple2">together</span>
        </h1>
        <div className="grid md:grid-cols-5 md:gap-x-12 gap-y-12 md:gap-y-6">
          <div className="md:col-span-3">
            <p className="text-semibold-20 mb-2 mt-24">I'm interested in..</p>
            <div className="self-end">
              {buttons.map((button) => (
                <a
                  key={button}
                  className={`px-3 py-2 mt-6 mr-6 rounded-lg inline-block drop-shadow-md capitalize text-regular whitespace-nowrap ${
                    selectedButton === button
                      ? "bg-purple text-white border-2 border-purple"
                      : "bg-transparent text-blue-dark dark:text-white border-2 border-blue-dark dark:border-purple"
                  }`}
                  onClick={() => setSelectedButton(button)}
                >
                  {button}
                </a>
              ))}
            </div>
          </div>
          <ContactForm selectedButton={selectedButton} />
          <ContactIcons />
        </div>
      </div>
    </section>
  );
}
export default Contact;
