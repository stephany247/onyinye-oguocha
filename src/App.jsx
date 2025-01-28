import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/ContactSection";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkmode] = useState(false);

  function toggleDarkMode() {
    setDarkmode(!darkMode);
  }

  return (
    <>
    <div className={`${darkMode && "dark"} bg-light-blue dark:bg-dark-blue font-poppins text-blue-dark dark:text-white`}>
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
      </div>
    </>
  );
}

export default App;
