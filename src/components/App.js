import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  addTask,
  deleteTask,
  getFilterValue,
} from '../redux/actions/todoActions';

export class App extends Component {
  state = {
    task: '',
    // filter:"",
  };
  onHandleChange = event => {
    this.setState({ task: event.target.value });
  };
  // onHandleFilterChange=(event)=>{
  //     this.setState({filter: event.target.value})
  // }
  onHandleSubmit = event => {
    event.preventDefault();
    this.props.addTask({
      task: this.state.task,
      id: Date.now(),
    });
    this.setState({ task: '' });
  };

  render() {
    // console.log(this.props);
    return (
      <>
        <form onSubmit={this.onHandleSubmit}>
          <input
            value={this.state.task}
            onChange={this.onHandleChange}
            type="text"
          />
          <button type="submit">add task</button>
        </form>
        <input
          value={this.props.filter}
          onChange={event => this.props.getFilterValue(event.target.value)}
          type="text"
        />
        <ul>
          {this.props.todoList.map(({ task, id }) => (
            <li key={id}>
              {' '}
              {task}{' '}
              <button onClick={() => this.props.deleteTask(id)} type="button">
                delete
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state);
  return {
    todoList: state.filter
      ? state.todoList.filter(({ task }) =>
          task.toLowerCase().includes(state.filter.toLowerCase()),
        )
      : state.todoList,
    filter: state.filter,
  };
};

const mapDispatchToProps = dispatch => ({
  addTask: task => dispatch(addTask(task)),
  deleteTask: id => dispatch(deleteTask(id)),
  getFilterValue: value => dispatch(getFilterValue(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default connect(mapStateToProps,{addTask})(App)

// export default App;
