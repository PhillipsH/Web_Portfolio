import React, { useState } from 'react';
import './Styles/Navbar.css'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


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
        console.log(this.state.modal)
    };
    
      
    handleScroll(){
    console.log("scroll pos " + this.prevScrollpos)
    console.log("scroll pos " + this.prevScrollpos)
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos == 0) {
        this.setState({show: "top-show"})
    }
    else if (this.prevScrollpos < currentScrollPos || currentScrollPos == 400) {
        this.setState({show: "no-show-bar"})
    } else {
        this.setState({show: "show-bar"})
    }
    this.prevScrollpos = currentScrollPos;
    }

    render(){
        return(
            
            <div className={'navbar-container ' + this.state.show}>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={"modal-project"}>
            <ModalHeader toggle={this.toggle}>Contact Page</ModalHeader>
            <ModalBody>
                <li><a href="Email">Skills</a></li>
                <li><a href="Github">Experience</a></li>
                <li><a href="LinkedIn">Works</a></li>
                <li><a href=""  onClick={this.toggle}>Contact</a></li>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
            </Modal>
                <h2 id='site-name'>Phillips Halim</h2>
                <nav>
                    <ul class = "nav-links">
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