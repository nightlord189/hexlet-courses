import HTMLElement from './HTMLElement.js';

// BEGIN (write your solution here)
class HTMLPairElement extends HTMLElement {
  constructor (attributes = {}) {
    super (attributes);
    this.textContent = '';
  }
  
  toString() {
    return `<${this.getTagName()}${this.stringifyAttributes()}>${this.textContent}</${this.getTagName()}>`;
  }
  
  getTextContent() {
    return this.textContent;
  }
  
  setTextContent(body) {
   this.textContent = body; 
  }
}
// END
export default HTMLPairElement;
