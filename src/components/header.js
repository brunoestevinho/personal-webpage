import React from "react";

import { Link } from "react-scroll";

const Header = () => {
  return (
    <nav className="m-6 text-white">
      <div className="flex flex-row md:text-xl">
        <div className="ml-auto font-thin">
          <Link
            to="projects"
            spy={true}
            smooth={true}
            className="py-1 px-5 cursor-pointer
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
            className="py-1 px-5 cursor-pointer
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
            className="py-1 px-5"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
