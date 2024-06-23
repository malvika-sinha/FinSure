import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px;
  background-color: #000000;
  color: white;
`;

const HeaderLink = styled.a`
font-size: 22px;
  margin-left: 20px;
  color: white;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  font-family: Calibri;

  &:hover {
    color: #ffcc00;
    text-shadow: 0 0 10px #ffcc00, 0 0 20px #ffcc00, 0 0 30px #ffcc00;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLink href="#contact">Home</HeaderLink>
      <HeaderLink href="#wallets">Contact Wallets</HeaderLink>
    </HeaderContainer>
  );
};

export default Header;
