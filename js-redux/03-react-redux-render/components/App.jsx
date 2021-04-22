// @ts-check

/* eslint-disable react/static-property-placement */
import React from 'react';

// BEGIN (write your solution here)
export default class App extends React.Component {
  static defaultProps = {
    text: '',
  };
  
  handleReset = () => {
    const { dispatch, resetText } = this.props;
    dispatch(resetText());
  }
  
  handleUpdateText = (e) => {
    const { dispatch, updateText } = this.props;
    dispatch(updateText(e.target.value));
  }
  
  render() {
    const {text} = this.props;
    return <div>
      <form>
        <input type="text" onChange = {this.handleUpdateText} value={text} />
        <button type="button" onClick = {this.handleReset}>Reset</button>
      </form>
      {text.length > 0 && <div>{text}</div>}
    </div>
  }
}
// END
