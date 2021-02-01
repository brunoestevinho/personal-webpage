import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  .title {
    position: absolute;
    top: 350px;
    left: 10px;
    color: white;
  }
  .subtitle {
    position: absolute;
    top: 420px;
    left: 10px;
    color: white;
  }
  .highlighted {
    box-shadow: inset 0 -2.5rem 0 #dadfe4;
    color: #292f33;
  }
`;

const Hero = () => {
  return (
    <StyledSection id="hero">
      <h1 className="title">
        Nice to meet you
        <br />
        I'm Bruno Estevinho
      </h1>
      <h2 className="subtitle">
        A self-taught <br />
        <span className="highlighted">Front-End Developer</span>
      </h2>
    </StyledSection>
  );
};

export default Hero;
