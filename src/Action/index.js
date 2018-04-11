import Constants from '../Constants';

const Action = {
  toggleItem(id) {
    return {
      id,
      type:Constants.toggleItem
    };
  },
  delItem(id) {
    return {
      id,
      type:Constants.delItem
    };
  },
  createItem(title) {
    return {
      title,
      type:Constants.createItem
    };
  },
  editItem(id, title) {
    return {
      id,
      title,
      type:Constants.editItem
    };
  },
  loadData() {
    // 这里的dispatch就是store中的dispatch
    // 这里返回的是一个函数，在store中处理字典和函数两种不同的方式
    // 这里是函数，处理之后仍旧返回的是字典
    return (dispatch) => {
        fetch('books.json')
            .then((data) => data.json())
            .then((todos)=>{
                dispatch({
                    type: Constants.loadData,
                    todos
                });
            });
    }
  }
};

export default Action;