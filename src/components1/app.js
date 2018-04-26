import React, {Component} from 'react';
import { connect } from 'react-redux';
import Action from '../action';
import HeaderContainer from "../views/container/header-container";
import InputContainer from "../views/container/input-container";
import ListContainer from "../views/container/list-container";

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
    console.log('App data load!');
    this.props.loadData();
  }
}

export default App = connect(
  undefined,
  {
      loadData: Action.loadData
  }
)(App);