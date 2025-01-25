import Button from './Button';

function ProjectCard({ imageSrc, title, description, buttons, reverse }) {
  return (
    <div className={`grid grid-rows-2 md:grid-rows-none md:grid-cols-2 gap-x-20 gap-y-12`}>
      <img src={imageSrc} className={`h-full ${reverse ? 'md:order-last' : ''}`} alt="Project screenshot" />
      <div className="flex flex-col gap-8 md:gap-y-16 text-center">
        <div className="flex flex-col gap-6">
          <h2 className="text-bold-20 text-purple uppercase">{title}</h2>
          <p className="text-regular">{description}</p>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 mx-auto">
          {buttons.map((button, index) => (
            <Button key={index} text={button.text} gradientClass={button.gradientClass} textColorClass={button.textColorClass} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;