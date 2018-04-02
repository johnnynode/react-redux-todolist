import React, {Component} from 'react';

class TodoHeader extends Component {
  
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
        <h1> My todo list</h1>
        <h1> Hello {name} you have {todoCount} items todo left</h1>
      </div>
    )
  }
}

export default TodoHeader;