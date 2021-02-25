<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import shoppingListItemReducer from "./reducers/shoppingListItemReducer";
import App from "./App";
import "./index.css";
=======
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import shoppingListItemReducer from './reducers/shoppingListItemReducer';
import App from './App';
import './index.css';
>>>>>>> 80e5ff939f4c6af957f203be5293a1f4bee98d5f


const store = createStore(
 shoppingListItemReducer,
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
<<<<<<< HEAD
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
=======
 <Provider store={store}>
   <App />
 </Provider>, /* code change */
 document.getElementById('root')
>>>>>>> 80e5ff939f4c6af957f203be5293a1f4bee98d5f
);
