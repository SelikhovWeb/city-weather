import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import allReducer from "./reducers";
import { BrowserRouter as Router } from "react-router-dom";

function saveToLocalStorage(state){
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  }
  catch(e){
    console.log(e)
  }
}

function loadFromLocalStorage() {
  try{
    const serializedState = localStorage.getItem('state');
    if (serializedState===null) return undefined
    return JSON.parse(serializedState)
  } catch(e){
    console.log(e)
    return undefined
  }
}

const persistedState = loadFromLocalStorage();

const store = createStore(
  allReducer,
  persistedState,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  )
);

store.subscribe(()=> saveToLocalStorage(store.getState()))

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
    ,
  </Provider>,
  document.getElementById("root")
);
