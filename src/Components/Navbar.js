import React, { Component } from 'react';
import './Navbar.css'
class Navbar extends React.Component{
    render(){
        return(
            <div id='navbar'>
                <h2 id='site-name'>Phillips Halim</h2>
                <nav>
                    <ul class = "nav-links">
                        <li><a href="#">Skills</a></li>
                        <li><a href="#">Work</a></li>
                        <li><a href="#">Experience</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>

            </div>
        )
    }
}
export default Navbar