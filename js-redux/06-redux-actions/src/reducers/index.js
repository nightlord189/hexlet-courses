// @ts-check

import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from '../actions/index.js';

// BEGIN
const tasks = handleActions({
  [actions.addTask](state, { payload: { task } }) {
    return [task, ...state];
  },
  [actions.removeTask](state, { payload: { id } }) {
    return state.filter((t) => t.id !== id);
  },
}, []);

const taskText = handleActions({
  [actions.updateNewTaskText](state, { payload: { text } }) {
    return text;
  },
  [actions.addTask]() {
    return '';
  },
}, '');
// END

export default combineReducers({
  taskText,
  tasks,
});