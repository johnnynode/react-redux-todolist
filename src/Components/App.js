import React, {Component} from 'react';
import { connect } from 'react-redux';
import Action from '../Action';
import HeaderContainer from "../Views/Container/header-container";
import InputContainer from "../Views/Container/input-container";
import ListContainer from "../Views/Container/list-container";

class App extends Component {
  render() {
    return (
      <div>
        <HeaderContainer />
        <InputContainer />
        <ListContainer />
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
      loadData: Action.loadData
  }
)(App);