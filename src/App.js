import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import styled from "styled-components";

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  color: #333;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Navbar />
      <MainContent />
    </AppContainer>
  );
}

export default App;
