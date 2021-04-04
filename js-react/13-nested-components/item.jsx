// @ts-check
/* eslint-disable react/prefer-stateless-function */

import React from 'react';

// BEGIN (write your solution here)
class Item extends React.Component {  
  render () {
    const { id, task, onRemove } = this.props;
    return <div className="row">
      <div>
        <button type="button" className="btn btn-primary btn-sm" onClick={this.props.onRemove(id)}>-</button>
      </div>
      <div className="col-10">{task}</div>
    </div>;
  }
}

export default Item;
// END
