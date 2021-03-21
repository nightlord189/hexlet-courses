// @ts-check
/* eslint-disable class-methods-use-this */

export default class Connected {
  // BEGIN (write your solution here)
  constructor(connection) {
    this.connection = connection;
  }
  
  connect () {
    throw new Error ('already connected!');
  }
  
  write (data) {
    
  }
  
  disconnect () {
    this.connection.state = new this.connection.states.Disconnected(this.connection);
  }
  
  getCurrentState () {
    return 'connected';
  }
  // END
}
