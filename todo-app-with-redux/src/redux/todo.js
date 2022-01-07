import axios from "axios";
const initialState = { items: [] };

const ADD_TODO = "ADD_TODO";
const SET_TODOS = "SET_TODOS";

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: text,
});

export const setTodos = (items) => ({
  type: SET_TODOS,
  payload: items,
});

//* Return a action.
export const fetchTodos = () => async (dispatch) => {
  const res = await axios.get(`http://jsonplaceholder.typicode.com/todos`);
  dispatch(setTodos(res.data));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case SET_TODOS:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
