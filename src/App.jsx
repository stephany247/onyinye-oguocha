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

  return (
    <>
      {/* <header className="w-full bg-light-blue stic top-0"> */}
        <Navbar />
      {/* </header> */}
      <main className="">
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
