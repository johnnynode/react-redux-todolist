import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Templates/header';

class HeaderContainer extends Component {
    render() {
        const { todos } = this.props;
        let todoCount = todos.filter((todo) => !todo.checked).length;
        return (
            <Header name="Joh" todoCount={ todoCount }/>
        )
    } 
}

export default connect(
    (state) => ({todos: state.todos})
)(HeaderContainer);