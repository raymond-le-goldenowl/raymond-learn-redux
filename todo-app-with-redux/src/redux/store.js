import { createStore, combineReducers, applyMiddleware } from "redux";
import todoReducer from "./todo";
import { composeWithDevTools } from "redux-devtools-extension";
const reducer = combineReducers({ todo: todoReducer });
const composedEnhancers = composeWithDevTools();
const myMiddleware = (store) => (next) => (action) => {
  console.log("action", action);
  console.log("store", store);
  return next(action);
};
export default createStore(reducer, applyMiddleware(myMiddleware));
