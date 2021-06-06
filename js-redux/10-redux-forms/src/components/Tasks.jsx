// @ts-check

import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index.js';

const mapStateToProps = (state) => {
  const { tasks: { byId, allIds } } = state;
  const tasks = allIds.map((id) => byId[id]);
  return { tasks };
};

const actionCreators = {
  removeTask: actions.removeTask,
  toggleTaskState: actions.toggleTaskState,
};

const Tasks = ({ removeTask, toggleTaskState, tasks }) => {
  const handleRemoveTask = (id) => () => {
    removeTask({ id });
  };

  const handleToggleTaskState = (id) => () => {
    toggleTaskState({ id });
  };

  if (tasks.length === 0) {
    return null;
  }

  return (
    <div className="mt-3">
      <ul className="list-group">
        {tasks.map(({ id, text, state }) => (
          <li key={id} className="list-group-item d-flex">
            <span className="mr-auto">
              <button type="button" className="btn btn-link p-0 text-decoration-none" data-test="task-toggle-state" onClick={handleToggleTaskState(id)}>
                {state === 'active' ? text : <s>{text}</s>}
              </button>
            </span>
            <button
              type="button"
              title="remove"
              data-test="task-remove"
              className="close"
              onClick={handleRemoveTask(id)}
            >
              <span>&times;</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, actionCreators)(Tasks);
