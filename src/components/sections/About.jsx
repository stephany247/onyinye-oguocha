import SkillsIcons from "../utils/SkillsIcons";
import { FaLaptopCode, FaBugSlash } from "react-icons/fa6";
import { PiPenNibLight } from "react-icons/pi";
import ServiceCard from "../utils/ServiceCard";

function About() {
  return (
    <div
      className="w-full max-w-full bg-light-purple dark:bg-blue-dark flex items-center"
      id="about-section"
    >
      <div className="w-full mx-auto text-center md:text-left">
        {/* About Me Section */}
        <section className="max-w-6xl mx-auto py-16 md:py-20 space-y-4 px-6">
          <h1 className="text-h3 text-purple dark:text-purple2 uppercase">
            About Me
          </h1>
          <p className="max-w-3xl">
            As a web developer, I design and build intuitive, responsive web
            pages that deliver seamless user experiences. My primary focus is on
            creating user-friendly, accessible, and high-performing interfaces
            that cater to diverse online audiences.
          </p>
        </section>

        <hr className="border-medium-purple" />

        {/* My Skills Section */}
        <section className="max-w-6xl mx-auto py-16 md:py-20 px-6 space-y-4 md:col-start-2 md:row-start-2 flex flex-col">
          <h1 className="text-h3 text-purple dark:text-purple2 uppercase">
            My skills
          </h1>
          <div className="mx-auto space-y-4">
            <p className="text-regular text-center">
              Skills, tools and technologies I use:
            </p>
            <SkillsIcons />
          </div>
        </section>

        <hr className="border-medium-purple" />

        {/* My Services Section */}
        <section className="max-w-6xl mx-auto py-16 md:py-20 space-y-8 md:space-y-12 px-6" id="services">
          <h1 className="text-h3 text-purple dark:text-purple2 uppercase">
            My services
          </h1>
          <div className="grid gap-10 md:grid-cols-12 relative mx-auto">
            {/* Service Cards */}
            <ServiceCard
              icon={<FaLaptopCode size={24} />}
              title="web development"
              description="I create websites based on ready-made designs. Whether it is a landing page or a business card website. I will make it look great and work smoothly on any device."
            />
            {/* Vertical Divider */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-500 dark:bg-purple2 z-0"></div>
            <ServiceCard
              icon={<PiPenNibLight size={24} />}
              title="web Design"
              description="I can design your website from scratch. I create modern, simple and user-friendly designs that match your brand and goals."
              className="md:col-start-6"
            />
            <ServiceCard
              icon={<FaBugSlash size={24} />}
              title="Website Maintenance & Optimization"
              description="I ensure your website remains fast, secure, and up-to-date. From performance optimization to bug fixes and content updates, I help keep your site running smoothly."
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
