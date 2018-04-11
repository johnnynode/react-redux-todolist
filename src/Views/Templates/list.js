import React, {Component} from 'react';
import ListItem from './list-item';

class List extends Component {
  static get defaultProps() {
    return {
      todos:[],
      toggleItemList:()=>{},
      delItemList:()=>{}
    }
  }

  render() {
    const {
      todos,
      toggleItemList,
      delItemList,
      editItemList
    } = this.props;
    return (
      <div>
        <ul>
          {
            todos.map((todo) => {
              return (
                <li key={todo.id}>
                  <ListItem 
                    id={todo.id} 
                    content={todo.content} 
                    checked={todo.checked} 
                    toggleItem={(id) => {
                      toggleItemList(id);
                    }}
                    delItem={(id) => {
                      delItemList(id);
                    }}
                    editItem={(id, content) => {
                      editItemList(id, content);
                    }}
                  />
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default List;