import { Icon } from "@iconify/react";

function SkillsIcons() {
  const skills = [
    { icon: "vscode-icons:file-type-html" },
    { icon: "devicon:css3" },
    { icon: "vscode-icons:file-type-js-official"},
    { icon: "devicon:tailwindcss" },
    { icon: "logos:bootstrap"},
    { icon: "devicon:react"},
    { icon: "devicon:figma"},
    { icon: "devicon:vscode"},
    { icon: "devicon:git"},
    { icon: "ri:github-fill", color: "#ffffff" },
  ];

  return (
    <div className="grid grid-cols-5 gap-4">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="bg-dark-blue w-16 h-16 flex items-center justify-center rounded-lg"
        >
          <Icon
            icon={skill.icon}
            style={{ color: skill.color }}
            width="3em"
            height="3em"
          />
        </div>
      ))}
    </div>
  );
}

export default SkillsIcons;
