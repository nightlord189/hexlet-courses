import HTMLElement from './HTMLElement.js';

// BEGIN (write your solution here)
export default class HTMLHrElement extends HTMLElement{
  toString() {
     return Object.keys(this.attributes).length > 0 ? `<hr ${this.stringifyAttributes()}>` : `<hr>`;
  }
}
// END
