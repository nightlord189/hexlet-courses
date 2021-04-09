// @ts-check
/* eslint-disable react/static-property-placement */

import cn from 'classnames';
import React from 'react';

// BEGIN (write your solution here)
const Header = (props) => <div className="modal-header">
          <div className="modal-title">{props.children}</div>
          <button type="button" onClick = {props.toggle} className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">x</span>
          </button>
        </div>;
const Body = (props) => <p className="modal-body">{props.children}</p>;

const Footer = (props) => <p className="modal-footer">{props.children}</p>;

class Modal extends React.Component {
  static Header = Header;
  static Body = Body;
  static Footer = Footer;
  
  static defaultProps = {
    isOpen: false
  }
  
  constructor (props) {
    super (props);
    
  }

  render() {
    const { isOpen, children } = this.props;
    const className = cn('modal', {
      fade: isOpen,
      show: isOpen,
    });
    const style = {
      display: isOpen ? 'block' : 'none'
    }
    return <div className={className} style={style} role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          {this.props.children}
        </div>
      </div>
    </div>;
  }
}

export default Modal;
// END
