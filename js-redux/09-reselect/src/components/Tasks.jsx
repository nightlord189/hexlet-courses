// @ts-check

import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index.js';
import { filteredTasksSelector } from '../selectors/index.js';

// BEGIN (write your solution here)
const mapStateToProps = (state) => {
  const props = {
    tasks: filteredTasksSelector(state),
  };
  return props;
};
// END

const actionCreators = {
  removeTask: actions.removeTask,
  toggleTaskState: actions.toggleTaskState,
};

const Tasks = ({
  removeTask,
  toggleTaskState,
  tasks,
}) => {
  const handleRemoveTask = (id) => () => {
    removeTask({ id });
  };

  const handleToggleTaskState = (id) => () => {
    toggleTaskState({ id });
  };

  const renderTasks = () => (
    <div className="mt-3">
      <ul className="list-group">
        {tasks.map(({ id, text, state }) => (
          <li key={id} className="list-group-item d-flex">
            <span className="mr-auto">
              <button type="button" className="btn btn-link" onClick={handleToggleTaskState(id)}>
                {state === 'active' ? text : <s>{text}</s>}
              </button>
            </span>
            <button type="button" title="remove" className="close" onClick={handleRemoveTask(id)}>
              <span>&times;</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );

  if (tasks.length === 0) {
    return null;
  }

  return (
    <div className="mt-3">
      {renderTasks()}
    </div>
  );
};

export default connect(mapStateToProps, actionCreators)(Tasks);
