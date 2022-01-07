import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
const initialState = { items: [] };

//* Create reducers and actions
const todo = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    setTodos: (state, action) => {
      state.items = action.payload;
    },
  },
});

//* Exporting all actions here.
export const { addTodo, setTodos } = todo.actions;

//* Return a action.
export const fetchTodos = () => async (dispatch) => {
  const res = await axios.get(`http://jsonplaceholder.typicode.com/todos`);
  dispatch(setTodos(res.data));
};

//* We need export reducer to createStore()
export default todo.reducer;
