// @ts-check
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/static-property-placement */

import React from 'react';
import cn from 'classnames';

// BEGIN (write your solution here)
class Collapse extends React.Component {
  static defaultProps = {
    opened: true,
  };
  
  constructor (props) {
    super (props);
    const {opened} = props;
    this.state = {
      state: opened ? 'opened' : 'collapsed'
    }
  }
  
  clickCollapse = (event) => {
    let state = this.state.state;
    if (state === 'opened') {
      state = 'collapsed';
    } else {
      state = 'opened';
    }
    this.setState ({state: state})
  }
  
  render () {
    const cl = cn('collapse', {
          'show': this.state.state === 'opened'
    });
    return <div>
  <p>
    <a className="btn btn-primary" href="#" onClick = {this.clickCollapse}>Link with href</a>
  </p>
  <div className={cl}>
    <div className="card card-body">
      {this.props.text}
    </div>
  </div>
</div>
  }
}

export default Collapse;
// END
