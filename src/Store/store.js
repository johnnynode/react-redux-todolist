import {combineReducers, createStore, applyMiddleware} from 'redux';
import rootReducer from '../Reducers';
import thunk from 'redux-thunk';

let composedReduer = combineReducers(rootReducer);
let createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
let store = createStoreWithMiddleware(composedReduer);

export default store;