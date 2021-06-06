// @ts-check

import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../actions/index.js';

const mapStateToProps = () => {
  const props = {};
  return props;
};

const actionCreators = {
  addTask: actions.addTask,
};

const NewTaskForm = ({ addTask, reset, handleSubmit }) => {
  // BEGIN (write your solution here)
  const onSubmit = (values) => {
    const task = { ...values, id: _.uniqueId(), state: 'active' };
    addTask({ task });
    reset();
  }  
  // END

  return (
    <form className="form-inline" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group mx-3">
        <Field name="text" required component="input" type="text" />
      </div>
      <input type="submit" className="btn btn-primary btn-sm" value="Add" />
    </form>
  );
};

const ConnectedNewTaskForm = connect(mapStateToProps, actionCreators)(NewTaskForm);
// BEGIN (write your solution here)
export default reduxForm({
  form: 'newTask',
})(ConnectedNewTaskForm);
// END
