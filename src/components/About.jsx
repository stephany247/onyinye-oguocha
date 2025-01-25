import SkillsIcons from "./SkillsIcons";

function About() {
  return (
    <section className="w-full bg-light-purple py-24 flex items-center justify-center">
      <div className="max-w-screen-lg px-auo grid grid-cols-2 grid-rows-2 gap-y-16 gap-x-12">
        <div className="col-start-1 row-start-1">
          <h1 className="text-h2 text-purple uppercase mb-12">About Me</h1>
          <p className="text-semibold-20">
            As a web developer, I am responsible for developing and designing
            web pages. My primary focus is to create responsive, user-friendly
            experiences that meet the needs of a diverse online audience.
          </p>
        </div>
        <div className="col-start-2 row-start-2 flex flex-col gap-8">
          <h1 className="text-h2 text-purple uppercase">My skills</h1>
          <p className="text-semibold-20">
            The technologies I’ve been using recently
          </p>
          <SkillsIcons />
        </div>
      </div>
    </section>
  );
}
export default About;
