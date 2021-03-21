// @ts-check

import DisconnectedState from './states/Disconnected.js';
import ConnectedState from './states/Connected.js';

export default class TcpConnection {
  // BEGIN (write your solution here)
  constructor() {
    // Список состояний нужен для переключений между ними
    // Иначе возможно появление циклических зависимостей внутри состояний
    this.states = {
      Disconnected: DisconnectedState,
      Connected: ConnectedState
    }
    // Начальное состояние
    // Внутрь передается текущий объект
    // Это нужно для смены состояний (примеры ниже)
    this.state = new this.states.Disconnected(this);
  }
  
  connect () {
    this.state.connect();
  }
  
  write (data) {
    this.state.write(data);
  }
  
  disconnect () {
    this.state.disconnect();
  }
  
  getCurrentState () {
    return this.state.getCurrentState();
  }
  // END
}
