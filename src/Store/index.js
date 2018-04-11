import {combineReducers, createStore, applyMiddleware} from 'redux';
import rootReducer from '../Reducers';
import thunk from 'redux-thunk'; // 使用 redux-thunk 来处理中间件

let composedReduer = combineReducers(rootReducer);
// let createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
// let store = createStoreWithMiddleware(composedReduer);
let store = applyMiddleware(thunk)(createStore)(composedReduer);

export default store;