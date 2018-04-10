import Constants from '../Constants/Constants';

const TodoAction = {
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

export default TodoAction;