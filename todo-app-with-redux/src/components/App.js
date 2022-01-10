import "../App.css";
import TodoApp from "./../containers/TodoApp";
import Login from "./../containers/Login";

function App({ auth }) {
  return (
    <div className="app">
      {!auth.token && <Login />}
      {auth.token && <TodoApp />}
    </div>
  );
}

export default App;
