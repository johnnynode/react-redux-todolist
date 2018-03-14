import Constants from '../Constants/Constants';

// toggle 特定一项
let _toggleItemList = (todos, id) => {
  let newTodos = [...todos]; // copy todos
  let target = newTodos.find((todo) => {
    return todo.id === id;
  });
  target.checked = !target.checked;
  return newTodos;
};

// 删除特定一项
let _delItemList = (todos, id) => {
  let newTodos = [...todos];
  let index = newTodos.findIndex((todo) => {
    return todo.id === id;
  });

  // 按照索引进行删除
  (index !== -1) && newTodos.splice(index, 1);
  return newTodos;
}

// 新增代办事项
let _createItem = (todos, val) => {
  let newTodos = [...todos];
  let index = newTodos.length ? newTodos[newTodos.length -1].id - 0 + 1 : 1;
  let json = {
    id:index,
    content:val,
    checked:false
  };
  newTodos.push(json);
  return newTodos;
}

// 编辑列表
let _editItemList = (todos, id, content) => {
  let newTodos = [...todos];
  let target = newTodos.find((todo)=> {
    return todo.id === id;
  });
  target.content = content;
  return newTodos;
}

let todos = (state = [], action = {}) => {
  // state 默认值为 [], action 默认值为 {}
  switch(action.type) {
    case Constants.TOGGLEITEM:
      return _toggleItemList(state, action.id);
    case Constants.DELITEM:
      return _delItemList(state, action.id);
    case Constants.CREATEITEM:
      return _createItem(state, action.title);
    case Constants.EDITITEM:
      return _editItemList(state, action.id, action.title);
    case Constants.LOADDATA:
      return action.todos;
    default:
      return state;
  }
}

export default todos;