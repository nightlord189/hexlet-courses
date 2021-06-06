// @ts-check
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index.js';

// BEGIN (write your solution here)
const mapStateToProps = (state) => {
    const { byId, allIds } = state.tasks;
    const tasks = allIds.map((id) => byId[id]);
    return { tasks };
  };
// END

const actionCreators = {
  removeTask: actions.removeTask,
  toggleTaskState: actions.toggleTaskState,
};

const Tasks = ({
  tasks,
  removeTask,
  toggleTaskState,
}) => {
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
              <a href="#" onClick={handleToggleTaskState(id)}>
                {state === 'active' ? text : <s>{text}</s>}
              </a>
            </span>
            <button type="button" title="remove" className="close" onClick={handleRemoveTask(id)}>
              <span>&times;</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, actionCreators)(Tasks);
