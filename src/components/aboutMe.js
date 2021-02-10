import React from "react";

import skills from "../data/skills";

const AboutMe = () => {
  return (
    <section className="text-white pt-6 pb-20" id="about">
      <h2 className="text-4xl font-bold pb-12">The boring stuff...</h2>
      <h3 className="px-4 pb-4">
        <strong>
          Olá! I'm Bruno Estevinho, a technology enthusiast, music passionate,
          beer lover from Portugal.
        </strong>
      </h3>
      <p className="px-4 pb-4">
        I have a master degree in Eletrotecnical and Computers Engineering and
        had my first job before finishing my studies as a Support Specialist.
        While I developed and improved many technical skills such as SQL,
        JavaScript and C# working in fast paced production environments, I've
        also managed to consolidate the ability to prioritize tasks and to work
        effectively under pressure.
      </p>
      <p className="px-4 pb-12">
        After just over 2 years, already as a Shift Leader, I decided that it
        was time for me to pursue a carrear I really enjoyed. I quit my job and
        started to deepen my knowledge in Front-End development mainly. My main
        focus is to create software that is not only functional and intuitive
        but also able to stand out. I love to learn new things everyday as a way
        to continuous improve and to exceed myself.
      </p>
      <h3 className="text-2xl font-bold pb-12">
        Technologies i've been using recently
      </h3>
      <div className="px-4 text-center">
        <ul>
          {skills.map((skill) => (
            <li className="skill">{skill.item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutMe;
