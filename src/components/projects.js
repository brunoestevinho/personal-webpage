import React from "react";
import project_data from "../projectData";

import { ReactComponent as GitHub } from "../images/github.svg";
import { ReactComponent as WebPage } from "../images/webpage.svg";

const Projects = () => {
  return (
    <section className="text-white pt-6" id="projects">
      <header>
        <h2 className="text-4xl font-bold pb-3">Projects</h2>
      </header>
      <div className="my-7 space-y-24">
        {project_data.map((project_data, index) => (
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
                width="768px"
                height="575px"
                loading="lazy"
                alt={project_data.title}
                className="rounded-lg"
              />
            </picture>
            <div className="flex flex-col overflow-auto  space-y-3 my-3 mx-1 w-full md:w-5/12 ">
              <h3 className="uppercase font-bold text-lg">
                {project_data.title}
              </h3>
              <p>{project_data.description}</p>
              <div className="flex overflow-auto space-x-3 pb-2">
                {project_data.tools.map((disc, index) => (
                  <span
                    className="border border-gray-500 px-2 py-1 rounded-lg text-sm"
                    key={index}
                  >
                    {disc}
                  </span>
                ))}
              </div>
              <div className="w-auto flex space-x-5 relative">
                <a href={project_data.github} target="_blank" rel="noreferrer">
                  <GitHub width="24px" height="24px" />
                </a>
                <a href={project_data.link} target="_blank" rel="noreferrer">
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
