import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="">
        <Hero />
        <About />
        <Portfolio />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
