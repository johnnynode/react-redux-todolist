class Utils {
  trim(str) {
    return typeof str === 'string' ? str.replace(/^\s+|\s+$/g, "") : "";
  }

  // toggle 特定一项
  _toggleItemList(todos, id) {
    let newTodos = [...todos]; // copy todos
    let target = newTodos.find((todo) => {
      return todo.id === id;
    });
    target.checked = !target.checked;
    return newTodos;
  }

  // 删除特定一项
  _delItemList(todos, id) {
    let newTodos = [...todos];
    let index = newTodos.findIndex((todo) => {
      return todo.id === id;
    });

    // 按照索引进行删除
    (index !== -1) && newTodos.splice(index, 1);
    return newTodos;
  }

  // 新增代办事项
  _createItem (todos, val) {
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
  _editItemList (todos, id, content) {
    let newTodos = [...todos];
    let target = newTodos.find((todo)=> {
      return todo.id === id;
    });
    target.content = content;
    return newTodos;
  }
}

export default new Utils();