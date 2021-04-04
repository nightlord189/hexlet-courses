// @ts-check

import { uniqueId } from 'lodash';
import React from 'react';
import Item from './Item.jsx';

// BEGIN (write your solution here)
class TodoBox extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      text: '',
      items: []
    }
  }
  
  handleTextChange = (e) => {
    this.setState ({
      text: e.target.value
    });
  }
  
  handleRemove = (id) => (e) => {
    const newItems = this.state.items.filter (x=>x.id !== id);
    this.setState ({
      items: newItems
    });
  }
  
  handleAdd = (e) => {
    e.preventDefault();
    const newItems = [{
      id: uniqueId(),
      text: this.state.text
    }, ...this.state.items];
    this.setState ({
      items: newItems,
      text: ''
    });
  }
  
  render () {
    return <div>
  <div className="mb-3">
    <form className="todo-form form-inline mx-3" onSubmit={this.handleAdd}>
      <div className="form-group">
        <input type="text" value={this.state.text} onChange={this.handleTextChange} required="" className="form-control mr-3" placeholder="I am going..."/>
      </div>
      <button type="submit" className="btn btn-primary">add</button>
    </form>
  </div>
  {this.state.items.map(i =>
          <div key={i.id}>
                  <Item onRemove={this.handleRemove} task={i.text} id={i.id}/>
                  <hr/>
          </div>
  )}
</div>
  }
}

export default TodoBox;
// END
