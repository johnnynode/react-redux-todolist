import Constants from '../Constants/Constants';
import Utils from '../Utils/Utils';

let todos = (state = [], action = {}) => {
  // state 默认值为 [], action 默认值为 {}
  switch(action.type) {
    case Constants.toggleItem:
      return Utils._toggleItemList(state, action.id);
    case Constants.delItem:
      return Utils._delItemList(state, action.id);
    case Constants.createItem:
      return Utils._createItem(state, action.title);
    case Constants.editItem:
      return Utils._editItemList(state, action.id, action.title);
    case Constants.loadData:
      return action.todos;
    default:
      return state;
  }
}

export default todos;