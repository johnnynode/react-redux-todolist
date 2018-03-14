import React, {Component} from 'react';
import TodoList from "./TodoList";
import TodoAction from '../Action/TodoAction';
import {connect} from 'react-redux';

class TodoListContainer extends Component {
  render() {
    const { 
      todos,
      toggleItem,
      delItem,
      editItem
    } = this.props;
    return (
      <TodoList 
          todos={todos} 
          toggleItemList={toggleItem}
          delItemList={delItem}
          editItemList={editItem}
      />
    )
  }
}

export default TodoListContainer = connect(
  (state) => ({todos: state.todos}),
  {
    toggleItem: TodoAction.toggleItem,
    delItem: TodoAction.delItem,
    editItem: TodoAction.editItem
  }
)(TodoListContainer)