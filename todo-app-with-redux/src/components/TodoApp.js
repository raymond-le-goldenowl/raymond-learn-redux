import React, { useState } from "react";

export default function TodoApp({ todos, addTodo }) {
  const [text, setText] = useState("");
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
          <li key={index + Date.now()}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
