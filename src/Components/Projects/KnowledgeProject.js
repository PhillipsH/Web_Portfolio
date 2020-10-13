import React, { useState } from 'react';
import knowledgeImg from '../../Assets/knowledge.png'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import '../Styles/Project.css';

const KnowledgeProject = (props) => {
    const {
      buttonLabel,
      className
    } = props;
  
    const [modal, setModal] = useState(false);
  
    const toggle = () => setModal(!modal);
  
    return (
      <div>
        <Modal isOpen={modal} toggle={toggle} className={"modal-project"}>
        <ModalHeader toggle={toggle}>KnowledgeBase</ModalHeader>
        <ModalBody className='project-body'>
        <img className={'project-pic'} src={knowledgeImg}></img>
        <span className='modal-title'>Problem</span><br></br>
        <p>Me and a group of classmates were provided the task of creating a social media website where users could login, post and message each other among features such as liking.</p><br></br>
        <span className='modal-title'>Technologies Used</span><br></br>
        <p>We've built knowledgeBase using Node.js, Express, mySQL and handlebars. The website itself was hosted on AWS.</p>
        <span className='modal-title'>My Part</span><br></br>
        <p>I built the message aspect of the app where users could message one another and their chat would be stored in the database with a messaging ID saved for each new conversation.</p>
        <span className='modal-title'>Notes</span>
        <p>This was one of the most interesting class projects as we were able to utilize all that we learned about HTML, CSS, Javascript and SQL to create one web application.
        </p>
        </ModalBody>
        <ModalFooter>
            <a href='https://www.google.com'><Button color="secondary" onClick={toggle}>Github</Button></a>
        </ModalFooter>

        </Modal>
        <div id='knowledge-box' className="project-box" onClick={toggle}>
            <h2 className='project-title'>KnowledgeBase</h2>
            <img className={'project-pic'} src={knowledgeImg}></img>
        </div>
      </div>
    );
  }
export default KnowledgeProject