import ProjectCard from "../utils/ProjectCard";
import Button from "../utils/Button";
import print from "../../assets/Screenshot.png";
import CoachImage from "../../assets/coach nathel.png";
import littleLemon from "../../assets/little lemon 2.png";
import productCart from "../../assets/product cart.png";
import productCart2 from "../../assets/product cart 2.png";
import decentalized from "../../assets/decentralized-networks.png";
import { useState } from "react";

function Portfolio() {
  const defaultButtons = [
    {
      text: "Visit Website",
      gradientClass:
        "bg-gradient-to-r from-medium-purple from-60% to-purple to-100%",
      textColorClass: "bg-light-blue text-purple",
    },
    {
      text: "Github repo",
      gradientClass:
        "bg-gradient-to-r from-medium-purple from-60% to-purple to-100%",
      textColorClass: "bg-custom-gradient1 text-white",
    },
  ];

  const projects = [
    {
      imageSrc: print,
      title: "- web development agency",
      description:
        "Since beginning my job as a freelance developer, nearly 7 years ago, I’ve done remote work for agencies, consulted for startups and collaborated with talented people to create digital products",
      buttons: defaultButtons,
    },
    {
      imageSrc: CoachImage,
      title: "- Landing Page for Coach Victor Nathel",
      description:
        "I developed a landing page for Victor Nathel, a renowned affiliate marketing coach. The page highlights his services, includes client testimonials, and features a call-to-action for visitors to connect.",
      buttons: [
        {
          text: "Visit Website",
          gradientClass:
            "bg-gradient-to-r from-medium-purple from-60% to-purple to-100%",
          textColorClass: "bg-light-blue text-purple",
          link: "https://victornathel.vercel.app/",
        },
        {
          text: "Github repo",
          gradientClass:
            "bg-gradient-to-r from-medium-purple from-60% to-purple to-100%",
          textColorClass: "bg-custom-gradient1 text-white",
          link: "https://github.com/stephany247", // Add the link here
        },
      ],
    },
    // Add more projects here
    {
      imageSrc: littleLemon,
      title: "- Little Lemon website",
      description:
        "A responsive web app for a fictional restaurant, built with React. It enhances user interaction and accessibility, providing a seamless experience across devices. Developed as part of the Meta Frontend Capstone Project.",
      buttons: [
        {
          text: "Visit Website",
          gradientClass:
            "bg-gradient-to-r from-medium-purple from-60% to-purple to-100%",
          textColorClass: "bg-light-blue text-purple",
          link: "https://little-lemon-qjoz-seven.vercel.app/",
        },
        {
          text: "Github repo",
          gradientClass:
            "bg-gradient-to-r from-medium-purple from-60% to-purple to-100%",
          textColorClass: "bg-custom-gradient1 text-white",
          link: "https://github.com/stephany247/little-lemon", // Add the link here
        },
      ],
    },
    {
      imageSrc: productCart2,
      title: "- Product list with cart",
      description:
        "An interactive e-commerce frontend that allows users to browse products, add them to a cart, and manage their selections. Built with React for dynamic updates and a smooth user experience.",
      buttons: [
        {
          text: "Visit Website",
          gradientClass:
            "bg-gradient-to-r from-medium-purple from-60% to-purple to-100%",
          textColorClass: "bg-light-blue text-purple",
          link: "https://product-list-with-cart-app.vercel.app/",
        },
        {
          text: "Github repo",
          gradientClass:
            "bg-gradient-to-r from-medium-purple from-60% to-purple to-100%",
          textColorClass: "bg-custom-gradient1 text-white",
          link: "https://github.com/stephany247/product-list-with-cart", // Add the link here
        },
      ],
    },
    {
      imageSrc: decentalized,
      title: "- Web3 Landing Page",
      description:
        "A clean and professional landing page for a Web3 business, designed to showcase their services and solutions in the decentralized space. The page focuses on user engagement and a seamless experience across devices.",
        buttons: [
          {
            text: "Visit Website",
            gradientClass:
              "bg-gradient-to-r from-medium-purple from-60% to-purple to-100%",
            textColorClass: "bg-light-blue text-purple",
            link: "https://decentralized-networks.vercel.app/",
          },
          {
            text: "Github repo",
            gradientClass:
              "bg-gradient-to-r from-medium-purple from-60% to-purple to-100%",
            textColorClass: "bg-custom-gradient1 text-white",
            link: "https://github.com/stephany247", // Add the link here
          },
        ],
    },
    // Add more projects here
  ];

  // State to manage displayed projects
  const [visibleProjects, setVisibleProjects] = useState(projects.slice(0, 3)); // Show the first 3 projects initially
  const [showAll, setShowAll] = useState(false);

  const handleViewAll = () => {
    console.log("View All button clicked");
    setVisibleProjects(projects); // Show all projects
    setShowAll(true); // Hide the "View All" button
  };

  const handleToggleView = () => {
    if (showAll) {
      // Show only the first 3 projects
      setVisibleProjects(projects.slice(0, 3));
    } else {
      // Show all projects
      setVisibleProjects(projects);
    }
    setShowAll(!showAll); // Toggle the state
  };

  return (
    <section
      className="max-w-screen-lg flex flex-col gap-y-8 md:gap-y-30 mt-20 mb-52 mx-8 md:mx-8 lg:mx-auto items-center"
      id="portfolio-section"
    >
      <h1 className="text-h3 text-left place-self-start text-purple dark:text-light-purple uppercase">
        Portfolio
      </h1>
      {visibleProjects.map((project, index) => (
        <ProjectCard
          key={index}
          imageSrc={project.imageSrc}
          title={project.title}
          description={project.description}
          buttons={project.buttons}
          reverse={index % 2 !== 0} // Alternate layout
        />
      ))}
      {/* {!showAll && ( */}
      <div className="md:mt-8">
        <Button
          text={showAll ? "View Less" : "View More"}
          gradientClass="bg-gradient-to-r from-medium-purple from-60% to-purple to-100%"
          textColorClass="bg-purple text-white md:py-4 md:px-20 rounded-2xl"
          customPadding="py-2 px-12"
          onClick={handleToggleView}
        />
      </div>
      {/* )} */}
    </section>
  );
}

export default Portfolio;
