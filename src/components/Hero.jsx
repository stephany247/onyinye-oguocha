import coder from "../assets/undraw-proud-coder-9prj.svg";
import Button1 from "./Button";

function Hero() {
  return (
    <section
      className="w-full py-20 px-8 md:w-2/2 md:mx-auto lg:px-1 lg:w-11/12 lg:mx-auto xl:w-9/12 xl:mx-auto 2xl:w-7/12 2xl:px-0"
      id="home"
    >
      <div className="grid grid-rows-2 md:grid-cols-2 md:grid-rows-none gap-4 justify-center items-center lg:justify-between lg:items-center">
        <div className="flex flex-col gap-8 mt-16 sm:mt-0 md:mt-32 2xl:mt-28">
          <h1 className="text-h3 sm:text-h1 text-purple dark:text-purple2 uppercase">
            Frontend Developer
          </h1>
          <p className="text-semibold-20">
            I am{" "}
            <span className="font-delius text-purple dark:text-purple2">
              Onyinye Oguocha - a web developer
            </span>{" "}
            with a passion for building beautiful and responsive websites and
            web apps.
          </p>
          {/* <button className="text-purple border-2 border-purple px-6 py-4 rounded-2xl mt-8 uppercase text-bold-20">View my work</button> */}
          <a href="#portfolio-section">
            <Button1
              text="View my work"
              gradientClass="bg-custom-gradient1"
              textColorClass="bg-light-blue dark:bg-dark-blue text-purple dark:text-white"
            />
          </a>
        </div>
        <img src={coder} className="size-full md:mt-20"></img>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Onyinye Oguocha",
      "jobTitle": "Frontend Developer",
      "description": "Onyinye Oguocha is a web developer with a passion for building beautiful and responsive websites and web apps."
    }`,
        }}
      />
    </section>
  );
}
export default Hero;
