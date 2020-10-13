import React from 'react';
import './App.css';
import Me from './Components/Me';
import PercentContainer from './Components/PercentContainer';
import TitleSection from './Components/TitleSection'
import ExperienceSkillsContainer from './Components/ExperienceSkillsContainer';
import ProjectsContainer from './Components/ProjectsContainer';
import Navbar from './Components/Navbar';


function App() {
  return (
    <div className="App">
      <Me></Me>
      <TitleSection title='Skills'></TitleSection>
      <PercentContainer id='skills'></PercentContainer>
      <ExperienceSkillsContainer id='experience'></ExperienceSkillsContainer>
      <TitleSection title='Projects'></TitleSection>
      <ProjectsContainer id='works'></ProjectsContainer>
      <Navbar></Navbar>

    </div>
  );
}

export default App;
