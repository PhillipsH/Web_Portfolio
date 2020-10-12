import React, { useState } from 'react';
import pipelineImg from '../../Assets/pipeline.png'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import '../Styles/Project.css';

const DevOpsProject = (props) => {
    const {
      buttonLabel,
      className
    } = props;
  
    const [modal, setModal] = useState(false);
  
    const toggle = () => setModal(!modal);
  
    return (
      <div>
        <Modal isOpen={modal} toggle={toggle} className={"modal-project"}>
          <ModalHeader toggle={toggle}>Modal title</ModalHeader>
          <ModalBody>
          <img className={'project-pic'} src={pipelineImg}></img>
          <span className='modal-title'>Problem</span><br></br>
          <p>Me and a group with students worked with the City of New Westminster to use their city's API's to create an application. 
            We ended creating an Android app to find public washrooms that are located close to you.
             Users were also able to review and rate each washroom they went to as well as locate the fastest way to get there.</p><br></br>
          <span className='modal-title'>Technologies Used</span><br></br>
          <p>We built this application using Android Studio and using Java as the primary language. We used RESTful API's such as the cities API and the Google Maps API to recieve data. 
            Finally, for the reviews and ratings was built using Google's Firebase</p>
          <span className='modal-title'>Notes</span>
          <p>Android Studio was incredibly difficult to work with in the beginning because at times when we would pull from git, the application wouldn't work on some of our groupmates computers while working on others.
            Eventually we got the hang of this problem by messing with the gradle versions.
          </p>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
        <div id='devops-box' className="project-box" onClick={toggle}>
            <h2 className='project-title'>Dev-Ops Pipeline</h2>
            <img className={'project-pic'} src={pipelineImg}></img>
        </div>
      </div>
    );
  }
export default DevOpsProject