import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // 通过 react-redux 来实现store和ui组件的连接
import store from './store';
import App from './components/app';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);