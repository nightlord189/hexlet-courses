// @ts-check
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import { connect } from "react-redux";
import cn from "classnames";
import * as actions from "../actions/index.js";

const mapStateToProps = (state) => {
  // BEGIN (write your solution here)
  const {
    tasks: { byId, allIds },
    tasksUIState,
  } = state;
  const tasks = allIds.map((id) => byId[id]);
  return { tasks, tasksUIState };
  // END
};

const actionCreators = {
  inverseTaskTheme: actions.inverseTaskTheme,
};

const Tasks = ({ inverseTaskTheme, tasksUIState, tasks }) => {
  // BEGIN (write your solution here)
    const handleInverseTaskTheme = (task) => (e) => {
      e.preventDefault();
      inverseTaskTheme({ task });
    };

    const renderTask = (task) => {
      const themeToClasses = {
        light: "bg-light text-dark",
        dark: "bg-dark text-light",
      };
      const currentThemeClass = themeToClasses[tasksUIState[task.id].theme];
      const classes = cn({
        "list-group-item d-flex": true,
        [currentThemeClass]: true,
      });

      return (
        <li key={task.id} className={classes}>
          <span className="mr-auto">
            <a
              onClick={handleInverseTaskTheme(task)}
              href="#"
              className="text-reset"
            >
              {task.text}
            </a>
          </span>
        </li>
      );
    }

      if (tasks.length === 0) {
        return null;
      }

      return (
        <div className="mt-3">
          <ul className="list-group">
            {tasks.map((task) => renderTask(task))}
          </ul>
        </div>
      );
  // END
};

export default connect(mapStateToProps, actionCreators)(Tasks);