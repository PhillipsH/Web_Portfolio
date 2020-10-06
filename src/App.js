import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Me from './Components/Me';
import TechnologyBoard from './Components/TechnologyBoard';
import NavbarScroll from './Components/NavbarScroll'
import TitleSection from './Components/TitleSection'
import ExperienceSkills from './Components/ExperienceSkills';



function App() {
  return (
    <div className="App">
      <div id='container'></div>
      <NavbarScroll></NavbarScroll>
      <Me></Me>
      <TitleSection></TitleSection>
      <TechnologyBoard></TechnologyBoard>
      <ExperienceSkills></ExperienceSkills>
      <TitleSection></TitleSection>
    </div>
  );
}

export default App;
