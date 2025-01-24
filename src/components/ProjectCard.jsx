import Button from './Button1';

function ProjectCard({ imageSrc, title, description, buttons, reverse }) {
  return (
    <div className={`grid grid-cols-2 gap-x-20`}>
      <img src={imageSrc} className={`h-full ${reverse ? 'order-last' : ''}`} alt="Project screenshot" />
      <div className="flex flex-col gap-y-16">
        <div className="flex flex-col gap-6">
          <h2 className="text-bold-20 text-purple uppercase">{title}</h2>
          <p className="text-regular">{description}</p>
        </div>
        <div className="flex gap-6">
          {buttons.map((button, index) => (
            <Button key={index} text={button.text} gradientClass={button.gradientClass} textColorClass={button.textColorClass} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;