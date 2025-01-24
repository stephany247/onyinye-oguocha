function About() {
  return (
    <section className="w-full bg-light-purple py-24">
      <div className="max-w-screen-lg mx-auto grid grid-cols-2 grid-rows-2 gap-y-6 gap-x-12">
        <div>
          <h1 className="text-h1 text-purple">About Me</h1>
          <p className="text-semibold-20">
            As a web developer, I am responsible for developing and designing
            web pages. My primary focus is to create responsive, user-friendly
            experiences that meet the needs of a diverse online audience.
          </p>
        </div>
        <div></div>
        <div></div>
        <div>
          <h1 className="text-h1 text-purple">My skills</h1>
          <p className="text-semibold-20">
            The technologies I’ve been using recently
          </p>
        </div>
      </div>
    </section>
  );
}
export default About;
