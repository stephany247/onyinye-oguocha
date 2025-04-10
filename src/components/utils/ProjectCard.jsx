import Button from './Button';

function ProjectCard({ imageSrc, title, description, buttons, reverse }) {
  return (
    <div className={`grid grid-rows-2 md:grid-rows-none md:grid-cols-2 gap-x-20 sm:gap-x-12 md:gap-x-20 gap-y-4 justify-center items-center`}>
      {/* <img src={imageSrc} className={`h-full w-full max-h-70 rounded-2xl border-2 border-purple dark:border-medium-purple ${reverse ? 'md:order-last' : ''}`} alt="Project screenshot" /> */}
      <div className={`h-full w-full max-h-70 rounded-2xl border-2 border-purple dark:border-medium-purple overflow-hidden ${reverse ? 'md:order-last' : ''}`}>
        <img
          src={imageSrc}
          className="h-full w-full object-cover object-center"
          alt="Project screenshot"
        />
      </div>
      <div className="flex flex-col gap-6 md:gap-y-12 text-center">
        <div className="flex flex-col gap-4 md:gap-6">
          <h2 className="text-bold text-purple dark:text-white uppercase">{title}</h2>
          <p className="text-regular">{description}</p>
        </div>
        <div className="flex flex-row items-center md:items-start gap-4 md:gap-6 mx-auto">
          {buttons.map((button, index) => (
            // <Button key={index} text={button.text} gradientClass={button.gradientClass} textColorClass={button.textColorClass} />
            <a
              key={index}
              href={button.link} // Use the link property
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                text={button.text}
                gradientClass={button.gradientClass}
                textColorClass={button.textColorClass}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;