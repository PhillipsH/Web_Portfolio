import React, { useState } from 'react';
import portfolioImg from '../../Assets/portfolio.png'
import reactImg from '../../Assets/react.png'
import bootstrapImg from '../../Assets/bootstrap.png'
import htmlImg from '../../Assets/html5.png'
import cssImg from '../../Assets/css3.png'
import javascriptImg from '../../Assets/javascript.png'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import '../Styles/Project.css';

const Project = (props) => {
  
    const [modal, setModal] = useState(false);
  
    const toggle = () => setModal(!modal);
  
    return (
      <div>
        <Modal isOpen={modal} toggle={toggle} className={"modal-project"}>
          <ModalHeader toggle={toggle}>This Web Portfolio (2020)</ModalHeader>
          <ModalBody className='project-body'>
            <img className={'project-pic'} src={portfolioImg} alt='keebie'></img>
            <span className='modal-title'>Goal</span><br></br>
            <p>A website to showcase some of the projects that I've done and skills that I've learned from them.</p><br></br>
            <span className='modal-title'>Technologies Used</span><br></br>
            <div className='tech-modal'>
              <img className={'project-tech-img'} src={reactImg} alt='reactImg'></img>
              <img className={'project-tech-img'} src={bootstrapImg} alt='homerimg'></img>
              <img className={'project-tech-img'} src={htmlImg} alt='homerimg'></img>
              <img className={'project-tech-img'} src={cssImg} alt='homerimg'></img>
              <img className={'project-tech-img'} src={javascriptImg} alt='herokuimg'></img>
            </div>
            <p>
                I built this website in React and Reactstrap/Bootstrap using the basic technologies such as HTML, CSS and Javascript. 
                This website was simply hosted on github pages as I didn't need to host a server because it is a static web page.
            </p>
          </ModalBody>
          <ModalFooter>
            <a href='http://www.phillipshalim.com'><Button color="primary" onClick={toggle}>Website</Button></a>
            <a href='https://github.com/PhillipsH/Web_Portfolio'><Button color="secondary" onClick={toggle}>Github</Button></a>
          </ModalFooter>

        </Modal>
        <div id='keebie-box' className="project-box" onClick={toggle}>
            <h2 className='project-title'>This Web Portfolio (2020)</h2>
            <img className={'project-pic'} src={portfolioImg} alt='portfolioImg'></img>
        </div>
      </div>
    );
  }
export default Project