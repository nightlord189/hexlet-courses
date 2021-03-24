// @ts-check
/* eslint-disable react/prefer-stateless-function */

import React from 'react';

// BEGIN (write your solution here)
class Card extends React.Component {
  static defaultProps = {
    title: null,
    text: null,
  };

  render() {
    const { title, text } = this.props;
    return (
     <div className="card">
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{text}</p>
      </div>
    </div>
    );
  }
}

export default Card;
// END
