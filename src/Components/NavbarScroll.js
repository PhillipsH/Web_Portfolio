import React, { Component } from 'react';
import './NavbarScroll.css'
export class ScrollNavbar extends Component {

  constructor(props){
    super(props);
    this.state = {show: "topShow"}
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this), { passive: true })
    var prevScrollpos = window.pageYOffset;

  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }


  
  handleScroll(event, obj){
    console.log("scroll pos " + this.prevScrollpos)
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos == 0) {
      this.setState({show: "topShow"})
    }
    else if (this.prevScrollpos < currentScrollPos || currentScrollPos == 400) {
      this.setState({show: "noShow"})
    } else {
      this.setState({show: "show"})
    }
    this.prevScrollpos = currentScrollPos;
  }


  render() {
    return (
      <div>
        <ul className={this.state.show} id={'navbar'}>
          <li><a href="#education">About</a></li>
          <li><a href="#education">Contact</a></li>
          <li><a href="#education">Notes</a></li>
        </ul>
      </div>
    )
  }
}

export default ScrollNavbar