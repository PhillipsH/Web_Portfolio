import React, { useState } from 'react';
import androidImg from '../Assets/android-app.png'
import mernImg from '../Assets/mern.jpg'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './Styles/Project.css';

const WashroomProject = (props) => {
    const {
      buttonLabel,
      className
    } = props;
  
    const [modal, setModal] = useState(false);
  
    const toggle = () => setModal(!modal);
  
    return (
      <div>
        <Modal isOpen={modal} toggle={toggle} className={"modal-project"}>
          <ModalHeader toggle={toggle}>Find My Washroom</ModalHeader>
          <ModalBody>
          <img className={'project-pic'} src={androidImg}></img>
          <img id='mern-img' src={mernImg}></img>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
        <div className="project-box" onClick={toggle}>
            <h2 className='project-title'>Find My Washroom</h2>
            <img className={'project-pic'} src={androidImg} ></img>
        </div>
      </div>
    );
  }
export default WashroomProject