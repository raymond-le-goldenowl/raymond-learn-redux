import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import todoReducer from "./todo";
import authReducer from "./auth";
const reducer = combineReducers({ todo: todoReducer, auth: authReducer });

const persistConfig = { key: "root", storage, whitelist: ["auth"] };
const persistedReducer = persistReducer(persistConfig, reducer);

//* auto setup thunk, redux devtools, ...
const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export default store;
