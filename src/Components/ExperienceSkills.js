import React, { Component } from 'react';
import './Styles/ExperienceSkills.css'
import Section from './ExperienceSection';
import SkillSet from './SkillSet'
import TitleSection from './TitleSection'

class ExperienceSkills extends React.Component{
    render(){
        return(
            <div className='skills-exp'>
                <div className='left-half'>
                    <TitleSection title='Technologies'></TitleSection>
                    <SkillSet></SkillSet>
                </div>
                <div className='right-half'>
                    <TitleSection></TitleSection>
                    <h2 className='title-text'>My Software Development Timeline</h2>
                    <Section side={true} color={'#ec0101'}></Section>
                    <Section color={'#F4931D'}></Section>
                    <Section side={true} color={'#03a9f4'}></Section>
                    <Section color={'#1DE3C8'}></Section>
                </div>
            </div>
        )
    }
}
export default ExperienceSkills 