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

const tasks = (state = [], action) => {
  switch (action.type) {
    case 'TASK_ADD': {
      return [action.payload.task, ...state];
    }
    case 'TASK_REMOVE': {
      return state.filter((t) => t.id !== action.payload.id);
    }
    // BEGIN (write your solution here)
    case 'TASK_ADD_MANY': {
      return action.payload.tasks;
    }   
    case 'TASK_CLEAN': {
      return [];
    }   
    // END
    default:
      return state;
  }
};

export default combineReducers({
  text,
  tasks,
});
