import React from 'react';
import { Jumbotron} from 'reactstrap';
import './Me.css'

const Example = (props) => {
  return (
    <div>
      <Jumbotron id='me-tron'>
        <h1 className="display-3">Phillips Halim</h1>
        <p className="lead">Junior Software Developer</p>
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
        </p>
      </Jumbotron>
    </div>
  );
};

export default Example;