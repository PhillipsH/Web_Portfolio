import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Me from './Components/Me';
import TechnologyBoard from './Components/TechnologyBoard';
import NavbarScroll from './Components/NavbarScroll'
import TitleSection from './Components/TitleSection'
import ExperienceSkills from './Components/ExperienceSkills';
import ProjectSection from './Components/ProjectSection';


function App() {
  return (
    <div className="App">
      <NavbarScroll></NavbarScroll>
      <Me></Me>
      <TitleSection title='Skills'></TitleSection>
      <TechnologyBoard></TechnologyBoard>
      <ExperienceSkills></ExperienceSkills>
      <TitleSection title='Projects'></TitleSection>
      <ProjectSection></ProjectSection>
    </div>
  );
}

export default App;
