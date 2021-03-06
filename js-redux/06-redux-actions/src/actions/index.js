// @ts-check

import { createAction } from 'redux-actions';

export const updateNewTaskText = createAction('TEXT_UPDATE');

// BEGIN
export const addTask = createAction('TASK_ADD');
export const removeTask = createAction('TASK_REMOVE');
// END