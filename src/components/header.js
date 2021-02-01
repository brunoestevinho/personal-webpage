import React from "react";

import styled from "styled-components";

const StyledHeader = styled.nav`
  display: flex;
  width: 100%;
  height: 6.25rem;
  padding: 0 2.5rem;
  background: black;
  justify-content: flex-start;
  align-items: center;
`;

const StyledLogo1 = styled.div`
  font-size: 2rem;
  font-weight: 200;
  color: white;
`;

const StyledLogo2 = styled.div`
  font-size: 2rem;
  font-weight: 200;
  color: white;
  margin: -2px 24px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo1>BRUNO</StyledLogo1>
      <StyledLogo2>ESTEVINHO</StyledLogo2>
    </StyledHeader>
  );
};

export default Header;
