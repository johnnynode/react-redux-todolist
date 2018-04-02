import React, {Component} from 'react';
import { connect } from 'react-redux';
import TodoAction from '../Action/TodoAction';
import TodoHeaderContainer from "./Container/TodoHeaderContainer";
import TodoInputContainer from "./Container/TodoInputContainer";
import TodoListContainer from "./Container/TodoListContainer";

class TodoApp extends Component {
  render() {
    return (
      <div>
        <TodoHeaderContainer />
        <TodoInputContainer />
        <TodoListContainer />
      </div>
    )
  }

  componentDidMount() {
    this.props.loadData();
  }
}

export default TodoApp = connect(
  undefined,
  {
      loadData: TodoAction.loadData
  }
)(TodoApp);