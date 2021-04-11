// @ts-check

import _ from 'lodash';
import { combineReducers } from 'redux';

const comments = (state = {}, action) => {
  // BEGIN (write your solution here)
  switch (action.type) {
    case 'TASK_COMMENT_ADD':
      return {
        [action.payload.comment.id]: action.payload.comment,
        ...state
      };
    case 'TASK_COMMENT_REMOVE':
      return _.omit (state, action.payload.id);
    case 'TASK_REMOVE':
      return _.omitBy(state, x=>x.taskId === action.payload.id);
    default: // действие по умолчанию – возврат текущего состояния
      return state;
  }
  // END
};

const tasks = (state = {}, action) => {
  // BEGIN (write your solution here)
  switch (action.type) {
    case 'TASK_ADD':
      return {
          [action.payload.task.id]: action.payload.task, 
          ...state
      };
    case 'TASK_REMOVE':
      return _.omit (state, action.payload.id);
    default: // действие по умолчанию – возврат текущего состояния
      return state;
  }
  // END
};


export default combineReducers({
  comments,
  tasks,
});
