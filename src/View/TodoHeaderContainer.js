/*
import React, {Component} from 'react';
import TodoHeader from "./TodoHeader";
import {connect} from 'react-redux';

class TodoHeaderContainer extends Component {

  render() {
    const { todos } = this.props;
    let todoCount = todos.filter((todo) => !todo.checked).length;
    
    return (
      <TodoHeader name="汪峰" todoCount={todoCount} />
    )
  }
}

export default connect(
  (state) => ({todos: state.todos})
)(TodoHeaderContainer);
*/

import React, { Component } from 'react';
import TodoHeader from './TodoHeader';
import { connect } from 'react-redux';

class TodoHeaderContainer extends Component {

    render() {

        const { todos } = this.props;

        let todoCount = todos.filter((todo) => !todo.checked).length;

        return (
            <TodoHeader name="汪峰" todoCount={ todoCount }/>
        )
    } 
}

export default connect(
    (state) => ({todos: state.todos})
)(TodoHeaderContainer);