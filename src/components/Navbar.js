import React, { useState } from 'react';
import styled from 'styled-components';
import { ethers } from "ethers";
import metaMaskIcon from '../assets/metamask-icon.png';  
// import logo from '../assets/logo.jpg'

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1b1b1b;
  padding: 1rem 2rem;
  color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  margin: 0 1rem;

  &:hover {
    color: #00ffb9;
  }
`;

const NavSection = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.span`
  width: 40px;
  height: 40px;
  font-size: 1.5rem;
`;

const MetaMaskIcon = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
  margin-left: 1rem;
`;

const Navbar = () => {
  const [data, setData] = useState({
    address: "",
    Balance: null,
  });

  const btnHandler = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((res) => accountChangeHandler(res[0]))
        .catch((err) => {
          console.error(err);
          alert("Error connecting to MetaMask");
        });
    } else {
      alert("Please install MetaMask extension!");
    }
  };

  const getBalance = (address) => {
    window.ethereum
      .request({
        method: "eth_getBalance",
        params: [address, "latest"],
      })
      .then((balance) => {
        setData((prevData) => ({
          ...prevData,
          Balance: ethers.utils.formatEther(balance),
        }));
      })
      .catch((err) => {
        console.error(err);
        alert("Error fetching balance");
      });
  };

  const accountChangeHandler = (account) => {
    setData((prevData) => ({
      ...prevData,
      address: account,
    }));
    getBalance(account);
  };

  console.log(data.address);
  console.log(data.Balance);

  return (
    <Nav>
      <Logo><b>FinSure</b></Logo>
      <NavSection>
        <NavLink href="#">Products</NavLink>
        <NavLink href="#">Renewals</NavLink>
        <NavLink href="#">Claims</NavLink>
        <NavLink href="#">Resources</NavLink>
        <NavLink href="#">Contact</NavLink>
        <NavLink href="#">Wallet</NavLink>
      </NavSection>
      <NavSection>
        <MetaMaskIcon src={metaMaskIcon} alt="MetaMask Icon" onClick={btnHandler} />
      </NavSection>
    </Nav>
  );
};

export default Navbar;
