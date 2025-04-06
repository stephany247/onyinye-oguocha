import { Icon } from "@iconify/react";

function SkillsIcons() {
  const skills = [
    { icon: "vscode-icons:file-type-html", title: "HTML" },
    { icon: "devicon:css3", title: "CSS" },
    { icon: "vscode-icons:file-type-js-official", title: "JavaScript" },
    { icon: "devicon:react", title: "React" },
    { icon: "devicon:typescript", title: "TypeScript" },
    { icon: "devicon:tailwindcss", title: "Tailwind CSS" },
    { icon: "logos:bootstrap", title: "Bootstrap" },
    { icon: "devicon:figma", title: "Figma" },
    { icon: "devicon:git", title: "Git" },
    { icon: "ri:github-fill", title: "GitHub", color: "#ffffff" },
  ];

  return (
    <div className="grid grid-cols-4 sm:grid-cols-5 gap-10 mx-auto md:mx-0 max-w-xl">
      {skills.map((skill, index) => (
        <div
          key={index}
          className={`relative group bg-dark-blue dark:bg-blue-dark w-16 h-16 flex items-center justify-center rounded-lg cursor-pointer ${
            index === 8 ? "col-start-2 sm:col-start-auto" : ""
          } ${index === 9 ? "col-start-3 sm:col-start-auto" : ""}`}
        >
          {/* Icon */}
          <Icon
            icon={skill.icon}
            style={{ color: skill.color }}
            width="3em"
            height="3em"
          />
          {/* Tooltip */}
          <div className="absolute bottom-full mb-2 hidden group-hover:flex items-center justify-center bg-purple dark:bg-purple2 text-white text-regular text-nowrap rounded-md px-4 py-2 transition-colors duration-200 ease-in-out">
            {skill.title}
            {/* Tooltip Arrow */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-purple dark:border-t-purple2"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SkillsIcons;
