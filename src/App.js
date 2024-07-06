import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Navbar from './components/navbar';
import Welcome from './components/welcome';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background-color: #0e0e0e;
    color: #ffffff;
  }
`;

const AppContainer = styled.div`
  text-align: center;
`;

const App=()=> {
  return (
    <AppContainer>
      <GlobalStyle />
      <Navbar />
      <Welcome />
    </AppContainer>
  );
}

export default App;



