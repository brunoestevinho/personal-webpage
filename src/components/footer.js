import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100%;
  height: 6.25rem;
  margin: 0 auto;
  padding: 0 2.5rem;
  background: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.6rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 200;
`;

const Footer = () => (
  <StyledFooter>
    <p>Copyright © {new Date().getFullYear()}, Bruno Estevinho</p>
  </StyledFooter>
);

export default Footer;
