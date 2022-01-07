import axios from "axios";
import { connect } from "react-redux";
import TodoApp from "../components/TodoApp";
import { addTodo, setTodos } from "../redux/todo";

const mapStateToProps = (state) => {
  return { todos: state.todo.items };
};
const mapActionsToProps = (dispatch) => ({
  addTodo: (text) => dispatch(addTodo(text)),
  //! this function not used in fetchTodos function.
  setTodos: (items) => {
    dispatch(setTodos(items));
  },
  fetchTodos: async () => {
    const res = await axios.get(`http://jsonplaceholder.typicode.com/todos`);
    //! if dispatch right here so the setTodos above aren't needed anymore.
    dispatch(setTodos(res.data));
  },
});

export default connect(mapStateToProps, mapActionsToProps)(TodoApp);
