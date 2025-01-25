import { useState } from "react";
import ContactIcons from "./ContactIcons";
// import ContactIcons from "./ContactIcons";

function Contact() {
  const [selectedButton, setSelectedButton] = useState("E-commerce website");

  const buttons = [
    "E-commerce website",
    "Saas website",
    "Landing page",
    "Portfolio",
    "Blog website",
  ];

  return (
    <section className="w-full bg-light-purple text-dark-blue">
      <div className="max-w-screen-lg mx-auto pt-20 pb-36 items-start">
        <h1 className="capitalize text-h3">
          Let's work <span className="text-purple">together</span>
        </h1>
        <div className="grid grid-cols-5 gap-x-12 gap-y-6">
          <div className="col-span-3 grid">
            <p className="text-semibold-20 mb-2 mt-24">I'm interested in..</p>
            <div className="self-end">
              {buttons.map((button) => (
                <a
                  key={button}
                  className={`px-3 py-2 mt-6 mr-6 rounded-lg inline-block drop-shadow-md capitalize text-bold-20 whitespace-nowrap ${
                    selectedButton === button
                      ? "bg-purple text-white border-2 border-purple"
                      : "bg-transparent text-blue-dark border-2 border-blue-dark"
                  }`}
                  onClick={() => setSelectedButton(button)}
                >
                  {button}
                </a>
              ))}
            </div>
          </div>
          <form className="col-span-2 flex flex-col gap-6 w-full">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full h-10 bg-white text-blue-dark bg-opacity-65 hover:bg-opacity-85 transition duration-150 ease-in-out rounded-lg border p-3 focus:outline focus:outline-offset-2 focus:outline-blue-dark focus:ring-2 ring-blue-dark ring-offset"
            />
            <input
              type="text"
              placeholder="Your Email"
              className="w-full h-10 bg-light-blue text-neutral-0 bg-opacity-80 hover:bg-opacity-15 transition duration-150 ease-in-out rounded-lg border p-3 focus:outline focus:outline-inset-2 focus:outline-neutral-200 focus:ring-2 ring-neutral-900 ring-inset"
            />
            <textarea
              placeholder="Your Message"
              className="w-full h-full bg-light-blue text-neutral-0 bg-opacity-100 hover:bg-opacity-15 transition duration-150 ease-in-out rounded-lg border ${error ? 'border-red-400' : 'border-neutral-700'} p-3 focus:outline focus:outline-inset-2 focus:outline-neutral-200 focus:ring-2 ring-neutral-900 ring-inset"
            />
            <button
              type="submit"
              className="bg-dark-blue text-white uppercase text-bold-20 py-4 px-20 mt-4 rounded-lg drop-shadow-md"
            >
              Submit
            </button>
          </form>
          <ContactIcons />
        </div>
      </div>
    </section>
  );
}
export default Contact;
