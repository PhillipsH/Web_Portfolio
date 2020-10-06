import React, { Component } from 'react';
import './Styles/ExperienceSkills.css'
import { Container, Row, Col } from 'reactstrap';
import Section from './ExperienceSection';
import SkillSet from './SkillSet'

class ExperienceSkills extends React.Component{
    render(){
        return(
            <div className='skills-exp'>
                <div className='left-half'>
                    <h2>Technologies</h2>
                    <SkillSet></SkillSet>
                </div>
                <div className='right-half'>
                    <h2>My Software Development Timeline</h2>
                    <Section side={true} color={'#ec0101'}></Section>
                    <Section color={'#306998'}></Section>
                    <Section side={true} color={'#03a9f4'}></Section>
                    <Section color={'#03a9f4'}></Section>
                </div>
            </div>
        )
    }
}
export default ExperienceSkills