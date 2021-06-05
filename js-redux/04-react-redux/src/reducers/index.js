// @ts-check

import { combineReducers } from 'redux';

const text = (state = '', action) => {
  switch (action.type) {
    case 'TEXT_UPDATE': {
      return action.payload.text;
    }
    case 'TASK_ADD': {
      return '';
    }
    default:
      return state;
  }
};

// BEGIN (write your solution here)
const tasks = (state = [], action) => {
  switch (action.type) {
    case 'TASK_ADD': {
      const { task } = action.payload;
      return [task, ...state];
    }
    case 'TASK_REMOVE': {
      const { id } = action.payload;
      return state.filter((task) => task.id !== id);
    }
    default:
      return state;
  }
};
// END

export default combineReducers({
  text,
  tasks,
});
