import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import Navbar from './components/Navbar';
import Welcome from './components/welcome';
import CarForm from './components/CarForm'; 
import BikeForm from './components/BikeForm'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
  }
`;
function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/Carform" element={<CarForm />} />
        <Route path="/Bikeform" element={<BikeForm />} />
      </Routes>
    </Router>
  );
}

export default App;









// import React from 'react';
// import styled, { createGlobalStyle } from 'styled-components';
// import Navbar from './components/Navbar';
// import Welcome from './components/welcome';
// import CarForm from './components/CarForm';

// const GlobalStyle = createGlobalStyle`
//   body {
//     margin: 0;
//     font-family: 'Arial', sans-serif;
//     background-color: #0e0e0e;
//     color: #ffffff;
//   }
// `;

// const AppContainer = styled.div`
//   text-align: center;
// `;

// const App=()=> {
//   return (
//     <AppContainer>
//       <GlobalStyle />
//       <Navbar />
//       <Welcome />
      
//     </AppContainer>

// );
// }

// export default App;



