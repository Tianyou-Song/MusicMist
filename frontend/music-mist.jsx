import React from 'react';
import ReactDOM from 'react-dom';
// import configureStore from '/store/store.js'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  // const store = configureStore();
  ReactDOM.render(<Root store={store}>yoloswat</Root>, root);
});
