import React from "react";
import projectData from "../data/projectData";

import { ReactComponent as GitHub } from "../images/github.svg";
import { ReactComponent as WebPage } from "../images/webpage.svg";

import project1 from "../images/todo.png";

const Projects = () => {
  return (
    <section className="text-white pt-6" id="projects">
      <header>
        <h2 className="text-4xl font-bold pb-3">The interesting stuff !</h2>
      </header>
      <div className="my-7 space-y-24">
        {projectData.map((projectData, index) => (
          <article
            className="flex flex-wrap md:justify-between md:items-center"
            key={index}
          >
            <picture
              className={
                index % 2 === 0
                  ? "w-full md:w-6/12 shadow-lg "
                  : "w-full md:w-6/12 shadow-lg md:order-1"
              }
            >
              <img
                src={project1}
                width="768px"
                height="575px"
                alt={projectData.title}
                className="rounded-lg"
              />
            </picture>
            <div className="flex flex-col overflow-auto  space-y-3 my-3 mx-1 w-full md:w-5/12 ">
              <h3 className="uppercase font-bold text-lg">
                {projectData.title}
              </h3>
              <p>{projectData.description}</p>
              <div className="flex overflow-auto space-x-3 pb-2">
                {projectData.tools.map((tool, index) => (
                  <span
                    className="border border-gray-500 px-2 py-1 rounded-lg text-sm"
                    key={index}
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <div className="w-auto flex space-x-5 relative">
                <a
                  href={projectData.github}
                  target="_blank"
                  rel="noreferrer"
                  alt={projectData.title}
                >
                  <GitHub width="24px" height="24px" />
                </a>
                <a
                  href={projectData.link}
                  target="_blank"
                  rel="noreferrer"
                  alt={projectData.title}
                >
                  <WebPage width="24px" height="24px" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
