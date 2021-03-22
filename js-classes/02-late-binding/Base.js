/* eslint-disable class-methods-use-this */

export default class Base {
  // BEGIN (write your solution here)  
  isInstanceOf(className) {
    if (this.constructor.name === className) {
      return true;
    }
    const prototype = Object.getPrototypeOf(this);
    return prototype === null ? false : this.isInstanceOf.bind(prototype, className)();
  }
  // END
}
