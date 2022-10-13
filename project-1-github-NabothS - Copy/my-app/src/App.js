


import { useEffect, useState } from 'react';
import './App.css';
import Footer from './Components/footerComponent';
import Header from './Components/headerComponent';
import Container from './Design/Container/Container';

function App() {


  return (
    <div className="App">
      <Header></Header>
        <Container></Container>
      <Footer></Footer>
    </div>
  );
}

export default App;
