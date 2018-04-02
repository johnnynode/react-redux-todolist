import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './View/TodoApp';
import { Provider } from 'react-redux';
import store from './Store/store';

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);