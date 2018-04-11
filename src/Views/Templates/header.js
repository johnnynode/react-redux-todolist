import React, {Component} from 'react';

class Header extends Component {
  
  static get defaultProps() {
    return {
      name: "Johnny",
      todoCount: 0
    }
  }

  render() {
    const {name, todoCount} = this.props;
    return (
      <div>
        <h1> My book list</h1>
        <h3> Hello {name} , you have {todoCount} {todoCount > 1 ? "books" : "book"} left to read!</h3>
      </div>
    )
  }
}

export default Header;