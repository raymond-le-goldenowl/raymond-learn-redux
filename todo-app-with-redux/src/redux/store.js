import { createStore, combineReducers } from "redux";
import todoReducer from "./todo";
import { composeWithDevTools } from "redux-devtools-extension";
const reducer = combineReducers({ todo: todoReducer });
const composedEnhancers = composeWithDevTools();
export default createStore(reducer, composedEnhancers);
