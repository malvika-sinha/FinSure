import React from "react";
import styled from "styled-components";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const NavLink = styled.a`
    margin: 0 20px;
    padding: 10px 20px;
    color: white;
    text-decoration: none;
    border: 2px solid #a99797;
    border-radius: 26px;
    position: relative;
    transition: all 0.3s ease;
    overflow: hidden;
    font-family: Calibri;
    width: 14%;
    height: 62px;
    font-size: 37px;
    align-content: center;

  &:hover {
    background-color: #282c34;
    color: white;
    box-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #f8eeff, 0 0 50px #ffffff;

    &::before {
      width: 300%;
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 0;
    height: 300%;
    background: rgb(0 0 0 / 0%);
    transition: width 0.3s ease;

  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavLink href="#cars">CARS</NavLink>
      <NavLink href="#bikes">BIKES</NavLink>
      <NavLink href="#plans">PLANS</NavLink>
    </NavbarContainer>
  );
};

export default Navbar;
