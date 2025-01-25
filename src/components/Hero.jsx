import coder from "../assets/undraw-proud-coder-9prj.svg";
import Button1 from "./Button";

function Hero() {
  return (
      <section className="w-full bg-light-blue py-20 xl:w-5/5 2xl:3/5 xl:mx-auto md:w-2/2 md:mx-auto">
        <div className="grid grid-rows-2 md:grid-cols-2 md:grid-rows-none gap-4 justify-center items-center sm:items-end lg:items-center mx-8">
          <div className="flex flex-col gap-8 mt-16 sm:mt-0 md:mt-32">
            <h1 className="text-h2 sm:text-h1 text-purple uppercase">
              Frontend Developer
            </h1>
            <p className="text-semibold-20">
              I am Onyinye - a web developer with a passion for building
              beautiful and responsive websites and web apps.
            </p>
            {/* <button className="text-purple border-2 border-purple px-6 py-4 rounded-2xl mt-8 uppercase text-bold-20">View my work</button> */}
            <Button1
              text="View my work"
              gradientClass="bg-custom-gradient1"
              textColorClass="bg-light-blue text-purple"
            />
          </div>
          <img src={coder} className="size-full"></img>
        </div>
      </section>
  );
}
export default Hero;
