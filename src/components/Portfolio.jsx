// // import print from "../assets/Screenshot 2021-10-31 152252.png";
// import print from "../assets/Screenshot.png";
// import Button1 from "./Button1";
// import Button2 from "./Button2";

// function Portfolio() {
//   return (
//     <section className="max-w-screen-lg mx-auto flex flex-col gap-y-36 mt-20 items-center">
//       <h1 className="text-h2 text-dark-blue uppercase">Portfolio</h1>
//       <div className="">
//         <div className="grid grid-cols-2 gap-x-20">
//           <img src={print} className=" h-full" alt="Project screenshot" />
//           <div className="flex flex-col gap-y-16">
//             <div className="flex flex-col gap-6">
//               <h2 className="text-bold-20 text-purple uppercase">
//                 - web development agency
//               </h2>
//               <p className="text-regular">
//                 Since beginning my job as a freelance developer, nearly 7 years
//                 ago, I’ve done remote work for agencies, consulted for startups
//                 and collaborated with talented people to create digital products
//               </p>
//             </div>
//             {/* <button className="uppercase">Visit Website</button> */}
//             {/* <button className="uppercase">Github repo</button> */}
//             <div className="flex gap-6">
//               <Button1 text="Visit Website" />
//               <Button2 text="Github repo" />
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="">
//         <div className="grid grid-cols-2 gap-x-20">
//           <div className="flex flex-col gap-y-16">
//             <div className="flex flex-col gap-6">
//               <h2 className="text-bold-20 text-purple uppercase">
//                 - web development agency
//               </h2>
//               <p className="text-regular">
//                 Since beginning my job as a freelance developer, nearly 7 years
//                 ago, I’ve done remote work for agencies, consulted for startups
//                 and collaborated with talented people to create digital products
//               </p>
//             </div>
//             {/* <button className="uppercase">Visit Website</button> */}
//             {/* <button className="uppercase">Github repo</button> */}
//             <div className="flex gap-6">
//               <Button1 text="Visit Website" />
//               <Button2 text="Github repo" />
//             </div>
//           </div>
//           <img src={print} className=" h-full" alt="Project screenshot" />
//         </div>
//       </div>

//       <div className="">
//         <div className="grid grid-cols-2 gap-x-20">
//           <img src={print} className=" h-full" alt="Project screenshot" />
//           <div className="flex flex-col gap-y-16">
//             <div className="flex flex-col gap-6">
//               <h2 className="text-bold-20 text-purple uppercase">
//                 - web development agency
//               </h2>
//               <p className="text-regular">
//                 Since beginning my job as a freelance developer, nearly 7 years
//                 ago, I’ve done remote work for agencies, consulted for startups
//                 and collaborated with talented people to create digital products
//               </p>
//             </div>
//             {/* <button className="uppercase">Visit Website</button> */}
//             {/* <button className="uppercase">Github repo</button> */}
//             <div className="flex gap-6">
//               <Button1 text="Visit Website" />
//               <Button2 text="Github repo" />
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* <Button2 text="View all" /> */}
//       <div className="bg-custom-gradient1 p-[3px] rounded-2xl w-fit inline-block drop-shadow-lg">
//         <button className="bg-purple text-white py-4 px-20 rounded-2xl">
//           View all
//         </button>
//       </div>
//     </section>
//   );
// }
// export default Portfolio;

import ProjectCard from "./ProjectCard";
import Button from "./Button";
import print from "../assets/Screenshot.png";

function Portfolio() {
  const projects = [
    {
      imageSrc: print,
      title: "- web development agency",
      description:
        "Since beginning my job as a freelance developer, nearly 7 years ago, I’ve done remote work for agencies, consulted for startups and collaborated with talented people to create digital products",
      buttons: [
        {
          text: "Visit Website",
          gradientClass: "bg-custom-gradient1",
          textColorClass: "bg-light-blue text-purple",
        },
        {
          text: "Github repo",
          gradientClass: "bg-custom-gradient1",
          textColorClass: "bg-custom-gradient1 text-white",
        },
      ],
    },
    {
      imageSrc: print,
      title: "- web development agency",
      description:
        "Since beginning my job as a freelance developer, nearly 7 years ago, I’ve done remote work for agencies, consulted for startups and collaborated with talented people to create digital products",
      buttons: [
        {
          text: "Visit Website",
          gradientClass: "bg-custom-gradient1",
          textColorClass: "bg-light-blue text-purple",
        },
        {
          text: "Github repo",
          gradientClass: "bg-custom-gradient1",
          textColorClass:
            "bg-custom-gradient1 text-white",
        },
      ],
    },
    // Add more projects here
    {
      imageSrc: print,
      title: "- web development agency",
      description:
        "Since beginning my job as a freelance developer, nearly 7 years ago, I’ve done remote work for agencies, consulted for startups and collaborated with talented people to create digital products",
      buttons: [
        {
          text: "Visit Website",
          gradientClass: "bg-custom-gradient1",
          textColorClass: "bg-light-blue text-purple",
        },
        {
          text: "Github repo ",
          gradientClass: "bg-custom-gradient1",
          textColorClass:
            "bg-custom-gradient1 text-white",
        },
      ],
    },
    // Add more projects here
  ];

  return (
    <section className="max-w-screen-lg flex flex-col gap-y-12 md:gap-y-36 mt-20 mb-52 mx-8 md:mx-8 lg:mx-auto items-center"  id="portfolio-section">
      <h1 className="text-h2 text-purple dark:text-white uppercase">Portfolio</h1>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          imageSrc={project.imageSrc}
          title={project.title}
          description={project.description}
          buttons={project.buttons}
          reverse={index % 2 !== 0} // Alternate layout
        />
      ))}
      <div className="md:mt-8">
        <Button
          text="View all"
          gradientClass="bg-custom-gradient1"
          textColorClass="bg-purple text-white md:py-4 md:px-20 rounded-2xl"
          customPadding="py-2 px-12"
        />
      </div>
    </section>
  );
}

export default Portfolio;
