import React from "react";
import styled from "styled-components";

const MainContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 100px);
  text-align: center;
  font-size: 24px;
  color: #ffffff;
  font-family: Times new roman;
  font-weight: bold;
`;

const WelcomeMessage = styled.p`
  &:hover {
    color: #ffcc00;
    text-shadow: 0 0 10px #ffcc00, 0 0 20px #ffcc00, 0 0 30px #ffcc00;
    transition: all 0.3s ease;
    font-family: Times new roman;
  }
`;

const MainContent = () => {
  return (
    <MainContentContainer>
      <WelcomeMessage>Welcome to the Insurance Page</WelcomeMessage>
    </MainContentContainer>
  );
};

export default MainContent;
