import React from "react";

import { Link } from "react-scroll";

const Header = () => {
  return (
    <nav className="p-6 text-center text-white flex flex-row md:text-xl ">
      <div className="ml-auto font-thin">
        <Link
          to="projects"
          spy={true}
          smooth={true}
          className="py-1 px-5 cursor-pointer hover:text-red-600
            "
        >
          Projects
        </Link>
      </div>
      <div className="font-thin">
        <Link
          to="contact"
          spy={true}
          smooth={true}
          className="py-1 px-5 cursor-pointer hover:text-red-600
            "
        >
          Contact
        </Link>
      </div>
      <div className="font-thin">
        <a
          href="./Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="py-1 px-5 hover:text-red-600"
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Header;
