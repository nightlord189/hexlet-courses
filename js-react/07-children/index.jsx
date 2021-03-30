// @ts-check

import ReactDOM from 'react-dom';
import React from 'react';

import ListGroup from './ListGroup.jsx';

const dom = (
  <ListGroup>
    <p>one</p>
    <p>two</p>
  </ListGroup>
);

ReactDOM.render(
  dom,
  document.getElementById('container'),
);
