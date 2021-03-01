import React from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";
import ReactGA from "react-ga";

import skills from "../data/skills";
import Timeline from "./timeline";

const Skill = styled.span`
  box-shadow: inset 0 -2.5rem 0 rgba(160, 33, 33, 0.8);
  font-style: italic;
`;

const AboutMe = () => {
  return (
    <section className="text-white pt-6 pb-20" id="about">
      <ScrollAnimation
        animateIn="animate__fadeInDown"
        animateOut="animate__fadeOut"
        afterAnimatedIn={function afterAnimatedIn() {
          ReactGA.pageview("/aboutme");
        }}
      >
        <h2 className="text-4xl font-bold pb-12">The boring stuff...</h2>
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="animate__fadeIn"
        animateOut="animate__fadeOut"
      >
        <h3 className="px-4 pb-4">
          <strong>
            Olá! I'm Bruno Estevinho, a technology enthusiast, music passionate,
            beer lover from Portugal.
          </strong>
        </h3>
        <p className="px-4 pb-4">
          I am a self-taught Front-End Developer. I have a master's degree in
          Electrotechnical and Computers Engineering and I had my first job
          while I was studying as a Support Specialist. This is where I
          developed and improved a variety of technical skills such as&nbsp;
          <Skill>SQL</Skill>,&nbsp; <Skill>JavaScript</Skill>&nbsp;and&nbsp;
          <Skill>C#</Skill>. I am used to working in fast-paced production
          environments and work effectively under pressure.
        </p>
        <p className="px-4 pb-12">
          After nearly 3 years of working at SOFYNE, where I became a Shift
          Leader, I decided that it was time for me to pursue a career that I
          was really passionate about; to focus on deepening my knowledge in
          Front-End development. My goal is to create software that is not only
          functional and intuitive but also is able to stand out in today's
          competitive market. I am always looking for new opportunities. I love
          to learn new things every day as a way to continuously improve myself.
        </p>
      </ScrollAnimation>
      <Timeline />
      <ScrollAnimation
        animateIn="animate__fadeInDown"
        animateOut="animate__fadeOut"
      >
        <h3 className="text-2xl font-bold pt-20 pb-12">
          Technologies I've been using recently
        </h3>
      </ScrollAnimation>

      <div className="px-4 text-center">
        <ScrollAnimation
          animateIn="animate__fadeIn"
          animateOut="animate__fadeOut"
        >
          <ul>
            {skills.map((skill, index) => (
              <li className="skill" key={index}>
                {skill.item}
              </li>
            ))}
          </ul>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default AboutMe;
