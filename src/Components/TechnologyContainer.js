import React from 'react';
import {
    Card, CardBody,
    CardTitle
} from 'reactstrap';

import jsImg from '../Assets/javascript.png'
import pythonImg from '../Assets/python.png'
import cppImg from '../Assets/cpp_logo.png'
import htmlImg from '../Assets/html5.png';
import cssImg from '../Assets/css3.png';

import awsImg from '../Assets/aws.png';
import dockerImg from '../Assets/docker.png';
import herokuImg from '../Assets/heroku.png';
import jenkinsImg from '../Assets/jenkins.png'

import mongodbImg from '../Assets/mongodb.png';
import postgresqlImg from '../Assets/postgresql.png';
import mysqlImg from '../Assets/mysql.svg';
import './Styles/TechnologyContainer.css'


class TechnologyContainer extends React.Component{

    render(){
        return(
            <div className='skill-container'>
                <h2>Languages</h2>
                <div className='skill-section'>
                    <Card className='skill-card'>
                        <img src = {jsImg} height='150' alt='js'></img>
                        <CardBody>
                            <CardTitle>Javascript</CardTitle>
                        </CardBody>
                     </Card>
                     <Card className='skill-card'>
                         <img src = {pythonImg} height='150' alt='python'></img>
                        <CardBody>
                            <CardTitle>Python</CardTitle>
                        </CardBody>
                     </Card>
                     <Card className='skill-card'>
                         <img src = {cppImg} height='150' alt='cpp'></img>
                        <CardBody>
                            <CardTitle>C++</CardTitle>
                        </CardBody>
                     </Card>
                     <Card className='skill-card'>
                         <img src = {htmlImg} height='150' alt='html'></img>
                        <CardBody>
                            <CardTitle>HTML</CardTitle>
                        </CardBody>
                     </Card>
                     <Card className='skill-card'>
                         <img src = {cssImg} height='150' alt='css'></img>
                        <CardBody>
                            <CardTitle>CSS</CardTitle>
                        </CardBody>
                     </Card>
                     
                </div>
                <h2>Cloud-Computing</h2>
                <div className='skill-section'>
                    <Card className='skill-card'>
                        <img src = {awsImg} height='150' alt='aws'></img>
                        <CardBody>
                            <CardTitle>AWS</CardTitle>
                        </CardBody>
                     </Card>
                     <Card className='skill-card'>
                         <img src = {dockerImg} height='150' alt='docker'></img>
                        <CardBody>
                            <CardTitle>Docker</CardTitle>
                        </CardBody>
                     </Card>
                     <Card className='skill-card'>
                         <img src = {herokuImg} height='150' alt='heroku'></img>
                        <CardBody>
                            <CardTitle>Heroku</CardTitle>
                        </CardBody>
                     </Card>
                     <Card className='skill-card'>
                         <img src = {jenkinsImg} height='150' alt='jenkins'></img>
                        <CardBody>
                            <CardTitle>Jenkins</CardTitle>
                        </CardBody>
                     </Card>
                </div>
                <h2>Database</h2>
                <div className='skill-section'>
                    <Card className='skill-card'>
                        <img src = {mongodbImg} height='150' alt='mongodb'></img>
                        <CardBody>
                            <CardTitle>mongoDB</CardTitle>
                        </CardBody>
                     </Card>
                     <Card className='skill-card'>
                         <img src = {postgresqlImg} height='150' alt='postgresql'></img>
                        <CardBody>
                            <CardTitle>postgreSQL</CardTitle>
                        </CardBody>
                     </Card>
                     <Card className='skill-card'>
                         <img src = {mysqlImg} height='150' alt='mysql'></img>
                        <CardBody>
                            <CardTitle>MySQL</CardTitle>
                        </CardBody>
                     </Card>

                </div>
            </div>
        )
    }
}
export default TechnologyContainer