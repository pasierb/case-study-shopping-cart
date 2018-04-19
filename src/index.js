import 'bulma/css/bulma.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';
import { fetchProducts } from './actions';

import App from './App';

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware)
);

store.dispatch(fetchProducts());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
