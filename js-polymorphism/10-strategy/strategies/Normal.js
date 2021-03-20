// @ts-check
/* eslint-disable class-methods-use-this */

class Normal {
  // BEGIN (write your solution here)
  go (field) {
    for (let i=field.length-1; i>=0; i--) {
      for (let j=0; j<field[i].length; j++) {
        if (field[i][j] === -1) {
          return {x: i, y: j};
        }
      }
    }
    throw new Error ('cannot determine turn');
  }
  // END
}

export default Normal;
