// @ts-check

import omit from 'lodash/omit';
import redux from 'redux';

const { createStore } = redux;

// BEGIN (write your solution here)
const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'TASK_ADD':
      return {[action.payload.task.id]: action.payload.task, ...state};
    case 'TASK_REMOVE':
      return omit (state, action.payload.id);
    default: // действие по умолчанию – возврат текущего состояния
      return state;
  }
};

const generateStore = (state={}) => {
  const store = createStore(reducer, state);
  return store;
}

export default generateStore;
// END
