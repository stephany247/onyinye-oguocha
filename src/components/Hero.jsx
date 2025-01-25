import coder from "../assets/undraw-proud-coder-9prj.svg";
import Button1 from "./Button";

function Hero() {
  return (
      <section className="w-full bg-light-blue py-20 xl:w-1/2 xl:mx-auto md:w-2/3 md:mx-auto">
        <div className="grid grid-flow-col grid-cols-2 gap-4 justify-center items-center">
          <div>
            <h1 className="text-h1 text-purple mb-4 uppercase">
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
