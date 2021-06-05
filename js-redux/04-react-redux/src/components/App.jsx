// @ts-check

import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { updateNewTaskText, addTask, removeTask } from "../actions/index.js";

// BEGIN (write your solution here)
const mapStateToProps = (state) => {
  const props = {
    tasks: state.tasks,
    text: state.text,
  };
  return props;
};

class App extends React.Component {
  handleUpdateText = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(updateNewTaskText(e.target.value));
  };

  handleAddTask = (e) => {
    e.preventDefault();
    const { dispatch, text } = this.props;
    dispatch(addTask({ text: text, id: _.uniqueId() }));
  };

  handleRemoveTask = (id) => () => {
    const { dispatch } = this.props;
    dispatch(removeTask(id));
  };

  renderTasks() {
    const { tasks } = this.props;
    if (tasks.length === 0) {
      return null;
    }

    const taskItems = tasks.map((task) => {
      return (
        <li key={task.id} className="list-group-item d-flex">
          <span className="mr-auto">{task.text}</span>
          <button
            onClick={this.handleRemoveTask(task.id)}
            type="button"
            className="close"
          >
            <span>&times;</span>
          </button>
        </li>
      );
    });

    return (
      <div className="mt-3">
        <ul className="list-group">{taskItems}</ul>
      </div>
    );
  }

  render() {
    const text = this.props.text;
    return (
      <div className="col-5">
        <form action="" onSubmit={this.handleAddTask} className="form-inline">
          <div className="form-group mx-sm-3">
            <input
              type="text"
              onChange={this.handleUpdateText}
              required
              value={text}
            />
          </div>
          <button type="submit" className="btn btn-primary btn-sm">
            Add
          </button>
        </form>
        {this.renderTasks()}
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
// END
