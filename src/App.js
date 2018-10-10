import React, { Component } from 'react';
import './App.scss';
import { changeIPTaskName, changeIPTaskCategory, changeIPTaskUrgency,
  resetIPTask, addTaskToList, removeTask, urgency, category }
  from './Reducers.js';

const clickCreate = () => {
  addTaskToList();
  resetIPTask();
}

class TaskManager extends Component {
  render() {
    return (
      <div className="tasks">
        <div className="task-maker">
          Task Maker
          <input
            className="create-task name"
            placeholder="Task Name"
            onChange={changeIPTaskName}
          />
          <div className="create-task name">
          Category
          </div>
          <div className="create-task name">
          Urgency
          </div>
          <button className="create-task button" onClick={clickCreate}>
            Create
          </button>
        </div>
        <div className="task-list">
        task list placeholder text
        </div>
      </div>
    );
  }
}

export default TaskManager;
