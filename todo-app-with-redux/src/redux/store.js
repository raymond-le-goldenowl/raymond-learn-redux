import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todo";
import authReducer from "./auth";
const reducer = combineReducers({ todo: todoReducer, auth: authReducer });

//* auto setup thunk, redux devtools, ...
export default configureStore({
  reducer,
});
