import React from "react";

const Header = () => {
  return (
    <nav className="m-6 text-white">
      <div className="flex flex-row md:text-xl">
        <div className="ml-auto font-thin">
          <a href="#projects" className="py-1 px-5">
            Projects
          </a>
        </div>
        <div className="font-thin">
          <a href="#contact" className="py-1 px-5">
            Contact
          </a>
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
