// @ts-check
/* eslint-disable react/prefer-stateless-function */

import cn from 'classnames';
import React from 'react';

// BEGIN (write your solution here)
class Alert extends React.Component{
  render () {
    const {text, type} = this.props;
    const className = cn('alert', `alert-${type}`);
    return <div className={className} role="alert">{text}</div>
  }
}

export default Alert;
// END
