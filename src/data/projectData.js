import img1 from "../images/personal-webpage.webp";
import img2 from "../images/humblify.webp";
import img3 from "../images/todo.webp";

const projectData = [
  {
    title: "Personal Website",
    image: img1,
    description:
      "My personal website showing a bit more about myself and some of the  projects I have made",
    tools: ["React", "TailwindCSS", "Styled Components"],
    github: "https://github.com/brunoestevinho/personal-webpage",
    link: "https://brunoestevinho.dev/",
  },
  {
    title: "Humblify",
    image: img2,
    description: "A simple user-interface for your Spotify data",
    tools: ["React", "Axios", "Spotify API", "TailwindCSS"],
    github: "https://github.com/brunoestevinho/humblify",
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
