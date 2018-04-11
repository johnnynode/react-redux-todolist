import React, {Component} from 'react';
import {connect} from 'react-redux';
import TodoList from "../Templates/TodoList";
import TodoAction from '../../Action/TodoAction';

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

// connect 这个函数有两个参数
// 第一个参数是用于连接当前数据和reducer的，可以把state参数理解为rootReducer
// 所以通过调用 state.todos 获取 todos这个reducer的数据 并且绑定到 this.props.todos中
// 第二个参数是处理Action中的用到的方法绑定到this.props中
export default connect(
  (state) => ({todos: state.todos}),
  {
    toggleItem: TodoAction.toggleItem,
    delItem: TodoAction.delItem,
    editItem: TodoAction.editItem
  }
)(TodoListContainer)