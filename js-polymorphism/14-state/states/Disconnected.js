// @ts-check
/* eslint-disable class-methods-use-this */

export default class Disconnected {
  // BEGIN (write your solution here)
  constructor(connection) {
    this.connection = connection;
  }
  
  connect () {
    this.connection.state = new this.connection.states.Connected(this.connection);
  }
  
  write (data) {
    throw new Error ('cannot write - disconnected!');
  }
  
  disconnect () {
    throw new Error ('already disconnected!');
  }
  
  getCurrentState () {
    return 'disconnected';
  }
  // END
}
