// @ts-check

import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import faker from '../faker.js';
import * as actions from '../actions/index.js';

// BEGIN (write your solution here)
const actionCreators = {
  addTasks: actions.addTasks,
  cleanTasks: actions.cleanTasks,
};

const mapStateToProps = () => {
  const props = {
  };
  return props;
};

const generateTasks = (count) => {
  const tasks = Array.from(Array(count).keys())
  return tasks.map ((x) => {
    return { id: _.uniqueId(), text: faker.lorem.sentence() };
  });
}

class Panel extends React.Component {
    handleClean = (e) => {
      const { cleanTasks } = this.props;
      cleanTasks();
    }
  
    handleGenerate = (e) => {
      const { addTasks } = this.props;
      const tasks = generateTasks (5);
      addTasks(tasks);
    }
  
    render () {
        return (<div className="py-3">
        <button type="button" onClick = {this.handleClean} data-test="clean" className="btn btn-warning btn-sm mr-3">Clean</button>
        <button type="button" onClick = {this.handleGenerate} data-test="generate" className="btn btn-primary btn-sm">Generate</button>
      </div>);
    }
}

export default connect(mapStateToProps, actionCreators)(Panel);
// END
