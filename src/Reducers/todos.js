import Constants from '../Constants/Constants';
import Utils from '../Utils/Utils';

let todos = (state = [], action = {}) => {
  // state 默认值为 [], action 默认值为 {}
  switch(action.type) {
    case Constants.TOGGLEITEM:
      return Utils._toggleItemList(state, action.id);
    case Constants.DELITEM:
      return Utils._delItemList(state, action.id);
    case Constants.CREATEITEM:
      return Utils._createItem(state, action.title);
    case Constants.EDITITEM:
      return Utils._editItemList(state, action.id, action.title);
    case Constants.LOADDATA:
      return action.todos;
    default:
      return state;
  }
}

export default todos;