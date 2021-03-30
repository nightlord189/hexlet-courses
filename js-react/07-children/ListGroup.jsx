// @ts-check
/* eslint-disable react/prefer-stateless-function */

import React from 'react';

// BEGIN (write your solution here)
class ListGroup extends React.Component{
  renderChildren () {
    return React.Children.map(this.props.children, (child, i) => {
      return <li className="list-group-item">{child}</li>
    });
  }
  
  render () {
    return <ul className="list-group">{this.renderChildren()}</ul>
  }
}

export default ListGroup;
// END
