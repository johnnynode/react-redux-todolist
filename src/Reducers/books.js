import Constants from '../Constants';
import Utils from '../Utils';

// state 默认值为 [], action 默认值为 {}
let books = (state = [], action = {}) => {
  // 通过switch来做判断
  switch(action.type) {
    case Constants.toggleItem:
      return Utils.toggleItemList(state, action.id);
    case Constants.delItem:
      return Utils.delItemList(state, action.id);
    case Constants.createItem:
      return Utils.createItem(state, action.title);
    case Constants.editItem:
      return Utils.editItemList(state, action.id, action.title);
    case Constants.loadData:
      console.log('reducer load data');
      console.log(action.books);
      return action.books;
    default:
      return state;
  }
}

export default books;