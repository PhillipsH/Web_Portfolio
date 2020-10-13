import React from 'react';
import './Styles/Navbar.css'
import githubImg from '../Assets/github.svg'
import linkedInImg from '../Assets/linkedin.svg'
import emailImg from '../Assets/envelope.svg'
import {Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class Navbar extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {show: "top-show"}
        this.prevScrollpos = window.pageYOffset;
        this.state.modal=false;

    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this), { passive: true })
        this.toggle = this.toggle.bind(this);

    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }
    toggle = () =>{
        this.setState({modal:!this.state.modal});
    };
    
      
    handleScroll(){
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos === 0) {
        this.setState({show: "top-show"})
    }
    else if (this.prevScrollpos < currentScrollPos || currentScrollPos === 400) {
        this.setState({show: "no-show-bar"})
    } else {
        this.setState({show: "show-bar"})
    }
    this.prevScrollpos = currentScrollPos;
    }

    render(){
        return(
            
            <div className={'navbar-container ' + this.state.show}>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                <ModalHeader toggle={this.toggle}>Contact Page</ModalHeader>
                <ModalBody>
                    <li><img src={emailImg} alt='email'></img> phillipshalim@gmail.com</li>
                    <li><img src={githubImg} alt='github'></img><a href="https://github.com/PhillipsH"> Github</a></li>
                    <li><img src={linkedInImg} alt='linkedin'></img><a href="https://www.linkedin.com/in/phillips-halim"> LinkedIn</a></li>
                </ModalBody>
                <ModalFooter>

                </ModalFooter>
                </Modal>
                <h2 id='site-name'>Phillips Halim</h2>
                <nav>
                    <ul className = "nav-links">
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#works">Works</a></li>
                        <li><a href="#contact"  onClick={this.toggle}>Contact</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}
export default Navbar