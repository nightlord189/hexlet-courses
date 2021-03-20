// @ts-check
/* eslint-disable class-methods-use-this */
/* eslint-disable default-case */

import Easy from './strategies/Easy.js';
import Normal from './strategies/Normal.js';

class TicTacToe {
  // BEGIN (write your solution here)
  constructor (level='easy') {
    this.field = [[-1, -1, -1], [-1, -1, -1], [-1, -1, -1]];
    switch (level) {
      case 'easy':
        this.strategy = new Easy();
        break;
      case 'normal':
        this.strategy = new Normal();
        break;
      default:
        throw new Error (`unknown level: ${level}`);
    }
  }
  
  isLineEqual (arr) {
    if (arr[0] == -1) {
      return false;
    }
    for (let i=1; i<arr.length; i++) {
      if (arr[i] !== arr[i-1]) {
        return false
      }
    }
    return true;
  }
  
  isWinner () {
    if (this.isLineEqual(this.field[0])) {
      return true;
    }
    if (this.isLineEqual(this.field[1])) {
      return true;
    }
    if (this.isLineEqual(this.field[2])) {
      return true;
    }
    if (this.isLineEqual([this.field[0][0], this.field[1][0], this.field[2][0]])) {
      return true;
    }
    if (this.isLineEqual([this.field[0][1], this.field[1][1], this.field[2][1]])) {
      return true;
    }
    if (this.isLineEqual([this.field[0][2], this.field[1][2], this.field[2][2]])) {
      return true;
    }
    if (this.isLineEqual([this.field[0][0], this.field[1][1], this.field[2][2]])) {
      return true;
    }
    if (this.isLineEqual([this.field[2][0], this.field[1][1], this.field[0][2]])) {
      return true;
    }
    return false;
  }
  
  go (x, y) {
    //console.log(`x: ${x}, y: ${y}`);
    if (x !== undefined && y !== undefined) {
      this.field[x][y]=0;
    } else {
      const turn = this.strategy.go (this.field);
      this.field[turn.x][turn.y] = 1;
    }
    return this.isWinner();
  }
  // END
}

export default TicTacToe;
