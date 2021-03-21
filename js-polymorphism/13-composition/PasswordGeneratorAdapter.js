// @ts-check
/* eslint-disable class-methods-use-this */

import generator from 'generate-password';

export default class PasswordGeneratorAdapter {
  // BEGIN (write your solution here)
  generatePassword(length, options) {
    const numbers = options.indexOf ('numbers') !== -1;
    const symbols = options.indexOf ('symbols') !== -1;
    let uppercase = options.indexOf ('uppercase') !== -1;
    let lowercase = options.indexOf ('lowercase') !== -1;
    if (uppercase === false && lowercase === false) {
      lowercase = true;
    }
    console.log (`length ${length}, symbols: ${symbols}, numbers: ${numbers}, uc: ${uppercase}, lc: ${lowercase}`)
    return generator.generate({
	  length: length,
	  numbers: numbers,
      symbols: symbols,
      uppercase: uppercase,
      lowercase: lowercase
    });
  }
  // END
}
