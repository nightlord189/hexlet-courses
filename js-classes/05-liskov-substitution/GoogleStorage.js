/* eslint-disable class-methods-use-this */

// BEGIN (write your solution here)
import InMemory from './InMemory.js';

class GoogleStorage extends InMemory{
  count() {
    throw new Error ('cannot get count of keys!');
  }
}
// END
export default GoogleStorage;
