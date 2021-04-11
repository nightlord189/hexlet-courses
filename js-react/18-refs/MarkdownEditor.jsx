// @ts-check

import $ from 'jquery';
import React from 'react';

// BEGIN (write your solution here)
class MarkdownEditor extends React.Component {
  constructor (props) {
    super (props);
    this.textRef = React.createRef();
  }
  
  componentDidMount() {
    const {onContentChange} = this.props;
    $(this.textRef.current).markdown({
      iconlibrary: 'fa', // правильная библиотека иконок
      onChange: (e) => {
        const content = e.getContent();
        console.log(content);
        onContentChange (content);
      },
    });
  }
  
  render () {
    return <div ref={this.textRef}></div>;
  }
}

export default MarkdownEditor;
// END
