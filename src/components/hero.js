import React from "react";
import styled from "styled-components";

import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import portrait from "../images/portrait_bw_pessegueiro.jpg";

const HLSpan = styled.span`
  box-shadow: inset 0 -2.5rem 0 #dadfe4;
  color: #292f33;
`;

const ScrollDownButton = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  cursor: pointer;
  transition: all 0.2s ease-out;
  &:hover {
    transform: translate(-50%, -3px);
  }
  &:active {
    transform: translate(-50%, 1px);
  }
`;

const Hero = () => {
  return (
    <div className="flex items-center h-screen text-white">
      <div className="space-y-2">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-purple-500">
          Bruno
          <br />
          Estevinho
        </h1>
        <h1 className="text-l md:text-xl ml-2 ">
          I'm a self-taught &nbsp;
          <HLSpan>Front-End Developer</HLSpan>
        </h1>
      </div>
      <ScrollDownButton>
        <Link to="about" spy={true} smooth={true}>
          <FontAwesomeIcon className="text-3xl mb-16" icon={faChevronDown} />
        </Link>
      </ScrollDownButton>
    </div>
  );
};

export default Hero;
