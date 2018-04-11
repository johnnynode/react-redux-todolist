import React, {Component} from 'react';
import { connect } from 'react-redux';
import TodoAction from '../Action/TodoAction';
import TodoHeaderContainer from "../Views/Container/TodoHeaderContainer";
import TodoInputContainer from "../Views/Container/TodoInputContainer";
import TodoListContainer from "../Views/Container/TodoListContainer";

class App extends Component {
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

export default App = connect(
  undefined,
  {
      loadData: TodoAction.loadData
  }
)(App);