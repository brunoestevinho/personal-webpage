import React from "react";

import { Link } from "react-scroll";

const Header = () => {
  return (
    <nav className="p-6 ml-auto mr-auto sm:mr-0 text-white flex flex-row md:text-xl ">
      <div className="font-thin">
        <Link
          to="projects"
          spy={true}
          smooth={true}
          className="py-1 px-5 cursor-pointer hover:text-red-600 duration-500 ease-in-out"
        >
          Projects
        </Link>
      </div>
      <div className="font-thin">
        <Link
          to="contact"
          spy={true}
          smooth={true}
          className="py-1 px-5 cursor-pointer hover:text-red-600 duration-500 ease-in-out"
        >
          Contact
        </Link>
      </div>
      <div className="font-thin">
        <a
          href="./Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="py-1 px-5 hover:text-red-600 duration-500 ease-in-out"
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Header;
