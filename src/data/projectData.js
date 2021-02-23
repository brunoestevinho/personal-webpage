import React from "react";
import img1 from "../images/personal-webpage.png";
import img2 from "../images/humblify.png";
import img3 from "../images/todo.png";

const projectData = [
  {
    title: "Personal Website",
    image: img1,
    description:
      "My personal website where anyone can find a bit more about me and some of the projects i've made",
    tools: ["React", "TailwindCSS", "Styled Components"],
    github: "https://github.com/brunoestevinho/personal-webpage",
    link: "https://brunoestevinho.dev/",
  },
  {
    title: "Humblify",
    image: img2,
    description: "A simple user-interface for your spotify data",
    tools: ["React", "Spotify API", "TailwindCSS"],
    github: "https://https://github.com/brunoestevinho/humblify",
    link: "https://humblify.netlify.app/",
  },
  {
    title: "2Do",
    image: img3,
    description: "Easily add and remove to-do's with user authentication",
    tools: ["React", "Auth0"],
    github: "https://github.com/brunoestevinho/todo-react",
    link: "https://2dotodo.netlify.app/",
  },
];

export default projectData;
