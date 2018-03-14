import {combineReducers, createStore, applyMiddleware} from 'redux';
import rootReducer from '../Reducers/rootReducer';

let composedReduer = combineReducers(rootReducer);

// middleware
const thunkMiddleware = ({dispatch}) => {
  return (dispatch) => {
    return (action) => {
      if(typeof action === 'function') {
        return action(dispatch);
      }
      return dispatch(action);
    }
  };
}

// 从这里看出 store里包含了很多 reducer
let store = createStore(
  composedReduer,
  applyMiddleware(thunkMiddleware)
); 

export default store;