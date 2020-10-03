import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Me from './Components/Me';
import MediaFile from './Components/MediaFile';
import TechnologyBoard from './Components/TechnologyBoard';
import NavbarScroll from './Components/NavbarScroll'



function App() {
  return (
    <div className="App">
      <div id='container'></div>
      <NavbarScroll></NavbarScroll>
      <Me></Me>
      <TechnologyBoard></TechnologyBoard>
    </div>
  );
}

export default App;
