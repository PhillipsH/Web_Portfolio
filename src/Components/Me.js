import React from 'react';
import { Jumbotron} from 'reactstrap';
import './Styles/Me.css'

const Example = (props) => {
  return (
      <Jumbotron id='me-tron'>
        <div id='text-container'>
          <p id='type-text'>Hello I'm</p>
          <h1 id='name'>Phillips Halim</h1>
        </div>
          <p className="lead">Junior Software Developer</p>
          <p className="lead">
            Hello, I'm Phillips a recent BCIT grad in Computer Systems Technology taking the Cloud Computing Option. 
            I'm currently living in Vancouver, B.C. I enjoy creating all kinds of things in JavaScript/Node.js, Python and C++. 
            I'm always eager to learn new technologies especially when it comes to software development. 
            Some things I like to do outside of Software Development is listening to music, building keyboards and gaming.
          </p>
      </Jumbotron>
  );
};

export default Example;