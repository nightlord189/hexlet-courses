// @ts-check

import cn from 'classnames';
import React from 'react';

// BEGIN (write your solution here)
class BtnGroup extends React.Component{
  constructor (props) {
    super (props);
    this.state = {
      firstActive: false,
      secondActive: false
    }
  }
  
  firstClick = () => {
    this.setState ({
      firstActive: true,
      secondActive: false
    });
  }
  
  secondClick = () => {
    this.setState ({
      firstActive: false,
      secondActive: true
    });   
  }
  
  render () {
    const btnFirstCn = cn ('btn', 'btn-secondary', 'left', {
      'active': this.state.firstActive
    });
    const btnSecondCn = cn ('btn', 'btn-secondary', 'right', {
      'active': this.state.secondActive
    });
    return <div className="btn-group" role="group">
      <button type="button" onClick = {this.firstClick} className={btnFirstCn}>Left</button>
      <button type="button" onClick = {this.secondClick} className={btnSecondCn}>Right</button>
    </div>;
  }
}

export default BtnGroup;
// END
