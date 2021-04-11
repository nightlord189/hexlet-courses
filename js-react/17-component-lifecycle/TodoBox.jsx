// @ts-check

import axios from 'axios';
import React from 'react';
import update from 'immutability-helper';
import Item from './Item.jsx';
import routes from './routes.js';

// BEGIN (write your solution here)
   const compare = ( a, b ) => {
    if ( a.id > b.id ){
      return -1;
    }
    if ( a.id < b.id ){
      return 1;
    }
    return 0;
  }

class TodoBox extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      text : '',
      tasks: []
    };
  }
  
  async componentDidMount () {
    const res = await axios.get(routes.tasksPath());
    console.log(res.data);
    this.setState ({
      tasks: res.data
    });
  }
  
  onChangeText = async (e) => {
    const value = e.target.value;
    this.setState({
		text: value
    });
  }
  
  modifyTask = (task) => {
    const allTasks = this.state.tasks;
    const filtered = allTasks.filter (x=>x.id !== task.id);
    this.setState ({
      tasks: [task, ...filtered]
    });
  }
  
  onActivateTask = (id) => (e) => {
    console.log(`activate ${id}`);
    axios.patch(routes.activateTaskPath(id))
    .then((response) => {
        //console.log(response.data)
        this.modifyTask (response.data);
    });
  }
  
  onFinishTask = (id) => (e) => {
    console.log(`finish ${id}`);
    axios.patch(routes.finishTaskPath(id))
    .then((response) => {
       // console.log(response.data)
        this.modifyTask (response.data);
    });
  }
  
  handleSubmit = async (e) => {
    e.preventDefault ();
    const res = await axios.post(routes.tasksPath(), {text: this.state.text});
    const tasks = this.state.tasks;
    this.setState ({
      text: '',
      tasks: [res.data, ...tasks]
    });
  }
  
  renderActiveTasks () {
    const active = this.state.tasks.filter (x=>x.state==='active').sort(compare);
    return active.length > 0 && <div className="todo-active-tasks">
        {active.map (x=><Item key={x.id} state={x.state} onClick={this.onFinishTask(x.id)} text={x.text} id={x.id}/>)}
    </div>;
  }
  
  renderFinishedTasks () {
    const active = this.state.tasks.filter (x=>x.state==='finished').sort(compare);
    return active.length > 0 && <div className="todo-finished-tasks">
        {active.map (x=><Item key={x.id} state={x.state} onClick={this.onActivateTask(x.id)} text={x.text} id={x.id}/>)}
    </div>;
  }
  
  render () {
    const text = this.state.text;
    return <div>
  <div className="mb-3">
    <form onSubmit={this.handleSubmit} className="todo-form form-inline mx-3">
      <div className="form-group">
        <input type="text" onChange = {this.onChangeText} value={text} required={true} className="form-control mr-3" placeholder="I am going..."/>
      </div>
      <button type="submit" className="btn btn-primary">add</button>
    </form>
  </div>
  {this.renderActiveTasks()}
  {this.renderFinishedTasks()}
</div>;
  }
}

export default TodoBox;
// END
