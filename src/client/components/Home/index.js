import React, { Fragment } from 'react';

import { PROJECT_DESCRIPTION } from '../../config/defaults';

import './styles/index.css';

import Genres from '../Genres';


const Paragraph = () => {
  return(
    <p className="reference-text">
      { PROJECT_DESCRIPTION }
    </p>
  );
}

function App(props) {
  return (
    <Fragment>
      <Paragraph />
      <Genres {...props}/>
    </Fragment>
  );
}

export default App;
