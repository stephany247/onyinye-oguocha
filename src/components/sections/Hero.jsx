import coder from "../../assets/undraw-proud-coder-9prj.svg";
import Button1 from "../utils/Button";

function Hero({isMenuOpen}) {
  return (
    <section
      className="w-full px-6 py-16 md:py-6 md:pb-16 mt-16 sm:mt-32 lg:mt-10 lg:py-0 max-w-6xl mx-auto transform duration-400 ease-in-out"
      id="home"
    >
      <div className="grid grid-rows-1 md:grid-cols-2 md:grid-rows-none gap-4 justify-center items-center lg:justify-between lg:items-center">
        <div className="flex flex-col gap-4 md:gap-8 mt-16 sm:mt-0 md:mt-22 md:mb-10 lg:mt-8 2xl:mt-28">
          <h1 className="text-h3 sm:text-h2 md:text-h1 text-purple dark:text-purple2 uppercase">
            Frontend <br className="hidden sm:block" /> Developer
          </h1>
          <p className="text-semibold">
            I am{" "}
            <strong className="font-delius text-purple dark:text-purple2 md:text-bold">
              Onyinye Oguocha - a web developer
            </strong>{" "}
            with a passion for building beautiful and responsive websites and
            web apps.
          </p>
          <div className="flex gap-4">
            <a href="#portfolio-section">
              <Button1
                text="View my work"
                gradientClass="bg-gradient-to-r from-medium-purple from-60% to-purple to-100%"
                textColorClass="bg-light-blue dark:bg-dark-blue text-purple dark:text-white"
              />
            </a>
            <a
              href="/path-to-your-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button1
                text="View Resume"
                gradientClass="bg-gradient-to-r from-purple to-medium-purple"
                textColorClass="text-white"
              />
            </a>
          </div>
        </div>
        <img src={coder} className="size-full md:mt-20 lg:mt-0 hidden sm:block"></img>
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
