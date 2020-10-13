import React, { useState } from 'react';
import compostImg from '../../Assets/compostking.png'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import '../Styles/Project.css';

const CompostProject = (props) => {
  
    const [modal, setModal] = useState(false);
  
    const toggle = () => setModal(!modal);
  
    return (
      <div>
        <Modal isOpen={modal} toggle={toggle} className={"modal-project"}>
          <ModalHeader toggle={toggle}>CompostKing (2018)</ModalHeader>
          <ModalBody>
          <img className={'project-pic'} src={compostImg}  alt='compostImg'></img>
          <span className='modal-title'>Problem</span><br></br>
          <p>Me and a group of students were given the task of creating a app that would help prevent waste. 
            The one requirement we were given was that the application needed to be a mobile friendly web app. 
            We thought it was best to create a game for children to teach them about composting. 
            </p><br></br>
          <span className='modal-title'>Technologies Used</span><br></br>
          <p>We built this application using HTML, CSS , and Javascript. We used the Javascript framework, Phaser.js for all the gameplay of the app. 
            The database was built using Firebase Firestore. The website itself was hosted on Microsoft Azure.</p>
          <span className='modal-title'>Notes</span>
          <p>Creating this web app was a journey as I have never hosted a completed website with a working database and a game before. 
            Learning all these new technologies and how to connect them was incredibly enjoyable.</p>
          </ModalBody>
          <ModalFooter>
            <a href='https://www.google.com'><Button color="secondary" onClick={toggle}>Github</Button></a>
          </ModalFooter>
        </Modal>
        <div id='compost-box' className="project-box" onClick={toggle}>
            <h2 className='project-title'>Compost King (2018)</h2>
            <img className={'project-pic'} src={compostImg}  alt='compostImg'></img>
        </div>
      </div>
    );
  }
export default CompostProject