import Constants from '../Constants/Constants';

const TodoAction = {
  toggleItem(id) {
    return {
      id,
      type:Constants.TOGGLEITEM
    };
  },
  delItem(id) {
    return {
      id,
      type:Constants.DELITEM
    };
  },
  createItem(title) {
    return {
      title,
      type:Constants.CREATEITEM
    };
  },
  editItem(id, title) {
    return {
      id,
      title,
      type:Constants.EDITITEM
    };
  },
  loadDatax() {
    return (dispatch) => {
          fetch('todos.json')
          .then((data) => data.json())
          .then((todos) => {
            dispatch({
              todos,
              type:Constants.LOADDATA
            });
          });
    }
  },
  loadData() {
    return (dispatch) => {
        fetch('todos.json')
            .then((data) => data.json())
            .then((todos)=>{
                dispatch({
                    type: Constants.LOADDATA,
                    todos
                });
            });
    }
  }
};

export default TodoAction;