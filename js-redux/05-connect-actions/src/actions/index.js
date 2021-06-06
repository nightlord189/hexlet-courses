// @ts-check

export const updateNewTaskText = (text) => ({
  type: 'TEXT_UPDATE',
  payload: {
    text,
  },
});

export const addTask = (task) => ({
  type: 'TASK_ADD',
  payload: {
    task,
  },
});

export const removeTask = (id) => ({
  type: 'TASK_REMOVE',
  payload: {
    id,
  },
});

// BEGIN (write your solution here)
export const addTasks = (tasks) => ({
  type: 'TASK_ADD_MANY',
  payload: {
    tasks,
  },
});

export const cleanTasks = () => ({
  type: 'TASK_CLEAN',
  payload: {},
});
// END
