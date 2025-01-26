import coder from "../assets/undraw-proud-coder-9prj.svg";
import Button1 from "./Button";

function Hero() {
  return (
      <section className="w-full bg-light-blue py-20 px-8 md:w-2/2 md:mx-auto lg:px-1 lg:w-11/12 lg:mx-auto xl:w-9/12 xl:mx-auto 2xl:w-7/12 2xl:px-0">
        <div className="grid grid-rows-2 md:grid-cols-2 md:grid-rows-none gap-4 justify-center items-center lg:justify-between lg:items-center">
          <div className="flex flex-col gap-8 mt-0 sm:mt-0 md:mt-32 2xl:mt-28">
            <h1 className="text-h2 sm:text-h1 text-purple uppercase">
              Frontend Developer
            </h1>
            <p className="text-semibold-20">
              I am Onyinye - a web developer with a passion for building
              beautiful and responsive websites and web apps.
            </p>
            {/* <button className="text-purple border-2 border-purple px-6 py-4 rounded-2xl mt-8 uppercase text-bold-20">View my work</button> */}
            <a href="#portfolio-section">
            <Button1
              text="View my work"
              gradientClass="bg-custom-gradient1"
              textColorClass="bg-light-blue text-purple"
            />
            </a>
          </div>
          <img src={coder} className="size-full md:mt-20"></img>
        </div>
      </section>
  );
}
export default Hero;
