import { createStore, combineReducers, applyMiddleware } from "redux";
import todoReducer from "./todo";
import { composeWithDevTools } from "redux-devtools-extension";
const reducer = combineReducers({ todo: todoReducer });
const composedEnhancers = composeWithDevTools();
const myMiddleware = (store) => (next) => (action) => {
  return next(action);
};
const asyncMiddleware = (store) => (next) => (action) => {
  if (typeof action === "function") {
    return action(next);
  }
  return next(action);
};
export default createStore(
  reducer,
  applyMiddleware(myMiddleware, asyncMiddleware)
);
