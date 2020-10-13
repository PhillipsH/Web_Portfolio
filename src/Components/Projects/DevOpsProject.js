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
          <p>Create a pipeline that hosts a web app  making it easier to develop and test.</p><br></br>
          <span className='modal-title'>Technologies Used</span><br></br>
          <p>The app we hosted was a simple snake game. We used github, TravisCI, docker and heroku for the pipelien.</p>
          <span className='modal-title'>Notes</span>
          <p>
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