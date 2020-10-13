import React, { useState } from 'react';
import memoryImg from '../../Assets/memory.png'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import '../Styles/Project.css';

const MemoryProject = (props) => {
  
    const [modal, setModal] = useState(false);
  
    const toggle = () => setModal(!modal);
  
    return (
        <div>
        <Modal isOpen={modal} toggle={toggle} className={"modal-project"}>
        <ModalHeader toggle={toggle}>Memory Game (2020)</ModalHeader>
        <ModalBody className='project-body'>
        <img className={'project-pic'} src={memoryImg} alt='memoryImg'></img>
        <span className='modal-title'>Problem</span><br></br>
        <p>To create a game where users could improve their memory while making it a fun and simple task.</p><br></br>
        <span className='modal-title'>Technologies Used</span><br></br>
        <p>This website was a project I made using HTML, CSS and Node.js. The leaderboards database that was chosen for this website was MySQL as I had previous projects built using MySQL.
          The Website itself was hosted on heroku.
        </p>
        <span className='modal-title'>Notes</span>
        <p>This was a fun project to work on because it was something that you were actually able to interact with and play with afterwards.
        </p>
        </ModalBody>
        <ModalFooter>
        <a href='https://webmemorygame.herokuapp.com/'><Button color="primary" onClick={toggle}>Website</Button></a>
            <a href='https://github.com/PhillipsH/MemoryGame'><Button color="secondary" onClick={toggle}>Github</Button></a>
        </ModalFooter>

        </Modal>
        <div id='memory-box' className="project-box" onClick={toggle}>
            <h2 className='project-title'>Memory Game (2020)</h2>
            <img className={'project-pic'} src={memoryImg} alt='memoryImg'></img>
        </div>
      </div>
    );
  }
export default MemoryProject