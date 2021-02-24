import React, { useEffect } from "react";
import styled from "styled-components";

import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import ScrollAnimation from "react-animate-on-scroll";
import ReactGA from "react-ga";

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
    <section className="flex items-center pl-10 sm:pl-14 md:pl-32 xl:pl-56 pb-28 h-screen text-white">
      <div className="space-y-2">
        <ScrollAnimation
          animateIn="animate__fadeIn"
          animateOut="fadeOut"
          afterAnimatedIn={function afterAnimatedIn() {
            ReactGA.pageview("/hero");
          }}
        >
          <h1 className="hero-title text-7xl md:text-8xl lg:text-9xl font-bold">
            Bruno
            <br />
            Estevinho
          </h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__fadeInUp" animateOut="fadeOut">
          <h1 className="text-xl md:text-2xl lg:text-3xl ml-2 ">
            I'm a self-taught &nbsp;
            <HLSpan>Front-End Developer</HLSpan>
          </h1>
        </ScrollAnimation>
      </div>
      <ScrollDownButton>
        <Link to="about" spy={true} smooth={true}>
          <FontAwesomeIcon className="text-3xl mb-16" icon={faChevronDown} />
        </Link>
      </ScrollDownButton>
    </section>
  );
};

export default Hero;
