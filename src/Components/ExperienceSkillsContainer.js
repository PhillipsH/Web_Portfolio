import React from 'react';
import './Styles/ExperienceSkills.css'
import Section from './TimelineSection';
import TechnologyContainer from './TechnologyContainer'
import TitleSection from './TitleSection'



class ExperienceSkillsContainer extends React.Component{
    constructor(props){
        super(props)
        this.cstContent = "Learned concepts like, Object Oriented Programming, programming languages such as C++ and Java, and studied algorithms and math concepts. Also created multiple projects with teams and individually such as websites, apps and games."
        this.internContent = "Created a web scraper and created a lifestyle and nearby feature for the chatbot that would cater towards peoples needs. Look below for more info."
        this.practicumContent = "Worked along with other students to create a slack chatbot that would display homes for renters."
        this.hsContent = "Took Programming 11, 12, 13(Honors) courses throughout my years in highschool making a forumn a game and learning basic algorithms."
    }

    render(){
        return(
            <div id='experience' className='skills-exp'>
                <div className='left-half'>
                    <TitleSection title='Technologies'></TitleSection>
                    <TechnologyContainer></TechnologyContainer>
                </div>
                <div className='right-half'>
                    <TitleSection title='My Software Development Timeline'></TitleSection> 
                    <Section side={true} color={'#118ab2'}  content={this.cstContent} title='BCIT - CST (Cloud Computing Option)' date={'Jan 2018 - Feb 2020'}></Section>
                    <Section color={'#06d6a0'}  content={this.internContent} title='Internship - Homerbot (Domomi)' date={'June 2019 - July 2019'}></Section>
                    <Section side={true} color={'#ffd166'}  content={this.practicumContent}  title='Practicum - Homer (Domomi)' date={'Jan 2019 - June 2019'}></Section>
                    <Section color={'#ef476f'}  title='Programming 11, 12, Honors' content={this.hsContent} date={'Sept 2015 - July 2017'}></Section>
                </div>
            </div>
        )
    }
}
export default ExperienceSkillsContainer

// this.cstContent = (
//     <ul class='content'>
//         <li>Worked on all kinds of projects such as Web-Development, Games and Apps with teams and individually.</li>
//         <li>Learned Object Oriented C++, Object Oriented Java, and Algorithms throughout the program.</li>
//         <li>Specialized in Cloud Computing/Dev-Ops in our final year.</li>
//     </ul>
// )
// this.homerBotIntern = (
//     <ul class='content'>
//         <li>Created the webscrapper in python along with a lifestyle function.</li>
//         <li>Learned Object Oriented C++, Object Oriented Java, and Algorithms throughout the program.</li>
//         <li>Specialized in Cloud Computing/Dev-Ops in our final year working with aws, docker and pipelines.</li>
//     </ul>
// )
// this.homerBotPracticum = (
//     <ul class='content'>
//         <li>Worked along side 4 other students to create a slack chatbot that displayed rental homes.</li>
//         <li>Used dialogflow along with Google Cloud Platform Serverless computing to create the chatbot.</li>
//         <li>Participated in meetings every week, working out what the chatbot should do and how it should function.</li>
//     </ul>
// )
// this.hsContent = (
//     <ul>
//         <li>Programming 11: Created a forum where users could login and post content with HTML, CSS, javascript, and php.</li>
//         <li>Programming 12: Learned C++ along with basic sorting algorithms and basic cipher algorithms.</li>
//         <li>Programming Honors: Created a flappy birds and mario clone in Java with the framework libGDX.</li>
//     </ul>
// )