import React, { useEffect, useState } from "react";

export default function TodoApp({ todos, addTodo, fetchTodos }) {
  const [text, setText] = useState("");

  useEffect(() => {
    //* fetch all todos and set todos to sate. User don't need to know handle inside
    fetchTodos();
  }, [fetchTodos]);

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => addTodo(text)}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={todo.id}>
            <b>{index + 1}</b>: {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
