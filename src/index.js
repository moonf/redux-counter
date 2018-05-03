import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Map } from 'immutable';

const initialState = Map({
  likes: 0,
  dislikes: 0,
});

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_LIKE':
      return state.update('likes', likes => likes + 1);
    case 'ADD_DISLIKE':
      return state.update('dislikes', dislikes => dislikes + 1);
    default:
      return state;
  }
};

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);
