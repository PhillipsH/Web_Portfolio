import React, { useState } from 'react';
import keebImg from '../../Assets/keebie.PNG'
import mernImg from '../../Assets/mern.jpg'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import '../Styles/Project.css';

const Project = (props) => {
  
    const [modal, setModal] = useState(false);
  
    const toggle = () => setModal(!modal);
  
    return (
      <div>
        <Modal isOpen={modal} toggle={toggle} className={"modal-project"}>
          <ModalHeader toggle={toggle}>Keebie.io (2020)</ModalHeader>
          <ModalBody className='project-body'>
            <img className={'project-pic'} src={keebImg} alt='keebie'></img>
            <span className='modal-title'>Problem</span><br></br>
            <p>A hobby that i recently got in to was the art of building keyboards. One thing that I couldn't find online was one website with the information of switches from
              all kinds of brands. I decided to build one for myself and other keyboard enthusists who may find this website useful.</p><br></br>
            <span className='modal-title'>Technologies Used</span><br></br>
            <img id='mern-img' src={mernImg} alt='mern'></img><br></br>
            <p>This website was build using the MERN (Mongodb, Express, React.js, Node.js) stack. I implemented Redux to manage the application state, as the state had to change
              after retreiving from the database. </p>
            <span className='modal-title'>Notes</span>
            <p>Overall this was a fun side-project to create, giving me a better understanding of how redux works, and how useful it is after it has been implemented.
              This was my first project using mongodb, which I found simple to get started with.
            </p>
          </ModalBody>
          <ModalFooter>
            <a href='https://www.google.com'><Button color="primary" onClick={toggle}>Website</Button></a>
            <a href='https://www.google.com'><Button color="secondary" onClick={toggle}>Github</Button></a>
          </ModalFooter>

        </Modal>
        <div id='keebie-box' className="project-box" onClick={toggle}>
            <h2 className='project-title'>Keebie.io (2020)</h2>
            <img className={'project-pic'} src={keebImg} alt='keebimg'></img>
        </div>
      </div>
    );
  }
export default Project