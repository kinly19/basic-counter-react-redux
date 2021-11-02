import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"; //this will provide our redux store

import "./index.css";
import App from "./App";
import store from "./store/index"; //import and using redux store

// ============================== Notes ====================================
//  wrap our provider around components where we want to use redux.
//   our app component and any other... child component, can now tap into data which is stored inside our store
//   and can also set up subscriptions, dispatch actions 
// the provider which we import from react Redux, gives us a 'store' prop we have to set
//  the value we pass it is our Redux store we created inside of store.
// =========================================================================

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
