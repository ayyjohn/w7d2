import React from 'react';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
    this.handleStatus = this.handleStatus.bind(this);
  }

  render() {
    return (
      <li>
        <p>title: { this.props.todo.title }</p>
        <p>description: { this.props.todo.body }</p>
        <p>
          status: { this.props.todo.done ? "done" : "unfinished"}
          <button onClick={this.handleStatus}>{this.props.todo.done ? "undo" : "complete"}</button>
        </p>
        <button onClick={this.handleRemoveTodo}>Remove Todo</button>
      </li>);
  }
  handleRemoveTodo(event) {
    event.preventDefault();
    this.props.removeTodo(this.props.todo);
  }

  handleStatus(event) {
    this.props.todo.done = (this.props.todo.done ? false : true);
    event.preventDefault();
    this.props.receiveTodo(this.props.todo);
  }
}

export default TodoListItem;
