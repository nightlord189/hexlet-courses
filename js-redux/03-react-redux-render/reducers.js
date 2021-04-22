// @ts-check

import { combineReducers } from 'redux';

const text = (state = '', action) => {
  // BEGIN (write your solution here)
  switch (action.type) {
    case 'UPDATE_TEXT':
      return action.payload.text;
    case 'RESET_TEXT':
      return '';
    default: // действие по умолчанию – возврат текущего состояния
      return state;
  }
  // END
};

export default combineReducers({
  text,
});
