import React, { Component } from 'react';
import './Styles/NavbarScroll.css'
export class ScrollNavbar extends Component {

  constructor(props){
    super(props);
    this.state = {show: "top-show"}
    this.prevScrollpos = window.pageYOffset;
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this), { passive: true })

  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }


  
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


  render() {
    return (
      <div className={this.state.show} id={'navbar-container'}>
        <ul className={this.state.show} id={'navbar'}>
          <li><a>About</a></li>
          <li><a>Contact</a></li>
          <li><a>Notes</a></li>
        </ul>
      </div>
    )
  }
}

export default ScrollNavbar