import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todo";
const reducer = combineReducers({ todo: todoReducer });

//* auto setup thunk, redux devtools, ...
export default configureStore({
  reducer,
});
