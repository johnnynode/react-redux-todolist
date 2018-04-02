import React, {Component} from 'react';
import {connect} from 'react-redux';
import TodoList from "./TodoList";
import TodoAction from '../Action/TodoAction';

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