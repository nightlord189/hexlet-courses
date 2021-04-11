// @ts-check
/* eslint-disable react/prefer-stateless-function, jsx-a11y/anchor-is-valid */

import React from 'react';

// BEGIN (write your solution here)
class Item extends React.Component {
  renderLink () {
    const {state, text, onClick} = this.props;
    return state === 'finished' ? <s><a href="#" onClick = {onClick} className="todo-task">{text}</a></s>
    : <a href="#" onClick = {onClick} className="todo-task">{text}</a>;
  }
  
  render () {
    const {id} = this.props;
    return <div className="row">
      <div className="col-1">{id}</div>
      <div className="col">
        {this.renderLink()}
      </div>
    </div>;
  }
}

export default Item;
// END
