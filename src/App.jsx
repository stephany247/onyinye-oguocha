import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Contact from "./components/sections/ContactSection";
import Portfolio from "./components/sections/Portfolio";
import Footer from "./components/sections/Footer";
import { IoArrowUpCircle } from "react-icons/io5";

function App() {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkmode] = useState(false);
  const [showButton, setShowButton] = useState(false);

  function toggleDarkMode() {
    setDarkmode(!darkMode);
  }

  // Apply the dark class to the <body> element
  useEffect(() => {
    const htmlElement = document.documentElement; // Get the <html> element
    if (darkMode) {
      htmlElement.setAttribute("data-theme", "dark");
    } else {
      htmlElement.setAttribute("data-theme", "light");
    }
  }, [darkMode]);

  // Show the button when the user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="font-poppins text-blue-dark dark:text-white">
        {/* <header className="w-full bg-light-blue stic top-0"> */}
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        {/* </header> */}
        <main className="">
          <Hero />
          <About />
          <Portfolio />
          <Contact />
        </main>
        <Footer />
        {/* Back to Top Button */}
        {showButton && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-10 text-white text-semibold h-12 w-12 rounded-full shadow-lg hover:bg-medium-purple dark:hover:bg-purple2 transition duration-300 ease-in-out flex items-center justify-center cursor-pointer"
            aria-label="Back to Top"
          >
            {/* ↑ */}
            <IoArrowUpCircle className="size-full text-purple dark:text-white" />
          </button>
        )}
      </div>
    </>
  );
}

export default App;
