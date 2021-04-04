/* eslint-disable jsx-a11y/anchor-is-valid */

import _ from 'lodash';
import React from 'react';

// BEGIN (write your solution here)
class Component extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      log: []
    }
  }
  
  addLog (value) {
    this.setState ({
      log: [{id: _.uniqueId(), value: value}, ...this.state.log]
    });
  }
  
  add = (e) => {
    const value = this.state.log.length > 0 ? this.state.log[0].value+1 : 1;
    this.addLog (value);
  }

  remove = (e) => {
    const value = this.state.log.length > 0 ? this.state.log[0].value-1 : -1;
    this.addLog (value);
  }
  
  removeLog = (id) => (e) => {
    this.setState ({
      log: this.state.log.filter ((x)=>{return x.id !== id})
    });
  }
  
  renderLog () {
    return this.state.log.length > 0 && <div className="list-group">
      {this.state.log.map (
        x=>
        <button type="button" onClick={this.removeLog(x.id)} className="list-group-item list-group-item-action" key={x.id}>{x.value}</button>)}
    </div>;
  }
  
  render () {
    return <div>
      <div className="btn-group" role="group">
        <button type="button" className="btn hexlet-inc" onClick={this.add}>+</button>
        <button type="button" className="btn hexlet-dec" onClick={this.remove}>-</button>
      </div>
      {this.renderLog()}
    </div>;
  }
}

export default Component;
// END
