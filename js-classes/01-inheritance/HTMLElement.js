export default class HTMLElement {
  constructor(attributes = {}) {
    this.attributes = attributes;
    console.log(attributes);
    
  }

  stringifyAttributes() {
    // BEGIN (write your solution here)
    return Object.entries (this.attributes).map(x => `${x[0]}="${x[1]}"`).join(' ');
    // END
  }
}
